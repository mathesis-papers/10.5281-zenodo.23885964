# One sequence system defeats every lift

Can reversing a local rule turn an indivisible binary sequence system into another indivisible system? Haobo Ma and Wenlin Zhang construct **one** nonperiodic system for which every allowed rule, at every window length at least two, produces separate dynamical copies. A rule of length $\ell$ gives exactly $2^{\ell-1}$ copies. Their base is a regular Toeplitz system and is strictly ergodic: it has dense trajectories and exactly one invariant probability law.

This book explains version 2 of [*A negative answer to Kang–Jäger's Question 1.10 on permutative lifts*](https://doi.org/10.5281/zenodo.23885965), by Haobo Ma (Chrono AI, Singapore) and Wenlin Zhang (National University of Singapore and Chrono AI, Singapore). The [statements chapter](statements.md) contains the precise results and complete arguments. Start with an example that needs only addition modulo two.

## Reconstructing an input from adjacent differences

Imagine a row of bits extending infinitely in both directions. One step of time moves the observation point one place to the right: $(Sy)_i=y_{i+1}$. The rule

$$
y_i=x_i+x_{i+1}\pmod 2
$$

outputs whether two adjacent input bits differ. Knowing the output row $y$ and one starting bit $x_0$ determines the entire input, through $x_{i+1}=x_i+y_i\pmod 2$ and the reverse recurrence to the left. There are two choices of $x_0$, hence two inputs above each output. That alone does not separate the dynamics into two worlds: the bit at the observation point usually changes as we shift.

A general rule reads $\ell$ bits. Fix every input except the right endpoint; changing that endpoint must interchange the two possible outputs. Require the same at the left endpoint. This is **bipermutativity**, called “permutativity” in the paper. Given the output and the first $\ell-1$ input bits, the right endpoint condition determines the next bit, and the left endpoint condition lets us reconstruct backwards. The remembered input window has $2^{\ell-1}$ possible states. Can we choose a rule whose evolution links those states into one indivisible system?

## What makes a sequence system indivisible?

A collection $Y$ of allowed rows is a **subshift** if shifting keeps a row allowed and limits obtained by matching longer and longer finite windows remain allowed. It is **minimal** if shifts of each row can approximate every other row. In window language, every allowed finite pattern recurs in every row with bounded gaps.

There is a separate statistical question: how many shift-invariant probability laws describe the system? If exactly one exists, the system is **uniquely ergodic**. Minimality together with unique ergodicity is **strict ergodicity**. The first condition concerns which local views trajectories can reach; the second concerns the uniqueness of their invariant statistics.

Kang and Jäger's Question 1.10 asks whether every such base admits some bipermutative rule of length at least two whose **entire inverse image** retains minimality or strict ergodicity. Choosing one good part of the inverse image does not answer the question. For the base in this paper,

$$
\eta_h^{-1}(Y)\cong Y\times\{0,1\}^{\ell-1},
$$

and shifting becomes $(y,q)\mapsto(Sy,q)$. The label $q$ never changes. Thus length two gives two separate copies, length three gives four, and so on. Each copy is strictly ergodic, while their union is neither minimal nor uniquely ergodic.

## Two increasingly long building blocks

Begin with $U_0=0$ and $V_0=1$. At level $n$ put $m_n=(n+1)!$ and form

$$
U_{n+1}=U_n^{2m_n}V_n^{m_n},
$$

$$
V_{n+1}=U_n^{m_n}V_n^{2m_n}.
$$

An exponent means repeated concatenation. The first pair is $001,011$. The next pair is $U_1^4V_1^2,U_1^2V_1^4$, both of length $18$. Their common length satisfies $H_0=1$ and $H_{n+1}=3m_nH_n$. Keep rows that can be tiled by the appropriate two blocks at **every** level. Each level gives a nonempty closed set, and the sets are nested. Compactness supplies a row in their intersection. This is an infinite-level existence argument, rather than an extrapolation from a few examples.

The boundaries remain readable. At level one, $10$ occurs exactly across a boundary between blocks. At a higher level, temporarily name the lower blocks $0$ and $1$. A parent again consists of a run of zeros followed by a run of ones, so a $10$ transition identifies its start. The different run lengths identify its type. Induction gives a unique tiling at every level, and a sufficiently long finite view determines the origin's position within a tile.

This rules out global periodicity. If shifting by a positive integer $p$ restored a row, it would restore its recognizable position at every level. Thus every $H_n$ would divide $p$. The lengths grow without bound, so no such $p$ exists.

For minimality, notice that, for $n\geq1$, all four neighboring type pairs $00,01,10,11$ occur inside every level-$(n+2)$ block. Any window of length at most $H_n$ meets at most two level-$n$ blocks. It therefore appears in every sufficiently large block, giving a uniform bound on its return gaps.

## Almost every column agrees, yet no global period exists

Align $U_n$ above $V_n$ and call the set of differing columns $D_n$. At level one, only the middle column differs. In the next construction, the first and last thirds agree between the two parent words; only the middle third retains copies of the old disagreements. Hence

$$
|D_{n+1}|=m_n|D_n|,\qquad
\frac{|D_n|}{H_n}=3^{-n}.
$$

The disagreement fractions are $1,1/3,1/9,\ldots$. In every other column, the symbol is independent of which tile type is present.

Choose a row with a tile boundary at the origin at every level. Each fixed coordinate to the right eventually lies in a common prefix of the parent blocks; each coordinate to the left eventually lies in a common suffix. That coordinate then repeats periodically. This is the **Toeplitz** property: each position has its own period, although the entire row has no single period. The periodic positions occupy a fraction tending to one, which gives **regularity**. The precise proof also extracts the required sequence of essential periods.

Why are the invariant statistics unique? Every invariant probability gives equal weight $1/H_n$ to the $H_n$ possible positions within a tile. A window of width $r$ can distinguish tile types only if it touches a disagreement column. There are at most $r|D_n|$ such starting positions. Any two invariant probabilities $\mu,\nu$ therefore satisfy, for a window event $C$,

$$
|\mu(C)-\nu(C)|\leq r3^{-n}.
$$

Fix the window first, then let $n$ increase. The bound tends to zero. Agreement on every finite window determines the entire Borel probability measure. The order matters: we have not claimed a uniform vanishing bound for windows of all lengths at once.

## Why factorials defeat every finite memory

Each output bit $a$ acts as a permutation $\pi_a$ of the finite set $Q$ of remembered input windows. Reading a word means performing its permutations in order. These permutations need not commute: swapping two cards and then rotating three is usually different from doing those operations in reverse.

But every permutation of $d$ objects has order dividing $d!$. Choose a level $n\geq\max\{1,d\}$. The $n!$ repetitions in that level make **each factor separately** the identity. Both complete tiles act trivially. No step interchanges the two factors.

Now change the state label. Let $c(y)$ be the accumulated permutation from the start of the current tile up to, but excluding, the observation point. Replace the old state $q$ by $c(y)^{-1}q$. Reading the next bit multiplies both the state and the accumulated permutation on the left by the same $\pi_{y_0}$, so the new label stays fixed. At a boundary, the accumulation resets to the identity, and the whole-tile action is also the identity, so there is no discontinuity. Recognizable tilings make the relabeling continuous and reversible. This is the mechanism behind the separate copies.

::: {.film src="001-fixed-label"}
From the two starting bits of XOR to factorial cancellation: how one construction leaves a label that never changes.
:::

## What the answer adds, and what supports it

Kang and Jäger had already shown that a fixed rule can be defeated by a suitably chosen base, and that every Toeplitz base has at least one failing rule. This paper chooses **one base first, before every length and every rule**. The finite-state representation comes from Kang and Jäger; the coboundary obstruction belongs to the framework developed by Berthé and collaborators. Positive results for other specially chosen bases remain valid.

The current formal sources cover this concrete base's minimality, regularity, unique ergodicity, full-lift conjugacy, and orbit-closure count. The [statements chapter](statements.md) distinguishes their precise scopes. Continuity of the inverse decoder on every finite-level tiling space and the complete probability-simplex statement retain written proofs and linked contribution requests. The formal negation of a universal existence assertion is also stated separately from the explicit construction.

Probability can be distributed freely between copies. With two copies, half the mass can sit on each, or all of it can sit on one. Only the latter choices are ergodic probabilities. This statistical description is as exact as the component count. The paper settles the universal existence question; it does not classify all other bases that admit minimal lifts.

::: {.slides src="seminar"}
An aligned Chinese–English academic talk with speaker notes: quantifiers, block construction, the fixed label, and the scope of the evidence.
:::

Continue with the [complete proofs](statements.md) and [sources and contributions](sources.md).
