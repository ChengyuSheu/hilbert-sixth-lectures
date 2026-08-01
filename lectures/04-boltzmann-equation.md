# Lecture 04 — The Boltzmann equation and its collision operator

> **Maps to:** [H6] §1.2.3, **Definition 1.4**.
> **Fidelity:** **Q** for the equation; **F** for the gain/loss decomposition and the parametrization of pre-/post-collisional velocities; **B** for the collision invariants, the $H$-theorem, and Maxwellians, which [H6] uses but does not develop.
> **Visualization:** [`viz/04-collision-operator.html`](../viz/04-collision-operator.html)
> **Prerequisites:** [Lectures 01](01-hard-sphere-dynamics.md), [03](03-grand-canonical-ensemble.md).

---

## 1. The equation

**[H6] Definition 1.4.** The unknown is $n=n(t,x,v)$ on $\mathbb{T}^d\times\mathbb{R}^d$, and

$$
\boxed{\
(\partial_t+v\cdot\nabla_x)\,n
\ =\ \alpha\int_{\mathbb{R}^d}\!\int_{\mathbb{S}^{d-1}}
\big((v-v_1)\cdot\omega\big)_+\ \big(n'\,n_1'-n\,n_1\big)\ d\omega\,dv_1 ,
\qquad n(0,x,v)=n_0(x,v).}
$$

Notation, all at the same $(t,x)$:

$$
n=n(t,x,v),\quad n_1=n(t,x,v_1),\quad n'=n(t,x,v'),\quad n_1'=n(t,x,v_1'),
$$

$$
v'=v-\big((v-v_1)\cdot\omega\big)\omega,\qquad v_1'=v_1+\big((v-v_1)\cdot\omega\big)\omega .
$$

Compare those two formulas with the boxed collision law of [Lecture 01](01-hard-sphere-dynamics.md) §1: **they are the same map.** The kinetic equation inherits its nonlinearity verbatim from the microscopic bounce.

Note where $\alpha$ sits: multiplying the entire collision operator. Increasing $\alpha$ increases the collision frequency without touching transport — exactly the dial that [Lecture 14](14-navier-stokes-fourier.md) and [Lecture 15](15-compressible-euler.md) turn to reach hydrodynamics.

## 2. Anatomy: transport, gain, loss

Write the right-hand side as $\alpha\,\mathcal{Q}(n,n)=\alpha\big(\mathcal{Q}^+(n,n)-\mathcal{Q}^-(n,n)\big)$ with

$$
\mathcal{Q}^{+}(n,n)=\int\!\!\int \big((v-v_1)\cdot\omega\big)_+\, n'n_1'\,d\omega\,dv_1,
\qquad
\mathcal{Q}^{-}(n,n)=\int\!\!\int \big((v-v_1)\cdot\omega\big)_+\, n\,n_1\,d\omega\,dv_1 .
$$

- **Transport $v\cdot\nabla_x n$**: particles stream. Reversible, and by itself would preserve any initial datum's structure forever.
- **Loss $\mathcal{Q}^-$**: a particle *at* velocity $v$ meets one at $v_1$ and is knocked out of $v$. Rate $\propto n(v)n(v_1)$.
- **Gain $\mathcal{Q}^+$**: a pair at $(v',v_1')$ collides and one of them *lands on* $v$. Rate $\propto n(v')n(v_1')$.
- **The kernel $((v-v_1)\cdot\omega)_+$**: the flux factor. The positive part encodes that only *approaching* pairs collide — the same sign condition noted in [Lecture 01](01-hard-sphere-dynamics.md) §2. Its magnitude is the relative speed along the impact direction, i.e. the rate at which the collision cylinder of [Lecture 02](02-boltzmann-grad-scaling.md) §1 sweeps volume. For hard spheres the differential cross-section is constant, which is why nothing more complicated than $((v-v_1)\cdot\omega)_+$ appears.

## 3. Where the irreversibility is

The product $n\,n_1$ in the loss term is the **Stosszahlansatz**: the assumption that the *joint* density of a colliding pair factorizes into the product of one-particle densities. Microscopically the pair's joint density is $f_2$, not $f_1\otimes f_1$, and the two differ by a cumulant ([Lecture 08](08-cumulants-and-ansatz.md)).

Two facts you should hold together:

1. The substitution $f_2\rightsquigarrow f_1\otimes f_1$ is legitimate *for pre-collisional configurations* and *asymptotically as $\varepsilon\to0$*.
2. It is **not** legitimate post-collisionally: two particles that have just collided are strongly correlated — they have equal and opposite normal momentum transfer.

Applying (1) forward in time and not backward is the entire source of the arrow of time. The hard sphere flow is reversible ([Lecture 01](01-hard-sphere-dynamics.md) §3); the *limit* is not, because the class of measures on which chaos is propagated is not reversal-invariant. Theorem 1 is a quantitative form of statement (1), valid for a number of collisions per particle that diverges.

## 4. Structure you get for free

**Collision invariants.** For $\psi(v)\in\mathrm{span}\{1,v_1,\dots,v_d,\lvert v\rvert^2\}$,

$$
\int_{\mathbb{R}^d}\mathcal{Q}(n,n)(v)\,\psi(v)\,dv=0 .
$$

The proof is the symmetry $(v,v_1,\omega)\mapsto(v',v_1',\omega)$ together with conservation of momentum and energy in the collision. These $d+2$ invariants are exactly the fields $(\rho,u,T)$ of the fluid level — *this is the answer to Exercise 3 of [Lecture 00](00-hilberts-sixth-problem.md)*. Multiplying the Boltzmann equation by $\psi$ and integrating kills the right-hand side and produces the **local conservation laws**:

$$
\partial_t\!\int n\,\psi\,dv+\nabla_x\!\cdot\!\int v\,n\,\psi\,dv=0 .
$$

These are not closed — the flux involves higher moments — and closing them *is* the hydrodynamic limit.

**$H$-theorem.** With $H(t)=\iint n\log n\,dx\,dv$,

$$
\frac{dH}{dt}=-\frac{\alpha}{4}\iiint\big((v-v_1)\cdot\omega\big)_+\,\big(n'n_1'-nn_1\big)\log\frac{n'n_1'}{nn_1}\ d\omega\,dv_1\,dv\ \le\ 0,
$$

since $(a-b)\log(a/b)\ge0$. Equality forces $n'n_1'=nn_1$ for a.e. $(v,v_1,\omega)$, hence $\log n$ is a collision invariant, hence

$$
n(t,x,v)=\mathfrak{M}_{\rho,u,T}(v):=\frac{\rho}{(2\pi T)^{d/2}}\exp\!\Big(-\frac{\lvert v-u\rvert^2}{2T}\Big).
$$

**Local Maxwellians are the only equilibria.** This is the pivot to hydrodynamics: as $\alpha\to\infty$ the collision term dominates, forcing $n$ onto the $(d+2)$-parameter Maxwellian manifold, whose parameters $(\rho,u,T)(t,x)$ then obey a closed system — the fluid equations. [Lecture 15](15-compressible-euler.md) executes this via the Hilbert expansion; [Lecture 14](14-navier-stokes-fourier.md) does the fluctuation version.

## 5. What to look at in the visualization

[`viz/04-collision-operator.html`](../viz/04-collision-operator.html) makes Definition 1.4 tactile in $d=2$.

- **The collision sphere.** Fix $v$ and $v_1$ by dragging. As $\omega$ sweeps $\mathbb{S}^{d-1}$, the outgoing $(v',v_1')$ traces a circle centered at the midpoint $\tfrac12(v+v_1)$ with radius $\tfrac12\lvert v-v_1\rvert$ — the locus enforced by conservation of momentum and energy. Watching that circle appear is the fastest route to understanding why exactly $d+2$ invariants exist.
- **The kernel.** The shading shows $((v-v_1)\cdot\omega)_+$ as a function of $\omega$: a half-sphere weighting, zero on the receding half.
- **Gain vs loss.** A second panel integrates numerically over $\omega$ and $v_1$ for a chosen $n$, plotting $\mathcal{Q}^+$, $\mathcal{Q}^-$ and their difference against $v$. Start from a bimodal $n$ and watch $\mathcal{Q}$ push it toward a Maxwellian.
- **Relaxation.** A space-homogeneous solver runs $\dot n=\alpha\mathcal{Q}(n,n)$ and plots $H(t)$ alongside. $H$ falls monotonically and flattens exactly when the profile becomes Gaussian. Raising $\alpha$ compresses the whole relaxation in time — the visual meaning of "hydrodynamic limit".

## 6. Simplifications made here

- The $H$-theorem computation above is formal: it presumes enough decay and integrability to symmetrize. Rigorous versions require care (and for the DiPerna–Lions theory, a great deal of it). [H6] does not need the $H$-theorem — it assumes a strong solution with $\lVert e^{2\beta\lvert v\rvert^2}n(t)\rVert_{L^\infty}\le A$ exists on $[0,t_{\mathrm{fin}}]$ and derives *that* object.
- The visualization's relaxation solver is space-homogeneous and $d=2$; it discretizes velocity on a bounded grid, so mass and energy are conserved only up to truncation error.
- The identification "collision invariants $\leftrightarrow$ fluid fields" is stated, not proved; the proof that these are the *only* invariants is a classical lemma.

## 7. Exercises

1. Verify $v'+v_1'=v+v_1$ and $\lvert v'\rvert^2+\lvert v_1'\rvert^2=\lvert v\rvert^2+\lvert v_1\rvert^2$ from the definitions in §1, then deduce that $(v',v_1')$ lies on the circle described in §5.
2. Show the change of variables $(v,v_1)\mapsto(v',v_1')$ has unit Jacobian for fixed $\omega$, and that it is an involution. Use this to prove the collision-invariant identity of §4.
3. Take $n$ space-homogeneous. Show that $\mathcal{Q}(n,n)=0$ iff $n$ is Maxwellian, using only the equality case of the $H$-theorem.
4. In the equation of §1, replace $\alpha$ by $\alpha=\delta^{-1}$ and rescale time $t\mapsto t/\delta$. Which terms balance as $\delta\to0$? You have just guessed the structure of the Hilbert expansion of [Lecture 15](15-compressible-euler.md).

---

**Previous:** [Lecture 03](03-grand-canonical-ensemble.md) · **Next:** [Lecture 05 — Molecular chaos, propagation of chaos, and Theorem 1](05-chaos-and-theorem-1.md)
