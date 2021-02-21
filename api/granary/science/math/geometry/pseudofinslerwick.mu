标题：Pseudo-Finsler 流形上的 Wick 转动与体元
更新：2020.08.26 00:40:01

这篇所用的方法，其实不算数学的方法。Wick 转动原本是物理上用来计算一些数学上没有良好定义但物理上却有意义的问题而被引入的一种不讲道理的技巧，其数学合理性在形式场论中被人严格探讨过，但总体而言还是感觉其实很耍赖很流氓。

所以这里用这么一种略显无耻的技巧来解决一个很数学的问题，这样的做法其实很不讲究。

---

传统 Finsler 流形上的积分体元的定义，如 [Busemann 体元](http://library.msri.org/books/Book50/files/02AT.pdf)，都建立在这么一个假设上：

**给定 Finsler 流形中的单位球的体积应该等于同维 Eular 流形中单位球的体积。**{|}

在这条假设下，不同定义的差异主要体现在所选择的空间与几何体的不同（比如 Busemann 定义与 Holmes-Thompson 定义的差异体现在一个基于切空间而另一个基于对偶的余切空间，而另外一些则选择正方体等多边形而非球面）。

我们以 Busemann 体元为准，其定义为：

$$
\varepsilon = \frac{\int_E dV}{\int_B dV}\
$$

其中所用的积分测度都是标准欧氏积分体元，而 E 是标准欧氏空间中的单位球，所以 $\int_E dV = \frac{\pi^{\frac{D}{2}} r^D}{\Gamma \left( \frac{D}{2} + 1 \right)}$ ；而 B 是给定 Finsler 流形上的单位球。

这样的定义在传统 Finsler 度量下当然是可以正常使用的，这类 Finsler 度量满足如下这几点要求：

1.	正定性：对任意位置 $x^\mu$ 与切矢 $v^\mu$ 都有 $F(x^\mu, v^\mu) \geq 0$，且只当 $v^\mu = 0$ 时取等；
2.	强一阶齐次性：对任意常数 $\lambda$ 有 $F(x^\mu, \lambda v^\mu) = |\lambda| F(x^\mu, v^\mu)$；
3.	满足三角不等式：$F(x^\mu, v^\mu) + F(x^\mu, w^\mu) \geq F(x^\mu, v^\mu + w^\mu)$ 且 $F(x^\mu, v^\mu - w^\mu) \geq | F(x^\mu, v^\mu) - F(x^\mu, w^\mu) |$；
4.	大部分情况下还要求 $F(x^\mu, v^\mu)$ 在 $v^\mu \neq 0$ 处为 $C^\infty$ 的。

但我们都知道，这样限制下的数学对象并不足以承载全部可能的 Finsler 与 Finsler-like 的数学与物理场景。比如我们所熟悉的时空，它是 Pseudo-Riemann 的，从而不满足上面的第一与第三条要求。

以 Minkowski 流形为例，其上的度量为：

$$
F(t, x, y, z)^2 = t^2 - (x^2 + y^2 + z^2)
$$

那么它的“单位球面”就是双叶双曲面，它非但无法“围”出一个封闭空间，且就算围了一个出来，其用标准欧氏度量测得的体积也是无穷大，从而对应的体元为 0，这点显然与我们的物理经验相悖。

为此，我们必须调整体元的定义。

---

原则上来说，体元可以认为是包含指定点的最小的开集的体积，但在传统 Pseudo-Finsler 流形中，单位“球”已经无法被视为是一个合格的开集，所以自然就不再适用于用于计算体元了。

这里，我们采用一种非常规的做法—— **__Wick 转动__**。

Finsler 度量函数 $F(x^\mu, v^\mu)$ 是定义在实空间中的，但我们现在允许切实量从实矢量拓展为复矢量，则指标球（Index Ball）$F(v^\mu) = 1$ 实际上给出的是一个 2D 空间中的“球面”，它是 Riemann 球面的推广，可以被称为__复 Finsler 球面__。

接着，我们取局部坐标系为 $e_i^\mu$，它也可以视为标架场。我们对其做 __Wick 转动__，具体操作为将每个标架场的标架矢量在复空间做旋转：$e_i^\mu \rightarrow e^{\theta_i I} e_i^\mu$，这里 I 是虚数单位，$\{ \theta_i \}$ 称为__转动角（构型）__。通过这样的映射，我们就将原来的标架场映射为新的标架场，并可由此构造切空间，将原本切空间中的任意张量映射过来。

不同转动角构型下的 Wick 转动，将给出新切空间中的不同的单位球，它们都是复 Finsler 球的截面。现，假定存在若干组转动角构型 $\{ \theta_i \}_j$，它们能让新的单位球是一个封闭曲面，则这样的 Finsler 流形称为__“可紧的”__，而对应的封闭曲面围成的空间被称为 __Wick 球__，显然指标球也是一个 Wick 球。在所有 Wick 球中，所围空间（在标准欧氏度量下）最小的那个（有可能不唯一）被称为__最小 Wick 球__，我们后面如不加说明，所说的 Wick 球都是最小 Wick 球。

由此，Pseudo-Finsler 流形上的体元终于可以得到了，它就是（D 维）标准欧氏球的体积与最小 Wick 球体积的比。当所选流形为 Finsler 流形时，Wick 球自动退化为指标球，从而上述体元就自动回归到传统的 Busemann 体元。

我们将这样定义的体元称为 __Busemann-Wick 体元__。

---

下面我们来看两个例子。

首先，我们来看标准的 D 维闵可夫斯基流形，其度量为：$F(v^\mu) = \sqrt{\eta_{i j} v^i v^j - v^{t 2}}$，这里 $\eta_{i j}$ 是 D - 1 维欧氏度规。其中的单位“球”面是一张双叶双曲面，所以显然无法定义 Busemann 体元。

我们下面做 Wick 转动，从而转动角 $\{\theta_i\}$ 的复 Finsler 球为满足如下关系的复曲面：

$$
\eta_{i j} v^i v^j e^{(\theta_i + \theta_j) I} - v^{t 2} e^{2 \theta_t I} = 1
$$

要得到封闭的 Wick 球，则左侧必须能得到正定的实数式求和，因此 Wick 球只能具有如下形式：

$$
\eta_{i j} v^i v^j + v^{t 2} = 1
$$

相应的体积（在标准欧氏度量下）为 $|\det (\eta)| S_D = S_D$，即欧氏空间中的 D 维球体积，因此对应的体元为 1。

很容易将这个结论推广到任意 Riemann 度规的情况，从而得到体元 $\varepsilon = |\det (g_{\mu \nu})|$。

接着，我们来看“规范场型度量”：$F(x^\mu, v^\mu) = \sqrt{\eta_{i j} v^i v^j} + A v^x$，其中 $\eta_{i j}$ 是标准 D 维欧氏度规（而非闵氏度规），A 可以认为是沿 x 轴正向的方向极化矢量（也可以近似地看做是规范场的联络）的极化强度。现在的复 Finsler 球面为：

$$
\sqrt{\eta_{i j} v^i v^j e^{(\theta_i + \theta_j) I}} + A v^x e^{\theta_x I} = 1
$$

它在方向极化强度的绝对值 |A| 大于 1、小于 1 和等于 1 时的行为是不同的。

当 $|A| < 1$ 时，Wick 球面为：

$$
\begin{cases}
v^x = \frac{\cos \theta - A}{1 - A^2}\\
v^i = \frac{\sin \theta}{\sqrt{1 - A^2}} r_B^i
\end{cases}
$$

这里 $r_B^i$ 是 D - 1 维标准欧氏单位矢量。所以积分体元很显然：$\varepsilon = \left( 1 - A^2 \right)^{\frac{D + 1}{2}}$。

而如果 $|A| > 1$，则情况就变得很不一样了，此时 Wick 球面为：

$$
\begin{cases}
v^x = \frac{\cos \theta + A}{A^2 - 1}\\
v^i = \frac{\sin \theta}{\sqrt{A^2 - 1}} I r_B^i\\
\end{cases}
$$

这里别忘了 I 是虚数单位。所以，对于指标球为双曲面的 $|A| > 1$ 的情况，此时 Wick 球依然是一个椭圆，所以可以得到有限的体元：$\varepsilon = \left( A^2 - 1 \right)^{\frac{D + 1}{2}}$。

而对于 $|A| = 1$ 的情况，此时流形不可紧，所以体元无恰当定义。

结合这三种情况我们就有：$\varepsilon = \left| A^2 - 1 \right|^{\frac{D + 1}{2}}$。

---

一旦在 Pseudo-Finsler 流形上的体元可以有好的定义，那我们实际上可以做很多的事情。

比如，计算 Pseudo-Finsler 流形上的广义相对论甚至场论。