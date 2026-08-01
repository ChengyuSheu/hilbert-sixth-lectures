# Hilbert's Sixth Problem — Lectures & Visualizations

An **unofficial, section-by-section teaching companion** to

> Yu Deng, Zaher Hani, Xiao Ma,
> *Hilbert's sixth problem: derivation of fluid equations via Boltzmann's kinetic theory*,
> [arXiv:2503.01800](https://arxiv.org/abs/2503.01800) (3 March 2025), 48 pp., 5 figures.
> Accepted by *Annals of Mathematics* (November 2025).

and its 200+ page engine room,

> Yu Deng, Zaher Hani, Xiao Ma,
> *Long time derivation of the Boltzmann equation from hard sphere dynamics*,
> [arXiv:2408.07818](https://arxiv.org/abs/2408.07818).

The goal of this repository is narrow and specific: **take the methodology apart, isolate each moving part into a single self-contained lecture plus a single interactive visualization, and state precisely where in the original papers that part lives.**

Every lecture opens with a `Maps to:` header naming the exact section, definition, theorem, or proposition it expounds, and a `Fidelity:` line saying whether the content is quoted, faithfully paraphrased, or deliberately simplified. The full cross-reference table is in **[MAPPING.md](MAPPING.md)**.

---

## The one-paragraph version

Hilbert's sixth problem asks for the limiting passage from the atomistic picture to the laws of continua. The program has three levels — **Newton → Boltzmann → Euler/Navier–Stokes** — and the first arrow was the bottleneck. Lanford (1975) established it only for a fraction of one mean free time: far too short for a fluid, which needs *many* collisions per particle to relax to local equilibrium. Deng–Hani–Ma push the first arrow out to times long enough that the second arrow can be taken, by propagating a **long-time cumulant ansatz** whose error terms are indexed by Feynman-diagram-like graphs called **collision history molecules**, and by proving a combinatorial theorem that every such molecule can be **cut** into elementary pieces whose integrals are explicitly bounded. On the torus the classical geometric input (the Burago–Ferleger–Kononenko collision bound) fails, and the new ingredient is the **long bond**: a bond whose two endpoint collision times are $O(1)$ apart, which buys a much stronger $\varepsilon$-gain and is fed back into a recursive cutting algorithm.

---

## Lectures

Each lecture is a standalone Markdown file (GitHub renders the LaTeX). Each has exactly one companion visualization.

| # | Lecture | Visualization | Primary source |
|---|---------|---------------|----------------|
| 00 | [Hilbert's sixth problem and the three-level program](lectures/00-hilberts-sixth-problem.md) | [Three levels](viz/00-three-levels.html) | §1.1, Fig. 1 |
| 01 | [Hard sphere dynamics](lectures/01-hard-sphere-dynamics.md) | [Hard spheres on the torus](viz/01-hard-spheres-torus.html) | §1.2.1, Def. 1.1, Fig. 2 |
| 02 | [The Boltzmann–Grad scaling](lectures/02-boltzmann-grad-scaling.md) | [Grad limit dial](viz/02-boltzmann-grad.html) | §1.2.2 |
| 03 | [Grand canonical ensemble and correlation functions](lectures/03-grand-canonical-ensemble.md) | [Ensemble & marginals](viz/03-ensemble-marginals.html) | §1.2.2, Def. 1.3 |
| 04 | [The Boltzmann equation and its collision operator](lectures/04-boltzmann-equation.md) | [Collision operator](viz/04-collision-operator.html) | §1.2.3, Def. 1.4 |
| 05 | [Molecular chaos, propagation of chaos, and Theorem 1](lectures/05-chaos-and-theorem-1.md) | [Chaos & cumulants](viz/05-chaos-cumulants.html) | §1.2.4, Theorem 1 |
| 06 | [Time scales: Lanford's barrier and $(\log\lvert\log\varepsilon\rvert)^{1/2}$](lectures/06-time-scales.md) | [Time-scale ladder](viz/06-time-scales.html) | §1.2.4, §1.3 |
| 07 | [BBGKY, Duhamel expansion, and collision trees](lectures/07-bbgky-and-collision-trees.md) | [Collision tree](viz/07-collision-tree.html) | [DHM-2408] §2–4 |
| 08 | [Cumulants and the long-time cumulant ansatz](lectures/08-cumulants-and-ansatz.md) | [Cumulant layers](viz/08-cumulant-layers.html) | [DHM-2408] §2 |
| 09 | [Collision history molecules](lectures/09-molecules.md) | [Molecule explorer](viz/09-molecule-explorer.html) | §2.1; [DHM-2408] |
| 10 | [Cutting operations and elementary molecules](lectures/10-cutting-operations.md) | [Cutting sandbox](viz/10-cutting-sandbox.html) | §2.2, §3.1, Def. 2.4/2.6, Prop. 3.2 |
| 11 | [Excess and the main combinatorial proposition](lectures/11-excess-and-proposition-3-8.md) | [Excess ledger](viz/11-excess-ledger.html) | §3.2, §3.3, Def. 3.6, Prop. 3.8 |
| 12 | [Why the torus is hard, and what a long bond buys](lectures/12-torus-and-long-bonds.md) | [Torus recollisions](viz/12-torus-recollisions.html) | §1.4.1 |
| 13 | [The new cutting algorithm](lectures/13-the-new-algorithm.md) | [Algorithm walkthrough](viz/13-algorithm-walkthrough.html) | §1.4.2, §4.1, §4.2 |
| 14 | [Hydrodynamic limits: incompressible Navier–Stokes–Fourier](lectures/14-navier-stokes-fourier.md) | [Hydrodynamic limit](viz/14-hydrodynamic-limit.html) | §1.3.1, Theorem 2 |
| 15 | [Hydrodynamic limits: compressible Euler](lectures/15-compressible-euler.md) | [Hilbert expansion](viz/15-hilbert-expansion.html) | §1.3.2, Theorem 3 |
| 16 | [What is and is not proved: scope, critique, open problems](lectures/16-scope-and-critique.md) | — | §1.1, §1.5; [arXiv:2504.06297](https://arxiv.org/abs/2504.06297) |

**[Open the visualization index →](index.html)** (or browse `viz/`)

---

## Suggested paths through the material

- **"I have one hour."** 00 → 01 → 04 → 06 → 14. You will understand *what* was proved and *why the time scale is the whole game*, without touching the combinatorics.
- **"I want the proof architecture."** 05 → 07 → 08 → 09 → 10 → 11 → 13. This is the actual chain of reduction: cumulant ansatz → Duhamel terms → molecules → cutting → excess bookkeeping → algorithm.
- **"I care about the fluid end."** 00 → 06 → 14 → 15 → 16.
- **"I'm refereeing the physics."** 02 → 06 → 16.

---

## Running the visualizations

No build step, no package manager, no server required.

```bash
git clone https://github.com/ChengyuSheu/hilbert-sixth-lectures.git
```

Then open `index.html` in any browser, or double-click any file in `viz/`. Each visualization is one self-contained HTML file (vanilla JS + canvas/SVG). KaTeX is loaded from a CDN for the formula panels; the simulations themselves work offline without it.

To serve over GitHub Pages, enable Pages on the `main` branch root — `index.html` is the entry point.

---

## Conventions used throughout

| Symbol | Meaning |
|---|---|
| $d\in\{2,3\}$ | dimension; the domain is the torus $\mathbb{T}^d$ |
| $N$, $\varepsilon$ | particle number, particle diameter |
| $\alpha$ | collision rate parameter, $\mathbb{E}(N)\cdot\varepsilon^{d-1}\approx\alpha$ |
| $z_j=(x_j,v_j)$ | position and velocity of particle $j$ |
| $\mathcal{D}_N$ | non-overlapping configuration domain |
| $f_s$ | $s$-particle correlation function |
| $n(t,x,v)$ | solution of the Boltzmann equation |
| $E_H$ | cumulant associated to the particle set $H$ |
| $\tau$, $L$ | time-layer width, number of layers |
| $\delta$ | hydrodynamic (fluctuation) parameter |

Full table with paper cross-references: **[GLOSSARY.md](GLOSSARY.md)**.

---

## Status, honesty, and how to use this

This is **exposition, not a substitute for the papers.** Where a statement is quoted it is marked as such; where it is simplified — and several of the combinatorial statements are *heavily* simplified, because the honest versions run to dozens of pages — the lecture says so explicitly in its `Fidelity:` line and in a `Simplifications` section at the end.

If you find a mis-mapping, a wrong section number, or a simplification that has crossed the line into being *false* rather than *incomplete*, please open an issue. That is the failure mode this repository most wants to avoid.

The original paper is distributed under CC BY 4.0. See **[SOURCES.md](SOURCES.md)** for the full bibliography, including the Bourbaki-style exposition and the published critique.

## License

- Prose and lecture notes: [CC BY 4.0](LICENSE-CC-BY-4.0.md)
- Code (visualizations, assets): [MIT](LICENSE-MIT.md)
