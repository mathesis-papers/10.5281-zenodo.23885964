# A negative answer to Kang–Jäger's Question 1.10 on permutative lifts

**Authors:** Haobo Ma, Wenlin Zhang

We answer Kang–Jäger's Question 1.10 (arXiv:2609.01140v1) negatively, including its strictly ergodic and Toeplitz versions. We construct one aperiodic regular Toeplitz subshift over the binary alphabet such that, for every permutative block code of every length ell >= 2, the entire inverse image is conjugate over the base to the product with the identity on 2^(ell-1) points. Each lift therefore has exactly 2^(ell-1) clopen strictly ergodic components. The construction uses recognizable equal-length words with factorial repetition counts: these annihilate every finite permutation action, while the proportion of columns on which the two words differ is exactly 3^(-n).

- PDF: [frozen public file](paper.pdf)
- DOI: [https://doi.org/10.5281/zenodo.23885965](https://doi.org/10.5281/zenodo.23885965)
- Concept DOI: [https://doi.org/10.5281/zenodo.23885964](https://doi.org/10.5281/zenodo.23885964)
- License: CC-BY-4.0
- Version: 2
- Mathesis record: [kang-jager-2026-universal-permutative-lift-refutation](https://mathesis-omega-research.apps.chrono-ai.fun/papers/kang-jager-2026-universal-permutative-lift-refutation?version=2)

## How to cite

Haobo Ma, Wenlin Zhang (2026). A negative answer to Kang–Jäger's Question 1.10 on permutative lifts. Mathesis, version 2. https://doi.org/10.5281/zenodo.23885965

## Statement progress

| Statement | Formalization status | Source | Verification basis |
|---|---|---|---|
| Theorem (s1) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/fd1633144086085a16f35c8171e2f4b6186a6fbb/D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedRegularRefutation.lean) | No public receipt |
| Lemma (s2) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/fd1633144086085a16f35c8171e2f4b6186a6fbb/D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedRegularRefutation.lean) | No public receipt |
| Lemma (s3) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/fd1633144086085a16f35c8171e2f4b6186a6fbb/D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedRegularRefutation.lean) | No public receipt |
| Lemma (s4) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/fd1633144086085a16f35c8171e2f4b6186a6fbb/D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedRegularRefutation.lean) | No public receipt |
| Lemma (s5) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/fd1633144086085a16f35c8171e2f4b6186a6fbb/D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedRegularRefutation.lean) | No public receipt |
| Corollary (s6) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/fd1633144086085a16f35c8171e2f4b6186a6fbb/D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedRegularRefutation.lean) | No public receipt |

## Contributions

Original authors are listed above. Formalization contributors and attribution are retained in `formalization/nodes.json`; repository pull requests do not confer verification or credit. Submit formalization attempts through the Mathesis attempt path described in [CONTRIBUTING.md](CONTRIBUTING.md).

<!-- Mathesis generated repository guide; refresh with paper.py front. -->

## Reading and materials

[Paper site](https://papers.trureturing.org/10.5281-zenodo.23885964/) · [Frozen PDF](paper.pdf) · [Citation](CITATION.cff)

[中文阅读](https://papers.trureturing.org/10.5281-zenodo.23885964/kang-jager-2026-universal-permutative-lift-refutation/zh/) · [Read in English](https://papers.trureturing.org/10.5281-zenodo.23885964/kang-jager-2026-universal-permutative-lift-refutation/en/)

[Slides](https://papers.trureturing.org/10.5281-zenodo.23885964/kang-jager-2026-universal-permutative-lift-refutation/slides/) ([sources](books/kang-jager-2026-universal-permutative-lift-refutation/slides/)) · [Videos](https://papers.trureturing.org/10.5281-zenodo.23885964/kang-jager-2026-universal-permutative-lift-refutation/films/) ([sources](books/kang-jager-2026-universal-permutative-lift-refutation/films/))

These are publication routes; available built materials are inventoried in [mathesis-materials.json](https://papers.trureturing.org/10.5281-zenodo.23885964/mathesis-materials.json).

## Book and formalization

Catalog formalization status above is separate from the statement comparisons below. A nearby declaration does not verify the complete written result.

| Book result | Comparison with formal base | Compared declaration |
|---|---|---|
| `thm-main` | same | `D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedLiftSplitting.splitting_conjugacy` |
| `lem-tiling` | variant | `D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedSubshift.balancedReadTiling_injective` |
| `lem-minimal` | same | `D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedMinimal.balanced_orbit_dense` |
| `lem-regular` | same | `D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedRegularity.exists_balanced_regular_toeplitz_generator` |
| `lem-unique` | same | `D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedUniqueErgodic.balanced_unique_ergodic` |
| `cor-components` | variant | `D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedLiftComponents.orbit_closure_family_card` |
| `thm-orbit-count` | same | `D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedLiftComponents.orbit_closure_family_card` |
| `thm-refutation` | same | `D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedRegularRefutation.result` |

Book stage: **complete**; 0 pending claims. [Statement comparisons](.mathesis/review.json).

## Repository map

| Zone | Location |
|---|---|
| Paper record | `paper.json`, `CITATION.cff`, `paper.pdf`, `manuscript/`, `formalization/nodes.json`, `LICENSES/`, `.mathesis/` |
| Content | `books/kang-jager-2026-universal-permutative-lift-refutation/`: Chinese/English text, figures, visualizations, videos, slides, assets |
| Machinery | Upstream and layer managed paths; update with `tbook template update` |
| Repository front | This README, changelog, contribution guide, licence, project/site/pin configuration, `template.d/` |

See [the enforced layout](docs/layer-mathesis/LAYOUT.md). Preparation run records and built outputs stay outside the committed tree.
