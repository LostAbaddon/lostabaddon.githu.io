标题：从算法信息论的角度看AI
作者：LostAbaddon
关键词：科普 算法信息论 AI 人工智能
更新：2023/03/28 13:35:00

本来打算这周更新一篇从伦理角度看AI的文章，但写着写着感觉把自己绕进去了，东西太多，实在不是可以一蹴而就的，所以就先放下了。

后来打算写一篇说AI时代如何隐身的文章，但还没动笔就开始忙工作了，所以也先放下。

再来就是中午吃饭的时候看到有人从算法信息论的角度来谈AI，但发现是扯淡，于是就想着这个题目是我可以写的，所以就赶紧写一篇。

---

我们先来介绍一下算法信息论（Algorithmic Information Theory，以下简称为AIT）中一个非常重要的概念：__K氏复杂度__。

用最简单的话来说，**K氏复杂度就是能输出目标字符串S的所有图灵机中，长度最短的那台图灵机的长度。**这里图灵机的长度指的是在选定通用图灵机U及其接受的语言$L(U)$后，目标图灵机在其中对应的字符串的字符数。

因此，很显然我们也就清楚了为何K氏复杂度会被称为最短长度。

在AIT中，长度相同的字符串，K氏复杂度$K(s)$越大的，蕴含的信息也就可以认为越多。而有趣的是，随机字符串的特点就是，它的长度与它的K氏复杂度几乎是相等的，因此__K氏复杂度也常被人称为信息熵__。

另一方面，一台图灵机在AIT中可以视为一类特殊的映射，也即它本身是$L(U)^*$（L(U)的幂集）的元素，同时又是$L(U)^*$到$L(U)^*$的部分函数（也叫偏函数，大致可以理解为定义域是$L(U)^*$子集的函数）。从功能角度来看，也即只考虑输入与输出的关系，而不考虑中间到底经历了多少步运算，图灵机便是能将$L(U)$上部分有限字符串映射到有限字符串的有限字符串。

所以，一台图灵机t有两个天然属性，一个是它自己的K氏复杂度$K(t)$，另一个则是它能提供的“熵增量”：$E(t)$。

如果s不是t的可接受输入，那么对应的信息量为0：$E(t,s)=0$。

而如果s是t的可接受输入，那么我们可以定义信息量为：$E(t,s) = K(t(s)) - K(s)$。这个量有一个上限，因为根据K氏复杂度的定义我们显然有$K(t(s)) \le K(t) + K(s)$，所以$E(t,s) \le K(t)$。也就是说，一台图灵机为一个字符添加上的信息量是小于自身的K氏复杂度的。

而这个添加上的信息量的下限也很显然：$E(t,s) \ge -K(s)$。也就是说，它最多是将输入的信息完全销毁，输出一个空字符串，不能更少了。

利用上述规则，一台图灵机能提供的熵增就可以有定义了：

$$
E(t) = \sum_{s \in L(U)^*} E(t,s)
$$

我们可以定义图灵机的熵增，但不表示可以计算——也就是说并不是对于任意t都可以计算$E(t)$。这是因为，首先要从所有字符串中筛选出一台图灵机可接受的字符串这事本身就很是不可计算的，因为如果它是可计算的，那就是说我们可以判断任意t在任意输入s下是否可以停机（如果停机都无法判断，那就别说判断是否可接受了），而任意图灵机的停机判定是不可计算的。另一方面，就算我们可以找出t的可接受字符串集，我们还面临一个问题：并不是任意字符串的K氏复杂度都是可计算的。这个可以看一下__元数学中的理查德悖论__。

因此，我们知道，虽然一台图灵机的熵增量是可定义的，但并不是任意图灵机的熵增量都是可计算的。

而信息和熵的关系也就告诉我们，图灵机为系统带来的信息增量同样是不可计算的，虽然可以有一个好的定义。

而，当我们讨论AI到底是否创造了什么的时候，我们讨论的其实是信息增量而非信息量，这就让问题的讨论变得接受了。

为什么说我们讨论的是信息增量而非信息量呢？

因为从信息量的角度来说，从空白开始打出一部莎士比亚，无论干这事的是猴子还是莎士比亚自己，最后成品的信息量都是确定的。这体现在，从空字符串到指定字符串s，我们可以有$t_1$和$t_2$两台图灵机来完成这项任务，但$K(s)$却和$t_1$与$t_2$都无关。

因此，莎士比亚用打字机打出莎士比亚全集，与猴子用打字机打出莎士比亚全集，这两件事从最后结果（也就是莎士比亚全集）来看，没有丝毫区别。

如果创造性体现在最后成品上的话，那么如果我们说莎士比亚有创造力，就必须承认猴子也有创造力；而如果我们认为猴子没有创造力，那就没道理认为莎士比亚有创造力。

这也就是说：**创造力如何，与最后成品的信息量无关，而只和创造者能提供的信息增量有关。**

而信息增量与熵增量其实是相反数的关系，所以下面我们主要讨论的就是熵增量。

这里，希望大家不要忘了：熵增量是定义在$L(U)^*$上的，而非特定输入。所以从空字符串输出莎士比亚全集这个单一输入输出对无法提供关于$I(t)$的任何有效信息，我们需要看对所有可能情况能得到什么。

猴子和莎士比亚的区别在于，对于一个输入（比如爱人去世了，国家灭亡了，煎饼果子掉地上了），他们会给出不同的反馈。猴子可能继续在打字机上乱跳，而莎士比亚可能会写出一部新的悲剧，或者喜剧。

这就是说，对于不同的输入，这两台图灵机给出的输出是不同的，虽然在某个特定输入下猴子和莎士比亚都给出了莎士比亚全集。

猴子的输出绝大多数情况下是乱码，也就是随机字符串，而随机字符串的特性前面说过，其长度等于K氏复杂度。由于猴子对几乎所有输入给出的都是乱码，只有很少的情况下可以给出有意义的结果，比如莎士比亚全集，所以我们有必要估算一下这个输出非随机字符串的概率：莎士比亚全集总共有884,647个英语单词（感谢ChatGPT帮我从网上查到的数据），一个英文单词的平均长度是5.1个字母（再次感谢ChatGPT提供的数据），所以莎士比亚全集总共包含大约4,517,033个字母。每个字母出现的概率是$\frac{1}{26}$，所以猴子群随机打出莎士比亚的概率大约是$10^{-63839399}$。

也就是说，有意义的输出的结果可以忽略不计——当然，实际上有意义的并不只有莎士比亚全集，但和随机字符串相比，其占比太小了。

这么一来，猴子的熵增几乎可以认为就是输入全集所包含的元素数乘上输出字符串的长度。之所以可以这么写，是因为无论输入什么，猴子都可以乱跳一通，因此不存在不可接受字符串一说。而对于莎士比亚全集这个体量的输出来说，其输入的K氏复杂度可以忽略。因此猴子的熵增差不多就是：

$$
E(monkey) = 10^{63839399} \times 4517033
$$

而，作为比较，莎士比亚大人虽然肯定也会说胡话（比如喝醉的时候……），但大部分时候都能说一些有意义的话，包括写出自己的那些恢宏巨作，从而其作为一台图灵机，为整个系统提供的熵增显然是远小于上述猴子熵增的。

而熵增量和信息增量是相反数关系，从而莎士比亚能提供的信息量是远大于猴子的。

这个结果很符合我们的直觉。

那么回过头来看最初的问题：AI到底是不是猴子？

很显然，即便是目前的AI，大多数情况下也不会输出随机乱码——虽然很多时候是明摆着的胡诌，但并不是随机字符串。

从这点就可以看出，ChatGPT从AIT的角度来看，明显比猴子要聪明。

但和莎士比亚比呢？

这个就很难做出定量的比较了，因为我们前面说过，并不是所有$E(t)$都是可计算的。

当然，至少就目前而言，我们有理由相信莎士比亚提供的信息增量是远大于GPT的。

但对于拿着手机正在看这篇文章的您呢？您确定您为整个系统提供的信息增量能大于GPT么？

至少对我自己而言，我并没有如此这般的自信。

---

最后闲扯一点关于当下GPT为代表的AI的创造力的问题。

就个人对神经网络算法的浅薄理解，目前的AI和人的关系差不多是这样的：

有一栋大楼，没人知道有多少层。而后在大楼中藏着大量的宝石，每一层都有。人会在每一层找到几颗，然后去别的楼层。当前的AI在学习了人提供的找宝石的资料后，可以以比人高得多的效率找到比人齐得多的每一层的宝石，但它却很难找到去别的楼层的楼梯，虽然在人类已经发现的楼层里乱窜的本事它比人要高。

也就是说，在已知领域内发现人类没发现到的东西，AI更在行，包括潜藏在海量数据中的规律、运用这些规律生成新的文本或图像，等等；但对于发现一个全新的领域，目前的AI并不十分擅长。

这里所说的不是多模态，毕竟多模态不过是告诉AI有哪几个楼层，这里说的是发现新的楼层，人类从来不曾发现过的楼层——不是人类已经发现了的楼层里不曾找到过的宝石。

当然，或许在更进一步抽象后，AI可以获得发现新楼层的能力，但至少目前还不具备。

至于以后嘛，以后的事情谁知道呢？