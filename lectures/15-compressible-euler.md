# Lecture 15 — Hydrodynamic limits II: compressible Euler

> **Maps to:** [H6] §1.3.2 "Main result 3: the compressible Euler limit", **Theorem 3**.
> **Fidelity:** **Q** for the Euler system and the $\delta$ error rate; **F** for the Hilbert expansion structure; **B** for the context on Caflisch's method and shock formation.
> **Visualization:** [`viz/15-hilbert-expansion.html`](../viz/15-hilbert-expansion.html)
> **Prerequisites:** [Lecture 14](14-navier-stokes-fourier.md).

---

## 1. A different regime, not a harder one

Theorem 3 is the *other* classical hydrodynamic regime, and the contrast with [Lecture 14](14-navier-stokes-fourier.md) is the fastest way to understand both.

| | Incompressible NSF (Thm. 2) | Compressible Euler (Thm. 3) |
|---|---|---|
| Perturbation size | $O(\delta)$ — fluctuation | $O(1)$ — order-one fields |
| Mach number | $O(\delta)$ | $O(1)$ |
| Time scale | diffusive, fluid time $=\delta\times$ kinetic | acoustic, fluid time $\asymp$ kinetic |
| Viscosity in the limit | **retained** ($\mu_1,\mu_2$) | **absent** — dissipation is $O(\delta)$, subleading |
| Method | fluctuation expansion around global $\mathfrak{M}$ | **Hilbert expansion** around *local* $\mathfrak{M}$ |
| Error achieved | $\lesssim\delta^{3/2}$ | $\lesssim\delta$ |
| Lifespan | as long as the NSF solution is smooth | until **shock formation** |

The essential difference: NSF looks at a *long, slow, small* motion where viscosity has time to matter; Euler looks at an *order-one, fast* motion where it does not. Neither implies the other.

## 2. The limit system

**[H6] Theorem 3.** The compressible Euler system on $\mathbb{T}^d$:

$$
\boxed{
\begin{aligned}
\partial_t\rho+\nabla\cdot(\rho u)&=0,\\
\partial_t(\rho u)+\nabla\cdot(\rho u\otimes u)+\nabla p&=0,\\
\partial_t\Big[\rho\,\frac{dT+\lvert u\rvert^{2}}{2}\Big]+\nabla\cdot\Big[\rho u\,\frac{dT+\lvert u\rvert^{2}}{2}\Big]+\nabla\cdot(pu)&=0,\\
p&=\rho T .
\end{aligned}}
$$

Conservation of mass, momentum, and energy, closed by the **ideal gas law** $p=\rho T$.

Two things to notice.

**The ideal gas law is derived, not assumed.** It comes out of the local Maxwellian: with $n=\mathfrak{M}_{\rho,u,T}$, the pressure tensor $\int (v-u)\otimes(v-u)\,\mathfrak{M}\,dv=\rho T\,\mathrm{Id}$ is automatically isotropic with $p=\rho T$. That the equation of state is a *consequence* of the microscopic model is exactly the kind of statement Hilbert's problem asks for. It is also the sharpest form of the objection in [Lecture 16](16-scope-and-critique.md): the equation of state you get is the *ideal gas* law, because the gas is dilute.

**The energy density is $\rho(dT+\lvert u\rvert^2)/2$.** The $d$ is the number of translational degrees of freedom — monatomic hard spheres have no internal structure, so the specific heat is $d/2$ and the adiabatic index is $\gamma=(d+2)/d$. In $d=3$: $\gamma=5/3$, the monatomic ideal gas.

## 3. The method: Hilbert expansion

Where Theorem 2 expands around a *global* equilibrium, Theorem 3 expands around a **local** Maxwellian $\mathfrak{M}=\mathfrak{M}_{\rho(t,x),u(t,x),T(t,x)}(v)$ whose parameters vary in space and time.

Write $n\approx F_0+\delta F_1+\delta^2F_2+\cdots$ with $F_0=\mathfrak{M}$. Substituting into the Boltzmann equation and matching powers of $\delta$ gives, at leading order, $\mathcal{Q}(F_0,F_0)=0$ — hence $F_0$ Maxwellian — and at each subsequent order a linear equation for $F_n$ of the schematic form

$$
F_n=\mathcal{L}^{-1}\Big((\partial_t+v\cdot\nabla_x)F_{n-1}-\sum_i\mathcal{Q}(F_i,F_{n-i})\Big)+\mathfrak{M}\cdot(\cdots),
$$

with $\mathcal{L}$ the linearized collision operator. The solvability conditions at each order — $\mathcal{L}$ has the $d+2$ collision invariants in its kernel, so the right-hand side must be orthogonal to them — **are the fluid equations.** That is the mechanism by which Euler emerges: not as an assumption, but as the condition for the expansion to be solvable.

**[H6] carries this to sixth order**, $F_0,\dots,F_6$. Why so far? Because the remainder after truncating at order $k$ must be small compared with the accuracy being claimed, *after* being fed through the error terms of Theorem 1 — and those carry powers of $\delta$ that must be absorbed. Sixth order is what the bookkeeping demands. This is Caflisch's method (1980), executed with the microscopic input supplied by Theorem 1.

## 4. The conclusions

**(a)** $f_1$ converges to the local Maxwellian $\mathfrak{M}$ with error $\lesssim\delta$ in $L^1$. Here the fields are $O(1)$, so an $O(\delta)$ error is already relatively small — no $3/2$ is needed, unlike the fluctuation setting of [Lecture 14](14-navier-stokes-fourier.md) §5.

**(b)** The macroscopic observables are recovered from moments, and the empirical fields
$$
\big(\rho_{\mathrm{em}},\,u_{\mathrm{em}},\,T_{\mathrm{em}}\big)
$$
converge **in probability** to $(\rho,u,T)$.

As in Theorem 2, statement (b) is the one that speaks to Hilbert: the *actual particle system*, observed empirically, exhibits compressible Euler dynamics.

## 5. Lifespan and shocks

The Hilbert expansion requires a **smooth** solution of the Euler system. Compressible Euler generically forms shocks in finite time, and past that time the expansion breaks down — every $F_n$ involves derivatives of the fluid fields, and they blow up.

So Theorem 3 is a statement up to the first singularity. Beyond it, nothing is claimed, and this is not a defect of the argument: **there is no derivation of the compressible Euler equations from particles across a shock, and it is a well-known open problem.** Physically the interior of a shock is a region a few mean free paths thick where the Boltzmann description is essential and no fluid description is valid — precisely where the separation of scales underlying the whole limit fails.

## 6. What to look at in the visualization

[`viz/15-hilbert-expansion.html`](../viz/15-hilbert-expansion.html) is the order-by-order picture.

- **Order slider $k=0,\dots,6$.** Watch $F_0+\delta F_1+\cdots+\delta^kF_k$ approximate a reference solution, with the residual plotted below. Successive orders reduce the residual by a factor $\delta$ — and the display shows why stopping early is not an option once the residual must be compared against a $\delta$-scale claim.
- **Local vs global Maxwellian.** A toggle contrasts Theorem 3's spatially varying $\mathfrak{M}_{\rho(x),u(x),T(x)}$ with Theorem 2's fixed $\mathfrak{M}$ — the structural difference between the two regimes, in one image.
- **Solvability conditions.** At each order, the projection of the right-hand side onto the $d+2$ collision invariants is displayed. Setting it to zero *is* the fluid equation, and seeing the Euler system appear as an orthogonality condition is the "aha" of the Hilbert expansion.
- **1D Euler solver with shock formation.** A Riemann-type initial datum evolves; characteristics cross; the Hilbert expansion's error indicator diverges exactly at the crossing time. The failure is not gradual, and watching it lets you see what §5 means.
- **$\gamma$ readout.** Computes $\gamma=(d+2)/d$ from the energy density and confirms $5/3$ in $d=3$.

## 7. Simplifications made here

- **The recursion for $F_n$ is schematic.** [H6] §1.3.2 gives the precise form, including the $\mathfrak{M}\cdot(\cdots)$ term that fixes the free parameters of $\mathcal{L}^{-1}$; that term is where the fluid equations at the *next* order are encoded, and it is not explained here.
- The claim that solvability conditions give exactly the Euler system is standard but is asserted rather than derived.
- Why *six* orders is explained by an appeal to bookkeeping; the actual reason is in the error analysis of [H6] §1.3.2 and depends on the $\varepsilon^\theta$ from Theorem 1.
- The visualization's expansion uses a 1D toy kinetic model with a BGK-type relaxation operator rather than the true hard-sphere $\mathcal{Q}$, so orders match qualitatively, not quantitatively.

## 8. Exercises

1. Compute $\int(v-u)\otimes(v-u)\,\mathfrak{M}_{\rho,u,T}(v)\,dv$ and deduce $p=\rho T$ and the isotropy of the pressure tensor.
2. Verify that $\rho(dT+\lvert u\rvert^2)/2=\int\tfrac12\lvert v\rvert^2\mathfrak{M}\,dv$, and identify $\gamma$.
3. Show that $\mathcal{L}$ has exactly $d+2$ elements in its kernel and explain why this forces $d+2$ solvability conditions per order.
4. Why does Theorem 3 achieve $O(\delta)$ while Theorem 2 needs $O(\delta^{3/2})$? Answer in terms of the size of the object being approximated.
5. What would be needed to extend Theorem 3 past shock formation? Say why this is not a matter of working harder.

---

**Previous:** [Lecture 14](14-navier-stokes-fourier.md) · **Next:** [Lecture 16 — What is and is not proved](16-scope-and-critique.md)
