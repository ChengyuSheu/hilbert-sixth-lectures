# Lecture 07 — BBGKY, Duhamel expansion, and collision trees

> **Maps to:** [LT] = [arXiv:2408.07818](https://arxiv.org/abs/2408.07818), the expansion machinery that [H6] §2 imports wholesale. Classical background: Gallagher–Saint-Raymond–Texier.
> **Fidelity:** **F** for the structure of the hierarchy and the tree expansion; **B** for the classical material; **S** for the term-counting, which is stated at the level of orders of magnitude.
> **Visualization:** [`viz/07-collision-tree.html`](../viz/07-collision-tree.html)
> **Prerequisites:** [Lectures 03](03-grand-canonical-ensemble.md), [05](05-chaos-and-theorem-1.md), [06](06-time-scales.md).

---

## 1. The hierarchy

From [Lecture 03](03-grand-canonical-ensemble.md) §4: differentiating the correlation functions in time yields, schematically,

$$
\big(\partial_t+\textstyle\sum_{j\le s} v_j\cdot\nabla_{x_j}\big)f_s\ =\ \alpha\,\mathcal{C}_{s,s+1}f_{s+1},
$$

where $\mathcal{C}_{s,s+1}$ integrates $f_{s+1}$ over the contact sphere of a new particle labelled $s+1$:

$$
\mathcal{C}_{s,s+1}f_{s+1}(\boldsymbol{z}_s)
\ \approx\ \sum_{j=1}^{s}\int_{\mathbb{R}^d}\!\int_{\mathbb{S}^{d-1}}
\big((v_{s+1}-v_j)\cdot\omega\big)\ f_{s+1}\big(\ldots,x_j+\varepsilon\omega,v_{s+1}\big)\,d\omega\,dv_{s+1}.
$$

**The system does not close.** $f_1$ needs $f_2$, which needs $f_3$, and so on up to $N$. This is the BBGKY (Bogoliubov–Born–Green–Kirkwood–Yvon) hierarchy, and it is exact — no approximation has been made.

Two structural features drive everything:

- The operator **adds a particle**. Each application increases $s$ by one, and comes with a factor $\alpha$ and an integration over $(\omega, v_{s+1})$.
- The new particle is placed at **distance exactly $\varepsilon$** from an existing one. That $\varepsilon$-shift is the source of every geometric smallness in the argument, and also every technical headache.

## 2. Duhamel: unrolling the hierarchy into a tree

Let $S_s(t)$ be the $s$-particle hard-sphere flow (free transport plus collisions among the $s$). Duhamel's formula gives

$$
f_s(t)=S_s(t)f_s(0)+\alpha\int_0^{t}S_s(t-t_1)\,\mathcal{C}_{s,s+1}\,f_{s+1}(t_1)\,dt_1 .
$$

Substituting the same formula for $f_{s+1}$, then $f_{s+2}$, and iterating $n$ times:

$$
f_s(t)=\sum_{n=0}^{n_0-1}\alpha^{n}\int_{0<t_n<\cdots<t_1<t}
S_s(t-t_1)\,\mathcal{C}_{s,s+1}\,S_{s+1}(t_1-t_2)\,\mathcal{C}_{s+1,s+2}\cdots \mathcal{C}_{s+n-1,s+n}\,S_{s+n}(t_n)\,f_{s+n}(0)\ d\boldsymbol{t}\ +\ \mathcal{R}_{n_0}.
$$

Read right to left and you have a **backward-in-time story**:

> Start from $s$ tagged particles at time $t$. Run them backwards. At time $t_1$ a new particle is *created* on the contact sphere of one of them. Run the $s+1$ particles backwards. At $t_2$ another is created. … Continue to time $0$, where the initial (independent) data is evaluated.

The combinatorial skeleton of one such term — which existing particle spawns the new one, at which time, with which $(\omega,v)$ — is a **collision tree**. Each term of the expansion is an integral over the times $t_1>\cdots>t_n$ and the collision parameters, of a product of flows.

## 3. The two ways this can fail

**(a) Too many terms.** At step $k$ the new particle may attach to any of the $s+k-1$ existing ones, so the number of trees is

$$
s(s+1)\cdots(s+n-1)\ =\ \frac{(s+n-1)!}{(s-1)!}\ \sim\ n!\quad(\text{for fixed }s).
$$

The time simplex contributes $t^n/n!$ and the $\alpha^n$ contributes its own factor. Net: a geometric series in $C\alpha t$, convergent only for $\alpha t<c$. **This is precisely Lanford's barrier**, re-derived. Any improvement must find extra smallness in *most* terms.

**(b) Recollisions.** In the idealized picture the created particles never interact again — the tree is a genuine tree, the flows $S_{s+k}$ act as free transport, and the whole expansion collapses onto the Duhamel series *for the Boltzmann equation itself*. That is the formal derivation: **Boltzmann's equation is the recollision-free part of the BBGKY expansion.**

Real trajectories recollide. When they do, $S_{s+k}$ is not free transport, the created particle's history entangles with an existing one, and the term is not of Boltzmann type. In graph terms the diagram acquires a **cycle**. Classically one shows the total measure of recolliding configurations is $O(\varepsilon^{d-1})$ per recollision and discards them — adequate for short times, hopeless once the factorial in (a) is in play.

**The entire technical content of [LT] and [H6] is the quantitative management of (a) and (b) simultaneously.** Molecules ([Lecture 09](09-molecules.md)) are the data structure for doing so.

## 4. Why the classical route runs out

For short times you may afford the crudest possible treatment of recolliding terms: bound them by *total measure*, throw them away. The surviving tree terms reassemble Boltzmann.

For long times this fails twice over:
- there are too many terms to discard individually;
- and terms with many recollisions are not individually negligible relative to $n!$ — you need to know *how many* independent gains each term carries, which is a statement about the *cycle structure* of the diagram, not about any single collision.

So the question mutates from analysis into combinatorics: **given a graph with $\rho$ independent cycles arising from a collision history, how much $\varepsilon$-smallness can be extracted, and is it always at least what the term count demands?** That is [Proposition 3.8](11-excess-and-proposition-3-8.md).

## 5. The truncation

The expansion above is stopped at $n_0$ with a remainder $\mathcal{R}_{n_0}$. Choosing $n_0$ is a genuine trade-off: larger $n_0$ means a smaller remainder but more terms to control. In the layered scheme of [Lecture 08](08-cumulants-and-ansatz.md) the expansion is performed only across a single layer of width $\tau$, and — the key innovation — only *partially*: the cumulants are expanded while the main density is frozen at the layer's starting time. That is what stops the expansion depth from compounding across layers.

## 6. What to look at in the visualization

[`viz/07-collision-tree.html`](../viz/07-collision-tree.html) has two synchronized panels.

- **Left: physical space-time.** Backward trajectories on $\mathbb{T}^2$ with the vertical axis as time. Each branching event places a new particle on the contact sphere of an existing one.
- **Right: the abstract tree.** Nodes are creations, edges are trajectory segments, node labels are the times $t_k$.

Controls:

- **Step the expansion order $n$** and watch the term count $s(s+1)\cdots(s+n-1)$ against the time factor $t^n/n!$. A readout of the product shows the geometric series of §3(a) converging or diverging as you move $\alpha t$ across $1$ — Lanford's barrier as a number you can watch cross a threshold.
- **Toggle "allow recollisions".** With them off, the right panel is a tree and the reconstructed equation is Boltzmann. With them on, extra edges appear, the graph acquires cycles, and a **circuit-rank counter $\rho$** appears. That counter is the bridge to [Lecture 09](09-molecules.md): $\rho$ is exactly the recollision number.
- **Random-history sampler.** Draws random collision histories and reports the empirical distribution of $\rho$, which is concentrated at $0$ for small $\varepsilon$ — visually, why the tree terms dominate.

## 7. Simplifications made here

- The BBGKY operator is written schematically. The true operator splits into gain and loss parts with different $\varepsilon$-shifts $x_j\pm\varepsilon\omega$, and the interchange of limits requires care that is entirely suppressed here. See Gallagher–Saint-Raymond–Texier for the honest version.
- The term count $s(s+1)\cdots(s+n-1)$ ignores constraints among the trees.
- "Boltzmann is the recollision-free part" is exactly right in spirit and requires several pages to make precise, including the passage from $\varepsilon$-shifted to unshifted arguments.
- The remainder $\mathcal{R}_{n_0}$ is not analyzed here at all.

## 8. Exercises

1. Take $s=1$, $n=3$. Enumerate the collision trees. Confirm the count $1\cdot2\cdot3=6$.
2. Show $\int_{0<t_n<\cdots<t_1<t}d\boldsymbol{t}=t^n/n!$ and conclude the geometric series claim of §3(a).
3. Argue heuristically why a specified pair of particles recolliding within time $O(1)$ has probability $O(\varepsilon^{d-1})$ in the Grad scaling. (Hint: the target is a sphere of radius $\varepsilon$ and the relative motion is essentially ballistic.)
4. In the tree picture, which vertices become C-atoms of the molecule of [Lecture 09](09-molecules.md), and what do the edges become?

---

**Previous:** [Lecture 06](06-time-scales.md) · **Next:** [Lecture 08 — Cumulants and the long-time cumulant ansatz](08-cumulants-and-ansatz.md)
