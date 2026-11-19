# Exact statements and complete proofs

This chapter preserves the complete argument of version 2. The main result comes first, followed by its construction, dynamical properties, and conjugacy.

## Objects and the main result

Put $A=\{0,1\}$, give $A^{\mathbb Z}$ its product topology, and set $(Sy)_i=y_{i+1}$. A subshift is a nonempty closed shift-invariant set. Minimality means every two-sided orbit is dense; strict ergodicity means minimality and exactly one invariant Borel probability. A Toeplitz sequence has, for every coordinate $i$, a positive integer $p$ such that $y_{i+kp}=y_i$ for all $k\in\mathbb Z$. Regularity requires periodic-skeleton densities tending to one along an essential period structure, specified in [@lem-regular].

For $\ell\geq2$, a map $h:A^\ell\to A$ is bipermutative if it is bijective in either endpoint with all other letters fixed. Write $(\eta_hx)_i=h(x_i,\ldots,x_{i+\ell-1})$. A lift always means the entire set $\eta_h^{-1}(Y)$.

::: {.theorem #thm-main title="All lifts over one base" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s1" lean="D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedRegularity.exists_balanced_regular_toeplitz_generator D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedMinimal.balanced_orbit_dense D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedUniqueErgodic.balanced_unique_ergodic D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedLiftSplitting.splitting_conjugacy D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedLiftSplitting.full_lift_not_minimal"}
There is an aperiodic regular Toeplitz subshift $Y\subset A^{\mathbb Z}$, which is strictly ergodic, such that for every $\ell\geq2$ and every bipermutative $h:A^\ell\to A$ there is a homeomorphism

$$
\Theta_h:\eta_h^{-1}(Y)\longrightarrow Y\times A^{\ell-1}
$$

with first coordinate $\eta_h$ and $\Theta_h S=(S\times\mathrm{id})\Theta_h$. In particular, every such entire lift is nonminimal.
:::

The proof proceeds through five steps: construct a nonempty compact base; recognize its tiles and prove minimality; establish regularity and unique ergodicity; trivialize every finite letter action; and recover a local rule as such an action. The final two steps are given in full under “Trivializing finite actions and proving the main result.”

## Construction and recognizability

Set $U_0=0,V_0=1$. For $n\geq0$, put $m_n=(n+1)!$ and define

$$
U_{n+1}=U_n^{2m_n}V_n^{m_n},
$$

$$
V_{n+1}=U_n^{m_n}V_n^{2m_n}.
$$

Their common length satisfies $H_0=1$ and $H_{n+1}=3m_nH_n$. Let $Y_n$ consist of all bi-infinite concatenations of these two words, with every phase modulo $H_n$ allowed. It is a finite union of continuous images of compact concatenation spaces, hence nonempty and compact. Higher words concatenate lower words, so $Y_{n+1}\subseteq Y_n$. Nested compactness gives $Y=\bigcap_{n\geq0}Y_n\ne\varnothing$.

::: {.lemma #lem-tiling title="A continuous unique marked tiling" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s2" status="written-proof" proof="pf-lem-tiling" doi="10.5281/zenodo.23885965" source="Lemma 2" request="https://github.com/the-omega-institute/trureturing-requests/issues/243"}
Every point of $Y_n$ has a unique marked tiling by $U_n,V_n$: both boundaries and types are determined, and the tiling depends continuously on the point. On $Y$, these tilings refine one another.
:::

::: {.proof #pf-lem-tiling}
Level zero is immediate. Suppose level $n$ is unique and refine any level-$(n+1)$ tiling into level-$n$ tiles. Its parent type words are $0^{2m_n}1^{m_n}$ and $0^{m_n}1^{2m_n}$. Transitions $10$ occur exactly at parent starts. Thus the unique lower tiling determines every parent boundary, and the distinct run lengths determine the parent type. This also distinguishes the two parent words and completes the induction. At level one the words are $001,011$.

The marked-tiling space records a phase modulo $H_n$ and a bi-infinite type sequence and is compact. Its reading map to $Y_n$ is continuous and, by uniqueness, bijective. Since $Y_n$ is Hausdorff, this is a homeomorphism; the inverse decoder is continuous. Refining any higher tiling gives a lower tiling of the same point, which must be the unique lower tiling. This is the complete argument of source Lemma 2.
:::

Let $\theta_n(y)\in\mathbb Z/H_n\mathbb Z$ be the origin's position within its current tile. It is continuous and satisfies

$$
\theta_n(Sy)=\theta_n(y)+1.
$$

If $S^py=y$ for $p>0$, then $H_n\mid p$ for every $n$. Since $H_n\to\infty$, no point of $Y$ is periodic.

::: {.lemma #lem-minimal title="Minimality" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s3" lean="D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedMinimal.balanced_orbit_dense"}
The subshift $Y$ is minimal.
:::

::: {.proof #pf-lem-minimal}
For $n\geq1$, $m_n\geq2$, so the type pairs $00,01,11$ occur inside each level-$(n+1)$ word. The pair $10$ occurs across any boundary between two level-$(n+1)$ words, and every level-$(n+2)$ word contains such a boundary. Thus all four neighboring level-$n$ type pairs occur inside every level-$(n+2)$ word.

Take any finite word $w$ occurring in $Y$ and choose $n\geq1$ with $|w|\leq H_n$. An occurrence meets at most two adjacent level-$n$ tiles. Their type pair occurs in every level-$(n+2)$ word, so $w$ occurs in every such word. Consequently its occurrence gaps are bounded in every point. Every orbit meets every nonempty relative cylinder and is dense. This proves source Lemma 3.
:::

## Regularity and unique statistics

Let $D_n=\{0\leq j<H_n:U_n(j)\ne V_n(j)\}$. Comparing aligned thirds gives $|D_0|=1$ and $|D_{n+1}|=m_n|D_n|$, hence $|D_n|/H_n=3^{-n}$.

::: {.lemma #lem-regular title="A regular Toeplitz generator" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s4" lean="D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedRegularity.exists_balanced_regular_toeplitz_generator"}
There is an aperiodic Toeplitz point $y_*\in Y$ generating $Y$, whose periodic-skeleton densities tend to one along an essential period structure.
:::

::: {.proof #pf-lem-regular}
Let $K_n\subset Y_n$ be the nonempty compact set having a level-$n$ boundary at the origin. Refinement gives $K_{n+1}\subset K_n$, so choose $y_*\in\bigcap_nK_n$. Both level-$(n+1)$ words share prefix $U_n^{m_n}$ and suffix $V_n^{m_n}$. Fix $i\in\mathbb Z$ and choose $|i|<H_n$. If $i\geq0$, it lies in the common prefix; if $i<0$, it lies in the preceding tile's common suffix. Its column is therefore periodic with period $H_{n+1}$. Every coordinate is periodic. Aperiodicity was proved above, and minimality gives orbit closure $Y$.

Write $\operatorname{Per}(y_*,p)$ for the coordinates unchanged under every translate by $p$, and let $s_p$ retain the symbols there and have a hole elsewhere. Outside $D_n$, all level-$n$ tiles agree. Thus

$$
\frac{|\operatorname{Per}(y_*,H_n)\cap[0,H_n)|}{H_n}\geq1-3^{-n}.
$$

Counting intervals contain integer coordinates. For $n\geq1$, let $e_n$ be the least positive period of $s_{H_n}$. Since $H_n$ is a period, $e_n\mid H_n$. An $e_n$-periodic coordinate is therefore $H_n$-periodic. Conversely, translating a nonhole symbol of $s_{H_n}$ by multiples of $e_n$ preserves its symbol, so every $H_n$-periodic coordinate is $e_n$-periodic. Hence $s_{e_n}=s_{H_n}$: $e_n$ is essential and has the same skeleton density.

We must also obtain a divisibility structure. If $p\mid r$ and $q$ is a period of $s_r$, then, for a $p$-periodic coordinate $i$, all $i+kp$ lie in the $r$-skeleton with the same symbol. Translating by $q$ preserves those symbols, so $i+q$ is a $p$-periodic coordinate of the same color. Applying the argument with $-q$ preserves holes as well. Thus $q$ is a period of $s_p$. Taking $p=H_n,r=H_{n+1},q=e_{n+1}$ gives $e_n\mid e_{n+1}$.

If the $e_n$ were bounded, the divisibility chain would eventually equal some $e$. Every coordinate belongs to some $H_n$-skeleton, and these skeletons increase with $n$, making all of $y_*$ $e$-periodic, a contradiction. Remove repetitions to obtain a strictly increasing divisibility sequence of essential periods covering every coordinate. Its skeleton densities tend to one by the displayed bound. This proves source Lemma 4, including the essential-period extraction.
:::

::: {.lemma #lem-unique title="A unique invariant probability" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s5" lean="D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedUniqueErgodic.balanced_unique_ergodic"}
The subshift $Y$ has exactly one invariant Borel probability.
:::

::: {.proof #pf-lem-unique}
For existence, take empirical probabilities $N^{-1}\sum_{k=0}^{N-1}\delta_{S^ky}$ along an orbit. Probabilities on the compact metric space have a weakly convergent subsequence. For every continuous $f$, the average of $f\circ S-f$ telescopes to $(f(S^Ny)-f(y))/N\to0$, so any weak limit is invariant.

For uniqueness, let $\mu,\nu$ be invariant. The phase identity forces each of the $H_n$ phase classes to have mass $1/H_n$. Let a cylinder $C$ depend on coordinates $t,\ldots,t+r-1$. Call a phase $j$ bad when $(j+t+a)\bmod H_n\in D_n$ for some $0\leq a<r$. At most $r|D_n|$ phases are bad. On any other phase, all window symbols are independent of tile types, even across boundaries, so the whole phase class lies either inside or outside $C$. The good-phase contributions agree. Each bad-phase contribution lies between zero and the common total mass, giving

$$
|\mu(C)-\nu(C)|\leq r|D_n|/H_n=r3^{-n}.
$$

Fix $r$ and let $n\to\infty$. The probabilities agree on every cylinder; empty-window events ($r=0$) agree automatically. Cylinders form an intersection-stable family generating the Borel sigma-algebra, so probability-measure uniqueness gives $\mu=\nu$. This proves source Lemma 5. Together with minimality, it makes $Y$ strictly ergodic.
:::

## Trivializing finite actions and proving the main result

Fix a nonempty finite set $Q$, let $d=|Q|$, and choose any permutations $\pi_0,\pi_1$. For $w=a_0\cdots a_{r-1}$ define

$$
P(w)=\pi_{a_{r-1}}\cdots\pi_{a_0},\qquad P(\varnothing)=1.
$$

Thus $P(uv)=P(v)P(u)$. Choose $n\geq\max\{1,d\}$. Every permutation of $d$ points has order dividing $d!$, and $d!\mid n!$. Therefore

$$
P(U_n)=P(V_{n-1})^{n!}P(U_{n-1})^{2n!}=1.
$$

Likewise $P(V_n)=1$. Each factor separately is the identity; they are never commuted.

Let $c(y)$ be $P$ of the prefix of the current level-$n$ tile strictly before the origin, taking the empty prefix at a tile start. Continuous decoding makes $c$ continuous. Inside a tile the product rule gives

$$
c(Sy)=\pi_{y_0}c(y).
$$

At a boundary, the left side resets to $1$ and the right side is the whole-tile action, also $1$. Thus the identity holds everywhere. The map $F(y,q)=(y,c(y)^{-1}q)$ is continuous, has continuous inverse $(y,q)\mapsto(y,c(y)q)$, and satisfies

$$
F(Sy,\pi_{y_0}q)=(Sy,c(y)^{-1}q).
$$

It conjugates the finite skew product to $S\times\mathrm{id}$.

Now fix an allowed $h$ and take $Q=A^{\ell-1}$. Given output $a$ and prefix $q=(q_0,\ldots,q_{\ell-2})$, right permutativity determines the unique $b$ with $h(q_0,\ldots,q_{\ell-2},b)=a$. Set

$$
\pi_a(q)=(q_1,\ldots,q_{\ell-2},b).
$$

For $\ell=2$, the right side consists of $b$ alone. Left permutativity uniquely recovers the preceding first bit, so $\pi_a$ is a permutation. From $(y,q)$ these transitions reconstruct a unique $x$ in both directions, with $\eta_hx=y$. Each finite input window needs only a finite output window and $q$, so reconstruction is continuous; coding and taking a prefix are continuous as well. Hence

$$
\gamma(x)=(\eta_hx,x_{[0,\ell-2]})
$$

is a homeomorphism from the entire inverse image to $Y\times Q$, conjugating $S$ to $(y,q)\mapsto(Sy,\pi_{y_0}q)$. Set $\Theta_h=F\circ\gamma$. Its first coordinate remains $\eta_h$. The regularity, aperiodicity and strict ergodicity proved above, together with this conjugacy, prove [@thm-main]. Since $\ell\geq2$ gives $|Q|\geq2$, at least two nonempty invariant clopen slices prevent minimality of the full lift.

## Components and invariant probabilities

::: {.corollary #cor-components title="Exact components and probability simplex" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s6" status="written-proof" proof="pf-cor-components" doi="10.5281/zenodo.23885965" source="Corollary 6" request="https://github.com/the-omega-institute/trureturing-requests/issues/244"}
Every allowed length-$\ell$ complete lift has exactly $2^{\ell-1}$ minimal components. Each is clopen and conjugate to $Y$, hence strictly ergodic. Its invariant probabilities form a simplex with exactly $2^{\ell-1}$ ergodic vertices.
:::

::: {.proof #pf-cor-components}
Under $\Theta_h$, the slices $Y\times\{q\}$ are nonempty and clopen. By minimality of $Y$, every orbit closure is exactly its slice. Thus these are all minimal components, numbering $|A^{\ell-1}|=2^{\ell-1}$. Projection onto $Y$ conjugates each slice to $Y$; denote its unique invariant probability by $\mu_q$.

For any invariant probability $\rho$ on the whole product, set $t_q=\rho(Y\times\{q\})$. These weights are nonnegative and sum to one. If $t_q>0$, the restricted measure divided by $t_q$ is invariant and therefore equals $\mu_q$. If $t_q=0$, the restriction is zero; no division is made. Consequently $\rho=\sum_qt_q\mu_q$. Disjoint slices make the weights unique. Conversely every such convex combination is invariant. This is the finite probability simplex.

If at least two weights are positive, one slice is an invariant set of mass strictly between zero and one, so $\rho$ is not ergodic. If the sole positive weight is one, $\rho=\mu_q$. A unique invariant probability is ergodic: otherwise normalizing its restriction to an invariant set of intermediate mass would give another invariant probability. Thus the ergodic probabilities are exactly the $2^{\ell-1}$ vertices. This proves every clause of source Corollary 6.
:::

::: {.theorem #thm-orbit-count title="Counting orbit closures" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s6" lean="D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedLiftComponents.orbit_closure_family_card"}
For the fixed base above and every allowed $h$, the complete lift has exactly $2^{\ell-1}$ distinct orbit closures.
:::

This separately cites the formal topological count inside [@cor-components]. It makes no probability-simplex assertion.

::: {.theorem #thm-refutation title="Negating universal lift existence" mathesis="collected:kang-jager-2026-universal-permutative-lift-refutation:2:s1" lean="D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedRegularRefutation.result"}
The following assertion is false: every nonempty binary subshift $Z$ whose integer orbits are all dense, whose invariant probability is unique, and which has an aperiodic regular Toeplitz generator admits a bipermutative rule of some length $\ell\geq2$ whose complete lift also has all integer orbits dense.
:::

The counterexample is the same $Y$. This formal statement negates a universal assertion; the explicit conjugacy and its additional structure are stated separately in [@thm-main]. Since strict ergodicity requires minimality, none of the complete lifts is strictly ergodic. By [@cor-components], each also has multiple invariant probabilities.
