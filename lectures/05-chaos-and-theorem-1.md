# Lecture 05 — Molecular chaos, propagation of chaos, and Theorem 1

> **Maps to:** [H6] §1.2.4 (**Main result 1**) and §5 (**Proof of Theorem 1**).
> **Fidelity:** **Q** for the statement of Theorem 1; **F** for the discussion of each hypothesis; **S** for §6, the assembly of the proof, which compresses [H6] §5 and its dependence on Proposition 3.8.
> **Visualization:** [`viz/05-chaos-cumulants.html`](../viz/05-chaos-cumulants.html)
> **Prerequisites:** [Lectures 03](03-grand-canonical-ensemble.md), [04](04-boltzmann-equation.md).

---

## 1. The statement

**[H6] Theorem 1.** Fix $d\in\{2,3\}$ and $\beta>0$. Let the parameters $(\alpha,A,t_{\mathrm{fin}})$ satisfy

$$
\max(1,\alpha)\cdot\max(1,A)\cdot\max(1,t_{\mathrm{fin}})\ \ll\ \big(\log\lvert\log\varepsilon\rvert\big)^{1/2},
$$

and suppose the Boltzmann equation of [Definition 1.4](04-boltzmann-equation.md) has a solution $n$ on $[0,t_{\mathrm{fin}}]$ with

$$
\big\lVert e^{2\beta\lvert v\rvert^{2}}\,n(t)\big\rVert_{L^{\infty}_{x,v}}\ \le\ A .
$$

Let $f_s$ be the correlation functions of [Definition 1.3](03-grand-canonical-ensemble.md) for the hard sphere system with initial datum $n_0$. Then, for some $\theta>0$,

$$
\boxed{\
\Big\lVert\, f_s(t,\boldsymbol{z}_s)\ -\ \prod_{j=1}^{s} n(t,z_j)\cdot\mathbf{1}_{\mathcal{D}_s}(\boldsymbol{z}_s)\,\Big\rVert_{L^{1}}\ \le\ \varepsilon^{\theta}\ }
$$

uniformly in $t\in[0,t_{\mathrm{fin}}]$ and in $s\le\lvert\log\varepsilon\rvert$.

## 2. Reading the hypotheses one at a time

**$d\in\{2,3\}$.** Both the physically relevant cases. The restriction is not cosmetic: the long-bond gain of [Lecture 12](12-torus-and-long-bonds.md) produces $\varepsilon^{d-1}$, and the bookkeeping is dimension-sensitive.

**$\beta>0$ and the weight $e^{2\beta\lvert v\rvert^2}$.** Gaussian velocity tails. Hard spheres have unbounded velocities and the collision kernel grows linearly in $\lvert v\rvert$; without Gaussian control the velocity integrals in the molecule estimates diverge. This is the standard Grad-type weighted $L^\infty$ setting.

**$A$.** The size of the Boltzmann solution in that weighted norm. It enters the smallness condition *multiplicatively together with $\alpha$ and $t_{\mathrm{fin}}$*, which is the correct grouping: $\alpha A t_{\mathrm{fin}}$ is, up to constants, the expected number of collisions experienced by a particle over the whole time interval. **The theorem constrains the collision count, not the clock.**

**The smallness condition.** The right-hand side $(\log\lvert\log\varepsilon\rvert)^{1/2}\to\infty$. Slowly — see [Lecture 06](06-time-scales.md) — but it diverges, and that divergence is the entire advance over Lanford. Everything downstream (Theorems 2 and 3) exists only because this quantity is unbounded.

**Existence of the Boltzmann solution is *assumed*.** The theorem is conditional: *given* that the kinetic equation has a nice solution on $[0,t_{\mathrm{fin}}]$, the particle system tracks it. This is the right formulation — the paper is about the derivation, not about Boltzmann well-posedness — but it is worth stating plainly, since "derivation of the Boltzmann equation" can be misread as also settling its global theory. It does not.

## 3. Reading the conclusion

**The factorized profile.** $\prod_{j\le s}n(t,z_j)$ is exact independence: the $s$ tagged particles behave as $s$ i.i.d. draws from the Boltzmann density. This is **propagation of chaos**, and it is the precise sense in which "the Boltzmann equation is derived": the one-particle marginal $f_1$ solves Boltzmann in the limit *because* the pair marginal factorizes.

**The indicator $\mathbf{1}_{\mathcal{D}_s}$.** Chaos cannot hold on overlapping configurations, because those have probability zero for the particles and positive probability under the product measure. The excluded-volume hole of [Lecture 03](03-grand-canonical-ensemble.md) §5 never disappears; it is simply divided out. Its measure is $O(\varepsilon^{d})$ per pair, which is why it does not affect the $L^1$ statement at order $\varepsilon^\theta$.

**$s\le\lvert\log\varepsilon\rvert$.** Chaos for a *growing* number of tagged particles, not just $s=2$. This is much stronger than what the Boltzmann equation itself needs, and it is what makes the empirical-observable statements of [Theorems 2 and 3](14-navier-stokes-fourier.md) — convergence in probability, not merely in expectation — possible.

**$\varepsilon^\theta$, with $\theta>0$ unspecified.** A power-law rate, small. Optimality is not claimed anywhere.

**$L^1$.** The right topology: $f_s$ are densities, and the fluid observables are integrals against test functions.

## 4. What "molecular chaos" means, precisely

Three statements that are often conflated:

1. **Chaos at time $0$**: the initial ensemble factorizes. *Assumed*, in [Definition 1.3](03-grand-canonical-ensemble.md).
2. **Propagation of chaos**: factorization persists for $t>0$. *This is Theorem 1.*
3. **The Stosszahlansatz**: factorization holds for *pre-collisional pairs at the moment of collision*. This is what the Boltzmann equation's $n\,n_1$ encodes ([Lecture 04](04-boltzmann-equation.md) §3), and it is what actually has to be proved along the way.

Statement 3 is strictly harder than statement 2, because the collision configurations form a measure-zero set on which one cannot simply invoke an $L^1$ bound. Handling it is a large part of why the argument is so technical.

Note also the *sense* in which chaos can hold: not for individual configurations, but in $L^1$ average. Individual trajectories are wildly correlated — this is a chaotic dynamical system in the other sense too.

## 5. The obstruction: recollisions

Why is this hard? Because chaos is *false* in the naive sense. Take two particles that collide at time $t_0$. For $t$ slightly greater than $t_0$ their velocities are exactly anti-correlated in the normal direction. Feed those two into a third particle and the correlation spreads.

The Boltzmann limit works because such correlations are *rare*: for the correlation to matter, the two particles must meet **again**. Such an event is called a **recollision**, and in the Boltzmann–Grad scaling a specified pair recolliding costs a factor $\varepsilon^{d-1}$ or better in probability. So the strategy is:

> expand $f_s$ into a sum of terms indexed by collision histories; terms without recollisions reconstruct the Boltzmann equation; terms with $\rho$ recollisions carry a gain $\varepsilon^{\rho\cdot(\text{something positive})}$ and must be shown to sum to something small.

The catch, and the reason Lanford's proof stops after one mean free time: the **number of terms grows factorially in time**, so the $\varepsilon$-gains must beat a factorial. On short time intervals the factorial is small. On long intervals it is not, and one needs to prove that the gains are not merely present but *sufficiently numerous* — that is [Proposition 3.8](11-excess-and-proposition-3-8.md), for which the whole molecule formalism exists.

## 6. Assembly of the proof (what [H6] §5 does)

Very compressed; each ingredient has its own lecture.

1. Split $[0,t_{\mathrm{fin}}]$ into $L$ layers of width $\tau$. ([Lecture 08](08-cumulants-and-ansatz.md))
2. Posit the **cumulant ansatz** $\lVert E_H(\ell\tau)\rVert_{L^1}\le\varepsilon^{\alpha_\ast\lvert H\rvert}$ and propagate it from layer $\ell$ to layer $\ell+1$ by a *partial* time expansion. ([Lecture 08](08-cumulants-and-ansatz.md))
3. Expanding one layer produces a sum of Duhamel terms, each an integral $\mathcal{J}(\mathbb{M})$ indexed by a **collision history molecule** $\mathbb{M}$. ([Lectures 07](07-bbgky-and-collision-trees.md), [09](09-molecules.md))
4. Bound $\mathcal{J}(\mathbb{M})$ by **cutting** $\mathbb{M}$ into elementary molecules with explicit integrals. ([Lecture 10](10-cutting-operations.md))
5. **Proposition 3.8** guarantees the accumulated **excess** always beats the number of terms. ([Lecture 11](11-excess-and-proposition-3-8.md)) On the torus this needs **long bonds** ([Lecture 12](12-torus-and-long-bonds.md)) and the **new recursive algorithm** ([Lecture 13](13-the-new-algorithm.md)).
6. Closing the induction over $\ell=1,\dots,L$ gives smallness of all cumulants at time $t_{\mathrm{fin}}$, which is exactly the boxed conclusion of §1. The constraint on how many layers can be chained is where $(\log\lvert\log\varepsilon\rvert)^{1/2}$ comes from.

## 7. What to look at in the visualization

[`viz/05-chaos-cumulants.html`](../viz/05-chaos-cumulants.html) runs the hard-sphere dynamics and measures chaos as it degrades and is restored.

- **The factorization error.** A live estimate of $\lVert f_2-f_1\otimes f_1\mathbf{1}_{\mathcal{D}_2}\rVert$ over a binned velocity grid. It starts at $0$ (independent data), jumps whenever collisions occur, and — crucially — *decays back* as correlated pairs drift apart and stop being correlated *in the marginal*.
- **A correlation genealogy.** Select a particle; the display tints every particle whose history is causally entangled with it. The tinted set grows, but the *marginal* correlation stays small: the visual statement that chaos is an $L^1$ phenomenon, not a pathwise one.
- **Recollision counter.** Flags every event where a pair collides for the second time, with a running count. Lowering $\varepsilon$ at fixed $\alpha$ visibly starves the counter — the $\varepsilon^{d-1}$ suppression of §5 in action.
- **Overlap-hole inspector.** Plots $f_2$ against pair separation, showing the $\mathbf{1}_{\mathcal{D}_2}$ hole that Theorem 1 must carry.

## 8. Simplifications made here

- §6 is a **sketch**. The real §5 of [H6] involves careful truncation of the velocity support, treatment of the $s\le\lvert\log\varepsilon\rvert$ range, and error terms this outline omits entirely.
- The cumulant exponent is written $\alpha_\ast$ here to avoid clashing with the collision rate $\alpha$; [LT] writes $\alpha$. See [GLOSSARY](../GLOSSARY.md#notation-collisions-to-watch-for).
- The claim "a specified pair recolliding costs $\varepsilon^{d-1}$" is the heuristic; the actual gains are the subject of [Lecture 11](11-excess-and-proposition-3-8.md) and are neither uniform nor automatic — that is the entire difficulty.
- The visualization's $f_2$ estimate is a coarse histogram from a modest number of particles; it demonstrates the phenomenon, it does not measure the theorem's $\varepsilon^\theta$.

## 9. Exercises

1. Show that the smallness condition permits $t_{\mathrm{fin}}\to\infty$ as $\varepsilon\to0$ at fixed $\alpha,A$. At what rate? Then show it also permits $\alpha\to\infty$ at fixed $t_{\mathrm{fin}}$, and note that Theorem 2 needs *both* to move.
2. Suppose the right-hand side of the smallness condition were an absolute constant $C$ instead of $(\log\lvert\log\varepsilon\rvert)^{1/2}$. Show that the iterated limit of [Lecture 00](00-hilberts-sixth-problem.md) §4 could not be performed. (This is Lanford's situation.)
3. Explain why the conclusion is stated for all $s\le\lvert\log\varepsilon\rvert$ rather than for $s=1$ alone. Which theorem downstream needs $s$ large?

---

**Previous:** [Lecture 04](04-boltzmann-equation.md) · **Next:** [Lecture 06 — Time scales](06-time-scales.md)
