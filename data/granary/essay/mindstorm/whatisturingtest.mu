标题：图灵测试到底测了个啥？
关键词：AI 草稿
更新：2023/11/02 23:44:55

图灵测试最早一般被这么描述（Computing Machinery and Intelligence, Turing, 1950）：

>	如果一台机器能够与人类展开对话而不被辨别出其机器身份，那么称这台机器具有智慧。

这样的定义当然是相当粗糙的，存在太多没有交代清楚的东西——其中一些在图灵的论文原文中有说明这么设计的意图，当然说明归说明，让人无条件信服是另一回事。

于是，除了部分我也无法理解的原教旨信徒会要求100%原封不动地照搬图灵的板书——我高度怀疑如果图灵有幸活到当今这个不幸的世界的话他会不会拎起这些原教旨信徒的领子一头塞进充满氰化钾的苹果堆里然后大声宣布自己从来都不认识这些渣滓，whatever——实际上并没有多少人真的把这个信条当回事，虽然言必称他们的AI通过了图灵测试，或者他们的测试比图灵测试更图灵测试，诸如此类。

问题的关键在于：这个测试的意义到底是什么？

用我个人最喜欢的下定义的方式来看，真正有效的图灵测试的一个可操作的定义，实际上是这样的：

>	如果目标群体A与目标群体B，在对交互行为P做观测的情况下，能让检测群体C在一个对象x属于A还是属于B的二分测试分错的概率超过阈值q，则称A与B的P行为以概率q实现了C的不可分辨。

这么一来，原始的图灵测试就可以表示为一个人与AI在对话这一交互模式下以70%的概率实现了另一个人或人群的可分辨（这里70%这个值也来源于图灵的论文原文）。

你看，用上述可操作定义改写的意义就在于，让大家明确一点，原始版本的图灵测试只是限定在了特定交互行为上而已（由于估计没人会选择P为下围棋，所以AlphaGo很遗憾地无法通过围起版的图灵测试，因为没有这项测试），在科技尤其是信息技术如此发达的现代，我们完全可以将交互行为拓展到更多的地方去，比如绘画、唱歌、写小说、拍视频，等等。当行为P涵盖了人类所有行为之时，我们大约会比原始图灵测试时代更有把握说，AI已经接近人类了。

事实上，一个终极版本的图灵测试应该是这样的：所有AI实体与所有人类在所有交互行为层面以99%的概率做到了全人类的不可分辨。如果能做到这点，那我们估计可以很有信心滴说，AI与人类真的已经完全无法分辨了——但这点真的能做到么？或者更应该问，对AI来说真的有意义么？

答案显然是否定的。

----

图灵测试，当然也包括将A、B、C、P和q都拓展到任意情况下的图灵测试，其本质实际上是一种“鸭子测试”：如果一个对象看上去像一只鸭子，叫起来像一只鸭子，走路像一只鸭子，甚至嚼一口也像一只鸭子，那么，它就是一只鸭子。

也即，如果两个对象在可观测的表观属性上完全一致，那么我们就可以说这两个对象属于同一类。

批评论者此时应该已经想到了著名的哲学僵尸，因为按照鸭子测试/图灵测试来看的话，哲学僵尸显然是可以通过测试从而被认为与人类足够接近的，足够的程度达到了“不可分辨”的程度。但按照哲学上的定义，哲学僵尸不能是人类，因为其内在没有意识。

这就属于是一种魔法打败魔法的情况：我定义你是错的，于是你不管怎么答题都是错的，然后以此来说明老师题目出错了。

换一种说法就是：我在耍流氓。

但表观测试是否真的万无一失呢？只能说在人们想出可操作的分辨手段来让A与B无法“不可分辨”之前，测试都是有效的。但从不可分辨到可分辨的那一天的到来是否会太晚？这种问题在人们真的碰到之前是争不完的，因为没有答案——所以这类问题想必一定是哲学家们的最爱了，因为他们最喜欢将没有答案的问题争出一个答案来。

我对哲学家的态度由此可见一斑，这里按下不表。

回到图灵测试上来，我们也就可以由此明确一点：它并不告诉你一个对象是否符合关于“人”的某种形而上定义，它只是告诉你，在表观层面（反映在P上），它要求大家共同约定如果两者无法做出有效分辨（分辨者约定为C而分辨的度量阈值约定为q）那么就必须承认它们同属一类。

从这个意义上说，图灵测试居然将一个当年没有明确定义的问题——当然了现在依然没有明确定义，而且我可以很有把握地说在AI超越人类之前这个问题依然没有明确定义，当然我不是说AI超越人类之后这个问题就有定义了，只不过那个时候这个问题应该就不重要了——转化成了一个居然可操作的问题，这是非常不可思议的，其重要性远比测试本身重要。

至于说现在的AI是否能够、是否已经通过了图灵测试，以及通过了图灵测试意味着什么，我只能说，和图灵提出的图灵测试这事本身相比，前面这些问题真的是一点意义都没有，除了能满足大众的猎奇心理，对AI的发展来说完全就是可有可无的小浪花，不值一提。