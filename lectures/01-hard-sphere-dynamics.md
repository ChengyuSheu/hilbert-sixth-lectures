# Lecture 01 — Hard sphere dynamics

> **Maps to:** [H6] §1.2.1, **Definition 1.1**, **Figure 2**.
> **Fidelity:** **Q** for the definition and the collision law; **B** for the reversibility discussion and the remarks on pathological data.
> **Visualization:** [`viz/01-hard-spheres-torus.html`](../viz/01-hard-spheres-torus.html)
> **Prerequisites:** [Lecture 00](00-hilberts-sixth-problem.md).

---

## 1. The microscopic model, in full

This is the *entire* microscopic input of the paper. There is no randomness in the dynamics, no potential, no thermostat: $N$ identical spheres of diameter $\varepsilon$ moving freely on a torus and bouncing elastically.

**Phase space.** Each particle $j$ carries $z_j=(x_j,v_j)\in\mathbb{T}^d\times\mathbb{R}^d$, where $x_j$ is its center of mass and $v_j$ its velocity, $d\in\{2,3\}$. Write $\boldsymbol{z}_N=(z_1,\dots,z_N)$.

**Admissible configurations.** Spheres of diameter $\varepsilon$ cannot overlap, so the dynamics lives on

$$
\mathcal{D}_N:=\big\{\boldsymbol{z}_N\in\mathbb{T}^{dN}\times\mathbb{R}^{dN}\ :\ \lvert x_i-x_j\rvert_{\mathbb{T}}\ \ge\ \varepsilon\quad(\forall\, i\ne j)\big\},
$$

with $\lvert\cdot\rvert_{\mathbb{T}}$ the distance on the torus. **[H6] Definition 1.1.**

**Free flight.** As long as no pair is in contact,

$$
\frac{d}{dt}(x_i,v_i)=(v_i,0),\qquad i=1,\dots,N .
$$

**Collision.** When $\lvert x_i-x_j\rvert_{\mathbb{T}}=\varepsilon$ at time $t$, set the *impact direction*

$$
\omega:=\frac{x_i(t)-x_j(t)}{\varepsilon}\ \in\ \mathbb{S}^{d-1},
$$

and update the two velocities by reflecting their relative velocity in the direction $\omega$:

$$
\boxed{\ v_i(t^+)=v_i(t^-)-\big((v_i(t^-)-v_j(t^-))\cdot\omega\big)\,\omega\ },\qquad
v_j(t^+)=v_j(t^-)+\big((v_i(t^-)-v_j(t^-))\cdot\omega\big)\,\omega .
$$

All other velocities are unchanged. **[H6] Definition 1.1; this is the content of the paper's Figure 2**, which draws the incoming pair $(v_i(t^-),v_j(t^-))$, the outgoing pair $(v_i(t^+),v_j(t^+))$ and the contact vector $\varepsilon\omega$.

## 2. What the collision law is doing

Decompose each velocity into components along and perpendicular to $\omega$. Writing $v_i = v_i^{\parallel}\omega+v_i^{\perp}$, the rule says: **the normal components are exchanged, the tangential components are untouched.** That is the unique elastic, momentum- and energy-conserving, tangentially-frictionless rule.

Immediate consequences, each checked in one line:

- **Momentum:** $v_i(t^+)+v_j(t^+)=v_i(t^-)+v_j(t^-)$.
- **Energy:** $\lvert v_i(t^+)\rvert^2+\lvert v_j(t^+)\rvert^2=\lvert v_i(t^-)\rvert^2+\lvert v_j(t^-)\rvert^2$, because reflection is an isometry.
- **Relative velocity:** $(v_i-v_j)(t^+)=(v_i-v_j)(t^-)-2\big((v_i-v_j)(t^-)\cdot\omega\big)\omega$, i.e. the relative velocity is *reflected* across the tangent plane. Its magnitude is preserved.
- **Involutivity:** applying the map twice with the same $\omega$ returns the original velocities. This is exactly why the dynamics is time-reversible.
- **Admissibility:** the collision occurs only if the particles are approaching, $(v_i-v_j)\cdot\omega<0$; after the collision $(v_i-v_j)(t^+)\cdot\omega>0$ so they separate. The sign condition reappears as the factor $((v-v_1)\cdot\omega)_+$ in [the collision operator](04-boltzmann-equation.md).

## 3. Reversibility, and the tension it creates

Let $R$ be the reversal $(x,v)\mapsto(x,-v)$ on every particle. Then $R\circ\Phi_t\circ R=\Phi_{-t}$ for the hard-sphere flow $\Phi_t$: run the film backwards and it is still a legal solution. The Liouville measure $d\boldsymbol{z}_N$ restricted to $\mathcal{D}_N$ is invariant.

Yet the Boltzmann equation these particles converge to has a strictly decreasing $H$-functional. This is not a contradiction and it is not a sleight of hand — but it *is* the reason the theorems have hypotheses on the *initial* data and conclusions for $t\ge0$, and never the reverse. The asymmetry is injected once, at $t=0$, by assuming the particles are initially independent ([Lecture 03](03-grand-canonical-ensemble.md)) and then showing that this near-independence is *propagated forward*. See [Lecture 05](05-chaos-and-theorem-1.md).

## 4. Data that has to be excluded

The flow above is not globally well defined for *every* initial configuration. The exclusions:

- **Triple (or higher) simultaneous collisions**, where the pairwise rule does not determine the outcome.
- **Grazing collisions**, $(v_i-v_j)\cdot\omega=0$, where contact happens with no velocity change and one has to be careful about whether it counts.
- **Configurations with infinitely many collisions in finite time.**

Each of these sets has measure zero in $\mathcal{D}_N$, so the flow is defined for almost every initial datum, which is all a statistical statement needs. [H6] §1.2.1 disposes of this in a sentence; it is standard and treated at length in Gallagher–Saint-Raymond–Texier.

**But note the third item carefully** — it is not merely a technicality here. On $\mathbb{R}^d$ the number of collisions among $n$ hard spheres is bounded by a constant $C(n,d)$ *independent of the configuration*: the Burago–Ferleger–Kononenko theorem. **On $\mathbb{T}^d$ no such bound exists.** That failure is the single geometric fact that forced the new argument in [H6], and it is the subject of [Lecture 12](12-torus-and-long-bonds.md). If you remember one thing from this lecture beyond the collision formula, remember that the torus is not a cosmetic choice of domain.

## 5. Why the torus at all?

Two reasons, one technical and one structural.

- The fluid theorems are stated on $\mathbb{T}^d$, where the target equations (incompressible NSF, compressible Euler) have a clean well-posedness theory with no boundary conditions and no decay-at-infinity bookkeeping.
- The grand canonical ensemble with a *finite* total mass requires a finite-volume domain.

The price is BFK. [H6] pays it in §1.4.1 and §4.

## 6. What to look at in the visualization

[`viz/01-hard-spheres-torus.html`](../viz/01-hard-spheres-torus.html) simulates the exact dynamics above on $\mathbb{T}^2$ with event-driven (not time-stepped) collision detection, so the collision law is applied exactly rather than approximately. Things to try:

- **Inspect a collision.** Pause on contact: the panel draws $\omega$, the incoming and outgoing velocity vectors, and the tangent plane — the paper's Figure 2, live.
- **Reverse time.** The "reverse" button negates all velocities. The system retraces its history *exactly*, which makes the reversibility of §3 tangible, and makes the eventual $H$-theorem feel as strange as it should.
- **Watch the collision counter versus $\alpha=N\varepsilon^{d-1}$.** This is the quantity that governs everything downstream; see [Lecture 02](02-boltzmann-grad-scaling.md).
- **Track a tagged particle's collision partners.** Once a partner is revisited, you have witnessed a *recollision* — a cycle in the molecule of [Lecture 09](09-molecules.md), and the enemy of the whole proof.

## 7. Simplifications made here

- The visualization runs $d=2$ only; the paper covers $d\in\{2,3\}$.
- Numerical event-driven simulation accumulates floating-point error, so "exact" time reversal degrades after enough collisions. This is a property of the simulation, not of the dynamics.
- The measure-zero exclusions of §4 are stated, not proved.

## 8. Exercises

1. Verify the momentum and energy identities directly from the boxed formula.
2. Show that the collision map is an involution on the set $\{(v_i,v_j):(v_i-v_j)\cdot\omega<0\}\to\{(v_i,v_j):(v_i-v_j)\cdot\omega>0\}$, and identify what this says about the Jacobian appearing in the change of variables $(v,v_1)\mapsto(v',v_1')$ in [Lecture 04](04-boltzmann-equation.md).
3. Two particles on $\mathbb{T}^1\times\mathbb{T}^1$: construct explicit initial data for which the same pair collides twice. Convince yourself the analogous construction is impossible in $\mathbb{R}^2$. (This is [H6] §1.4.1's first observation; see [Lecture 12](12-torus-and-long-bonds.md).)

---

**Previous:** [Lecture 00](00-hilberts-sixth-problem.md) · **Next:** [Lecture 02 — The Boltzmann–Grad scaling](02-boltzmann-grad-scaling.md)
