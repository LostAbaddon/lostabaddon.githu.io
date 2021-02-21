标题：关于 AIT 中最概然与最简是否一致的Toy模型计算
更新：2019.07.11 23:19:02

问题的缘起是这样的——

网友 @十酒三 在他的文章[《自指的剃刀：AIT最深远的应用》](https://www.jianshu.com/p/2f0ea523606e)中提出了一个很有意思的观点，用大白话来说，就是“最可能出现的往往是最简单的”。

严谨一点来说，就是假定`存在概率`$P(s)$ 代表能生成字符串 s（原文讨论的是函数 f，但个人认为不应该要求是函数而只能要求是字符串，毕竟有些函数可能会用到不可计算数，我们只能给出其存在性，而无法构造出来）的程序 $p(s)$（程序在这里指的就是`确定型图灵机（DTM）`）在所有可能停机的程序中所占的比例，从而证明了下面这两个不等式：

$$
\begin{cases}
\log_2 P(s) > - K(s) - c\\
\log_2 P(s) < - K(s) + O
\end{cases}
$$

其中 c 和 O 是与所选语言相关而和字符串 s 无关的一个常数，而 $K(s)$ 是字符串 s 的`K氏复杂度`也被称为`算法复杂度`或`不可压缩长度`或`算法熵`。

字符串的算法复杂度 $K(s)$ 可以定义为“所有能生成字符串 s 的程序（及输入）的长度的下界”，写成公式就是：

$$
K(s) = \min \left\{ \mathrm{len} \left( p_s \right) \right\}
$$

其中 $p_s$ 指能停机并输出指定字符串 s 的程序。

关于算法复杂度，最重要的是如下两个命题：

1. 不存在通用的计算任意程序的算法复杂度的程序，即算法复杂度本身是不可计算的；
2. 存在一个常数 l，所有长度大于 l 的字符串 s 的算法复杂度都是不可计算的。

这里的关键就是：K是不可计算的，即不可能通过一个程序（即图灵机）来计算任意输入的目标字符串 s 的算法复杂度。

在 @十酒三 的原文中，其结论（也就是上述两个不等式）导出了一个推论：

> 存在概率大的字符串，算法复杂度必然小。

或者反过来说：

> 越是简单的字符串，越可能出现。

最后可以和哲学上的奥卡姆剃刀（中文翻译可以简写为“若无必要勿增实体”）联系在一起。

这里我们不讨论外延的拓展，关于这个问题本身我和 @十酒三 存在一定的争论。于是我在想，是否有可能构造出一个反面例子来。

关键就是，原文中为了完成第二个不等式的计算，@十酒三 构造了一个程序 E，E 的作用是将所有字符串 s 以 P(s) 降序排列，但由于 P(s) 是不可计算的，所以用了一系列近似手段。

原始的存在概率 P 的定义为（用U表示所有可停机的程序构成的集合，$p_s$ 代表能输出 s 的程序，$U(s) = \{p_s\}$ 则表示所有 $p_s$ 构成的集合）：

$$
P(s) = \frac{\mathrm{Count} \left( U(s) \right)}{\mathrm{Count} \left( U \right)}
$$

这个函数显然没法计算，因为分子和分母都是无穷大，我们能做的是取极限（且假定这个极限存在）——使用 $U_L$ 表示所有长度不大于 L 的程序构成的集合，$U(s;L)$ 表示所有长度不大于 L 且输出指定字符串 s 的程序构成的集合：

$$
\begin{cases}
P(s;L) = \frac{\mathrm{Count} \left( U(s;L) \right)}{\mathrm{Count} \left( U(L) \right)}\\
P(s) = \lim_{L \rightarrow \infty} P(s;L)
\end{cases}
$$

但这个极限依然很难计算，因为要找出长度不大于 L 的能停机的程序本身就不可能——你要判定是否能停机，首先就要解决停机问题，而停机问题在图灵机范畴内是不可计算（不可判定）的。

所以，@十酒三 做了第二次近似（在正文后的讨论帖中）：用 $M(s;L)$ 和 $M(L)$ 代替原本的 $U(s;L)$ 和 $U(L)$，这里 $M(L)$ 表示所有长度不大于L，且，在执行不超过L步即停机的，图灵机所构成的集合，而 $M(s;L)$ 则是所有长度不超过L，且，在执行不超过L步即停机，且输出指定字符串 s 的图灵机所构成的集合。

为什么要用M代替U？因为U中图灵机是否可停机是不可判定的问题，而M中因为有“执行不超过L步即停机”这个条件，所以是可判定可计算的，因为，再不济，执行L步嘛。

用M代替L后，极限是否保持不变？这是一个很重要的问题。如果极限改变了，那么基于M计算出来的关于 $P_M(s;L)$ 的不等式 $\lim_{L \rightarrow \infty}\log_2 P_m(s;L) < - K(s) + O$ 将无法给出关于目标函数 $P(s)$ 的任何有效信息。

但，这样的两步近似都有一定的问题。下面就来看一下这里可能存在的问题。

----

先来约定一些符号：

- $T$ 表示所有图灵机（无论是否停机）构成的集合
- $U$ 表示所有能停机的图灵机构成的集合
- $U_s$ 表示所有能输出目标字符串 s 的图灵机构成的集合
- $T(L)$ 表示所有长度不超过 L 的图灵机构成的集合
- $U(L)$ 表示所有长度不超过 L 且能停机的图灵机构成的集合
- $U_s(L)$ 表示所有输出目标字符串 s 且长度不超过 L 的图灵机构成的集合
- $W(L)$ 表示所有长度不超过 L 且在执行不超过 L 步时就能停机的图灵机构成的集合
- $W_s(L)$ 表示所有长度不超过 L 且在执行不超过 L 步时就能输出目标字符串 s 的图灵机构成的集合
- $\mathrm{Count}$ 表示计算集合元素个数
- $P(s) = \frac{\mathrm{Count} (U_s)}{\mathrm{Count} (T)}$ 是我们要求目标字符串 s 的“存在概率”
- $P(s;L) = \frac{\mathrm{Count} (U_s(L))}{\mathrm{Count} (T(L))}$ 是在长度不超过 L 的图灵机构成的集合中目标字符串 s 的存在概率，成为“L 阶存在概率”
- $Q(s;L) = \frac{\mathrm{Count} (W_s(L))}{\mathrm{Count} (W(L))}$ 是在长度不超过 L 且执行不超过 L 步就能停机的图灵机构成的集合中目标字符串 s 的存在概率，成为“L 阶 L 度存在概率”

于是，第一步近似为：

$$
\lim_{L \rightarrow \infty} P(s;L) = P(s)
$$

而第二步近似是认为

$$
\lim_{L \rightarrow \infty} Q(s;L) = P(s)
$$

其中，第一步近似在证明第一个不等式 $\log_2 P(s) > - K(s) - c$ 时被使用，第二步近似在证明第二个不等式 $\log_2 P(s) < - K(s) + O$ 时被使用。

这两步近似分别是否成立？是我们要考虑的问题。

----

先考虑第一部近似。

在此之前，我们先来看一个自然数集中的例子——全体自然数与偶数自然数，到底哪个更多？

直觉上来看，全体自然数集合包含偶数自然数集合，而且后者是前者的真子集，那么我们当然会认为全体自然数比偶数自然数更多，但实际上，这两个集合是一样多的。

由于全体自然数与偶数自然数都是可数无穷多，而两者之间可以建立一一映射，所以全体自然数与偶数自然数这两个集合是同构的，数量是一样多。

但如果我们换一个“算法”，取“不大于自然数 L”这个范围，在这个范围内比较自然数与偶数自然数的数量，那么这个比例在 L 趋向无穷时的极限就当然显然是 1/2 了。

同样的，由于字符集是离散的，所以所有可能的字符串构成的集合当然也是离散的集合，有可数无穷个，而我们在任意两个不可压缩程序所拓展出的等价类间都可以建立这种一一映射，所以任意两个等价类都是同构的，数量相同，都是可数无穷。

具体来说，两个不可压缩字符串 $k_1$ 和 $k_2$，以及返回结果的算符 $r$，可以构造出两个等价类 $K_1 = \{ k_1 + r + s | s \in S\}$ 和 $K_1 = \{ k_1 + r + s | s \in S\}$，其中字符串集 $S$ 是任意字符构成的所有可能字符串的集合，很显然 $S$ 中的任意一个元素都可以对应到 $K_1$ 和 $K_2$ 中各一个不同的元素。所以可以构造映射算符 $P(k_1,k_2)$，将 $K_1$ 中元素的前缀字符串 $k_1$ 替换为 $k_2$，这样就可以得到 $K_2$ 中的元素，反之亦然，$P(k_2,k_1)$ 将 $K_2$ 映射到 $K_1$。容易证明，这两个映射都是一一对应的，从而可以是等价类 $K_1$ 与 $K_2$ 间的同构映射。

所以很显然，每个等价类的元素数量都可以认为是相同的。

好了，现在回到 @十酒三 的原文中。

他在证明第一个不等式时，用到了这么一个关键的结论：

已知 s 的不可压缩表达为 $k(s)$，其长度为 $K(s)$，而不可压缩表达可以张出一个等价类 $C_{k(s)} = \{k(s)\}$，即在 $k(s)$ 后跟一个立刻返回结果的符号，该符号后可以接任意长字符串，这样得到的图灵机 $k'(s)$ 一样可以停机并输出目标字符串 s。而这个等价类在 $T(L)$ 中的数量为 $2^{L - K(s) - c}$，从而我们有：

$$
P(s;L) = \frac{2^{L - K(s) - c}}{2^L} = 2^{- K(s) - c}
$$

其中 c 为立刻返回结果的算符的长度与语言相关（和 s 无关的常数）部分内容的长度的和，是一个和 s 无关而只和语言相关的常数。

这步计算有两个问题。

首先第一个，是之前在原文的回复中提到的，那就是 $U_s$ 并不只是 $k(s)$ 的等价类，还有别的元素，即 $U_s \supset C_{k(s)}$。所以由此得到的 $P(s;L)$ 只是下界。

当然，这个不是什么大问题，因为存在概率的下界比目标结果大等价于存在概率比目标结果大。

另一个问题是更主要的——等价类 $C_{k(s)}$ 的元素数量真的反比于 $2^{K(s) + c}$ 么？

由于每个等价类的元素数是相等的，所以显然等价类在全集中的占比也应该是相等的，不会由于不可压缩表述的长度不同发生改变。

事实上，如果我们不取“长度不大于 L 的字符串”这个约束，而是取“等价类中后缀无效字符串的长度不大于 L”，那么无论 L 是有限值还是无穷，等价类中元素的数量都是相等的，而不会有前面那个约束中得到的反比于 $2^K$ 的结论。

从这点来看，“在所有字符串中等价类的占比”这个涉及到分母分子两个无穷的比值，在很大程度上取决于如何取这两个值趋向无穷的方式。

就个人来看，这里目标占比函数 $P(s)$ 应该正比于所有能生成 s 的不可压缩字符串（即程序）的数量。但这个数量是非常难以计算的。

----

如果说上面的例子还存在商榷的空间，毕竟“长度不大于 L”这个约束加上“L 趋向无穷”这个极限，看上去还是很自然的。

所以，我们下面来看一个更有趣的例子，同时看一下第二条近似是否有道理。

让我们来构造这样一门语言，其中只有4个符号：

- 数字 1
- 加法算符 +
- 回滚算符 *
- 返回算符 r

除此之外，字符串对应的程序在执行时，会有一个记录结果的寄存器，初始值为 0，而整个字符串默认会在开头加上一个加法算符并在结尾加上一个返回算符。

其中连续数字 1 构成的字符串代表一个非负整数 n，n 的值就是字符串的长度，也即连续 1 的个数。比如说，字符串“11111”代表的就是非负整数 5。又比如字符串“+*11”，其中包含了三个数字，分别是“+”前的 0、“+”和“\*”之间的 0，以及最后的 2。

加法算符 + 的工作规则，是将后一个字符串中的第一个 1 搬到前一个字符串的末尾，如果后一个字符串没有 1，则执行完毕，开始执行下一个算符的指令。

比如说，字符串“111+11111”，第一步运算后的结果是“1111+1111”，第二步运算的结果是“11111+111”，第三步运算的结果是“111111+11”，第五步运算的结果是“11111111+”，从而最终输出结果就是“11111111”，即非负整数 8。

回滚算法 * 的工作规则，则是将其后的代表数字的字符串扣掉一个 1，如果结果对应的数大于 0，则在当前寄存器不清空的情况下，整个程序从头开始执行；否则，则该算符相关流程执行完毕，开始执行之后的算符。

比如说，字符串“1*11”，第一步执行的是字符串“1”，即将寄存器的值置为 1，然后遇到回滚算符 *，其后的值是2，于是第二步的执行结果是将后续的“11”变成“1”，同时将寄存器的 1 不清空，程序回到开始，遇到字符串“1”，此时根据上面提到的特殊规则，实际上是字符串“+1”，从而第三步的执行结果是“2”，第四步是将 * 之后的 1 扣为 0，于是执行完毕，最终这个字符串的执行结果就是 2。

可以看到，回滚算符其实就是乘法运算，只不过执行步骤比较多。

最后的返回算符则很容易理解，就是忽略其后的所有字符串，直接将当前寄存器结果返回。

因此，比如字符串“*11+111*111+11r111+1*111+111r11”，实际上需要执行的只有开头的“*11+111*111+11”这部分，而这部分的执行结果，写成普通非负整数加法乘法表示，就是：“(0*2+3)*3+2”，结果 11。

而在执行步骤方面，加法算符的执行次数与加数相等，回滚算符的执行次数是得到被乘数的执行次数乘上乘数，回滚算符的执行步骤数量永远是 1，而数字部分可以认为不需要执行次数。因此上面的例子中，程序需要执行的总次数为（别忘了开头会自动添加一个 + 算符）17 步。

这个字符串解析规则有如下三个显著的特点：

1. 任意字符串都可以停机并输出有限结果
2. 可以表达任意有限非负整数
3. 字符串执行的次数，不小于字符串最后输出的结果

换言之，它是一个非常好的理想模型，我们在计算字符串所构成的空间时，不需要考虑会出现不停机的结果。而另一方面，这个语言系统也可以表示非负整数集上的加法与乘法，所以已经足够强（当然，由于没有减法，所以还没能强到皮亚诺算术系统的程度）。

> 这里强调一下：虽然这个模型很不错，但它其实与原始的问题存在一定的差距：这个语言体系不是图灵完备的。当然，我们可以在字符集中增加其它的符号，来实现更多的功能，从而将这个语言补充为一个图灵完备的语言，但这个问题这里暂时先不考虑。

其中最重要的，就是第三点：字符串的执行次数不小于字符串的输出结果。

事实上，当字符串中所有乘数都不为 0 的情况下，字符串的执行次数恰好等于执行结果，而当出现乘数为 0 的情况时，则需要多执行，多出来之后的步骤数，等于将原来计算过程中所有的 0 替换成 1 后的结果。

下面的一个自然问题，就是这样一个系统中任意非负整数 n 的 K 氏长度应该是多少？

由于加法运算的介入只会增加字符串的长度——$n=a+b$的直接表示的长度为 n ，但如果写成 a 个 1 与 b 个 1 通过加法算符相连的画，长度为“a + b + 1 = n + 1”，所以反而更长。

所以，我们先来分析乘法的情况，然后再考虑加法的情况会如何。

在只考虑乘法的情况下，n 的最短表达其实直接能想到的就是将 n 尽可能分解成若干个质数相乘。但由于有乘法算符本身占了 1 个字符，所以并不能分解得过于“彻底”。

举例来说，16可以写为“4\*4”，从而就是“1111\*1111”，长度为 9，小于 16 的直接表示。但如果写为“2\*2\*2\*2”，从而就是“11\*11\*11\*11”，长度为 11，反而更长了。

事实上，如果 $n = \prod_{i=1}^m p_i$，那么对应的长度为 $L(n) = m + \sum_{i=1}^m p_i$。因此，既要分解 n，又不能分解得太小。

我们取 $n = p * m$，其长度就从原本的 $pm$ 变为 $p + m + 1$，如果这个过程要求长度是缩短的，那么就等于要求下面这个不等式成立：

$$
p^2 - (n - 1)p + n < 0\ \ \ \ and\ p>1
$$

因此，如果 n 有因数 p，那么当 $n > p \frac{p + 1}{p - 1}$ 时可以进一步分解，否则就不能分解了。

这即是说，我们可以将 n 写为质数乘积的形式：$n = \prod_{i=1}^m p_i^{m_i}$，其中 $p_i$ 表示第 i 个质数，$m_i$ 是其对应的幂次，这样除了对于 $p_1 = 2$ 要将其写为 $2^{0\ or\ 1} 4^x$ 的形式，其它质数都完全分解为乘积，就可以做到最短表达。

比如说，对于 4，其最短表达就是“1111”这一 4 的直接表示；5 的最短表达也是它的直接表达；6 比较有趣，它的直接表达“111111”有 6 位，而写成“11\*111”或“111\*11”也是6位，从而可以说是“3 重简并”的；7是质数，最短表达也是它的直接表达；8 可以写为“11\*1111”或“1111\*11”，都是 7 位比直接表达短 1 位；9 写为“111\*111”长 7 位；10 写为“11\*11111”或“11111\*11”有 8 位；16 写为“1111\*1111”有 9 位，写成“11\*11111111” 有 11 位，这是因为 8 本身可以进一步分解，但写成“11\*11\*1111”有 10 位，则是因为 4 分解成 2 \* 2 的形式反而更长，因为对于 2 而言，只有在“n > 6”时分解才能更短。

由此可见，在这套语言系统中，非负整数 n 要分解为如下两种形式：

$$
\begin{cases}
n = 4^{s_1} \times \prod_{i=2}^m p_i^{s_i}\\
n = 2 \times 4^{s_1} \times \prod_{i=2}^m p_i^{s_i}
\end{cases}
$$

对于第一种形式，最后得到的长度为 $L(n) = m + \sum_{i=1}^m p_i s_i$，对第二种则长度为 $L(n) = 3 + m + \sum_{i=1}^m p_i s_i$。

而每一种表达都可以有多种等价形式，等于上面这么多质数与 4 以及一个或者零个 2 的排列组合数——换言之，与分解成若干个质数相乘相比，这里的差异就是将质数 2 换成了 4，以及可能会需要额外再乘一个 2，本质上与将自然数分解成质数乘积是相同的。

但，如果只考虑乘法，显然质数的不可压缩表达就只能是它的直接表达，比如 17 就只能是 17 个 1 构成的字符串。

但如果考虑上加法，情况就不同了。

一次加法运算虽然不能缩短表达 n 的字符串的长度，反而会增加 1 个加法算符，但加法可以将大质数分解成若干合数的和，情况就会不同。

比如，还是质数 17，只考虑乘法时就是 17 个 1，但考虑加法时，情况就会很不同。比如将 17 分解为
8 + 9，那么总共就需要 17 位；而如果分解为 9 + 8，总共需要 16 位，少了一位；分解为 12 + 5 则需要 15 位，分解为 14 + 3 需要 14 位，分解为 15 + 2 需要 12 位，分解为 16 + 1 则最短，只需要 11 位：“1111*1111+1”。

因此，虽然加法会增加字符，但却可以通过分解为合数的形式将字符串缩短。显然，由于这种语言的运算特性，我们只能分解为 $n = m + p$ 的形式，其中 m 可以进一步表达为乘积，而 p 无法进一步分解。因此小于 n 的所有数字中表达最短的那个，就可以用来构造 n 的最短表达。

最后，我们来看一下这个语言系统中的“等价类”。

显然，虽然任意字符串都能停机并输出一个非负整数，但并不是字符串中的每一个部分对最终结果都有意义的。我们可以将一个字符串写为如下形式：

$$
s = \sum_{i=0} q_i + s_0 + (r + nonce)
$$

其中，r 是返回算符，nonce 是任意字符串，这个是之前提到过的。由于返回算符之后的任意字符串的存在都不会影响最后结果，也不会参与计算，所以这部分对字符串的输出与执行步骤都没有贡献，只改变字符串的长度。

对于 $i>0$ 的 $q_i$ 是以至少一个“\*”并后接一个“+”结尾的字符串，且除了结尾部分外，前面的结果中乘法算符后必须跟数字，且没有返回算符。这部分字符串的特点，是它们会参与运算，但由于最后是“*+”的形式，等于是将之前的运算结果乘上 0，在加上后续的操作，所以等于是对最终结果不产生任何影响。

而 $q_0$ 则是任意以“\*”开头的字符串，其计算结果一样是 0，且计算次数取决于“\*”后跟的数字，从而一样不会改变整个字符串的计算结果，但会增加计算步骤与字符串长度。

当然，前缀部分中不得含有返回算符 r。

中间的 $s_0$ 则是整个字符串的真正“有效部分”。

也就是说，前缀与后缀都不会改变最终计算结果，但两者的存在都会改变字符串的总长度；而前缀会参与运算，改变字符串的执行步数，而后缀则不会。

显然，任何一个不可压缩字符串的前缀与后缀都必须为空。

我们将整个前缀作为一个整体，此时前缀部分可以化简为两种情况：要么是以“\*”开头以“+”结尾，要么是不以“\*”开头但以“*+”结尾，当前缀长度为 L 时候，这部分的总共可能情况数为：

$$
pre = 2 \times 3^{L-2} - 3^{L - 3} = 5 \times 3^{L - 3}
$$

而对于后缀来说，如果其长度为 L ，则总共可能的情况数为：

$$
post = 4^{L - 1}
$$

另一方面，在操作步骤方面，我们取每个 q 在结尾的乘法算符之前的部分的计算结果为 Q，结尾部分乘法与加法算符的数量为 W，则操作步骤数就是所有 Q + W 的乘积。

其中最主要的，就是长 l 的字符串可以表达的数字能有多大，我们可以在任意有效字符串的末尾加上一个后缀来构造出这里的 q 字符串，从而加到任意其它有效字符串前，来构造出一个包含无用前缀的字符串。

可以估算，对于一个长 l 的字符串，其最小可以表达 1，比如 1 后面跟 l - 1 个加法算符，而且这样的表达不唯一，可以有很多种形式。而这样的字符串最大可以表达的数，取决于之前计算的不可压缩表示，因此我们现在需要做一个估算。

将 n 分解为 $p^k \times m$ 的形式，则长度从 n 变为 $k(p + 1) + \frac{n}{p^k}$，因此我们可以以 p 和 k 两个方向的极值做分解后长度下限的估算，此时考虑 l 足够大的情况，即 n 足够大：

$$
\begin{cases}
p \approx e^\sqrt {\ln n}\\
k \approx \sqrt {\ln n} - 1
\end{cases}
$$

从而，可以估算出 n 的不可压缩表示的长度大约为：

$$
K(n) \approx \left( e^\sqrt {\ln n} + 1 \right) \sqrt {\ln n}
$$

换言之，长 l 的字符串可以表示的数最大可以到大约 $N(l) \approx \exp [ W(l)^2 ]$，其中 W 是 Lambert 函数，即 $f(x) = x e^x$ 的反函数。

由于 Lambert 函数可以近似写为 $W(x) \approx \ln x - \ln \ln x + o(1)$，所以不难证明 $N(l)$ 肯定是随着 l 快速增长的，且增长速度肯定大于线性。

虽然我们目前仍不清楚所有长为 l 的字符串对应的输出结果（都是非负整数）的分布究竟如何，但从前面的分析可以看到，长 l 的字符串能表示的数字肯定是以大于线性的速度增长的，从而 q 的部分的运算步骤数肯定随前缀长度的增长而超线性增长。

下面，我们终于可以回到这么两个问题上了：

1. 在长度不超过 L 的所有上述字符串中，能表达指定非负整数 n 的字符串的数量为多少？
2. 在长度不超过 L 且执行次数不超过 $f(L)$ 的所有上述字符串中，能表达指定非负整数 n 的字符串的数量为多少？

最主要的是，我们要来看一下这两个情况在 L 趋向无穷的极限情况下，是如何增长的。

我们假定对于第一个问题，得到的答案是 $N(n;L)$，即所有能得到非负整数 n 且长度不超过 L 的字符串构成的集合为 $C(n;L)$，其中元素数量为 $N(n;L)$。我们可以将 $C(n;L)$ 中的元素写为如下形式：

$$
s(n;L) = q(l_q) + s_0(n;l) + r(l_r)
$$

其中存在长度约束 $l_q + l + l_r = L$。$N(n;L)$ 本身很难计算，我们暂时也先不去做详细计算。

下面来看第二个问题中，所有长度不超过 L 且运算次数不超过 $f(L)$ 而最终结果又能输出 n 的字符串的数量，记为 $M(n;L,f(L))$。

其中，影响计算数量的，除了有效部分 $s_0$，另就是前缀部分 $q$ 了，且我们知道前缀部分增加的计算量，最少也等于前缀部分中除了结尾的回滚算符与最后结尾的加法算符之外的部分的计算值，从而可以认为是随 $N(l_q)$ 一同增长的，而这部分的增长速度前面提到过，是随着 $l_q$ 的增加而超线性飞速增长的（只要 $l_q$ 足够大，它的增长速度可以超过 $l_q$ 的任意有限次幂）。

这就是说，在计算 $N(n;L)$ 时包含在 $C(n;L)$ 中的很大一部分具有大前缀的字符串，在计算 $M(n;L,f(L))$ 时将被剔除，从而对后者不做贡献。

我们可以做一个估算。

由于要求运算次数不得超过 $f(L)$，而前缀的 $l_q$ 位长的字符串对应的计算量为 $\lambda N(l_q)$，同样的，有效部分的计算次数我们之前介绍过，基本与最后计算结果相同，从而就意味对有小部分而言存在约束 $n < f(L) - \lambda N(l_q)$。因此，就算这里被前缀消耗的计算步骤不影响最后有效字符串的数量，这也会使得长度 L 的字符串能表示的数字的范围受到极大的限制，从原本的 $N(L - l_r - l_q)$ 下降到 $f(L) - \lambda N(l_q)$ 与 $N(L - l_r - l_q)$ 的较小值。

进一步，我们可以认为当前缀长为 $l_q$ 时，总长度不超过 L 且执行次数不超过 L 的、能得到目标非负整数 n 的字符串的数量约为 $M(n;L,f(L);l_q) \approx N(n;L) \min \left[ \frac{f(L) - \lambda N(l_q)}{N(L - l_r - l_q)}, 1 \right]$。

最后，考虑到长为 $l_q$ 的前缀字符串的数量为 $5 \times 3^{l_q - 3}$，所以大致可以估算出：

$$
M(n;L,f(L)) = \frac{\sum_{i = 0}^{L_q} 3^i M(n;L,f(L);i)}{\sum_{i = 0}^{L} 3^i}
$$

其中 $L_q$ 为前缀长度极限，约为 $L_q \approx \sqrt{\ln \frac{f(L)}{\lambda}} \exp \left[ \sqrt{\ln \frac{f(L)}{\lambda}} \right] + \sqrt{\ln \frac{f(L)}{\lambda}}$。

当 L 足够大的时候，$M(n;L,f(L);i)$ 随 i 下降到 0 的速度是飞快的，所以我们可以近似认为求和的非 0 部分始终是 1，而从 1 到 0 则是瞬间的，因此有：

$$
\frac{M(n;L,L)}{N(n;L)} \approx \frac{\sum_{i = 0}^{L_q} 3^i}{\sum_{i = 0}^{L} 3^i} = \frac{3^{L_q + 1} - 1}{3^{L + 1} - 1} \approx 3^{L_q - L}
$$

所以，就可以回到上面的两个问题了——

L 趋向无穷时，如果“长度不超过 L 且能输出目标结果 n”的字符串在全部字符串中的占比为 $P(n)$，则“长度不超过 L、执行次数不超过 f(L) 且能输出目标结果 n”的字符串在全部字符串中的占比为 $Q(n) \approx 3^{L_q - L} P(n)$。

也就是说，当约束条件从“字符串长度不超过 L”改为“字符串长度不超过 L 且执行次数不超过 f(L)”的话，占比会缩小。

换句话说，就算证明了 $\log_2 Q(n;L) < -K(n) + O(1)$，我们也只得到 $\log_2 P(n;L) < (L - L_q) \log_2 3 - K(n) + O(1)$，当 $L-L_q$ 随 L 一起增大时，在 L 趋向无穷的极限下，这个结论没有多大意义。

比如在原本的讨论中，@十酒三 提出 $f(L) = L$，从而就有：

$$
L_q \approx \sqrt{\ln \frac{L}{\lambda}} \exp \left[ \sqrt{\ln \frac{L}{\lambda}} \right] + \sqrt{\ln \frac{L}{\lambda}}
$$

它的增长速度小于 L，从而 $L - L_q$ 是随着 L 的增长而增长的量，当 L 取无穷这一极限时，我们将得到 $\log_2 P(n) < \infty$ 这一没多大意义的结论。

由此可见，第二步近似其实并不可靠。

当然，这是建立在一组估算上的一个半定量结论。

那么，是不是继续保持“长度不超过 L”这个约束而非“长度不超过 L 且执行次数不超过 f(L)”就能得到足够好的近似了呢？

我们可以继续做估算。

----

能输出目标数字 n 的字符串有很多，其中存在大量是有上述前缀和后缀的。

在计算占比函数 $P(n)$ 的时候，由于现在我们算的语言总能停机并输出一个非负整数，所以前缀与后缀的贡献在分子和分母中必然是相同的，这点我们前面已经证明过了。

所以，占比函数 $P(n)$ 实际上可以表达为能输出目标数字 n 的字符串的有效字符串的数量，在所有有效字符串中的比例，而这里所谓的“有效字符串”，如上所述，就是没有前缀与后缀的字符串。

此外，还有一类在中间有效字符串内的“无效字段”，是在任意数字之后跟任意个“+0”或“*1”，很显然，在这套语言规则下，这样的操作并不会改变最终输出结果，所以是“有效”的，但它们却一样可以构造出一个“等价类”，将任意数字与一串字符串对应起来，且所有这些等价类都彼此同构，具有相等的数量，我们也需要将这类“无效字段”剔除。

在剔除所有“无效”的字段后（它们只会形成等价类），我们可以列出前4个自然数的有效表示：

> 1: 1
2: 2, 1+1, 1*2
3: 3, 2+1, 1+1+1, 1*2+1, 1+2, 1*3
4: 4, 3+1, 2+1+1, 1+1+1+1, 1*2+1+1, 1+2+1, 1*3+1, 2+2, 1+1+2, 1*2+2, 1+3

现在，我们用 $A(n)$ 代表所有能输出目标数字 n 的有效字符串的数量（而非占比），从而容易得到如下递推关系：

$$
A(n) = 1 + \left[ \sum_{i=1}^{n-1} A(n-i) \right] + \left[ \sum_{i \in F(n)} A \left( \frac{n}{i} \right) \right]
$$

其中 $F(n)$ 是 n 的所有除了 1 之外的因数的集合。

第一部分很好理解，就是将 n 做加法分解，分解为 n-i 与 i，那么 n-i 有多少种表示，这种分解的方式就有多少种，体现在字符串上，就是将能输出 n-i 的字符串后跟加法算符与 i 的直接表达。

第二部分也很好理解，那就是将 n 做乘法因数分解，分解为 $\frac{n}{i}$ 与 i，从而任何前置的表达后跟回滚算符与 i 的直接表达，就可以得到 n 的表达。

由于有效字符串种能用的算符只有加法算符和回滚算符，所以上面的两部分便穷尽了 n 的所有可能表达方式。

我们可以做一个估算，将第二部分弱化为 n 的不包括 1 的因数数量函数 $Q(n)$，从而可以得到 $A(n)$ 的下限 $B(n)$ 的递推公式：

$$
B(n) = 1 + \left[ \sum_{i=1}^{n-1} B(n-i) \right] + Q(n)
$$

不难证明：

$$
B(n) = 2^{n - 1} + Q(n) + \sum_{i = 1}^{n - 1} Q(i) 2^{n - 1 - i}
$$

进一步，如果我们将 n 写成 $n=\prod_{p} p^{m_p}$ 的形式，则有：

$$
Q \left( \prod_{p} p^{m_p} \right) = \left[ \prod_p (m_p+1) \right] - 1
$$

其中 p 是质数。显然，Q(n) 在质数点上永远取最小值 1（不考虑 Q(0)），而其局部极大值，通过近似计算发现有一个很有趣的结果：

$$
Q_M(n) \approx \sqrt{\ln n} \exp \left( \sqrt{\ln n} \right) \approx K(n)
$$

也就是说，我们现在可以给出 $A(n)$ 的下界函数 $B(n)$ 的上下界：

$$
2^n < B(n) \lesssim 2^{n - 1} + K(n) + \sum_{i = 1}^{n - 1} K(i) 2^{n - 1 - i}
$$

进一步，我们有如下关系：

$$
2^{n+1} < B(n+1) \lesssim 2 B(n) + K(n+1) - K(n)
$$

由于 $K(n) \approx \sqrt{\ln n} \left[ 1 + \exp \left( \sqrt{\ln n} \right) \right]$，因此最后的相减项在 n 足够大的时候，相对于前面的 2 B(n) 而言，是一个小量。

同样的，对于 $A(n)$ 的上界 $C(n)$，我们也有类似的关系：

$$
A(n) < C(n) = 1 + \left[ \sum_{i=1}^{n-1} C(n-i) \right] + Q(n) C \left( \frac{n}{2} \right)\phantom{ww}\\
\therefore C(n+1) = 2 C(n) - Q(n) C \left( \frac{n}{2} \right) + Q(n+1) C \left( \frac{n+1}{2} \right)\\
\therefore C(n+1) \approx 2 C(n)\ \ \ \ (n \gg 1)\phantom{wwwwwwwwwwwwwwwww}
$$

因此，对于占比函数，当 n 足够大时也近似地有： $P(n+1) \approx 2 P(n)$，从而有：

$$
\log_2 P(n) \approx \lambda n - C
$$

也就是说，占比函数的对数与目标数字 n 接近正比关系。

而，在原文中，两个不等式分别为：

$$
\begin{cases}
\log_2 P(n) > - K(n) - c\\
\log_2 P(n) < - K(n) + O
\end{cases}
$$

由于函数 $K(n)$ 具有如下性质：

$$
K(n) \approx \sqrt{\ln n} \left[ 1 + \exp \left( \sqrt{\ln n} \right) \right]\phantom{wwwwwwwwwwww}\\
\approx \exp \left[ \sqrt{\ln n} + \frac{1}{2} \ln \ln n \right]
< \exp \left[ \ln n \right] = n\\
\therefore K(n) < n\phantom{wwwwwwwwwwwwwwwwwwwwwwwwwww}
$$

也即，在这个语言系统中，第二个不等式不成立，而第一个不等式虽然成立，但右侧随 n 减少，左侧随 n 增大，从而最后右侧的变化对左侧没有任何指导意义。

----

当然，最后的结论还有很大的商讨空间，其中最主要的一点是，我们所讨论的Toy语言体系并不是图灵完备的。

我们当然可以给这个语言系统增加更多的符号，从而在包括当前语法规则的基础上，做到图灵完备。但对于目标数字 n 的生成字符串而言，这么做只能增加更多的可能性，但在 n 足够大时的两倍增长规律，很难有质上的突破。

因此，我们可以看到，前面所指出的问题可以说是真实存在的，即：

1. 两个近似即“长度不超过 L”与“长度不超过 L 且执行次数不超过 L”在 L 趋向无穷时的极限，并不能很好地给出原问题的近似描述，这是由于等价类的数量是无穷，两种近似方式都改变了其趋向无穷时的行为方式；
2. 能得到目标结果 n 的所有字符串中，最短的、不可压缩的字符串的贡献并不是最主要的贡献，有大量非最短、非不可压缩的字符串的贡献的总和，可以超过不可压缩字符串的贡献。

作为结论，我们可以说：最概然与最精简，这两个方向在 AIT 中未必是等同的。复杂可以有更丰富的生存空间。