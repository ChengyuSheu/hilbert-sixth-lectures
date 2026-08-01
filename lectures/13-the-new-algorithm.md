# Lecture 13 — The new cutting algorithm

> **Maps to:** [H6] §1.4.2 "The new algorithm", and §4 "Proof of Proposition 3.8" — §4.1 the general case, §4.2 the special case.
> **Fidelity:** **Q** for the strategy as [H6] §1.4.2 states it; **S** throughout for §4, which is a long technical argument summarized here only in structure.
> **Visualization:** [`viz/13-algorithm-walkthrough.html`](../viz/13-algorithm-walkthrough.html)
> **Prerequisites:** [Lectures 10](10-cutting-operations.md)–[12](12-torus-and-long-bonds.md).

---

## 1. What has to be delivered

[Proposition 3.8](11-excess-and-proposition-3-8.md) demands: for every collision history molecule $\mathbb{M}$ that can arise, exhibit a cutting sequence whose total excess meets the threshold — roughly, a constant amount of gain per independent cycle.

The classical algorithms of [LT] ([Lecture 10](10-cutting-operations.md) §5) do this on $\mathbb{R}^d$ using BFK. On $\mathbb{T}^d$ they leave a gap, filled by long bonds. The new algorithm is the *scheduling* problem: **when, and in what order, to spend the long-bond gains.**

## 2. The strategy

**[H6] §1.4.2.** Recursively cut pathological molecules into elementary pieces, isolating one "bad" $\{3A\}$-molecule with a long bond per iteration:

> Every time a long bond is identified, cut at that bond and **defer the new obligation to the next iteration.**

Unpacked into the loop it describes:

1. **Inspect** $\mathbb{M}$. If the classical routines already achieve the required excess, run them and stop.
2. **Otherwise** the molecule is pathological in the torus-specific way: too many atoms for the classical accounting. By the pigeonhole of [Lecture 12](12-torus-and-long-bonds.md) §5, a **long bond** exists.
3. **Locate** a $\{3A\}$-molecule containing that long bond. By property (♣) it carries a gain of nearly $\varepsilon^{d-1}$ — considerably more than a routine $\{33\}$.
4. **Cut** at the long bond. Bank the gain in the ledger.
5. **Defer.** The cut leaves a residual molecule with new free/fixed ends and a new obligation. Do not discharge it now — **pass it to the next iteration**, where it is handled together with whatever that iteration's inspection reveals.
6. **Recurse** on the residue.

Steps 4–5 are the mechanism. The alternative — trying to settle each cut's obligations immediately — leads to bookkeeping that does not close, because discharging an obligation locally can consume freedom needed for a later, larger gain.

## 3. Why deferral is the right move

The technical payoff, as [H6] §1.4.2 puts it, is that this scheme **efficiently accumulates gains from multiple long-bond cuts**, so that the total excess reaches the required threshold despite the unbounded collision counts on the torus.

The intuition worth carrying: each iteration must produce *net* progress. A long-bond cut delivers a large gain ($\approx\varepsilon^{d-1}$) but creates a debt (the residual obligation). Deferring means the debt is paid out of the *next* iteration's gain rather than the current one, so each iteration's ledger entry is positive and the total telescopes. Trying to pay immediately can leave an iteration net-negative, and the induction fails.

This is a familiar shape — amortized analysis, in the sense of algorithm design. The excess is a potential function; the deferral scheme is what keeps the amortized cost per iteration non-negative.

## 4. General case and special case

[H6] §4 splits the proof:

- **§4.1, the general case** — the main recursion above, applying whenever the molecule admits enough structure to locate a long bond and a suitable $\{3A\}$-molecule around it.
- **§4.2, the special case** — degenerate configurations where the general procedure stalls: molecules too small or too rigid for the pigeonhole, or where the located long bond sits in a position that does not yield a usable $\{3A\}$-molecule. These are handled by a separate, more explicit analysis.

This is the same shape as [LT]'s *resonance* handling ([Lecture 10](10-cutting-operations.md) §5): a main algorithm plus a catalogue of exceptional configurations. In this subject the exceptional cases are never a formality — they are where the constants are actually determined, and where most of the page count goes.

## 5. Where this sits in the whole proof

| Layer | Object | Lecture |
|---|---|---|
| Theorem 1 | $\lVert f_s-\prod n\cdot\mathbf{1}_{\mathcal{D}_s}\rVert_{L^1}\le\varepsilon^\theta$ | [05](05-chaos-and-theorem-1.md) |
| ⬑ needs | cumulant ansatz propagated over $L$ layers | [08](08-cumulants-and-ansatz.md) |
| ⬑ needs | $\sum_{\mathbb{M}}\lvert\mathcal{J}(\mathbb{M})\rvert$ small | [07](07-bbgky-and-collision-trees.md), [09](09-molecules.md) |
| ⬑ needs | **Proposition 3.8**: excess $\gtrsim c\rho$ | [11](11-excess-and-proposition-3-8.md) |
| ⬑ needs | a good cutting sequence for every $\mathbb{M}$ | [10](10-cutting-operations.md) |
| ⬑ needs on $\mathbb{T}^d$ | long bonds + **this algorithm** | [12](12-torus-and-long-bonds.md), **13** |

Reading the column bottom-up gives the logical order; top-down gives the order of exposition in the paper. The bottom row is what is new in [H6] relative to [LT].

## 6. What to look at in the visualization

[`viz/13-algorithm-walkthrough.html`](../viz/13-algorithm-walkthrough.html) executes the loop of §2 step by step on a molecule you choose.

- **Step mode.** One click per iteration, with the current step of §2 highlighted: *inspect → detect long bond → locate $\{3A\}$ → cut → bank → defer → recurse*.
- **The deferred-obligation stack.** A visible stack of pending obligations, pushed at step 5 and popped in later iterations. Watching it fill and drain is the point of the visualization — it is the one part of §1.4.2 that is genuinely hard to picture from the text.
- **Ledger with amortization.** Two traces: raw gain banked per iteration, and *net* gain after servicing deferred obligations. The claim of §3 is that the net trace never goes negative; the visualization lets you test that on the presets.
- **Immediate-payment mode.** A toggle that services each obligation at the moment it is created instead of deferring. On the harder presets the net trace dips below zero and the run fails to reach the target. This is the clearest available demonstration of *why* deferral is not a stylistic preference.
- **Classical-only mode.** Disables long-bond detection, reducing the algorithm to [LT]'s routines. On the torus presets it stalls — reproducing, on a small example, exactly the gap that [H6] §1.4 exists to fill.
- **Special-case preset.** A molecule on which the general recursion stalls, illustrating why §4.2 must exist.

## 7. Simplifications made here

- **§4 of [H6] is not reproduced.** Its actual content — the precise conditions triggering each branch, the constants, the interaction with layer structure and resonances — runs many pages and depends on definitions from [LT] not set up in this repository. What is given here is the shape of the recursion, faithfully, and nothing about its execution.
- The amortization framing in §3 is **this repository's interpretive gloss**. It is a helpful way to think about deferral; it is not language the paper uses, and it should not be attributed to the authors.
- The distinction between §4.1 and §4.2 is described in general terms; the actual dividing line is technical.
- The walkthrough uses the caricature scoring of [Lecture 10](10-cutting-operations.md) §7 and hand-built presets. It shows how the algorithm *behaves*; it does not verify Proposition 3.8.

## 8. Exercises

1. Formulate the deferral scheme as an amortized-analysis argument: define the potential function and state what must be shown at each iteration.
2. On a molecule with two long bonds, compare cutting at both immediately versus deferring the second. Which yields larger total excess in the caricature scoring, and why?
3. Why must the algorithm *locate a $\{3A\}$-molecule containing* the long bond, rather than cutting at the long bond alone? (Consider where property (♣) actually applies.)
4. Trace the dependency table of §5 upward and identify, at each step, what would break if Proposition 3.8 held with $c$ depending on $\rho$.

---

**Previous:** [Lecture 12](12-torus-and-long-bonds.md) · **Next:** [Lecture 14 — Incompressible Navier–Stokes–Fourier](14-navier-stokes-fourier.md)
