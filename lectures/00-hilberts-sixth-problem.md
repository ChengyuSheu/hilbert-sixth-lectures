# Lecture 00 — Hilbert's sixth problem and the three-level program

> **Maps to:** [H6] §1.1 and Figure 1.
> **Fidelity:** **F** for the structure of the program as [H6] presents it; **B** for the historical framing, which the paper only gestures at.
> **Visualization:** [`viz/00-three-levels.html`](../viz/00-three-levels.html)
> **Prerequisites:** none.

---

## 1. The problem as Hilbert posed it

In his 1900 address Hilbert asked, as the sixth of his problems, for the axiomatization of physics. The part relevant here is his explicit call for the mathematical treatment of

> "the limiting processes … which lead from the atomistic view to the laws of motion of continua."

Two things are worth noticing about that phrasing, because they determine everything below.

First, Hilbert says **processes**, plural. He had in mind a *chain* of limits, not one. Boltzmann's *Lectures on Gas Theory* had appeared in 1896–98 and Hilbert singles it out; the intended intermediate rung is kinetic theory.

Second, he says **limiting processes**, not "derivations". The content is asymptotic: a family of microscopic models indexed by a small parameter, and a statement that the solutions converge to solutions of a macroscopic model. Which parameter, in what order, and on what time interval — these are the entire mathematical content, and the reason the problem stayed open for 125 years.

## 2. The three levels

| | Microscopic | Mesoscopic | Macroscopic |
|---|---|---|---|
| Model | Newton's laws for $N$ hard spheres | Boltzmann's equation | compressible Euler / incompressible Navier–Stokes–Fourier |
| Unknown | $\boldsymbol{z}_N(t)=(x_j,v_j)_{j\le N}$ | $n(t,x,v)$ | $(\rho,u,T)(t,x)$ |
| Domain | $(\mathbb{T}^d\times\mathbb{R}^d)^N$ | $\mathbb{T}^d\times\mathbb{R}^d$ | $\mathbb{T}^d$ |
| Degrees of freedom | $\sim 10^{23}$ | one function of $2d+1$ variables | $d+2$ functions of $d+1$ variables |
| Time-reversible? | **yes** | **no** ($H$-theorem) | no (viscous case) |
| Deterministic? | yes | yes | yes |

The two arrows have names and parameters:

$$
\underbrace{\text{Newton}}_{N\ \text{particles, diameter}\ \varepsilon}
\ \xrightarrow[\ N\varepsilon^{d-1}=\alpha\ \text{fixed}\ ]{\text{Boltzmann–Grad limit},\ \varepsilon\to0}\
\underbrace{\text{Boltzmann}}_{\text{collision rate}\ \alpha}
\ \xrightarrow[\ \text{Knudsen number}\to0\ ]{\text{hydrodynamic limit},\ \alpha\to\infty}\
\underbrace{\text{Euler / NSF}}_{\text{fluid}}
$$

The **irreversibility** row is where the conceptual discomfort lives. The left column is reversible; the middle is not. Nothing in the derivation cheats: the arrow is a limit, and irreversibility appears the way it always appears in such limits — the limit does not commute with time reversal, because the *molecular chaos* hypothesis (particles about to collide are uncorrelated) is asymptotically propagated forward in time and not backward. Lecture 05 makes this precise; Lecture 04 locates it in the collision operator.

## 3. Why the composition was the hard part

Each arrow, taken alone, had substantial prior results.

**Arrow 2 was in good shape.** From the Boltzmann equation, the compressible Euler limit was obtained by Caflisch (1980) via a truncated Hilbert expansion, valid up to shock formation; the incompressible Navier–Stokes–Fourier limit was obtained by Golse and Saint-Raymond (2004) building on the Bardos–Golse–Levermore program. These are hard theorems but they were *done*.

**Arrow 1 was the bottleneck.** Lanford (1975) proved convergence to the Boltzmann equation — but only for times up to a *fraction of one mean free time*. The complete modern proof (Gallagher–Saint-Raymond–Texier, 2013) does not improve that horizon. Subsequent long-time results (Bodineau–Gallagher–Saint-Raymond–Simonella and collaborators) reached long times, but in the **near-equilibrium / linearized** regime.

**And the composition was structurally blocked.** Here is the crux. Arrow 2 sends $\alpha\to\infty$, i.e. it needs the Boltzmann description to be valid for a number of collisions per particle that *diverges*. Arrow 1 delivered validity for $\alpha t \lesssim 1$: less than one collision per particle. You cannot compose an arrow that requires $\alpha t\to\infty$ with one that supplies $\alpha t<1$. The gap was not technical slack; it was the whole distance between the two levels.

## 4. What Deng–Hani–Ma actually do

Their [Theorem 1](05-chaos-and-theorem-1.md) makes arrow 1 valid whenever

$$
\max(1,\alpha)\cdot\max(1,A)\cdot\max(1,t_{\mathrm{fin}})\ \ll\ (\log\lvert\log\varepsilon\rvert)^{1/2},
$$

with $A$ the size of the Boltzmann solution. Since the left-hand side contains $\alpha t_{\mathrm{fin}}$ — the number of collisions per particle — and the right-hand side *diverges as $\varepsilon\to0$*, the number of allowed mean free times is no longer bounded. It grows. Slowly (see [Lecture 06](06-time-scales.md) for how brutally slowly), but it grows, and that is enough: one may now first take $\varepsilon\to0$ at fixed $\alpha$, and *then* take $\alpha\to\infty$. Theorems 2 and 3 do exactly this and land on incompressible NSF and compressible Euler respectively.

That iterated structure is worth stating explicitly, because it is also the target of the main published critique ([Lecture 16](16-scope-and-critique.md)):

$$
\lim_{\alpha\to\infty}\ \lim_{\substack{\varepsilon\to0\\ N\varepsilon^{d-1}=\alpha}}
\qquad\text{— not a joint limit.}
$$

## 5. Where the difficulty is concentrated

It is easy to lose the thread in a 48-page paper that imports a 200-page companion. The reduction chain is:

1. Correlation functions $f_s$ obey the **BBGKY hierarchy**; iterating Duhamel expresses $f_s$ as a sum over **collision trees** ([Lecture 07](07-bbgky-and-collision-trees.md)).
2. The number of terms grows factorially; the classical argument beats it only for a short time. Instead, propagate a **cumulant ansatz** through time layers ([Lecture 08](08-cumulants-and-ansatz.md)).
3. Each term is an integral $\mathcal{J}(\mathbb{M})$ indexed by a graph — a **collision history molecule** ([Lecture 09](09-molecules.md)).
4. **Recollisions** are cycles in that graph. They are the enemy: they destroy independence and cost the factorial gains.
5. Bound $\mathcal{J}(\mathbb{M})$ by **cutting** $\mathbb{M}$ into elementary one- and two-atom pieces whose integrals are explicit ([Lecture 10](10-cutting-operations.md)).
6. Track the total $\varepsilon$-power gained — the **excess** — and prove it always suffices ([Lecture 11](11-excess-and-proposition-3-8.md), Proposition 3.8).
7. On the torus, step 6 fails by the classical route because the Burago–Ferleger–Kononenko collision bound is unavailable. Repair it with **long bonds** ([Lecture 12](12-torus-and-long-bonds.md)) fed into a **new recursive cutting algorithm** ([Lecture 13](13-the-new-algorithm.md)).

Steps 4–7 are where a reader's intuition typically fails, which is why this repository gives each of them its own visualization.

## 6. What to look at in the visualization

[`viz/00-three-levels.html`](../viz/00-three-levels.html) is an annotated version of the paper's Figure 1. It lets you toggle between the *classical* state of the art (arrow 1 valid only on the short Lanford segment, arrow 2 requiring $\alpha t\to\infty$, gap highlighted in red) and the *post-[H6]* picture (arrow 1's validity window growing like $(\log|\log\varepsilon|)^{1/2}$, gap closed). Dragging $\varepsilon$ down through absurd values shows how little the window actually grows — which is the honest way to appreciate both the achievement and its cost.

## 7. Simplifications made here

- The table's "degrees of freedom" row is heuristic; the grand canonical ensemble does not fix $N$ (see [Lecture 03](03-grand-canonical-ensemble.md)).
- "Arrow 2 was in good shape" compresses a large literature and glosses over the fact that Golse–Saint-Raymond works with DiPerna–Lions renormalized solutions, whereas [H6] Theorem 2 works with strong solutions and well-prepared data. The comparison is not apples to apples.
- The irreversibility discussion in §2 is deliberately informal.

## 8. Exercises

1. In the Boltzmann–Grad scaling $N\varepsilon^{d-1}=\alpha$, compute the volume fraction occupied by the particles for $d=3$. Show it tends to $0$. Now decide for yourself whether you find [Gao's objection](16-scope-and-critique.md) persuasive, *before* reading Lecture 16.
2. Why does the *order* of limits in §4 matter? Construct a heuristic reason why a joint limit $\varepsilon\to0,\alpha\to\infty$ would be harder.
3. The macroscopic level has $d+2$ scalar fields. Which functionals of $n(t,x,v)$ are they, and why exactly those? (Answer: [Lecture 04](04-boltzmann-equation.md) §5, collision invariants.)

---

**Next:** [Lecture 01 — Hard sphere dynamics](01-hard-sphere-dynamics.md)
