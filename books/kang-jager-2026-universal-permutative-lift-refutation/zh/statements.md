# 精确陈述与完整证明

本章按依赖顺序展开论文第 2 版的全部论证。先给出主结论，再证明它所需的构造、动力学性质与共轭。

## 对象与主结论

令 $A=\{0,1\}$，在 $A^{\mathbb Z}$ 上取积拓扑，$(Sy)_i=y_{i+1}$。子移位是非空闭的平移不变集。极小指每条双向轨道稠密；严格遍历指极小且恰有一个不变 Borel 概率。一个序列是 Toeplitz 序列，指每个坐标 $i$ 都存在正整数 $p$，使 $y_{i+kp}=y_i$ 对所有 $k\in\mathbb Z$ 成立。正则性要求本质周期结构的周期骨架密度趋于一，详见 [@lem-regular]。

对 $\ell\geq2$，$h:A^\ell\to A$ 在固定其他字母后，对每个端点都是双射，称为双端可置换。记 $(\eta_hx)_i=h(x_i,\ldots,x_{i+\ell-1})$。提升始终指完整集合 $\eta_h^{-1}(Y)$。

::: {.theorem #thm-main title="同一底空间的全部提升" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s1" lean="D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedRegularity.exists_balanced_regular_toeplitz_generator D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedMinimal.balanced_orbit_dense D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedUniqueErgodic.balanced_unique_ergodic D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedLiftSplitting.splitting_conjugacy D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedLiftSplitting.full_lift_not_minimal"}
存在一个非周期正则 Toeplitz 子移位 $Y\subset A^{\mathbb Z}$，它严格遍历，并且对每个 $\ell\geq2$ 和每个双端可置换 $h:A^\ell\to A$，有同胚

$$
\Theta_h:\eta_h^{-1}(Y)\longrightarrow Y\times A^{\ell-1},
$$

其第一坐标是 $\eta_h$，且 $\Theta_h S=(S\times\mathrm{id})\Theta_h$。特别地，每个完整提升都不极小。
:::

证明分为下面五个环节：构造非空紧底空间；识别积木并证明极小；建立正则性与唯一遍历性；消去任意有限字母作用；把局部规则还原为这样的作用。最后两步在本章“消去有限作用并证明主结论”中完整给出。

## 构造与识别

设 $U_0=0,V_0=1$，对 $n\geq0$ 取 $m_n=(n+1)!$，并定义

$$
U_{n+1}=U_n^{2m_n}V_n^{m_n},
$$

$$
V_{n+1}=U_n^{m_n}V_n^{2m_n}.
$$

两词共同长度为 $H_0=1$、$H_{n+1}=3m_nH_n$。$Y_n$ 是两词的双无限拼接集，允许所有模 $H_n$ 的相位。它是有限个紧拼接空间的连续像的并，故非空且紧。上层词由下层词拼成，所以 $Y_{n+1}\subseteq Y_n$；由嵌套紧集性质，$Y=\bigcap_{n\geq0}Y_n\ne\varnothing$。

::: {.lemma #lem-tiling title="可连续读取的唯一铺法" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s2" status="written-proof" proof="pf-lem-tiling" doi="10.5281/zenodo.23885965" source="Lemma 2" request="https://github.com/the-omega-institute/trureturing-requests/issues/243"}
每个 $Y_n$ 中的点都有唯一的带标记 $U_n,V_n$ 铺法：边界与类型均被确定，且铺法连续依赖于点。在 $Y$ 上，这些铺法逐层细化相容。
:::

::: {.proof #pf-lem-tiling}
第零层显然。假设第 $n$ 层唯一，把任一第 $n+1$ 层铺法细化为第 $n$ 层。下层类型序列中的两个父词分别为 $0^{2m_n}1^{m_n}$、$0^{m_n}1^{2m_n}$。$10$ 转换恰好发生在父词起点，所以下层唯一铺法确定所有父边界；两种不同的游程长度确定父类型。这也保证两父词不同，完成归纳。第一层为 $001,011$。

带标记铺法空间记录一个模 $H_n$ 的相位和双无限类型序列，是紧空间。读取符号的映射连续，以上唯一性使它成为到 $Y_n$ 的连续双射。$Y_n$ 是 Hausdorff 空间，故该映射是同胚，逆译码连续。任一高层铺法细化后都是同一点的下层铺法，由唯一性必与原铺法一致。此为原文 Lemma 2 的完整论证。
:::

令 $\theta_n(y)\in\mathbb Z/H_n\mathbb Z$ 是原点在当前积木内的位置。它连续，且

$$
\theta_n(Sy)=\theta_n(y)+1.
$$

若 $S^py=y$ 且 $p>0$，则 $H_n\mid p$ 对每个 $n$ 成立。由于 $H_n\to\infty$，$Y$ 中没有周期点。

::: {.lemma #lem-minimal title="极小性" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s3" lean="D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedMinimal.balanced_orbit_dense"}
$Y$ 是极小子移位。
:::

::: {.proof #pf-lem-minimal}
对 $n\geq1$ 有 $m_n\geq2$，所以 $00,01,11$ 出现在每个第 $n+1$ 层词的类型序列内部。$10$ 出现在两个相邻第 $n+1$ 层词的交界，且每个第 $n+2$ 层词包含这种交界。因此四种相邻第 $n$ 层类型都出现在每个第 $n+2$ 层词中。

任取 $Y$ 中出现的有限词 $w$，选 $n\geq1$ 使 $|w|\leq H_n$。一次出现至多跨两个相邻第 $n$ 层积木。相同类型对在每块第 $n+2$ 层词中出现，于是 $w$ 也在每块中出现。因此 $w$ 在任一点中出现的间隔有界；每条轨道都遇到每个非空柱集，故稠密。这证明原文 Lemma 3。
:::

## 正则性与统计唯一性

记 $D_n=\{0\leq j<H_n:U_n(j)\ne V_n(j)\}$。三等分比较给出 $|D_0|=1$、$|D_{n+1}|=m_n|D_n|$，从而 $|D_n|/H_n=3^{-n}$。

::: {.lemma #lem-regular title="正则 Toeplitz 生成元" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s4" lean="D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedRegularity.exists_balanced_regular_toeplitz_generator"}
存在一个非周期 Toeplitz 点 $y_*\in Y$，其轨道闭包为 $Y$，且沿一个本质周期结构的周期骨架密度趋于一。
:::

::: {.proof #pf-lem-regular}
令 $K_n\subset Y_n$ 是原点为第 $n$ 层边界的非空紧集。细化给出 $K_{n+1}\subset K_n$，故可选 $y_*\in\bigcap_nK_n$。两种第 $n+1$ 层词共享前缀 $U_n^{m_n}$ 和后缀 $V_n^{m_n}$。固定 $i\in\mathbb Z$，选 $|i|<H_n$。若 $i\geq0$，它位于共有前缀；若 $i<0$，它在前一块的共有后缀。相应列以 $H_{n+1}$ 为周期，故每个坐标周期。非周期性已证，极小性给出其轨道闭包为 $Y$。

设 $\operatorname{Per}(y_*,p)$ 为所有沿 $p\mathbb Z$ 符号不变的坐标，$s_p$ 是这些位置保留颜色、其他位置为洞的骨架。不同于 $D_n$ 的列在所有第 $n$ 层积木中相同，故

$$
\frac{|\operatorname{Per}(y_*,H_n)\cap[0,H_n)|}{H_n}\geq1-3^{-n}.
$$

计数区间只含整数。对 $n\geq1$，令 $e_n$ 为 $s_{H_n}$ 的最小正周期。因为 $s_{H_n}$ 本身以 $H_n$ 为周期，$e_n\mid H_n$。一方面，$e_n$ 周期坐标也是 $H_n$ 周期坐标；另一方面，沿 $e_n$ 平移骨架的非洞颜色保持不变，故每个 $H_n$ 周期坐标也是 $e_n$ 周期坐标。因此 $s_{e_n}=s_{H_n}$，$e_n$ 为本质周期，且两种骨架密度相同。

还需证明整除相容性。若 $p\mid r$ 且 $q$ 是 $s_r$ 的周期，对任意 $p$ 周期坐标 $i$，所有 $i+kp$ 都在 $r$ 骨架中并同色；平移 $q$ 后仍同色，所以 $i+q$ 也是同色的 $p$ 周期坐标。再用 $-q$ 可知洞集也保持。因此 $q$ 是 $s_p$ 的周期。取 $p=H_n,r=H_{n+1},q=e_{n+1}$，得到 $e_n\mid e_{n+1}$。

若 $e_n$ 有界，整除链最终恒等于某个 $e$。每个坐标都被某个 $H_n$ 骨架覆盖，且这些骨架随 $n$ 增大而扩张，故整个 $y_*$ 将以 $e$ 为周期，矛盾。删去重复项，得到严格递增、逐项整除、覆盖每个坐标的本质周期结构。密度由上式趋于一。此即原文 Lemma 4，包括本质周期的提取。
:::

::: {.lemma #lem-unique title="唯一不变概率" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s5" lean="D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedUniqueErgodic.balanced_unique_ergodic"}
$Y$ 恰有一个不变 Borel 概率测度。
:::

::: {.proof #pf-lem-unique}
存在性：取一条轨道的经验概率 $N^{-1}\sum_{k=0}^{N-1}\delta_{S^ky}$。紧空间上的概率测度有弱收敛子列。对每个连续 $f$，$f\circ S-f$ 的平均望远镜求和后为 $(f(S^Ny)-f(y))/N\to0$，所以任何弱极限均不变。

唯一性：设 $\mu,\nu$ 不变。相位关系使每个相位类都有质量 $1/H_n$。对由 $t,\ldots,t+r-1$ 决定的柱集 $C$，把满足某个 $(j+t+a)\bmod H_n\in D_n$、$0\leq a<r$ 的相位 $j$ 称为坏相位。这样的相位最多 $r|D_n|$ 个。其他相位上，窗口内全部符号都与积木类型无关，即使跨边界也一样；故整个相位类或全在 $C$ 中，或全不在。两测度在好相位上的贡献相同，在坏相位上的贡献各在零与共同总质量之间。因此

$$
|\mu(C)-\nu(C)|\leq r|D_n|/H_n=r3^{-n}.
$$

固定 $r$ 令 $n\to\infty$，得到所有柱集上的相等；$r=0$ 的空窗口事件也自动相等。柱集形成生成 Borel $\sigma$ 代数的交稳定族，概率测度唯一性定理给出 $\mu=\nu$。这是原文 Lemma 5。与极小性合起来，$Y$ 严格遍历。
:::

## 消去有限作用并证明主结论

固定非空有限集合 $Q$，令 $d=|Q|$，任取排列 $\pi_0,\pi_1$。对词 $w=a_0\cdots a_{r-1}$ 定义

$$
P(w)=\pi_{a_{r-1}}\cdots\pi_{a_0},\qquad P(\varnothing)=1.
$$

所以 $P(uv)=P(v)P(u)$。取 $n\geq\max\{1,d\}$。$d$ 点排列的阶整除 $d!$，而 $d!\mid n!$，故

$$
P(U_n)=P(V_{n-1})^{n!}P(U_{n-1})^{2n!}=1.
$$

同样 $P(V_n)=1$。两个因子分别等于恒等，无需交换。

令 $c(y)$ 为当前第 $n$ 层词中原点之前的前缀的 $P$ 值；原点在词首时取空前缀。连续译码保证 $c$ 连续。在词内部，乘积法则给出

$$
c(Sy)=\pi_{y_0}c(y).
$$

跨边界时左边重置为 $1$，右边为整个词的作用，仍为 $1$，所以等式也成立。映射 $F(y,q)=(y,c(y)^{-1}q)$ 连续，逆映射为 $(y,q)\mapsto(y,c(y)q)$，并满足

$$
F(Sy,\pi_{y_0}q)=(Sy,c(y)^{-1}q).
$$

由此它把有限斜积变成 $S\times\mathrm{id}$。

现在固定允许的 $h$，取 $Q=A^{\ell-1}$。给定输出 $a$ 和前缀 $q=(q_0,\ldots,q_{\ell-2})$，右端可置换性唯一决定满足 $h(q_0,\ldots,q_{\ell-2},b)=a$ 的 $b$。令

$$
\pi_a(q)=(q_1,\ldots,q_{\ell-2},b).
$$

当 $\ell=2$ 时右边仅含 $b$。左端可置换性唯一决定反向的首位，所以 $\pi_a$ 是排列。给定 $(y,q)$，这些转换向两侧唯一重建 $x$，并且 $\eta_hx=y$。每个有限输入窗口只需有限输出窗口及 $q$，故重建连续；编码与取前缀也连续。因此

$$
\gamma(x)=(\eta_hx,x_{[0,\ell-2]})
$$

是从完整逆像到 $Y\times Q$ 的同胚，把 $S$ 变成 $(y,q)\mapsto(Sy,\pi_{y_0}q)$。取 $\Theta_h=F\circ\gamma$，其第一坐标仍为 $\eta_h$。上面所证 $Y$ 的正则性、非周期性和严格遍历性与此共轭一起证明 [@thm-main]。$\ell\geq2$ 使 $|Q|\geq2$，所以至少两个非空不变开闭切片阻止完整提升极小。

## 分支与概率测度

::: {.corollary #cor-components title="精确分支与概率单纯形" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s6" status="written-proof" proof="pf-cor-components" doi="10.5281/zenodo.23885965" source="Corollary 6" request="https://github.com/the-omega-institute/trureturing-requests/issues/244"}
每个允许的长度 $\ell$ 的完整提升恰有 $2^{\ell-1}$ 个极小分支。每个分支开闭、与 $Y$ 共轭，因而严格遍历。完整提升上的不变概率构成一个恰有 $2^{\ell-1}$ 个遍历顶点的单纯形。
:::

::: {.proof #pf-cor-components}
在 $\Theta_h$ 下，各切片 $Y\times\{q\}$ 非空且开闭；因为 $Y$ 极小，每个点的轨道闭包恰为所在切片。因此这些切片正是全部极小分支，数量为 $|A^{\ell-1}|=2^{\ell-1}$。投影到 $Y$ 给出每个切片上的共轭，唯一不变概率记为 $\mu_q$。

对完整提升上的任意不变概率 $\rho$，令 $t_q=\rho(Y\times\{q\})$。这些数非负且和为一。若 $t_q>0$，在该切片上的限制除以 $t_q$ 是不变概率，故等于 $\mu_q$；若 $t_q=0$，限制测度为零，不作除法。于是 $\rho=\sum_qt_q\mu_q$。各切片互不相交，故权重唯一。反过来每个这样的凸组合都不变，因此得到有限概率单纯形。

若有至少两个正权重，一个切片就是质量严格介于零与一的不变集合，所以 $\rho$ 不遍历。若唯一正权重为一，$\rho=\mu_q$；唯一不变概率必遍历，否则一个中间质量的不变集合的归一化限制会产生第二个不变概率。故遍历概率恰是这 $2^{\ell-1}$ 个顶点。这证明原文 Corollary 6 的所有条款。
:::

::: {.theorem #thm-orbit-count title="轨道闭包的数量" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s6" lean="D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedLiftComponents.orbit_closure_family_card"}
对上述固定底空间和任意允许的 $h$，完整提升的不同轨道闭包恰有 $2^{\ell-1}$ 个。
:::

这是 [@cor-components] 的拓扑计数部分，单独引用对应的形式化定理；它不包含概率单纯形的结论。

::: {.theorem #thm-refutation title="普遍存在命题的否定" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s1" lean="D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedRegularRefutation.result"}
以下命题为假：每个非空二进制子移位 $Z$，若每条整数轨道稠密、恰有一个平移不变概率，并有非周期正则 Toeplitz 生成元，就存在某个长度 $\ell\geq2$ 的双端可置换规则，使其完整提升的每条整数轨道也稠密。
:::

具体反例是前面同一个 $Y$。此处的形式陈述是否定普遍命题；显式共轭及其附加结构见 [@thm-main]，两者没有混为同一陈述。由于严格遍历要求极小，所有完整提升也不严格遍历；由 [@cor-components]，它们还具有多个不变概率。
