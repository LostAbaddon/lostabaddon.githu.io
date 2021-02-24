标题：IPFS小结
更新：2018.11.16 12:28:08

最近因为工作关系，在分析IPFS的架构与代码逻辑（俗称：看代码）。

不得不说，虽然我个人写代码一直很随意，早年用Basic的时候也是GOTO党，JS在async/await出现之前更当过一段时间的嵌套狂魔，那个时间段里看我代码的人都感觉是在callback-hell里跳舞，但看了IPFS的代码后，我不得不感叹：

> 江山代有意面出，一面更比一面意！

程序员的世界里什么叫“意面”，也就是“意大利面条”？

就是说，这代码写得混乱不堪，为了实现一个功能能在四五个模块里不断跳跃，跟代码逻辑就像在一碗意大利面条里跟踪一棵韭菜丝的纹路一样草蛇灰线错综复杂。

当然，这么说也有失公允。

可以感受到，IPFS的开发人员，无论是JS版还是GO版，其目标都是为了更好地模块化，将功能和业务尽可能地拆分成独立的模块，而在那里努力编码。但从实际效果来说，只能感叹：好一碗意面啊！

甚至于，它给我一种开发人员将无数不同厂家生产的积木以自己心目中的乐高玩具的形态硬凑出来的悲凉。为了用一个第三方开发的底层模块，从而避免重复造轮子，于是不得不削足适履，轮子是没重造，脚却是重塑了。

----

好了，吐槽完毕，开始小结。

----

从本质上来说，IPFS可以认为就是一个eMule客户端，而且是阉割过的。

当然，这说的是GO版。JS版是阉割之后又阉割了一次，二次阉割，整了一个太监中的太监，可以叫二监。

其底层是大量第三方库，用于协议、握手、连接、通讯、本地文件读写、内存缓存、levelDB数据库，等等。但，这里让人崩溃的就是，很多第三方库是针对老版本语言的，新版本语言里完全没必要这么做，但IPFS的开发人员很显然是相信第三方库多过相信语言本身，硬是不用。

举个例子，LRU缓存，JS版用的算法本身的确很精妙，但，问题是，用JS后来出的Map其实速度更快能存使用更省，但它就是不用。还有pull控制流，这是给Promise机制之前的JS用的，而在Promise机制之后的async/await机制中根本没必要用pull控制流库就可以写出可读性高、可维护性好、执行效率高的代码，但它就是不用，硬要上pull控制流。

当然，得亏开发人员不用node.js v11，不然那thread-worker飞起来，能活生生地把JS写成GO里的goroutine/channel地狱。

除了辅助用的第三方库，IPFS的核心就是它的libp2p模块。

这个模块的主要作用是找节点和记录节点——这里内容和IPFS客户端都可以被称为节点。

有三种方式可以找节点，一个是Bootstrap，也就是在config中配置的引导节点；一个是MDNS，搞网络底层的人应该都知道这个局域网组播协议；再一个就是Kad-DHT了，这个协议早年玩过eMule和BT的人肯定很熟，eMule里有一个专门的Kad网，用的就是这个协议。

对，IPFS用的就是早年eMule等人用的东西，和中本聪的比特币一样，创新不多，大部分都是基于前人的组装与集成。

IPFS的Kad协议还是有一定优化的，被封装在Bitswap中——这个Bitswap也不是IPFS的，是别人提出它拿来用的。

Kad的基本原理，用数学的语言来说就是构建一个高维空间（hash地址作为空间中的坐标），并赋予一个度量结构（异或距离），从而在这个度量空间中通过离散点之间的连接来寻找最靠近目标坐标的一组点——可以视为自由落体。

当然，和这种粗放且没营养的比喻不同，Kad的精髓并不在构建空间上，而在于怎么找节点。第一代的协议是遍历，超级没效率；第二代的协议是洪泛查询，不但没效率，而且容易造成网络拥堵；第三代的协议是回传式搜索，每次都传回给发起请求的节点，由它进行波层式外推。

第三代看起来有点麻烦，每次都回传，不是浪费么，而且虽然是回传给请求方，但也算是中心化的，和很多赛博乌托邦者的理念不符啊。但从实际情况来说，存在中心节点来控制什么时候截断是好事，无中心的时候这类控制就没法做，那网络上无用的冗余通讯就无法得到抑制。

真正的地狱就是无政府主义。

当然，有一个trick就是k-Bucket，和异或距离配合起来，找接近目标位置的节点的速度可以很快——相对一个个比对来说。

现代Kad协议找到的其实也不是内容，而是“指向内容的指针”。用户通过目标内容的地址，找到一组节点，这组节点并不记录目标内容，而是记录哪些节点真正存有内容，然后将这组节点告诉请求者，请求者再问这些节点要数据。为何要这么麻烦？因为记录内容所在位置的节点可能很少且相对稳定不会经常改变，但提供内容数据的节点可能很多且会不断动态地增减，这样的设计可以保证系统稳定。另一方面，一份内容可能就发起人自己要看，让过多节点保存也是一种资源的浪费。

Bitswap在Kad之上又封装了一层，具体逻辑并没有大的改变，但增加了“账户”信息，可以计算每个节点在存数据和要数据上的“收支情况”——这个看起来是不是很区块链？但，这东西其实在eMule上早就有了，eMule上每个节点的贡献度就是这么来的。

所以，如果说FileCoin（基于IPFS的token化项目）是区块链经济体系的典范的话，那这个典范上个世纪就已经有了（eMule生于2000年，而和大部分人自认为的常识不同的是，2000年其实是20世纪的最后一年……因为公元纪年法是从公元1年即公元元年开始的，哈哈哈哈哈哈）（当然这个说法也不对，因为第一版eMule里没有贡献值计算，但有Kad啊）。

JS的二次阉割就表现在，它的Kad是实验性协议，且功能不完全，很多功能要么没实现，要么实现了但没使用。

在Bitswap之上，IPFS开始构建其文件体系，而FileCoin还开始构建基于Bitswap的贡献度的代币市场（有一个链项目而非代币项目叫NBS，则将IPFS底层的文件Block加以区块化改造）。

抛开华而不实的一些功能不说（比如files和mount在我看来就是华而不实的功能……），IPFS在Bitswap之上所做的，好像也没啥值得记录的了。。。很多东西和理念都是eMule时代遗留下来的，IPFS没直接接入eMule和BT的Kad网络也是有点浪费之嫌啊。

----

下面说一下个人认为的缺点，当然有些可能是我还没看到相关代码，所以认为它没做到。

首先，就是所谓的文件不能删除。

这是优点，也是缺点。

做过产品的人都知道，抛开使用场景谈业务逻辑和需求都是耍流氓。

同样的，数据要不要删除，不是工具说了算的，而是使用场景说了算的。如果一样工具说数据不能删除，那要么它别说自己是普适的，要么它别说这是优点。

我把造谣的消息放在IPFS上，因为不能删除，所以这条造谣消息就一直存在了，这是优点还是缺点？

当然，说信息在IPFS上永远不会消失这也不对。如果记录信息数据的节点都不在了（换设备，或者清了本地缓存），那这条消息一样会消失。但，做过运营的都知道，虽然互联网上的人类记忆只有七天（现在可能已经衰退到三天了），但造谣与八卦的传播广度和深度都是超一流的，而其带来的破坏性也是超一流的，所以要等它自然消失，显然是远水治不了近渴。

更何况，只要造谣者自己不删档，一直接入IPFS网络，那这条造谣信息就一直存在，这点想想就可怕。

如果你把权力放给所有一群普通人，那就等于放给了一群恶魔——我不是说人类是恶魔，恶魔和人类比，那就是纯良的小羊羔，虽然单个恶魔比单个人类牛逼多了。

所以，这种放养式的资源管理，这不叫乌托邦，这叫恶托邦。

其次，由于数据不可删除，所以这就表示，很可能会存在极大的数据冗余。

做过数据库的人都知道，数据的增删改是最家常便饭的事。一秒几百次的数据删改完全是小意思，双十一各位砍手党党徒在淘宝上的挥指如雨的背后，就是一秒少说几万次的数据增删改。

如果数据不可删除，那数据库四大基本功能的删和改就都没了，只剩下增和查。那，要改数据，其实就是上传一份新数据，然后告诉所有人不要读老数据地址，要读我的新数据地址。一秒上万次的数据修改，这就表示，这一个字段的数据在IPFS上存有上万个老版本——而且这些老版本是再也用不到的老版本数据。

做维护的朋友可能会很开心，这样就再也不怕恢复不了数据了。但做维护的朋友一样会很崩溃——整个一年下来有上亿上兆上京的无用数据，你还删不掉，这个维护工作想想就是深渊啊。

> 知识点：中文古文的计数体系中，大数单位有很多，比如一兆为一万亿，一京为一万兆，一垓为一万京，一秭为一万垓。

当然，IPFS的支持者不会认为这是一个问题，他们会认为这是对历史的见证。大概只有某一天他们发现自己的裸照或啪啪啪视频被人上传到IPFS之后才会醒悟这原来不完全是个优点甚至根本不是一个优点吧。

除了不可删除和数据冗余，还有一个比较大的问题就是数据的初始传播。

因为Kad协议最开始的业务场景并不是全球硬盘而仅仅是无中心的数据传输，所以将自身定位在全球硬盘的IPFS全面使用Kad协议而不调整就会有问题。

最大的问题就是：如果A在家上传了文件X，然后关闭电脑，跑到办公室，打开了办公室的电脑，然后要获取X，他会惊讶地发现：获取不到。

对的，获取不到。

IPFS网络的流程是这样的：

A在设备A1上上传了文件X后，会通知A1所有能连接的节点，A1有文件X——注意，是“A1有文件X”，而不是“文件X”。

接着，当有节点A2要获取文件X的时候，它提供X的CID，使用Kad协议询问全网，哪些节点有文件X——注意，是“哪些节点有文件X”，而不是“文件X”。

然后，原本和A1相连的节点告诉A2，A1有文件X——注意，是告诉A2“A1有文件X”，而不是告诉A2“文件X”。

最后，A2尝试连接A1来真正地要文件X，但此时A1离线，Game Over。

A2要如何才能获取A1？

必须是A1告诉大家A1有文件X后，并在A1关机离线之前，有一个不是A1也不是A2的节点B，也索要了一次文件X，并且节点B在A2上线索要文件X之前没离线，此时A2才能从B这里获取A1那上传的文件X。

是不是感觉这个流程很鬼畜？

但这就是IPFS。

Kad本身是在无中心的情况下进行文件搜索和传输的协议。既然是传输，当然就要A1和A2同时在线了，不然传输个毛线？

但IPFS是全球硬盘，可以私人用，可以集体用，它并不仅仅是文件传输协议，但却没在Kad之上关于这个问题做调整，这终于成了硬伤。

至少GO版到0.4.17，JS版到0.33，都有这个问题，而且从社区讨论来看，估计有生之年都看不到优化了。。。

人家认为这不是缺点，这是富有无中心特色的优点。

毕竟，理论上来说，只要你上传的文件有足够多的人来看，你关机换个设备，也是可以获取到的嘛。

所以这不是全球硬盘，这是全球论坛。

别的一些缺点就过于技术和算法了，这里掠过不提。