# Lecture 14 — Hydrodynamic limits I: incompressible Navier–Stokes–Fourier

> **Maps to:** [H6] §1.3.1 "Main result 2: the incompressible Navier–Stokes–Fourier limit", **Theorem 2**.
> **Fidelity:** **Q** for the limit system, the smallness hypothesis, and the $\delta^{3/2}$ error; **F** for the well-prepared data and the recovery of macroscopic fields; **B** for the context on the Bardos–Golse–Levermore program.
> **Visualization:** [`viz/14-hydrodynamic-limit.html`](../viz/14-hydrodynamic-limit.html)
> **Prerequisites:** [Lectures 04](04-boltzmann-equation.md), [05](05-chaos-and-theorem-1.md), [06](06-time-scales.md).

---

## 1. What the second arrow requires

From [Lecture 04](04-boltzmann-equation.md) §4: as the collision term dominates, $n$ is forced onto the Maxwellian manifold and the $d+2$ collision invariants obey closed equations. Making that quantitative requires choosing *which* fluid regime you are aiming at, and there is more than one.

**The incompressible regime** is a *fluctuation* regime. Take a global equilibrium — a fixed Maxwellian $\mathfrak{M}$ — and perturb it by a small amount $\delta$:

$$
n\ \approx\ \mathfrak{M}\big(1+\delta\,g+\cdots\big).
$$

Because the perturbation is small, the fluid velocity is small, the Mach number is $O(\delta)$, and the flow is asymptotically incompressible. Small velocities also mean slow evolution, so one must look on the long **diffusive time scale**: fluid time $\asymp\delta\times$ kinetic time, i.e. kinetic times of order $\delta^{-1}T_{\mathrm{fin}}$. On that time scale viscosity — an $O(\delta)$ effect — accumulates into an $O(1)$ effect, which is why the limit equations are *Navier–Stokes* (viscous) rather than Euler.

This is the Bardos–Golse–Levermore programme, carried out from the Boltzmann equation by Golse and Saint-Raymond in 2004. What [H6] does is start one level lower down, at Newton.

## 2. The limit system

**[H6] Theorem 2.** The limit is the coupled incompressible Navier–Stokes–Fourier system on $\mathbb{T}^d$, $d\in\{2,3\}$:

$$
\boxed{
\begin{aligned}
\partial_t u+u\cdot\nabla u-\mu_1\Delta u&=-\nabla p,\\
\operatorname{div}u&=0,\\
\partial_t\rho+u\cdot\nabla\rho-\mu_2\Delta\rho&=0 .
\end{aligned}}
$$

The first two lines are the incompressible Navier–Stokes equations for the bulk velocity $u$ with pressure $p$; the third is the Fourier (heat) equation for the temperature–density fluctuation $\rho$, advected by $u$ and diffusing.

**The coefficients $\mu_1,\mu_2$ are not free parameters.** They are the viscosity and heat conductivity, determined by the linearized Boltzmann collision operator $\mathcal{L}$ through solutions of $\mathcal{L}\Phi = $ (a specific tensor) — the classical Chapman–Enskog formulas. This is worth pausing on: *the transport coefficients of the fluid are computed from the microscopic collision law.* That is the part of Hilbert's program most often forgotten and it is the part that makes the derivation more than an analogy.

## 3. The hypothesis

**[H6] Theorem 2.**

$$
\max(1,\delta^{-1})\cdot\max(1,\delta^{-1}T_{\mathrm{fin}})\ \ll\ \big(\log\lvert\log\varepsilon\rvert\big)^{1/2}.
$$

Compare with Theorem 1's $\max(1,\alpha)\max(1,A)\max(1,t_{\mathrm{fin}})\ll(\log\lvert\log\varepsilon\rvert)^{1/2}$. The correspondence is
$$
\alpha\ \leftrightarrow\ \delta^{-1},\qquad t_{\mathrm{fin}}\ \leftrightarrow\ \delta^{-1}T_{\mathrm{fin}},
$$
i.e. the hydrodynamic parameter *is* the inverse collision rate, and the kinetic time needed is $\delta^{-1}$ times the fluid time. So the left-hand side is $\asymp\delta^{-2}T_{\mathrm{fin}}$, and the theorem is exactly Theorem 1 applied with $\alpha$ and $t_{\mathrm{fin}}$ pushed as far as the long-time derivation allows.

**This is the point of the whole enterprise.** Under Lanford's constraint the left-hand side would have to be bounded, forcing $\delta\gtrsim1$ — no hydrodynamic limit at all. Because [H6] Theorem 1's right-hand side diverges, any fixed $\delta$ is eventually admissible, and $\delta\to0$ can be taken after $\varepsilon\to0$. See [Lecture 06](06-time-scales.md) §5 for the price: $\varepsilon\ll\exp(-\exp(\delta^{-4}))$.

## 4. Well-prepared data

The initial one-particle density $n_0$ is taken **well-prepared**: given by a truncated Maxwellian expansion around global equilibrium with a perturbation whose size is tied to $\delta$ (a $\delta^4$-scale correction appears in the construction). "Well-prepared" means the datum already lies close to the slow manifold — no fast acoustic transients need to be resolved before the incompressible dynamics emerges.

This is a genuine restriction, and a standard one. Removing it means handling initial layers and acoustic waves, which in the Boltzmann-level literature is substantial extra work.

## 5. The conclusions

Theorem 2 delivers two statements of different characters, and the distinction matters.

**(a) At the level of the correlation function.** $f_1(t,x,v)$ approximates the corresponding Boltzmann solution, with error $\lesssim\delta^{3/2}$ in $L^1$. Note the exponent: $3/2$, not $1$. The fluctuation itself is $O(\delta)$, so an error of $\delta^{3/2}$ is $o(\delta)$ — **small compared with the signal being measured**. Anything weaker would not identify the fluid fields at all.

**(b) At the level of the particle system.** The macroscopic fields are recovered from velocity moments with a truncation $\lvert v\rvert\le\varepsilon^{-\kappa}$, and the corresponding **empirical observables**
$$
u_{\mathrm{em}}[\psi],\qquad \rho_{\mathrm{em}}[\psi]
$$
— built directly from the actual positions and velocities of the actual particles, tested against $\psi$ — converge **in probability** to $u$ and $\rho$ evaluated at the fluid time.

Statement (b) is the one that answers Hilbert. It is not about an abstract hierarchy of marginals; it says that if you measure the empirical velocity field of a hard-sphere gas, you see a solution of Navier–Stokes. And it is precisely here that the $s\le\lvert\log\varepsilon\rvert$ range in [Theorem 1](05-chaos-and-theorem-1.md) is spent: convergence in probability of an empirical average needs control of *many-particle* correlations, not just $f_1$ and $f_2$.

## 6. What to look at in the visualization

[`viz/14-hydrodynamic-limit.html`](../viz/14-hydrodynamic-limit.html) has three coupled panels.

- **Relaxation to local Maxwellian.** A space-homogeneous velocity distribution under $\dot n=\alpha\mathcal{Q}(n,n)$ with $\alpha=\delta^{-1}$ on a slider. As $\delta\to0$ relaxation becomes instantaneous relative to transport — the separation of scales that makes hydrodynamics possible, watchable in one panel.
- **The Maxwellian manifold.** The $(d+2)$-dimensional manifold drawn schematically, with the trajectory of $n(t)$ collapsing onto it and then *sliding along it*. The sliding motion is the fluid equation. This picture is the single most useful mental image for the whole hydrodynamic limit.
- **Scale separation dial.** Displays kinetic time, fluid time $=\delta\times$ kinetic, and the required $\varepsilon$ from [Lecture 06](06-time-scales.md) §5, side by side. Drag $\delta$ down and watch the required $\varepsilon$ collapse doubly-exponentially — the honest cost, in one readout.
- **Empirical observable convergence.** A particle simulation with the empirical field $u_{\mathrm{em}}[\psi]$ plotted against a reference Navier–Stokes solution, with the fluctuation band shrinking as the particle number grows — statement (b) of §5 in miniature.

## 7. Simplifications made here

- **The precise form of the well-prepared data is not reproduced**; [H6] §1.3.1 specifies the truncated expansion and the $\delta^4$ correction exactly, and the details matter for the $\delta^{3/2}$ rate.
- The Chapman–Enskog formulas for $\mu_1,\mu_2$ are asserted, not derived.
- The correspondence $\alpha\leftrightarrow\delta^{-1}$ in §3 is the natural reading of the two hypotheses; [H6] states the scalings explicitly and the reader should check §1.3.1 rather than rely on this gloss.
- The visualization's fluid panel solves a 2D Navier–Stokes toy problem on a coarse grid and its particle panel uses far too few particles for the fluctuation scaling to be quantitative. It illustrates the *structure* of the statement.
- The relation between $\rho$ here (temperature–density fluctuation) and $\rho$ in [Theorem 3](15-compressible-euler.md) (density) is not the same object. See [GLOSSARY](../GLOSSARY.md#notation-collisions-to-watch-for).

## 8. Exercises

1. From $\max(1,\delta^{-1})\max(1,\delta^{-1}T_{\mathrm{fin}})\ll(\log\lvert\log\varepsilon\rvert)^{1/2}$ with $T_{\mathrm{fin}}=1$, solve for $\varepsilon$ in terms of $\delta$ and confirm the double exponential.
2. Why is the limit incompressible rather than compressible? Answer in terms of the Mach number and the time scale, and say what changes in [Lecture 15](15-compressible-euler.md).
3. Explain why the error must be $o(\delta)$ rather than merely $o(1)$, in terms of what is being measured.
4. Which feature of [Theorem 1](05-chaos-and-theorem-1.md) is used to obtain convergence *in probability* rather than convergence of expectations?

---

**Previous:** [Lecture 13](13-the-new-algorithm.md) · **Next:** [Lecture 15 — Compressible Euler](15-compressible-euler.md)
