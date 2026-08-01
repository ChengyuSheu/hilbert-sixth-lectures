# Lecture 10 — Cutting operations and elementary molecules

> **Maps to:** [H6] §2.2 "Cutting operations", §3.1 "Integrals for elementary molecules", **Definitions 2.4 and 2.6**, **Propositions 3.2–3.4**. Underlying material in [LT].
> **Fidelity:** **Q** for the definition of cutting and the factorization $I_{\mathbb{M}}=I_{\mathbb{M}_1}\circ I_{\mathbb{M}_2}$; **F** for the strategy; **S** for the elementary-molecule bounds, which are stated as orders of magnitude without their hypotheses.
> **Visualization:** [`viz/10-cutting-sandbox.html`](../viz/10-cutting-sandbox.html)
> **Prerequisites:** [Lecture 09](09-molecules.md).

---

## 1. The problem cutting solves

We must bound $\mathcal{J}(\mathbb{M})$, a high-dimensional integral over all collision times and impact parameters of a molecule with possibly hundreds of atoms, with the geometric constraints of every bond coupled together. Attacking it head-on is hopeless.

The strategy is the one used for any complicated integral: **factor it**. If the integral over the variables of a sub-molecule can be performed *first*, holding everything else fixed, and if that inner integral admits a bound uniform in the frozen variables, then the estimate splits:

$$
\text{bound}(\mathbb{M})\ \le\ \text{bound}(\mathbb{M}_1)\times\text{bound}(\mathbb{M}_2).
$$

Iterating decomposes an arbitrarily complicated molecule into pieces so small — one or two atoms — that their integrals are computable in closed form. The gains from all the pieces multiply, and their product is the **excess** of [Lecture 11](11-excess-and-proposition-3-8.md).

## 2. The cutting operation

**[LT]; summarized in [H6] §2.2.** A *cutting* partitions the molecule $\mathbb{M}$ into two disjoint sub-molecules

- $\mathbb{M}_1$ — **cut free**: its variables are integrated first, with the bonds crossing the cut treated as free ends;
- $\mathbb{M}_2$ — **cut fixed**: its variables are held fixed during that integration, with the crossing bonds treated as fixed ends;

in such a way that the integration operators compose:

$$
\boxed{\ I_{\mathbb{M}}\ =\ I_{\mathbb{M}_1}\circ I_{\mathbb{M}_2}\ }
$$

This is where the "free ends / fixed ends" language of [Lecture 09](09-molecules.md) §2 pays off. **Degree — bonds plus free ends, excluding fixed ends — is exactly the number of integration variables available at an atom once a cut has been chosen.** The degree is therefore not a property of the molecule alone but of the molecule *together with the cutting sequence*, which is why the same atom can be a $\{3\}$ under one cutting and a $\{4\}$ under another, and why choosing the cutting sequence well is the entire game.

A **cutting sequence** is a repeated application of this operation, reducing $\mathbb{M}$ to a collection of elementary molecules. Different sequences give different products of bounds; the algorithms of [Lecture 13](13-the-new-algorithm.md) are searches for a good one.

## 3. Elementary molecules

**[H6] Definitions 2.4 and 2.6** identify the terminal pieces: molecules with one or two atoms, classified by their degree profile — the $\{2\}$, $\{3\}$, $\{4\}$, $\{33\}$ (and, in [H6], $\{3A\}$) of [Lecture 09](09-molecules.md) §4.

For each, **[H6] Propositions 3.2, 3.3, 3.4** supply an explicit bound on the associated integral, obtained by direct computation of the volume of the set of configurations satisfying the constraints. In outline:

| Elementary molecule | Available integrations | Constraint | Resulting factor |
|---|---|---|---|
| $\{2\}$ | few | one contact condition | $O(1)$ — no gain |
| $\{3\}$ | one more | one contact condition | $O(1)$ — no gain |
| $\{4\}$ | most constrained | contact conditions saturate the freedom | **costly** |
| $\{33\}$ | two adjacent degree-3 atoms | the two contact conditions cannot both be satisfied on a large set | **gain $\varepsilon^{\upsilon}$** |
| $\{3A\}$ + long bond | as above, plus $O(1)$ time separation | relative velocity constrained against lattice directions | **gain $\approx\varepsilon^{d-1}$** ([Lecture 12](12-torus-and-long-bonds.md)) |

The mechanism behind every one of these is the same, and worth stating once: *a contact condition asks a trajectory to hit a sphere of radius $\varepsilon$; if there is enough freedom left to move the trajectory, the set of parameters achieving the hit has measure $O(\varepsilon^{d-1})$; if the freedom has already been spent elsewhere, no gain is available.* Cutting well means arranging for the freedom to still be there when each contact condition is imposed.

## 4. The scoring problem

Every cutting sequence yields

$$
\big\lvert\mathcal{J}(\mathbb{M})\big\rvert\ \lesssim\ \prod_{\text{pieces}}(\text{factor})\ =\ (\text{no-gain factors})\times\varepsilon^{\upsilon\cdot\#\{33\}}\times(\text{penalties from }\#\{4\}).
$$

So:

$$
\textbf{maximize }\#\{33\}\ ,\qquad \textbf{minimize }\#\{4\}\ .
$$

And the target is set by the term count: the sum over molecules must converge, so the gain must be at least of the order of the number of terms — which, by [Lecture 07](07-bbgky-and-collision-trees.md), is factorially large. Since each independent cycle is one recollision, the natural currency is:

> **Need roughly one good $\{33\}$ molecule per independent cycle**: $\#\{33\}\gtrsim\rho$.

That single inequality is the informal content of [Proposition 3.8](11-excess-and-proposition-3-8.md), and the reason the cutting algorithms are structured as they are.

## 5. The classical algorithms (from [LT])

[H6] §2 summarizes; [LT] proves. Two algorithms in sequence:

**Cutting algorithm I — reducing to UD molecules.** Reduce an arbitrary multi-layer molecule to a two-layer *up–down* (UD) structure:
1. **Layer refinement**: subdivide layers so that each is a forest (bounded cycle count within a layer).
2. **Layer selection**: identify two layers $\ell_1,\ell_2$ such that enough particle lines connect $\mathbb{M}_U$ (up) and $\mathbb{M}_D$ (down).
3. **Resonance handling**: exceptional configurations — *strong* and *weak resonances* — where $\{33\}$ molecules yield no $\varepsilon$-gain, triggering alternative routines.

**Cutting algorithm II — analyzing UD molecules.** Given a UD molecule, a dichotomy on the number of *2-connections* (atoms with two bonds to the opposite layer) and the components of degree-3 atoms produces four toy models:

| Model | Condition | Routine |
|---|---|---|
| I | one bond per upper atom | greedy cutting; yields $\#\{33\}\gtrsim\rho$ |
| I⁺ | subset $X$ of upper atoms connected down, $\#\mathrm{comp}(X)\ll\rho$ | MAINUD |
| II | as I but $\#\mathrm{comp}(X)\gtrsim\rho$ | 3COMPUP |
| III | many 2-connections ($\gtrsim\rho$) | DOWN |

with named routines UP, DOWN, 2CONNUP, 3COMPUP, MAINUD selecting the cutting order.

**This machinery works on $\mathbb{R}^d$.** [H6]'s contribution is that on $\mathbb{T}^d$ it does not suffice, because it leans on the Burago–Ferleger–Kononenko collision bound. The repair is [Lectures 12](12-torus-and-long-bonds.md) and [13](13-the-new-algorithm.md).

## 6. What to look at in the visualization

[`viz/10-cutting-sandbox.html`](../viz/10-cutting-sandbox.html) lets you play the scoring game by hand.

- **Load a molecule** from the gallery (or import one built in [Lecture 09](09-molecules.md)'s explorer).
- **Cut** by selecting a sub-molecule and choosing *cut free* / *cut fixed*. The molecule splits; crossing bonds become free or fixed ends accordingly, **and the degrees update** — which is the single most illuminating thing to watch, because it shows degree as a consequence of your choices rather than a fixed label.
- **The ledger** on the right accumulates the running product: counts of $\{2\},\{3\},\{4\},\{33\}$ and the total $\varepsilon$-power. Compare against the target $\varepsilon^{\upsilon\rho}$.
- **Greedy vs. hand-played.** A button runs a greedy $\{33\}$-maximizing heuristic. On easy molecules it matches you. On tangled ones you can usually beat it — which is exactly why [LT] needs four separate model-specific routines instead of one greedy rule.
- **Failure demo.** One gallery entry is a molecule where every cutting sequence leaves $\#\{33\}\ll\rho$. It is torus-specific, and it is the reason long bonds had to be invented. Try to beat it; you cannot; then read [Lecture 12](12-torus-and-long-bonds.md).

## 7. Simplifications made here

- **The table in §3 gives orders of magnitude, not the propositions.** [H6] Propositions 3.2–3.4 have hypotheses (on which ends are fixed, on time separations, on velocity truncations) that are omitted entirely here.
- $\upsilon$ is treated as an unspecified positive constant.
- §5's account of algorithms I and II compresses many dozens of pages, and the definitions of "2-connection", "strong/weak resonance", and the four models are given only by their names and rough conditions.
- The sandbox's scoring rule is a faithful *caricature*: it implements "adjacent degree-3 pairs give $\varepsilon^{\upsilon}$, degree-4 atoms cost", not the real propositions. Do not read numerical exponents out of it.

## 8. Exercises

1. Take a path molecule $\mathfrak{n}_1-\mathfrak{n}_2-\mathfrak{n}_3-\mathfrak{n}_4$ with all interior atoms of degree 3. Find a cutting sequence maximizing $\#\{33\}$. Is it unique?
2. Show that a tree molecule ($\rho=0$) needs no gain at all for the sum over molecules to converge on a short time interval. Where does this stop being true?
3. Explain why the same atom can have different degrees under different cutting sequences, and why this makes the optimization genuinely combinatorial rather than local.
4. In the failure demo of §6, count $\rho$ and the best achievable $\#\{33\}$. What ratio would be needed, and what is achieved?

---

**Previous:** [Lecture 09](09-molecules.md) · **Next:** [Lecture 11 — Excess and the main combinatorial proposition](11-excess-and-proposition-3-8.md)
