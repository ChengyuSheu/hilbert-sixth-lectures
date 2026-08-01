# Precise mapping: repository → original sources

This is the reference table this repository exists for. Every lecture and every visualization is traced to the exact location in the source material that it expounds, together with an honest statement of how faithful the treatment is.

## Source keys

| Key | Reference |
|---|---|
| **[H6]** | Deng, Hani, Ma, *Hilbert's sixth problem: derivation of fluid equations via Boltzmann's kinetic theory*, [arXiv:2503.01800](https://arxiv.org/abs/2503.01800), 48 pp. Accepted, *Annals of Mathematics*, Nov 2025. |
| **[LT]** | Deng, Hani, Ma, *Long time derivation of the Boltzmann equation from hard sphere dynamics*, [arXiv:2408.07818](https://arxiv.org/abs/2408.07818). This is reference **[26]** inside [H6]. |
| **[GSRT]** | Gallagher, Saint-Raymond, Texier, *From Newton to Boltzmann: hard spheres and short-range potentials*, EMS 2013. |
| **[L75]** | Lanford, *Time evolution of large classical systems*, 1975. |
| **[C]** | Gao, *Comment on "Hilbert's Sixth Problem…"*, [arXiv:2504.06297](https://arxiv.org/abs/2504.06297). |

## Fidelity codes

| Code | Meaning |
|---|---|
| **Q** | Statement is quoted or transcribed essentially verbatim from the source (notation normalized). |
| **F** | Faithful paraphrase — mathematically equivalent, reworded for exposition. |
| **S** | Deliberate simplification — true in spirit, weaker or less general than the source. The lecture's `Simplifications` section says exactly what was dropped. |
| **B** | Background/context supplied by this repository; not in the source, or only alluded to there. |

---

## Table of contents of [H6], and where each part is covered here

This is the paper's own structure, annotated with the lecture that covers it.

| [H6] section | Title | Covered by |
|---|---|---|
| 1 | Introduction | 00–06, 12–15 |
| 1.1 | Hilbert's sixth problem | [Lecture 00](lectures/00-hilberts-sixth-problem.md), [Lecture 16](lectures/16-scope-and-critique.md) |
| 1.2 | From Newton to Boltzmann | 01–05 |
| 1.2.1 | The hard sphere dynamics | [Lecture 01](lectures/01-hard-sphere-dynamics.md) |
| 1.2.2 | The grand canonical ensemble | [Lecture 02](lectures/02-boltzmann-grad-scaling.md), [Lecture 03](lectures/03-grand-canonical-ensemble.md) |
| 1.2.3 | The Boltzmann equation | [Lecture 04](lectures/04-boltzmann-equation.md) |
| 1.2.4 | Main result 1 | [Lecture 05](lectures/05-chaos-and-theorem-1.md), [Lecture 06](lectures/06-time-scales.md) |
| 1.3 | From Newton to Euler and Navier–Stokes | 14, 15 |
| 1.3.1 | Main result 2: the incompressible Navier–Stokes–Fourier limit | [Lecture 14](lectures/14-navier-stokes-fourier.md) |
| 1.3.2 | Main result 3: the compressible Euler limit | [Lecture 15](lectures/15-compressible-euler.md) |
| 1.4 | Ideas of the proof | 12, 13 |
| 1.4.1 | Long bonds and new elementary molecules | [Lecture 12](lectures/12-torus-and-long-bonds.md) |
| 1.4.2 | The new algorithm | [Lecture 13](lectures/13-the-new-algorithm.md) |
| 1.5 | Plan for the rest of this paper | [Lecture 16](lectures/16-scope-and-critique.md) |
| 2 | Summary of concepts from [26] | 09, 10 |
| 2.1 | Molecules and associated notions | [Lecture 09](lectures/09-molecules.md) |
| 2.2 | Cutting operations | [Lecture 10](lectures/10-cutting-operations.md) |
| 3 | Treating the integral | 10, 11 |
| 3.1 | Integrals for elementary molecules | [Lecture 10](lectures/10-cutting-operations.md) |
| 3.2 | Definition of excess | [Lecture 11](lectures/11-excess-and-proposition-3-8.md) |
| 3.3 | The main combinatorial proposition | [Lecture 11](lectures/11-excess-and-proposition-3-8.md) |
| 4 | Proof of Proposition 3.8 | [Lecture 13](lectures/13-the-new-algorithm.md) |
| 4.1 | The cutting algorithm: general case | [Lecture 13](lectures/13-the-new-algorithm.md) |
| 4.2 | The cutting algorithm: special case | [Lecture 13](lectures/13-the-new-algorithm.md) |
| 5 | Proof of Theorem 1 | [Lecture 05](lectures/05-chaos-and-theorem-1.md) §"Assembly" |

Material that lives only in **[LT]** — the BBGKY/Duhamel machinery, the cumulant ansatz, the definition of molecules, and cutting algorithms I and II — is covered in Lectures 07, 08, 09, 10. [H6] §2 explicitly imports these rather than restating them, which is why this repository devotes four lectures to a paper that [H6] compresses into six pages.

---

## Lecture-by-lecture mapping

### Lecture 00 — Hilbert's sixth problem and the three-level program
| Item | Source | Fidelity |
|---|---|---|
| Statement of Hilbert's 6th problem, 1900 | Hilbert's problem list | **B** |
| The chain Newton → Boltzmann → fluid | [H6] §1.1, Figure 1 | **F** |
| History: Boltzmann 1872, Grad 1949, Lanford 1975, [GSRT] 2013 | [H6] §1.1 references; [L75]; [GSRT] | **B** |
| What "resolved" means and does not mean here | [H6] §1.1 | **F** |
| **Visualization** [00-three-levels](viz/00-three-levels.html) | Figure 1 of [H6] | **F** |

### Lecture 01 — Hard sphere dynamics
| Item | Source | Fidelity |
|---|---|---|
| Phase point $z_j=(x_j,v_j)\in\mathbb{T}^d\times\mathbb{R}^d$ | [H6] §1.2.1, Def. 1.1 | **Q** |
| Non-overlapping domain $\mathcal{D}_N=\{\boldsymbol{z}_N:\lvert x_i-x_j\rvert_{\mathbb{T}}\ge\varepsilon\}$ | [H6] Def. 1.1 | **Q** |
| Free transport $\dot{x}_i=v_i,\ \dot{v}_i=0$ | [H6] Def. 1.1 | **Q** |
| Collision law $v_i(t^+)=v_i(t^-)-((v_i-v_j)\cdot\omega)\omega$, $\omega=(x_i-x_j)/\varepsilon$ | [H6] Def. 1.1, Figure 2 | **Q** |
| Measure-zero exclusion of pathological data | [H6] §1.2.1 | **F** |
| Time reversibility and the Loschmidt tension | — | **B** |
| **Visualization** [01-hard-spheres-torus](viz/01-hard-spheres-torus.html) | Def. 1.1 + Figure 2 | **F** |

### Lecture 02 — The Boltzmann–Grad scaling
| Item | Source | Fidelity |
|---|---|---|
| $\mathbb{E}(N)\cdot\varepsilon^{d-1}\approx\alpha$ | [H6] §1.2.2 | **Q** |
| Volume fraction $N\varepsilon^{d}\approx\alpha\varepsilon\to0$ | [H6] §1.2.2 | **F** |
| Mean free path / mean free time heuristics | — | **B** |
| $\alpha$ as the knob later sent to $\infty$ for hydrodynamics | [H6] §1.3 | **F** |
| **Visualization** [02-boltzmann-grad](viz/02-boltzmann-grad.html) | §1.2.2 | **F** |

### Lecture 03 — Grand canonical ensemble and correlation functions
| Item | Source | Fidelity |
|---|---|---|
| $W_{0,N}(\boldsymbol{z}_N)=\frac{(\alpha\varepsilon^{-(d-1)})^N}{N!}\prod_j n_0(z_j)\mathbf{1}_{\mathcal{D}_N}$ | [H6] Def. 1.3 | **Q** |
| $f_s(t,\boldsymbol{z}_s)=(\alpha^{-1}\varepsilon^{d-1})^s\sum_{n\ge0}\frac{1}{n!}\int W_{s+n}\,dz_{s+1}\cdots dz_{s+n}$ | [H6] Def. 1.3 | **Q** |
| Why grand canonical rather than canonical | — | **B** |
| Liouville equation for $W_N$ | — | **B** |
| **Visualization** [03-ensemble-marginals](viz/03-ensemble-marginals.html) | Def. 1.3 | **S** |

### Lecture 04 — The Boltzmann equation and its collision operator
| Item | Source | Fidelity |
|---|---|---|
| $(\partial_t+v\cdot\nabla_x)n=\alpha\int_{\mathbb{R}^d}\int_{\mathbb{S}^{d-1}}((v-v_1)\cdot\omega)_+(n'n_1'-nn_1)\,d\omega\,dv_1$ | [H6] Def. 1.4 | **Q** |
| Gain/loss decomposition, pre- and post-collisional parametrization | [H6] §1.2.3 | **F** |
| Collision invariants, $H$-theorem, Maxwellians | — | **B** |
| Where irreversibility enters (the Stosszahlansatz) | [H6] §1.1 | **B** |
| **Visualization** [04-collision-operator](viz/04-collision-operator.html) | Def. 1.4 | **F** |

### Lecture 05 — Molecular chaos, propagation of chaos, and Theorem 1
| Item | Source | Fidelity |
|---|---|---|
| Hypotheses: $d\in\{2,3\}$, $\beta>0$, $\lVert e^{2\beta\lvert v\rvert^2}n(t)\rVert_{L^\infty_{x,v}}\le A$ on $[0,t_{\mathrm{fin}}]$ | [H6] Theorem 1 | **Q** |
| Smallness condition $\max(1,\alpha)\max(1,A)\max(1,t_{\mathrm{fin}})\ll(\log\lvert\log\varepsilon\rvert)^{1/2}$ | [H6] Theorem 1 | **Q** |
| Conclusion $\lVert f_s(t,\boldsymbol{z}_s)-\prod_{j}n(t,z_j)\mathbf{1}_{\mathcal{D}_s}\rVert_{L^1}\le\varepsilon^{\theta}$, uniformly for $t\in[0,t_{\mathrm{fin}}]$, $s\le\lvert\log\varepsilon\rvert$ | [H6] Theorem 1 | **Q** |
| The role of $\mathbf{1}_{\mathcal{D}_s}$ (chaos holds only off the excluded volume) | [H6] §1.2.4 | **F** |
| Assembly of the proof from Prop. 3.8 | [H6] §5 | **S** |
| **Visualization** [05-chaos-cumulants](viz/05-chaos-cumulants.html) | Theorem 1 + [LT] cumulant expansion | **S** |

### Lecture 06 — Time scales
| Item | Source | Fidelity |
|---|---|---|
| Lanford's time: a fraction of one mean free time | [L75], [GSRT] | **B** |
| The gain: $\alpha\,A\,t_{\mathrm{fin}}\ll(\log\lvert\log\varepsilon\rvert)^{1/2}$ | [H6] Theorem 1 | **Q** |
| How slowly $(\log\lvert\log\varepsilon\rvert)^{1/2}$ grows — numerical table | — | **B** |
| Why a *diverging* number of mean free times is exactly what hydrodynamics needs | [H6] §1.3 | **F** |
| Layering $[0,t_{\mathrm{fin}}]$ into $L$ intervals of width $\tau$ | [LT] | **F** |
| **Visualization** [06-time-scales](viz/06-time-scales.html) | Theorem 1, Theorem 2 hypotheses | **F** |

### Lecture 07 — BBGKY, Duhamel expansion, and collision trees
| Item | Source | Fidelity |
|---|---|---|
| BBGKY hierarchy for the $f_s$ | [GSRT]; [LT] | **B** |
| Duhamel iteration and the backward collision tree | [LT] | **F** |
| The $s(s+1)\cdots(s+n-1)$ term count and why naive summation diverges past Lanford's time | [GSRT]; [LT] | **F** |
| Recollisions as the obstruction | [H6] §1.4; [LT] | **F** |
| **Visualization** [07-collision-tree](viz/07-collision-tree.html) | [LT] | **S** |

### Lecture 08 — Cumulants and the long-time cumulant ansatz
| Item | Source | Fidelity |
|---|---|---|
| $f_s=\prod_{j\in[s]}f_A(t,z_j)+\sum_{\emptyset\ne H\subseteq[s]}\big(\prod_{j\in[s]\setminus H}f_A(t,z_j)\big)E_H(t,z_H)$ | [LT] | **Q** |
| Ansatz $\lVert E_H(\ell\tau)\rVert_{L^1}\le\varepsilon^{\alpha\lvert H\rvert}$ propagated over layers | [LT] | **Q** |
| Partial time expansion (expand the cumulant, freeze $f_A$) | [LT] | **F** |
| Why this beats layer-by-layer Banach-space bounds | [LT]; [H6] §1.4 | **F** |
| **Visualization** [08-cumulant-layers](viz/08-cumulant-layers.html) | [LT] | **S** |

### Lecture 09 — Collision history molecules
| Item | Source | Fidelity |
|---|---|---|
| Atoms = collisions; C-atoms (collisions) vs O-atoms (overlaps) | [H6] §2.1; [LT] | **F** |
| Bonds = trajectory segments between collisions | [H6] §2.1; [LT] | **F** |
| Particle lines, bottom/top ends, root particle lines | [LT] | **F** |
| Degree = incident bonds + free ends, excluding fixed ends | [LT] | **Q** |
| Molecule types $\{2\},\{3\},\{4\},\{33\}$; $\{33\}$ are "good" and gain $\varepsilon^{\upsilon}$ | [LT] | **F** |
| Layers $\mathbb{M}_\ell$ over $[(\ell-1)\tau,\ell\tau]$ | [LT] | **F** |
| Recollisions ↔ independent cycles; $\rho$ = circuit rank | [LT] | **Q** |
| **Visualization** [09-molecule-explorer](viz/09-molecule-explorer.html) | §2.1 + [LT] | **S** |

### Lecture 10 — Cutting operations and elementary molecules
| Item | Source | Fidelity |
|---|---|---|
| Cutting = partition $\mathbb{M}$ into $\mathbb{M}_1$ (cut free) and $\mathbb{M}_2$ (cut fixed) | [LT]; [H6] §2.2 | **Q** |
| Factorization $I_{\mathbb{M}}=I_{\mathbb{M}_1}\circ I_{\mathbb{M}_2}$ | [LT] | **Q** |
| Elementary molecules (one or two atoms) | [H6] Def. 2.4, Def. 2.6 | **F** |
| $\mathcal{J}(\mathbb{M})$, the integral attached to a molecule, eq. (2.3) | [H6] §2.1 (2.3) | **F** |
| Explicit volume bounds for elementary molecules | [H6] Prop. 3.2 (and Props. 3.3–3.4) | **S** |
| **Visualization** [10-cutting-sandbox](viz/10-cutting-sandbox.html) | §2.2, §3.1 | **S** |

### Lecture 11 — Excess and the main combinatorial proposition
| Item | Source | Fidelity |
|---|---|---|
| Excess = "the best power of $\varepsilon$ by which the trivial estimate can be improved" | [H6] Def. 3.6 | **Q** |
| Trivial estimate and what it costs per atom | [H6] §3.1–3.2 | **F** |
| Main combinatorial proposition: total excess bound for arbitrary CH molecules | [H6] Prop. 3.8 | **S** |
| The bookkeeping: maximize $\#\{33\}$, minimize $\#\{4\}$ | [LT] | **F** |
| **Visualization** [11-excess-ledger](viz/11-excess-ledger.html) | §3.2–3.3 | **S** |

### Lecture 12 — Why the torus is hard, and what a long bond buys
| Item | Source | Fidelity |
|---|---|---|
| On $\mathbb{T}^d$ two particles can collide twice in a row — impossible in $\mathbb{R}^d$ | [H6] §1.4.1 | **Q** |
| A fixed number of particles can collide arbitrarily many times; the Burago–Ferleger–Kononenko bound is unavailable | [H6] §1.4.1 | **Q** |
| Long bond: a bond $e$ between atoms $\mathfrak{n}_1,\mathfrak{n}_2$ with $\lvert t_{\mathfrak{n}_1}-t_{\mathfrak{n}_2}\rvert\ge O(1)$ | [H6] §1.4.1 | **Q** |
| Property (♣): a $\{3A\}$-molecule containing a long bond gains nearly $\varepsilon^{d-1}$ rather than $\varepsilon^{1-}$ | [H6] §1.4.1 | **F** |
| Heuristic: many collisions force $O(1)$ time separation somewhere | [H6] §1.4.1 | **Q** |
| Geometric mechanism: relative velocity constrained against lattice vectors | [H6] §1.4.1, §3.1 | **S** |
| **Visualization** [12-torus-recollisions](viz/12-torus-recollisions.html) | §1.4.1 | **F** |

### Lecture 13 — The new cutting algorithm
| Item | Source | Fidelity |
|---|---|---|
| Recursive strategy: isolate one bad $\{3A\}$-molecule with a long bond per iteration | [H6] §1.4.2 | **Q** |
| Cut at the long bond, defer the new obligation to the next iteration | [H6] §1.4.2 | **Q** |
| General case | [H6] §4.1 | **S** |
| Special case | [H6] §4.2 | **S** |
| Predecessor: cutting algorithms I (reduce to UD molecules) and II (analyze UD molecules), models I, I⁺, II, III, and the routines UP/DOWN/2CONNUP/3COMPUP/MAINUD | [LT] | **S** |
| **Visualization** [13-algorithm-walkthrough](viz/13-algorithm-walkthrough.html) | §1.4.2, §4 | **S** |

### Lecture 14 — Incompressible Navier–Stokes–Fourier
| Item | Source | Fidelity |
|---|---|---|
| Limit system $\partial_t u+u\cdot\nabla u-\mu_1\Delta u=-\nabla p$, $\operatorname{div}u=0$, $\partial_t\rho+u\cdot\nabla\rho-\mu_2\Delta\rho=0$ | [H6] Theorem 2 | **Q** |
| Hypothesis $\max(1,\delta^{-1})\max(1,\delta^{-1}T_{\mathrm{fin}})\ll(\log\lvert\log\varepsilon\rvert)^{1/2}$ | [H6] Theorem 2 | **Q** |
| Well-prepared data from a truncated Maxwellian expansion | [H6] §1.3.1 | **F** |
| Error $\lesssim\delta^{3/2}$ in $L^1$ for $f_1$ | [H6] Theorem 2 | **Q** |
| Recovery of $u,\rho$ via velocity moments with truncation $\lvert v\rvert\le\varepsilon^{-\kappa}$; convergence in probability of empirical observables $u_{\mathrm{em}}[\psi],\rho_{\mathrm{em}}[\psi]$ | [H6] Theorem 2 | **F** |
| Diffusive time scaling (fluid time $=\delta\,\times$ kinetic time) | [H6] §1.3.1 | **F** |
| Context: Bardos–Golse–Levermore program, Golse–Saint-Raymond | — | **B** |
| **Visualization** [14-hydrodynamic-limit](viz/14-hydrodynamic-limit.html) | §1.3.1 | **S** |

### Lecture 15 — Compressible Euler
| Item | Source | Fidelity |
|---|---|---|
| Limit system: continuity, momentum, energy, $p=\rho T$ | [H6] Theorem 3 | **Q** |
| Hilbert expansion to sixth order, $F_0,\dots,F_6$, with $F_n=\mathcal{L}^{-1}(\cdots)$ | [H6] §1.3.2 | **F** |
| $f_1\to$ local Maxwellian $\mathfrak{M}$ with error $\lesssim\delta$ in $L^1$ | [H6] Theorem 3 | **Q** |
| Empirical convergence of $(\rho_{\mathrm{em}},u_{\mathrm{em}},T_{\mathrm{em}})$ in probability | [H6] Theorem 3 | **F** |
| Context: Caflisch's Hilbert-expansion method; validity up to shock formation | — | **B** |
| **Visualization** [15-hilbert-expansion](viz/15-hilbert-expansion.html) | §1.3.2 | **S** |

### Lecture 16 — Scope and critique
| Item | Source | Fidelity |
|---|---|---|
| What the theorems do and do not assert | [H6] §1.1–1.3 | **F** |
| Plan of the paper | [H6] §1.5 | **F** |
| Gao's objections: vanishing volume fraction ⇒ dilute gas, not a dense continuum; molecular chaos in fluid-like regimes | [C], abstract | **Q** |
| Assessment: these are objections to physical interpretation, not claims of mathematical error | — | **B** |
| Genuinely open: uniform-in-time results, $\mathbb{R}^d$ vs $\mathbb{T}^d$, beyond hard spheres, optimal time scale | [H6] §1.4; [LT] | **F** |
| Publication and reception: accepted *Annals of Mathematics* Nov 2025; Bourbaki-style exposition [arXiv:2602.04407](https://arxiv.org/abs/2602.04407); ICM 2026 invited lecture | — | **B** |

---

## Reverse index: paper object → lecture

| Object in [H6] | Lecture |
|---|---|
| Definition 1.1 (hard sphere dynamics) | 01 |
| Definition 1.3 (grand canonical ensemble, $f_s$) | 03 |
| Definition 1.4 (Boltzmann equation) | 04 |
| Theorem 1 (Newton → Boltzmann, long time) | 05, 06 |
| Theorem 2 (incompressible NSF) | 14 |
| Theorem 3 (compressible Euler) | 15 |
| Figure 1 (three-level diagram) | 00 |
| Figure 2 (elastic collision geometry) | 01 |
| Equation (2.3) ($\mathcal{J}(\mathbb{M})$) | 10 |
| Definitions 2.4, 2.6 (elementary molecules) | 10 |
| Proposition 3.2 (and 3.3, 3.4) (elementary integrals) | 10 |
| Definition 3.6 (excess) | 11 |
| Proposition 3.8 (main combinatorial proposition) | 11, 13 |
| Property (♣) (long bond gain) | 12 |
