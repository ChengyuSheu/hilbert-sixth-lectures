# Lecture 06 — Time scales: Lanford's barrier and $(\log\lvert\log\varepsilon\rvert)^{1/2}$

> **Maps to:** [H6] §1.2.4 (the hypothesis of **Theorem 1**) and §1.3 (why that hypothesis suffices for **Theorems 2 and 3**).
> **Fidelity:** **Q** for the two smallness conditions; **F** for the interpretation in mean free times and for the layering; **B** for Lanford's constant and the numerical table.
> **Visualization:** [`viz/06-time-scales.html`](../viz/06-time-scales.html)
> **Prerequisites:** [Lectures 02](02-boltzmann-grad-scaling.md), [05](05-chaos-and-theorem-1.md).

---

## 1. The only quantity that matters

Set $\alpha=1$ for a moment, so that the mean free time is $\asymp1$ and *time is measured in collisions per particle*. Then:

| Result | Valid for |
|---|---|
| Lanford (1975), Gallagher–Saint-Raymond–Texier (2013) | $t\le c$, $c$ a small absolute constant — **less than one mean free time** |
| Bodineau–Gallagher–Saint-Raymond–Simonella | long times, but **near equilibrium / linearized** |
| **[H6] Theorem 1** | $t\ll(\log\lvert\log\varepsilon\rvert)^{1/2}$ — **unboundedly many mean free times**, full nonlinear regime |

Restoring $\alpha$ and $A$, the hypothesis is

$$
\max(1,\alpha)\cdot\max(1,A)\cdot\max(1,t_{\mathrm{fin}})\ \ll\ \big(\log\lvert\log\varepsilon\rvert\big)^{1/2}.
$$

The left side is (up to constants) the number of collisions a particle undergoes over the whole run. **Lanford's theorem caps that number at a constant; [H6] lets it diverge.** That difference — a constant versus a divergent quantity — is the whole reason the hydrodynamic limit becomes reachable, because hydrodynamics is by definition the regime of *infinitely many* collisions per particle.

## 2. Why Lanford stops where he does

The Duhamel expansion of [Lecture 07](07-bbgky-and-collision-trees.md) writes $f_s$ as a sum over collision trees with $n$ branchings. The number of such terms is roughly

$$
s(s+1)(s+2)\cdots(s+n-1)\ \sim\ n!\,,
$$

and each carries a time-integration factor $t^n/n!$. The two factorials cancel, leaving a **geometric series in $Ct$**. It converges iff $Ct<1$.

That is the barrier, and it is not an artifact of a lossy estimate: the number of terms really is factorial. To go further you must show that *most* terms are far smaller than the crude bound — that the terms with many recollisions carry $\varepsilon$-gains numerous enough to defeat the combinatorics. Proving that is [Proposition 3.8](11-excess-and-proposition-3-8.md), and it is what the molecule formalism was built for.

## 3. How the new time scale arises

The mechanism, in outline (details in [Lecture 08](08-cumulants-and-ansatz.md)):

1. Chop $[0,t_{\mathrm{fin}}]$ into $L$ layers of width $\tau\ll1$, so that within *each* layer the geometric series of §2 converges.
2. Instead of a Banach-space bound propagated layer to layer — which loses a constant factor $C>1$ each time and therefore dies after $O(1)$ layers — propagate the **cumulant ansatz** $\lVert E_H\rVert_{L^1}\le\varepsilon^{\alpha_\ast\lvert H\rvert}$.
3. Each layer degrades the exponent $\alpha_\ast$ a little. The degradation compounds, roughly like $\alpha_\ast\mapsto\alpha_\ast/C$ or worse, so after $L$ layers what remains is of order $\varepsilon^{\alpha_\ast/C^{L}}$-ish.
4. For this still to be small you need $C^{L}\lesssim\lvert\log\varepsilon\rvert$, i.e. $L\lesssim\log\lvert\log\varepsilon\rvert$.

Doubly-logarithmic dependence is exactly what a *compounding* loss over layers produces. The square root reflects further losses in the combinatorial estimates. So the shape $(\log\lvert\log\varepsilon\rvert)^{1/2}$ is not arbitrary — it is the fingerprint of an iterated, self-degrading induction.

The authors do not claim optimality. In the companion paper the expectation is stated plainly: this is not expected to be sharp.

## 4. How slowly does it actually grow?

$$
\Lambda(\varepsilon):=\big(\log\lvert\log\varepsilon\rvert\big)^{1/2}\quad(\text{natural logs}).
$$

| $\varepsilon$ | $\lvert\log\varepsilon\rvert$ | $\Lambda(\varepsilon)$ |
|---|---|---|
| $10^{-3}$ | $6.9$ | $1.39$ |
| $10^{-6}$ | $13.8$ | $1.62$ |
| $10^{-10}$ | $23.0$ | $1.77$ |
| $10^{-100}$ | $230$ | $2.33$ |
| $10^{-1000}$ | $2.3\times10^{3}$ | $2.78$ |
| $10^{-10^{6}}$ | $2.3\times10^{6}$ | $3.83$ |
| $10^{-10^{10}}$ | $2.3\times10^{10}$ | $4.88$ |
| $10^{-10^{100}}$ | $2.3\times10^{100}$ | $15.2$ |

**Read this table honestly.** To buy fifteen mean free times you need a particle diameter of $10^{-10^{100}}$ — a number with no physical meaning whatsoever. For $\varepsilon$ near any realistic molecular scale, $\Lambda$ is under $2$.

And read it a second time, correctly. **The asymptotic statement is not about any fixed $\varepsilon$.** Theorems 2 and 3 do not evaluate $\Lambda$ at a physical $\varepsilon$; they take $\varepsilon\to0$ first, so $\Lambda\to\infty$ and *any* fixed number of mean free times is eventually permitted. The logical structure is
$$
\forall\,(\alpha,A,t_{\mathrm{fin}})\ \ \exists\,\varepsilon_0\ \ \forall\,\varepsilon<\varepsilon_0:\ \text{conclusion holds},
$$
and that is all the iterated limit of [Lecture 00](00-hilberts-sixth-problem.md) §4 requires. The unboundedness is what matters mathematically; the growth rate is what matters if you ever hoped for a quantitative physical statement, and there it is brutal. Both facts are true and neither cancels the other.

## 5. The second time scale: hydrodynamics

[Theorem 2](14-navier-stokes-fourier.md) needs a *fluid* time $T_{\mathrm{fin}}$, which in the diffusive scaling corresponds to kinetic time $\asymp\delta^{-1}T_{\mathrm{fin}}$. Its hypothesis is correspondingly

$$
\max(1,\delta^{-1})\cdot\max(1,\delta^{-1}T_{\mathrm{fin}})\ \ll\ \big(\log\lvert\log\varepsilon\rvert\big)^{1/2}.
$$

Note the structure: $\delta^{-2}T_{\mathrm{fin}}$ appears, so reaching a fluid time of order $1$ at hydrodynamic parameter $\delta$ requires $\Lambda(\varepsilon)\gg\delta^{-2}$, hence

$$
\varepsilon\ \ll\ \exp\!\big(-\exp(\delta^{-4})\big).
$$

Doubly exponential in $\delta^{-4}$. That is the true cost of the iterated limit, and it is why the order of limits in [Lecture 00](00-hilberts-sixth-problem.md) §4 is not a stylistic choice: a joint limit would need $\varepsilon$ and $\delta$ to be tied by this relation, and the theorem simply does not assert anything joint.

## 6. What to look at in the visualization

[`viz/06-time-scales.html`](../viz/06-time-scales.html) is a time-scale ladder on a logarithmic axis, with $\varepsilon$ on a slider spanning $10^{-3}$ down to $10^{-10^{100}}$ (the slider is in $\log\log$ units, which is the only way to make the range navigable — and is itself instructive).

- The **Lanford segment** is drawn as a fixed short bar. It does not move as you drag $\varepsilon$. That immobility is the point.
- The **[H6] segment** extends to $\Lambda(\varepsilon)$ and creeps rightward, agonizingly, as $\varepsilon$ falls.
- The **hydrodynamic requirement** for a chosen $\delta$ is drawn as a target line at $\delta^{-2}T_{\mathrm{fin}}$. Drag $\delta$ down and watch the target run away far faster than the [H6] segment advances — then find the $\varepsilon$ at which the segment finally overtakes it, and read the exponent.
- A **layering panel** shows $[0,t_{\mathrm{fin}}]$ chopped into $L$ layers with the exponent $\alpha_\ast$ degrading layer by layer, illustrating §3 and making the appearance of a double logarithm feel inevitable rather than mysterious.

## 7. Simplifications made here

- §3 is a **caricature** of the induction. The real loss per layer is not a clean division by $C$; the honest accounting is spread over [LT] and is inseparable from the combinatorial estimates. Treat §3 as an explanation of *why a double logarithm appears at all*, not as a derivation.
- The $\varepsilon\ll\exp(-\exp(\delta^{-4}))$ estimate in §5 is a back-of-envelope inversion of the stated hypothesis, ignoring constants and the $\max(1,\cdot)$ structure.
- Lanford's constant $c$ is left unspecified; the sharp constant depends on the norm and datum.
- All logarithms are natural. Using base 10 changes the table but nothing structural.

## 8. Exercises

1. Verify two rows of the table in §4.
2. Solve $\Lambda(\varepsilon)=100$ for $\varepsilon$. Comment.
3. Show that the hypothesis of Theorem 1 is *not* equivalent to "$t_{\mathrm{fin}}\to\infty$ is allowed at fixed $\alpha$" — it is stronger, since it also allows $\alpha\to\infty$. Which of the two does Theorem 3 need?
4. Suppose someone improved $(\log\lvert\log\varepsilon\rvert)^{1/2}$ to $\lvert\log\varepsilon\rvert^{1/2}$. Redo §5's computation. Would the result become quantitatively meaningful at $\varepsilon=10^{-9}$?

---

**Previous:** [Lecture 05](05-chaos-and-theorem-1.md) · **Next:** [Lecture 07 — BBGKY, Duhamel expansion, and collision trees](07-bbgky-and-collision-trees.md)
