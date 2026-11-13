# A negative answer to Kang–Jäger's Question 1.10 on permutative lifts

Haobo Ma (ChronoAI Pte Ltd, Singapore) and Wenlin Zhang (National University of Singapore; ChronoAI Pte Ltd, Singapore), November 1, 2026.

## Build

The single main source is `note.tex`. Its bibliography is inline; no external bibliography, figure, generated table, or shell escape is needed.

Build with Tectonic 0.17.0:

```sh
tectonic --untrusted note.tex
```

Alternatively, use a standard LaTeX installation with `lmodern`, `amsmath`, `amssymb`, `amsthm`, `geometry`, `microtype`, and `hyperref`:

```sh
pdflatex -no-shell-escape -interaction=nonstopmode -halt-on-error note.tex
pdflatex -no-shell-escape -interaction=nonstopmode -halt-on-error note.tex
```

BibTeX is not needed because the bibliography is included in the main source.

## Reproduce the finite controls

Only Python's standard library is needed (Python 3.10 or later):

```sh
python3 check.py > actual-check-results.json
cmp actual-check-results.json check-results.json
```

These are bounded exact controls, not a finite reduction of the infinite theorem. The all-level proof is in the note. The checker generates words only through level four, checks ordered-pair recurrence, detects parent boundaries, and checks noncommuting finite permutation holonomies. It also covers every binary bipermutative local rule of lengths two through five; its internal holonomy recursion does not expand long words.

## Claim and source

The primary problem is Question 1.10 in Kang and Jäger, arXiv:2609.01140v1, September 1, 2026:

https://arxiv.org/html/2609.01140v1#S1.Thmdefinition10

One binary aperiodic regular Toeplitz base works simultaneously for all allowed code lengths. Its whole lift under a length-ell code is conjugate over the base to the base shift times the identity on 2^(ell-1) points. This settles the minimal, strictly ergodic, Toeplitz-minimal and Toeplitz-strictly-ergodic universal existence alternatives negatively. It does not negate the source's positive theorems for other bases.

Formal declarations:

https://github.com/the-omega-institute/trureturing/blob/fd1633144086085a16f35c8171e2f4b6186a6fbb/D5/S1/Dynamics/Symbolic/PermutativeLifts/UniversalRefutation.lean

https://github.com/the-omega-institute/trureturing/blob/fd1633144086085a16f35c8171e2f4b6186a6fbb/D5/S1/Dynamics/Symbolic/PermutativeLifts/BalancedRegularRefutation.lean

The note contains complete written proofs of the construction, conjugacy, exact component count and invariant-probability simplex. `UniversalRefutation.result` proves the negation of the general minimal-existence claim; `BalancedRegularRefutation.result` proves the negation of the regular Toeplitz strictly ergodic branch. The checker supplies the finite exact controls described above. No claim of worldwide priority is made. The general coboundary mechanism is attributed to existing literature.

## License

The note, accompanying explanatory material, and checker are provided under CC BY 4.0, with attribution to Haobo Ma and Wenlin Zhang. Bibliographic references and linked third-party material retain their own licenses; that material is not redistributed in this archive.

https://creativecommons.org/licenses/by/4.0/
