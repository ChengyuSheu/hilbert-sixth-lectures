# Lecture 16 — What is and is not proved: scope, critique, open problems

> **Maps to:** [H6] §1.1, §1.5 ("Plan for the rest of this paper"); and Shan Gao, *Comment on …*, [arXiv:2504.06297](https://arxiv.org/abs/2504.06297).
> **Fidelity:** **F** for the summary of what the theorems assert; **Q** for Gao's objections, quoted from his abstract; **B** for the assessment and the list of open problems, which are this repository's editorial judgement and should be read as such.
> **Visualization:** none — this lecture is argument, not mechanism.
> **Prerequisites:** [Lectures 05](05-chaos-and-theorem-1.md), [06](06-time-scales.md), [14](14-navier-stokes-fourier.md), [15](15-compressible-euler.md).

---

## 1. The claim, stated precisely

Under the Boltzmann–Grad scaling on $\mathbb{T}^d$ ($d=2,3$), for hard spheres with well-prepared initial data, the empirical hydrodynamic observables of the particle system converge in probability — in an iterated limit, first $\varepsilon\to0$ at fixed collision rate, then collision rate $\to\infty$ — to solutions of the compressible Euler equations (up to shock formation) and of the incompressible Navier–Stokes–Fourier system (as long as the solution stays smooth).

Every clause of that sentence is load-bearing. It is worth listing what each one excludes.

## 2. What is **not** claimed

| Not claimed | Where the restriction enters |
|---|---|
| Anything about **dense** fluids (liquids). | Boltzmann–Grad forces $N\varepsilon^d\to0$: [Lecture 02](02-boltzmann-grad-scaling.md) §2. |
| A **joint** limit in $(\varepsilon,\delta)$. | The theorems are iterated: [Lecture 00](00-hilberts-sixth-problem.md) §4. |
| Anything past **shock formation** for Euler. | [Lecture 15](15-compressible-euler.md) §5. |
| Global-in-time NSF, or anything beyond the smooth solution's lifespan. | [Lecture 14](14-navier-stokes-fourier.md). |
| Well-posedness of the **Boltzmann equation** itself. | Theorem 1 *assumes* a solution with $\lVert e^{2\beta\lvert v\rvert^2}n\rVert_\infty\le A$ exists. |
| Results on $\mathbb{R}^d$. | The torus is essential to the setup, though it *costs* rather than helps: [Lecture 12](12-torus-and-long-bonds.md). |
| Anything beyond **hard spheres**. | Short-range potentials are not covered. |
| A **quantitatively meaningful** statement at physical $\varepsilon$. | $(\log\lvert\log\varepsilon\rvert)^{1/2}$: [Lecture 06](06-time-scales.md) §4. |
| Arbitrary (non well-prepared) initial data. | [Lecture 14](14-navier-stokes-fourier.md) §4. |

None of this is hidden in the paper. It is worth tabulating because press coverage of the result was not always careful, and because a reader who knows exactly what was proved is in a much better position to evaluate the criticism below.

## 3. The published critique

**Shan Gao**, [arXiv:2504.06297](https://arxiv.org/abs/2504.06297), raises two objections. From his abstract:

> "the vanishing volume fraction $(N\varepsilon^d\to0)$ confines the system to a dilute gas, incapable of embodying dense fluid properties even as $\alpha$ scales, rendering the resulting equations a rescaled gas model rather than a true continuum."

> "the Boltzmann equation's reliance on molecular chaos collapses in fluid-like regimes, where recollisions and correlations invalidate its derivation from Newtonian dynamics."

He concludes that "the Sixth Problem remains open."

### Assessment

*(This section is editorial. Read it as an argument to evaluate, not a fact to absorb.)*

**On objection 1 — the dilute-gas restriction: factually correct, and not news.** $N\varepsilon^d\approx\alpha\varepsilon\to0$ is arithmetic ([Lecture 02](02-boltzmann-grad-scaling.md) §2), stated openly by the authors, and forced by the scaling. Whether it is a *defect* depends on what one takes the problem to be.

Hilbert's formulation asks for the limiting processes leading from the atomistic view to the laws of continua, and singles out Boltzmann's kinetic theory as the intended route. The Boltzmann equation is, unavoidably, a dilute-gas equation. So the objection amounts to: the program Hilbert named does not reach liquids. That is true, and it was true before this paper. It is a limitation of the *program*, not an error in its execution.

The stronger version of the objection — that the resulting equations are "a rescaled gas model rather than a true continuum" — is worth taking seriously, and [Lecture 15](15-compressible-euler.md) §2 is where it bites hardest: the equation of state obtained is $p=\rho T$, the ideal gas law, with $\gamma=5/3$. You do not get a van der Waals fluid, a liquid, or anything with an interesting equation of state. What you *do* get is a genuine continuum limit of a genuine particle system, with transport coefficients computed from the collision law. Whether that satisfies you depends on whether you wanted "fluid equations from particles" or "the equations of water from particles."

**On objection 2 — molecular chaos in fluid regimes: this is the one to be careful about.** Read as a claim about the *heuristic* status of the Stosszahlansatz, it restates a real conceptual worry that has been discussed since Boltzmann. Read as a claim about *this paper*, it does not land — because the paper does not assume molecular chaos in the fluid regime. It **proves** propagation of chaos, quantitatively, for a diverging number of mean free times ([Theorem 1](05-chaos-and-theorem-1.md)), and the entire technical apparatus of Lectures 07–13 exists to control exactly the recollisions and correlations the objection names. "Recollisions invalidate the derivation" is the hypothesis the paper refutes, not one it overlooks.

There is a legitimate residue: the chaos statement holds on the time scale $(\log\lvert\log\varepsilon\rvert)^{1/2}$, and correlations are controlled *in $L^1$ average*, not pathwise. Someone could reasonably ask whether a fluid regime demands more. But that is a request for a stronger theorem, not an identification of a gap.

**Bottom line.** Objection 1 is a correct statement about the scope of Hilbert's program via kinetic theory; it is not a criticism specific to this work. Objection 2 misidentifies what was proved. The honest summary is the one the authors themselves use: this resolves Hilbert's sixth problem **as it pertains to the program of deriving fluid equations from Newton's laws by way of Boltzmann's kinetic theory** — a qualified claim, and the qualification is in the paper's own abstract.

For context on how the community received the work: the paper was accepted by *Annals of Mathematics* in November 2025, has been the subject of a survey exposition ([arXiv:2602.04407](https://arxiv.org/abs/2602.04407)) and an ICM 2026 invited lecture, and Yu Deng was awarded the 2026 Fields Medal — for a body of work on random data and wave turbulence that shares this paper's diagrammatic machinery, rather than for this paper alone.

## 4. Genuinely open problems

Ordered roughly by how tractable they look.

1. **Optimize the time scale.** $(\log\lvert\log\varepsilon\rvert)^{1/2}$ is not expected to be optimal — the authors say so. What is the truth? A power of $\lvert\log\varepsilon\rvert$? A power of $\varepsilon^{-1}$?
2. **Remove well-preparedness.** Handle general data, with initial layers and acoustic waves.
3. **$\mathbb{R}^d$ instead of $\mathbb{T}^d$.** Here BFK is *available*, so this may be easier — but the grand canonical setup and the fluid theory need rebuilding in infinite volume.
4. **Beyond hard spheres.** Short-range potentials; then long-range, where even Lanford's theorem is delicate.
5. **Past shock formation.** Derive compressible Euler with shocks from particles. Wide open, and arguably requires a fundamentally different idea, since the shock interior is a genuinely kinetic region.
6. **Uniform-in-time results.** Anything global.
7. **Joint limits.** Rather than iterated $\varepsilon\to0$ then $\delta\to0$, a single limit with $\delta=\delta(\varepsilon)$ on a physically reasonable relation. Item 1 is the prerequisite.
8. **Dense systems.** Any fluid equation from a particle system with $N\varepsilon^d\to c>0$. This is Gao's implicit challenge, and it is not a matter of improving the present methods — nothing in the current toolkit touches it.

## 5. How to read the paper itself

[H6] §1.5 lays out the plan; the practical version, if you have read these lectures:

- **§1** is genuinely readable and contains all three theorems and the ideas of the proof. Read §1.1–1.3 for the statements, §1.4 for what is new.
- **§2** is a summary of [LT] and will be opaque without [LT] open beside it. [Lectures 09](09-molecules.md)–[10](10-cutting-operations.md) are meant as a substitute for a first pass.
- **§3** defines excess and states Proposition 3.8 — the heart. [Lecture 11](11-excess-and-proposition-3-8.md).
- **§4** proves it. This is the hard technical core, and it is combinatorics. [Lecture 13](13-the-new-algorithm.md).
- **§5** assembles Theorem 1.

A reasonable route for a first serious reading: §1 in full → §3 → §1.4 again (it will read differently) → §2 with [LT] to hand → §4.

Note also that the authors produced a **rewritten version** for the *Annals*, explicitly aimed at readability. Prefer it if you can get it.

## 6. Exercises

1. For each row of the table in §2, find the sentence in [H6] where the restriction is imposed.
2. Take the strongest version of Gao's objection 1 you can construct and decide whether Theorem 3 answers it. Consider what would have to change in the microscopic model to obtain a non-ideal equation of state.
3. Explain, to someone who has read only the press coverage, the difference between "derived the Navier–Stokes equations from Newton's laws" and what Theorem 2 actually states. Keep it to five sentences.
4. Which of the open problems in §4 would most improve the *physical* meaningfulness of the result? Defend your answer using the table in [Lecture 06](06-time-scales.md) §4.

---

**Previous:** [Lecture 15](15-compressible-euler.md) · **Back to:** [README](../README.md) · [MAPPING](../MAPPING.md)
