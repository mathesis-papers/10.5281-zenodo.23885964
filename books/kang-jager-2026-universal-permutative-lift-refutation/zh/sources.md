# 文献与贡献

本讲解及其媒体针对同一篇公开论文的第 2 版，采用 CC BY 4.0 许可。数学内容限于论文结果及明确指出的推论。

## 论文与前人工作

1. Haobo Ma 与 Wenlin Zhang，*A negative answer to Kang–Jäger’s Question 1.10 on permutative lifts*，第 2 版（2026）。[版本 DOI：10.5281/zenodo.23885965](https://doi.org/10.5281/zenodo.23885965)。第 1 节陈述主定理，第 2–4 节给出构造与完整书面证明。[概念记录：10.5281/zenodo.23885964](https://doi.org/10.5281/zenodo.23885964)。
2. Zeyu Kang 与 Tobias Jäger，*On lifts of strictly ergodic subshifts by permutative sliding block codes*，[arXiv:2609.01140v1](https://arxiv.org/html/2609.01140v1)，2026 年 9 月 1 日。Question 1.10 为原问题；Proposition 1.1 与 Theorem 1.3 给出有限斜积表示；Theorem 1.9(b),(c)、Proposition 6.12 与 Theorem 6.11 给出较早的非极小性结果；Theorem 1.9(a),(d) 记录对照的正面构造。
3. Valérie Berthé、Herman Goulet-Ouellet、Carl-Fredrik Nyberg Brodda、Dominique Perrin 与 Karl Petersen，*Density of group languages in shift spaces*，[arXiv:2403.17892v3](https://arxiv.org/html/2403.17892v3)，2026 年 6 月 10 日。Definition 7.3、Proposition 7.4 与 Theorem 7.5 讨论余边界映射及其与极小性的关系。
4. G. A. Hedlund，*Endomorphisms and automorphisms of the shift dynamical system*，Mathematical Systems Theory **3**（1969），320–375。[10.1007/BF01691062](https://doi.org/10.1007/BF01691062)。第 6 节提供局部规则的背景。
5. Tomasz Downarowicz，*Survey of odometers and Toeplitz flows*，Contemporary Mathematics **385**（2005），7–37。[10.1090/conm/385/07188](https://doi.org/10.1090/conm/385/07188)。用于了解 Toeplitz 动力学与正则性背景。

## 如何阅读形式化证据

[精确陈述与完整证明](statements.md)逐项链接形式化源码。[@thm-main] 的显式构造由正则生成元、极小性、唯一概率和提升分裂的结论共同支持；单列的 [@thm-refutation] 否定普遍存在命题。[@thm-orbit-count] 覆盖 [@cor-components] 的拓扑计数部分，后者的概率分类保留该处的完整书面证明。

论文对初始积木层和长度二至五的二进制规则进行了有限检查。它们用于检查有限情形，不是无限层证明的前提；有限实验不能证明所有长度的结论。

## 参与剩余形式化

- [每个有限层铺法空间的译码连续性](https://github.com/the-omega-institute/trureturing-requests/issues/243)：复用已有的唯一读取映射和紧铺法空间，将逆映射连续性表述到整个有限层空间。
- [分裂提升的不变概率与遍历顶点](https://github.com/the-omega-institute/trureturing-requests/issues/244)：复用已有共轭、分支计数和底空间的唯一不变概率，形式化带权测度描述，包括零权重情形。

请在对应共享请求中协调数学范围，在自己的 fork 中准备聚焦分支，并依照[上游 trureturing dev 的贡献规则](https://github.com/the-omega-institute/trureturing/blob/dev/docs/CONTRIBUTING.md)直接提交 PR。论文原作者的数学贡献与形式证明贡献分别署名。

<section hidden="hidden">

```{=typst}
#pagebreak()
```

</section>
