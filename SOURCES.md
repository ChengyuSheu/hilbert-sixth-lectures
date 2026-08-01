# Sources

## Primary

1. **Yu Deng, Zaher Hani, Xiao Ma**, *Hilbert's sixth problem: derivation of fluid equations via Boltzmann's kinetic theory*, [arXiv:2503.01800](https://arxiv.org/abs/2503.01800), submitted 3 March 2025. 48 pp., 5 figures. math.AP, math-ph. MSC: 35Q20, 76P05, 82C40. Licensed **CC BY 4.0**.
   Accepted by *Annals of Mathematics*, November 2025; the authors subsequently produced a rewritten, more readable version, also to appear.

2. **Yu Deng, Zaher Hani, Xiao Ma**, *Long time derivation of the Boltzmann equation from hard sphere dynamics*, [arXiv:2408.07818](https://arxiv.org/abs/2408.07818), August 2024. This is reference **[26]** in the paper above, and contains the molecule formalism, the cumulant ansatz, and cutting algorithms I and II. Everything [H6] §2 "summarizes" lives here.

## Exposition and secondary literature

3. *Derivation of the Boltzmann equation from hard-sphere dynamics (after Y. Deng, Z. Hani, and X. Ma)*, [arXiv:2602.04407](https://arxiv.org/abs/2602.04407) — a survey-style exposition of the argument.
4. **Deng, Hani**, *Hilbert's Sixth Problem: Particles and Waves*, in *Proceedings of the ICM 2026*, Volume 5: Invited Lectures (Sections 9–11), [SIAM](https://epubs.siam.org/doi/abs/10.1137/25M1804406).
5. *Are we solving Hilbert's sixth problem?*, [MaddMaths!](https://maddmaths.simai.eu/divulgazione/are-we-solving-hilberts-sixth-problem/) — accessible discussion of what the result does and does not settle.
6. *Lofty Math Problem Called Hilbert's Sixth Closer to Being Solved*, [Scientific American](https://www.scientificamerican.com/article/lofty-math-problem-called-hilberts-sixth-closer-to-being-solved/).
7. *Yu Deng Wins the Fields Medal 2026*, [Quanta Magazine](https://www.quantamagazine.org/yu-deng-wins-the-fields-medal-2026-for-his-work-on-the-random-data-problem-20260723/). Note: the medal citation is framed around Deng's broader work on random data and wave turbulence, which shares the diagrammatic machinery used here — it is not a citation for this paper alone.
8. [Hilbert's sixth problem](https://en.wikipedia.org/wiki/Hilbert%27s_sixth_problem), Wikipedia — for the original 1900 statement and its history.

## Critique

9. **Shan Gao**, *Comment on "Hilbert's Sixth Problem: Derivation of Fluid Equations via Boltzmann's Kinetic Theory" by Deng, Hani, and Ma*, [arXiv:2504.06297](https://arxiv.org/abs/2504.06297), April 2025. Argues that (i) the vanishing volume fraction $N\varepsilon^d\to0$ confines the result to a dilute gas rather than a dense continuum, and (ii) molecular chaos is questionable in fluid-like regimes. Discussed in [Lecture 16](lectures/16-scope-and-critique.md). These are objections to physical interpretation; the comment does not allege a mathematical error.

## Background: the classical chain

10. **O. E. Lanford III**, *Time evolution of large classical systems*, in *Dynamical Systems, Theory and Applications*, Lecture Notes in Physics 38, Springer, 1975, 1–111. The original short-time derivation.
11. **I. Gallagher, L. Saint-Raymond, B. Texier**, *From Newton to Boltzmann: hard spheres and short-range potentials*, Zurich Lectures in Advanced Mathematics, EMS, 2013. The modern, complete treatment of Lanford's theorem.
12. **C. Cercignani, R. Illner, M. Pulvirenti**, *The Mathematical Theory of Dilute Gases*, Applied Mathematical Sciences 106, Springer, 1994.
13. **H. Grad**, *On the kinetic theory of rarefied gases*, Comm. Pure Appl. Math. 2 (1949), 331–407. Source of the Boltzmann–Grad scaling.
14. **L. Boltzmann**, *Weitere Studien über das Wärmegleichgewicht unter Gasmolekülen*, 1872. The equation and the $H$-theorem.

## Background: kinetic → fluid

15. **C. Bardos, F. Golse, C. D. Levermore**, *Fluid dynamic limits of kinetic equations*, J. Statist. Phys. 63 (1991) and Comm. Pure Appl. Math. 46 (1993). The BGL program.
16. **F. Golse, L. Saint-Raymond**, *The Navier–Stokes limit of the Boltzmann equation for bounded collision kernels*, Invent. Math. 155 (2004). Incompressible NSF from renormalized solutions.
17. **R. E. Caflisch**, *The fluid dynamic limit of the nonlinear Boltzmann equation*, Comm. Pure Appl. Math. 33 (1980). Compressible Euler via truncated Hilbert expansion — the method behind [H6] Theorem 3.

## Background: long-time and near-equilibrium results preceding [H6]

18. **T. Bodineau, I. Gallagher, L. Saint-Raymond, S. Simonella**, works on the fluctuation theory of hard spheres near equilibrium, the long-time derivation of the linear and linearized Boltzmann equations, and the derivation of Brownian motion. These established long-time validity in the *near-equilibrium / linear* setting; [H6] and [LT] remove the linearity restriction.

## Geometric input

19. **D. Burago, S. Ferleger, A. Kononenko**, *Uniform estimates on the number of collisions in semi-dispersing billiards*, Ann. of Math. 147 (1998), 695–708. The collision bound that holds in $\mathbb{R}^d$ and **fails on $\mathbb{T}^d$** — the reason long bonds had to be invented. See [Lecture 12](lectures/12-torus-and-long-bonds.md).

## How to cite this repository

This repository is unofficial exposition. Cite the papers, not these notes. If you want to point at the notes anyway:

```bibtex
@misc{hilbert-sixth-lectures,
  title  = {Hilbert's Sixth Problem --- Lectures \& Visualizations},
  note   = {Unofficial teaching companion to arXiv:2503.01800},
  year   = {2026},
  url    = {https://github.com/ChengyuSheu/hilbert-sixth-lectures}
}
```
