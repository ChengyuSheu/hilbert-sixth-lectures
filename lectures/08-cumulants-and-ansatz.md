# Lecture 08 — Cumulants and the long-time cumulant ansatz

> **Maps to:** [LT] = [arXiv:2408.07818](https://arxiv.org/abs/2408.07818), §2 and the propagation scheme. Referenced but not restated in [H6] §2.
> **Fidelity:** **Q** for the cumulant expansion and the ansatz; **F** for the partial time expansion and the layer induction; **S** for the quantitative bookkeeping.
> **Visualization:** [`viz/08-cumulant-layers.html`](../viz/08-cumulant-layers.html)
> **Prerequisites:** [Lectures 05](05-chaos-and-theorem-1.md), [06](06-time-scales.md), [07](07-bbgky-and-collision-trees.md).

---

## 1. The right unknown

Theorem 1 asserts $f_s\approx\prod_j n(t,z_j)\mathbf{1}_{\mathcal{D}_s}$. So do not track $f_s$ — track its **deviation from factorization**. That is what a cumulant is.

**[LT] cumulant expansion.**

$$
\boxed{\
f_s(t,\boldsymbol{z}_s)\ =\ \prod_{j\in[s]}f_A(t,z_j)\ +\ \sum_{\emptyset\ne H\subseteq[s]}\Big(\prod_{j\in[s]\setminus H}f_A(t,z_j)\Big)\ E_H(t,z_H)\ }
$$

Here $f_A$ is the "main" one-particle density carried through the argument, and $E_H$ is the **cumulant** attached to the subset $H$ of particles: the part of the correlation that is *irreducibly* about the particles in $H$ jointly, after all lower-order structure has been factored out.

This is the standard moment-to-cumulant inversion; the only unusual feature is that it is being propagated *dynamically*.

Sanity checks:
- $s=1$: $f_1=f_A+E_{\{1\}}$.
- $s=2$: $f_2=f_Af_A+f_A E_{\{1\}}+f_A E_{\{2\}}+E_{\{1,2\}}$, so $E_{\{1,2\}}=f_2-f_1\otimes f_1$ up to lower-order corrections — *exactly* the pair-correlation defect measured in [Lecture 05](05-chaos-and-theorem-1.md)'s visualization.
- Perfectly independent particles: all $E_H=0$ for $\lvert H\rvert\ge1$.

**Chaos $\iff$ all cumulants small.** Theorem 1 is now the statement $\lVert E_H\rVert_{L^1}\to0$, and the whole game is to keep them small for as long as possible.

## 2. The ansatz

**[LT].** The quantity propagated in time is

$$
\boxed{\ \big\lVert E_H(\ell\tau)\big\rVert_{L^{1}}\ \le\ \varepsilon^{\alpha_\ast\lvert H\rvert}\ }
$$

for each layer index $\ell=0,1,\dots,L$, where $\tau$ is the layer width and $\alpha_\ast>0$ an exponent. *(This repository writes $\alpha_\ast$ where [LT] writes $\alpha$, to avoid the clash with the collision rate $\alpha$ — see [GLOSSARY](../GLOSSARY.md#notation-collisions-to-watch-for).)*

Two features deserve emphasis.

**Smallness scales with $\lvert H\rvert$.** A cumulant involving $k$ particles is required to be of size $\varepsilon^{\alpha_\ast k}$, not merely small. This is essential: the expansion generates sums over *many* subsets $H$, and only a per-particle gain can beat that entropy. The physical content is that correlating $k$ specified particles requires $k$ improbable coincidences.

**It is an ansatz, propagated, not a bound proved once.** The argument is an induction over layers: *assume* it at $\ell\tau$, expand the dynamics across one layer, *re-derive* it at $(\ell+1)\tau$ with a slightly degraded exponent. The degradation compounds, and the number of layers you can chain before the exponent is exhausted is what produces the $(\log\lvert\log\varepsilon\rvert)^{1/2}$ of [Lecture 06](06-time-scales.md).

## 3. Why not just propagate a norm?

The naive scheme — bound $\lVert f_s(\ell\tau)\rVert$ in a Banach space, expand one layer, bound $\lVert f_s((\ell+1)\tau)\rVert$ — loses a factor $C>1$ per layer and therefore dies after $O(1)$ layers. That is Lanford's theorem again, dressed up.

The cumulant scheme wins because it propagates *structure*, not merely size. The quantity being carried forward, $\varepsilon^{\alpha_\ast\lvert H\rvert}$, has room to absorb losses: a multiplicative constant per layer degrades the *exponent*, not the *smallness*, and an exponent has $\lvert\log\varepsilon\rvert$ worth of room to spend. Spending it at a compounding rate gives $\log\lvert\log\varepsilon\rvert$ layers. This is the single most important idea in the architecture, and it is worth pausing on:

> Lanford's constraint is $C^{L}\lesssim1$. The cumulant constraint is $C^{L}\lesssim\lvert\log\varepsilon\rvert$. The first gives $L=O(1)$; the second gives $L\lesssim\log\lvert\log\varepsilon\rvert$.

## 4. The partial time expansion

Here is the second key idea, and the one most easily missed.

Naively, to advance from $\ell\tau$ to $(\ell+1)\tau$ you would Duhamel-expand *everything* across the layer. But the main density $f_A$ is $O(1)$, not small, and expanding it generates the full factorial term count of [Lecture 07](07-bbgky-and-collision-trees.md) §3(a) *at every layer*, compounding across layers and destroying the scheme.

The **partial time expansion** instead:

- expands only the **cumulants** $E_H$ backwards across the layer, where the expansion is multiplied by the small factor $\varepsilon^{\alpha_\ast\lvert H\rvert}$ and the term count is therefore affordable;
- leaves $f_A$ **frozen** at the layer's initial time $(\ell-1)\tau$, unexpanded.

[LT] describes the intuition as: the gains carried by the cumulants offset the divergence of the time expansion. The bookkeeping fact is that the expensive object ($f_A$) is never expanded and the expanded object ($E_H$) is always accompanied by a gain.

## 5. What one layer costs

Expanding one layer of a cumulant produces a sum of Duhamel terms, each of which is an integral indexed by a **collision history molecule** $\mathbb{M}$ ([Lecture 09](09-molecules.md)):

$$
E_H\big((\ell+1)\tau\big)\ =\ \sum_{\mathbb{M}}\ \pm\,\mathcal{J}(\mathbb{M})\ +\ (\text{remainder}).
$$

Closing the induction requires:

$$
\sum_{\mathbb{M}}\big\lvert\mathcal{J}(\mathbb{M})\big\rvert\ \le\ \varepsilon^{\alpha_\ast'\lvert H\rvert},\qquad \alpha_\ast'\ \text{slightly smaller than}\ \alpha_\ast .
$$

Since the *number* of molecules is factorially large, this demands a per-molecule gain that grows with the molecule's complexity. Supplying it is the job of:

- **cutting** ([Lecture 10](10-cutting-operations.md)) — decompose $\mathbb{M}$ into elementary pieces with explicit integrals;
- **excess** ([Lecture 11](11-excess-and-proposition-3-8.md)) — the ledger recording the accumulated $\varepsilon$-power;
- **Proposition 3.8** — the theorem that the ledger always balances;
- **long bonds** and the **new algorithm** ([Lectures 12](12-torus-and-long-bonds.md), [13](13-the-new-algorithm.md)) — what makes it balance *on the torus*.

Everything from here to Lecture 13 exists to prove that one display.

## 6. What to look at in the visualization

[`viz/08-cumulant-layers.html`](../viz/08-cumulant-layers.html) is a schematic of the induction — a bookkeeping simulator, not a physics simulator.

- **The layer strip.** $[0,t_{\mathrm{fin}}]$ divided into $L$ layers. Each carries the current exponent $\alpha_\ast^{(\ell)}$, degrading as you step forward.
- **Step through layers** and watch $\varepsilon^{\alpha_\ast^{(\ell)}\lvert H\rvert}$ evaluated numerically for your chosen $\varepsilon$ and $\lvert H\rvert$. The induction "fails" — the bar turns red — when the bound exceeds $1$ and stops saying anything. Reading off the layer at which this happens, for various $\varepsilon$, reproduces the $\log\lvert\log\varepsilon\rvert$ law of [Lecture 06](06-time-scales.md) empirically. This is the most convincing way to see where the double logarithm comes from.
- **Naive vs cumulant comparison.** A toggle runs the "propagate a norm" scheme of §3 alongside. It dies after a couple of layers regardless of $\varepsilon$; the cumulant scheme survives longer and longer as $\varepsilon\to0$.
- **Partial vs full expansion.** A toggle expands $f_A$ too, and the term counter explodes — §4 made visible.

## 7. Simplifications made here

- **The per-layer degradation law is invented for pedagogy.** The visualization uses a simple compounding rule $\alpha_\ast\mapsto\alpha_\ast/C$; the actual loss in [LT] is not of this form and is inseparable from the combinatorics. What is faithful is the *shape* of the conclusion, $L\lesssim\log\lvert\log\varepsilon\rvert$.
- The cumulant expansion in §1 is stated for a single fixed time; [LT] carries additional structure (which particles are "root particle lines", how $f_A$ itself is updated) that is omitted.
- The remainder term in §5 is ignored.
- $\varepsilon^{\alpha_\ast\lvert H\rvert}$ is written without the constants and $\lvert H\rvert$-dependent factors present in [LT].

## 8. Exercises

1. Derive $E_{\{1,2\}}=f_2-f_1\otimes f_1$ from the expansion of §1 in the case $s=2$, being explicit about which terms are dropped.
2. Suppose each layer degrades $\alpha_\ast\mapsto\alpha_\ast/2$. Starting from $\alpha_\ast^{(0)}=1$, at which layer $L$ does $\varepsilon^{\alpha_\ast^{(L)}}$ exceed $1/2$? Express $L$ in terms of $\lvert\log\varepsilon\rvert$ and confirm the double logarithm.
3. Explain in one sentence why the ansatz exponent must scale with $\lvert H\rvert$ rather than being a single constant for all $H$.
4. Why can the main density $f_A$ be left unexpanded across a layer without breaking the Duhamel identity? What plays the role of the omitted terms?

---

**Previous:** [Lecture 07](07-bbgky-and-collision-trees.md) · **Next:** [Lecture 09 — Collision history molecules](09-molecules.md)
