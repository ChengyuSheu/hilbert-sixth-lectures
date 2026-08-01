# Lecture 11 — Excess and the main combinatorial proposition

> **Maps to:** [H6] §3.2 "Definition of excess" (**Definition 3.6**) and §3.3 "The main combinatorial proposition" (**Proposition 3.8**). Proved in §4.
> **Fidelity:** **Q** for the informal definition of excess as [H6] states it; **F** for the trivial-estimate discussion; **S** for Proposition 3.8, which is presented in shape only — the actual statement carries hypotheses this lecture does not set up.
> **Visualization:** [`viz/11-excess-ledger.html`](../viz/11-excess-ledger.html)
> **Prerequisites:** [Lectures 09](09-molecules.md), [10](10-cutting-operations.md).

---

## 1. The trivial estimate

Before defining excess we need the baseline it improves on.

Given a molecule $\mathbb{M}$ with its integral $\mathcal{J}(\mathbb{M})$ ([H6] eq. (2.3)), the **trivial estimate** bounds the integral by treating each constraint in the crudest available way — bounding each contact indicator by its obvious measure, each velocity integral by the Gaussian weight, each time integral by the layer width. It is honest and it is very lossy.

Crucially, **the trivial estimate is not good enough for long times.** It is roughly what Lanford's argument uses, and it fails exactly when the factorial term count of [Lecture 07](07-bbgky-and-collision-trees.md) §3(a) overwhelms it.

## 2. Excess

**[H6] Definition 3.6.** The **excess** of a molecule is, in the paper's own phrasing, *essentially the best power of $\varepsilon$ by which the above trivial estimate can be improved*:

$$
\big\lvert\mathcal{J}(\mathbb{M})\big\rvert\ \lesssim\ \varepsilon^{\,\mathrm{excess}(\mathbb{M})}\times(\text{trivial estimate}).
$$

Excess is therefore a *ledger*: it counts accumulated smallness in units of powers of $\varepsilon$. Its properties:

- **Additive under cutting.** If $\mathbb{M}$ is cut into $\mathbb{M}_1,\mathbb{M}_2$, then $\mathrm{excess}(\mathbb{M})\ge\mathrm{excess}(\mathbb{M}_1)+\mathrm{excess}(\mathbb{M}_2)$. This is exactly why cutting is the right tool: it converts a multiplicative estimate into an *additive score*.
- **Sourced by good elementary molecules.** Each $\{33\}$ contributes $\upsilon$; each $\{3A\}$ with a long bond contributes nearly $d-1$ ([Lecture 12](12-torus-and-long-bonds.md)); $\{2\}$ and $\{3\}$ contribute $0$; $\{4\}$ can contribute negatively.
- **Cutting-sequence dependent.** Different sequences give different excess. What matters is the *best achievable*, which is why the definition says "best power".

## 3. What has to be beaten

The requirement of [Lecture 08](08-cumulants-and-ansatz.md) §5 was

$$
\sum_{\mathbb{M}}\big\lvert\mathcal{J}(\mathbb{M})\big\rvert\ \le\ \varepsilon^{\alpha_\ast'\lvert H\rvert}.
$$

The number of molecules with a given number of atoms is factorially large; the trivial estimate is roughly constant per molecule. So convergence requires the excess to grow with molecular complexity, and the correct complexity measure — the one that matches how the term count grows — is the **circuit rank $\rho$**, the number of recollisions ([Lecture 09](09-molecules.md) §3).

Hence the shape of the requirement:

$$
\boxed{\ \mathrm{excess}(\mathbb{M})\ \gtrsim\ c\,\rho(\mathbb{M})\quad\text{for every collision history molecule }\mathbb{M},\ \text{with }c>0\text{ absolute.}\ }
$$

**A constant amount of smallness per recollision, uniformly over all molecules.** That is what must be proved.

## 4. Proposition 3.8

**[H6] Proposition 3.8** is that statement, made precise: for every CH molecule arising in the expansion, there exists a cutting sequence whose total excess reaches the required threshold. §4 of [H6] proves it, in two parts — a general case (§4.1) and a special case (§4.2).

Everything else in [H6] is downstream. Section 5 assembles Theorem 1 from it; the fluid theorems follow from Theorem 1. **Proposition 3.8 is the mathematical heart of the paper.**

Why it is hard, in one paragraph: excess is not local. You cannot look at an atom and read off its contribution, because the contribution depends on which ends are free — which depends on the cutting sequence — which is a global choice. So the proposition is an assertion about the existence of a good global strategy on an arbitrary graph, and its proof is an *algorithm* together with a proof that the algorithm always scores well enough. This is why the paper reads, in §4, like a combinatorics paper rather than an analysis paper.

## 5. Why the torus breaks the classical proof

In $\mathbb{R}^d$ the Burago–Ferleger–Kononenko theorem bounds the total number of collisions among $n$ hard spheres by $C(n,d)$, uniformly over configurations. That bound is used to control the *size of the molecules that can occur at all*, and with it the algorithms of [LT] achieve $\mathrm{excess}\gtrsim\rho$.

On $\mathbb{T}^d$, BFK is false: a fixed number of particles can collide arbitrarily many times. Molecules can be arbitrarily large with bounded particle number, and the classical accounting no longer closes. [H6] §1.4 states the two specific failures:

1. two particles can collide **twice in a row** — impossible in $\mathbb{R}^d$;
2. a fixed number of particles can collide **arbitrarily many times**.

The repair is the **long bond** ([Lecture 12](12-torus-and-long-bonds.md)) and the **new recursive algorithm** ([Lecture 13](13-the-new-algorithm.md)). The logic of the repair is elegant: if a molecule is so large that the classical accounting fails, then by pigeonhole *some* bond must connect two collisions separated by $O(1)$ in time — a long bond — and long bonds carry an unusually large gain. Failure of one mechanism supplies the hypothesis of the other.

## 6. What to look at in the visualization

[`viz/11-excess-ledger.html`](../viz/11-excess-ledger.html) is the accounting instrument for the whole proof.

- **The ledger.** For a chosen molecule and cutting sequence, a running tally: pieces produced, their types, the excess each contributes, and the total. Alongside it, the target $c\rho$, drawn as a bar you are trying to clear.
- **Sequence comparison.** Run several cutting sequences on the same molecule and compare final excess. The spread is often large — which is the visual argument for why a *smart* algorithm is needed and a greedy one is not enough.
- **Excess vs $\rho$ scatter.** Generate random molecules and plot achieved excess against $\rho$. Proposition 3.8 asserts every point lies above the line $\mathrm{excess}=c\rho$. Molecules that fall below under the *classical* rules are highlighted — and every one of them turns out to contain a long bond, which is the pigeonhole of §5, discovered rather than asserted.
- **Toggle "long-bond gain on/off."** With it off, torus molecules fail the target. Turn it on and the scatter lifts above the line. This is the single clearest picture of what [H6] adds to [LT].

## 7. Simplifications made here

- **Proposition 3.8 is not stated.** Its real formulation requires the full apparatus of [LT] — layer structure, resonance conditions, and the precise definition of the CH molecules that can arise — none of which is set up here. What is given is its *shape*: excess $\gtrsim$ constant $\times\ \rho$, achieved by some cutting sequence.
- Additivity of excess under cutting is stated as an inequality without the error terms that accompany it.
- The constant $c$ and the exponent $\upsilon$ are unspecified.
- The scatter plot in §6 uses the caricature scoring of [Lecture 10](10-cutting-operations.md) §7. It illustrates the *logic* of Proposition 3.8; it does not test it.

## 8. Exercises

1. Suppose $\mathrm{excess}\ge c\rho$ with $c>0$, and the number of molecules with $\rho$ cycles grows like $C^{\rho}\rho!$. What condition on $\varepsilon$ makes the sum converge? Compare with the $\varepsilon\to0$ order of limits in [Lecture 00](00-hilberts-sixth-problem.md) §4.
2. Show that additivity of excess under cutting is what turns a product bound into a sum, and explain why this is essential given that molecules have unboundedly many atoms.
3. Construct (on paper) a molecule with $\rho=3$ and argue for a cutting sequence achieving three $\{33\}$ pieces.
4. Why must the constant $c$ be *uniform over all molecules*? What would break if $c$ were allowed to degrade as $\rho$ grows?

---

**Previous:** [Lecture 10](10-cutting-operations.md) · **Next:** [Lecture 12 — Why the torus is hard, and what a long bond buys](12-torus-and-long-bonds.md)
