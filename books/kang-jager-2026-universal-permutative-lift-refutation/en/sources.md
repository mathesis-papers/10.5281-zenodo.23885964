# Sources and contributions

The explanation and media concern one public paper version, licensed CC BY 4.0. They introduce no additional mathematical claim beyond the paper and the explicitly identified consequences.

## Paper and earlier work

1. Haobo Ma and Wenlin Zhang, *A negative answer to Kang–Jäger’s Question 1.10 on permutative lifts*, version 2 (2026). [Version DOI: 10.5281/zenodo.23885965](https://doi.org/10.5281/zenodo.23885965). Section 1 states the main theorem; Sections 2–4 give the construction and complete written proofs. The concept record is [10.5281/zenodo.23885964](https://doi.org/10.5281/zenodo.23885964).
2. Zeyu Kang and Tobias Jäger, *On lifts of strictly ergodic subshifts by permutative sliding block codes*, [arXiv:2609.01140v1](https://arxiv.org/html/2609.01140v1), 1 September 2026. Question 1.10 is the original problem. Proposition 1.1 and Theorem 1.3 provide the finite skew-product representation. Theorem 1.9(b),(c), Proposition 6.12 and Theorem 6.11 give earlier nonminimality results; Theorem 1.9(a),(d) records contrasting positive constructions.
3. Valérie Berthé, Herman Goulet-Ouellet, Carl-Fredrik Nyberg Brodda, Dominique Perrin, and Karl Petersen, *Density of group languages in shift spaces*, [arXiv:2403.17892v3](https://arxiv.org/html/2403.17892v3), 10 June 2026. Definition 7.3, Proposition 7.4 and Theorem 7.5 develop cobounding maps and their relation to minimality.
4. G. A. Hedlund, *Endomorphisms and automorphisms of the shift dynamical system*, Mathematical Systems Theory **3** (1969), 320–375. [10.1007/BF01691062](https://doi.org/10.1007/BF01691062). Section 6 gives background on local rules.
5. Tomasz Downarowicz, *Survey of odometers and Toeplitz flows*, Contemporary Mathematics **385** (2005), 7–37. [10.1090/conm/385/07188](https://doi.org/10.1090/conm/385/07188). Background for Toeplitz dynamics and regularity.

## Reading the formal evidence

The [statements chapter](statements.md) links each formal result to its precise source. The explicit construction in [@thm-main] is supported jointly by regular-generator, minimality, unique-probability and splitting results. The separate [@thm-refutation] negates the universal existence assertion. The formal [@thm-orbit-count] covers the topological count in [@cor-components]; the latter's probability classification has the written proof given there.

The note’s finite checks of early word levels and binary rules of lengths two through five are illustrations and checks of finite cases. They are not premises of the all-level proof. No finite experiment proves the statement for every rule length.

## Contribute to the remaining formal statements

- [Continuity of the marked decoder on every finite-level tiling space](https://github.com/the-omega-institute/trureturing-requests/issues/243): reuse the existing unique reading map and compact marked-tiling spaces. The requested step extends inverse continuity to the whole finite-level space.
- [Invariant probabilities and ergodic vertices of the split lift](https://github.com/the-omega-institute/trureturing-requests/issues/244): reuse the existing conjugacy, component count and unique base probability, then formalize the weighted-measure description, including zero weights.

Coordinate mathematical scope on the relevant shared request. Prepare a focused branch in your own fork and submit a PR directly to [upstream trureturing dev](https://github.com/the-omega-institute/trureturing/blob/dev/docs/CONTRIBUTING.md), following its current contribution and admission rules. The original paper's authorship and the formal proof contribution are separate credits.

<section hidden="hidden">

```{=typst}
#pagebreak()
```

</section>
