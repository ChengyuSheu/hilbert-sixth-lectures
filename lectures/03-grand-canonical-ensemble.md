# Lecture 03 — Grand canonical ensemble and correlation functions

> **Maps to:** [H6] §1.2.2, **Definition 1.3**.
> **Fidelity:** **Q** for both displayed formulas; **B** for the Liouville-equation background and the discussion of why the grand canonical ensemble is chosen.
> **Visualization:** [`viz/03-ensemble-marginals.html`](../viz/03-ensemble-marginals.html)
> **Prerequisites:** [Lectures 01](01-hard-sphere-dynamics.md), [02](02-boltzmann-grad-scaling.md).

---

## 1. What has to be randomized, and why

The dynamics of [Lecture 01](01-hard-sphere-dynamics.md) is deterministic. The Boltzmann equation is a statement about a *distribution*. So somewhere a probability measure has to enter, and there is only one place it can: **the initial data**.

The choice made in [H6] is a **grand canonical ensemble**: the number of particles $N$ is itself random, and *conditionally on $N$*, the particles are independent and identically distributed according to a given one-particle density $n_0$ — except that configurations with overlapping spheres are forbidden.

Why not simply fix $N$ and take i.i.d. particles (the canonical ensemble)? Because the non-overlap constraint $\mathbf{1}_{\mathcal{D}_N}$ destroys exact independence, and with $N$ fixed it also introduces a hard global constraint that makes the combinatorics of marginals substantially uglier. In the grand canonical ensemble the marginals have the clean series representation below, and the algebra of the BBGKY hierarchy closes without $N$-dependent correction factors. This is a standard technical convenience in the field, not a physical assumption.

## 2. The ensemble

**[H6] Definition 1.3.** The initial density on the $N$-particle sector is

$$
W_{0,N}(\boldsymbol{z}_N)\ :=\ \frac{\big(\alpha\,\varepsilon^{-(d-1)}\big)^{N}}{N!}\ \prod_{j=1}^{N} n_0(z_j)\ \cdot\ \mathbf{1}_{\mathcal{D}_N}(\boldsymbol{z}_N).
$$

Read the three factors:

- $\prod_j n_0(z_j)$ — **independence**. This is where molecular chaos is *assumed*, at $t=0$ only. The whole theorem is about propagating it.
- $\mathbf{1}_{\mathcal{D}_N}$ — **excluded volume**. Independence is immediately broken, if only slightly: spheres cannot overlap. The correlation this induces is $O(\varepsilon^{d})$ per pair and is the irreducible obstruction to *exact* factorization. It is also why Theorem 1's conclusion carries a factor $\mathbf{1}_{\mathcal{D}_s}$.
- $\big(\alpha\varepsilon^{-(d-1)}\big)^{N}/N!$ — **fugacity**, giving the Poisson-type weighting over sectors. Since $\int n_0=1$, the mean particle number is $\mathbb{E}(N)\approx\alpha\varepsilon^{-(d-1)}$, which rearranges to exactly the Boltzmann–Grad relation $\mathbb{E}(N)\varepsilon^{d-1}\approx\alpha$ of [Lecture 02](02-boltzmann-grad-scaling.md). The scaling is not imposed separately; it is *built into the fugacity*.

**Evolution.** $W_N(t,\cdot)$ is the push-forward of $W_{0,N}$ by the hard-sphere flow; equivalently it solves the Liouville equation on $\mathcal{D}_N$ with specular reflection boundary conditions at contact. No approximation has been made yet — $W_N(t)$ contains the complete microscopic information.

## 3. Correlation functions

The object that can possibly converge is not $W_N$ (it lives on a space whose dimension blows up) but its low-order marginals. **[H6] Definition 1.3:**

$$
\boxed{\ f_s(t,\boldsymbol{z}_s)\ :=\ \big(\alpha^{-1}\varepsilon^{d-1}\big)^{s}\ \sum_{n=0}^{\infty}\frac{1}{n!}\int W_{s+n}\big(t,\boldsymbol{z}_{s+n}\big)\ dz_{s+1}\cdots dz_{s+n}\ }
$$

Three remarks.

**(a) The sum over $n$.** Because $N$ is random, the $s$-particle marginal must average over all sectors containing at least $s$ particles. The $1/n!$ compensates the labelling of the $n$ integrated-out particles.

**(b) The prefactor.** $\big(\alpha^{-1}\varepsilon^{d-1}\big)^{s}$ is exactly the inverse of the fugacity to the power $s$, and it is what makes $f_s$ an $O(1)$ object comparable to $\prod_{j\le s} n_0(z_j)$ rather than something of size $\mathbb{E}(N)^s$. Get this normalization wrong and Theorem 1 reads as nonsense.

**(c) What convergence should look like.** If the particles were *exactly* independent with law $n(t)$, one would have $f_s(t,\boldsymbol{z}_s)=\prod_{j\le s}n(t,z_j)$. They are not, so the target statement is *approximate* factorization, and only away from overlaps:

$$
f_s(t,\boldsymbol{z}_s)\ \approx\ \prod_{j=1}^{s} n(t,z_j)\ \cdot\ \mathbf{1}_{\mathcal{D}_s}(\boldsymbol{z}_s).
$$

That is verbatim the left-hand side of [Theorem 1](05-chaos-and-theorem-1.md). Everything from here to §5 of the paper is the proof of that one approximation.

## 4. The hierarchy this generates

Differentiating $f_s$ in time and using the Liouville equation produces the **BBGKY hierarchy**: $\partial_t f_s$ = (free transport of $s$ particles) + (a collision term involving $f_{s+1}$). The equation for $s$ particles requires $s+1$; the system does not close. Formally,

$$
\big(\partial_t+\textstyle\sum_{j\le s} v_j\cdot\nabla_{x_j}\big) f_s\ =\ \alpha\, \mathcal{C}_{s,s+1} f_{s+1},
$$

with $\mathcal{C}_{s,s+1}$ an integral over the contact sphere of the $(s+1)$-st particle. In the Boltzmann–Grad limit $\mathcal{C}_{s,s+1}$ converges formally to the Boltzmann collision operator acting on the $s$-fold product, which is the formal derivation of [Lecture 04](04-boltzmann-equation.md)'s equation. Making that formal statement into a theorem is the content of [Lectures 07–13](07-bbgky-and-collision-trees.md).

This lecture is where you should form the mental picture: **$f_s$ is the unknown; the hierarchy is the equation; the Boltzmann equation is the conjectured limit; molecules are the bookkeeping for the error.**

## 5. What to look at in the visualization

[`viz/03-ensemble-marginals.html`](../viz/03-ensemble-marginals.html) is a finite, sampled cartoon of Definition 1.3. It draws samples from the grand canonical ensemble in $d=2$ — Poisson-distributed $N$, i.i.d. positions from a chosen $n_0$, rejection of overlapping configurations — and then estimates $f_1$ and $f_2$ empirically.

The instructive panel is the **pair correlation** $f_2(z_1,z_2)$ compared against $f_1(z_1)f_1(z_2)$:

- Away from contact, the ratio sits at $1$: independence.
- As $\lvert x_1-x_2\rvert\downarrow\varepsilon$ the ratio drops to $0$: the excluded-volume hole. This *is* $\mathbf{1}_{\mathcal{D}_2}$, and seeing it explains at a glance why Theorem 1 cannot omit that indicator.
- Increasing $\varepsilon$ at fixed $\alpha$ widens the hole and pushes the ratio away from $1$ even at moderate separations — the correlations that the Boltzmann–Grad limit is designed to kill.

## 6. Simplifications made here

- The visualization samples an ensemble at a single time; it does **not** evolve $W_N$ under the flow, so it illustrates the $t=0$ structure of Definition 1.3 and the meaning of $f_s$, not their dynamics.
- The BBGKY hierarchy in §4 is written schematically. The precise operator, with its gain/loss split and its $\varepsilon$-shifted arguments, is in Gallagher–Saint-Raymond–Texier and in [LT].
- The claim "$\mathbb{E}(N)\approx\alpha\varepsilon^{-(d-1)}$" ignores the $\mathbf{1}_{\mathcal{D}_N}$ correction to the partition function, which is $1+O(\varepsilon)$ in the Grad scaling.

## 7. Exercises

1. Drop the constraint $\mathbf{1}_{\mathcal{D}_N}$ from $W_{0,N}$. Show that then $f_s(0,\boldsymbol{z}_s)=\prod_{j\le s}n_0(z_j)$ *exactly*, and identify precisely which step used $\int n_0 = 1$.
2. With the constraint restored, estimate the size of $f_2(0,z_1,z_2)-n_0(z_1)n_0(z_2)$ for $\lvert x_1-x_2\rvert\gg\varepsilon$. Is it $O(\varepsilon^{d})$, $O(\varepsilon^{d-1})$, or $O(\varepsilon)$? Compare with the $\varepsilon^\theta$ appearing in Theorem 1 and explain why $\theta$ cannot be taken large.
3. Why does the prefactor carry the power $s$ and not $s+n$?

---

**Previous:** [Lecture 02](02-boltzmann-grad-scaling.md) · **Next:** [Lecture 04 — The Boltzmann equation and its collision operator](04-boltzmann-equation.md)
