# Lecture 12 — Why the torus is hard, and what a long bond buys

> **Maps to:** [H6] §1.4.1 "Long bonds and new elementary molecules".
> **Fidelity:** **Q** for the two torus pathologies, the definition of a long bond, and the heuristic; **F** for property (♣); **S** for the geometric mechanism, which is described qualitatively.
> **Visualization:** [`viz/12-torus-recollisions.html`](../viz/12-torus-recollisions.html)
> **Prerequisites:** [Lectures 09](09-molecules.md)–[11](11-excess-and-proposition-3-8.md).

---

## 1. This is the new idea

Lectures 07–11 describe machinery that already existed, in [LT], for $\mathbb{R}^d$. **This lecture and the next contain what [H6] actually adds.** If you read only two lectures in the technical half, read these.

## 2. The two pathologies of $\mathbb{T}^d$

[H6] §1.4.1 identifies two differences from the Euclidean case, both consequences of the fact that on a torus straight lines come back.

**(i) Double collisions exist.** *It is possible for two particles to collide twice in a row, which is impossible in $\mathbb{R}^d$.*

In $\mathbb{R}^d$, after an elastic collision the relative velocity satisfies $(v_i-v_j)\cdot\omega>0$: the pair separates, and since both then move in straight lines, they separate forever. On $\mathbb{T}^d$ they can wrap around and meet again with no third particle involved. In molecule terms, the two-atom cycle of [Lecture 09](09-molecules.md) Exercise 3 is *realizable*, and new elementary molecule types must be admitted that simply do not arise in the Euclidean theory.

**(ii) The collision count is unbounded.** *It is possible for a fixed number of particles to collide arbitrarily many times.*

This is the serious one. In $\mathbb{R}^d$, Burago–Ferleger–Kononenko (Ann. of Math. 1998) bound the total number of collisions among $n$ hard spheres by a constant $C(n,d)$ depending only on $n$ and $d$ — uniformly over all initial configurations. On $\mathbb{T}^d$ there is no such bound: a few particles can bounce around the torus and keep meeting indefinitely.

**Why that is fatal to the old argument.** The classical accounting uses BFK to bound how large a molecule can be for a given number of particles. Without it, molecules can be arbitrarily large with bounded particle number, and the excess bookkeeping of [Lecture 11](11-excess-and-proposition-3-8.md) no longer closes: there are configurations where the classical cutting sequences leave $\#\{33\}\ll\rho$, and the required excess is not achieved.

## 3. The long bond

**[H6] §1.4.1, definition.** A bond $e$ joining atoms $\mathfrak{n}_1,\mathfrak{n}_2$ is a **long bond** if the corresponding collision times are separated by an $O(1)$ amount:

$$
\boxed{\ \lvert t_{\mathfrak{n}_1}-t_{\mathfrak{n}_2}\rvert\ \ge\ O(1).\ }
$$

That is: the particle represented by that bond flew freely for a time of order one — many particle diameters — between its two interactions.

## 4. Property (♣): why long bonds are valuable

**[H6] §1.4.1.** Any $\{3A\}$-molecule containing a long bond gains **nearly $\varepsilon^{d-1}$** rather than the naive $\varepsilon^{1-}$.

For $d=3$ that is $\varepsilon^{2}$ against $\varepsilon^{1}$: the gain is squared. For $d=2$ they coincide, and the improvement is in the loss of the "$-$" — a technical but decisive difference.

**The mechanism.** A long free flight is a strong geometric constraint on the torus. Over a time $O(1)$ a particle with velocity $v$ traverses a path that wraps the torus, and for it to arrive at a *specific* target sphere of radius $\varepsilon$ at a specific later time, its velocity must lie in a thin neighbourhood of a set determined by the **integer lattice vectors** of the torus: the displacement must equal $v\Delta t$ modulo $\mathbb{Z}^d$. Long flight times make this a genuinely restrictive Diophantine-flavoured condition, and the measure of admissible velocities is small — small enough to yield $\varepsilon^{d-1-\theta}$ instead of $\varepsilon^{1-}$.

Short flights give nothing comparable: over a short time the particle has not travelled far, does not wrap, and the "which lattice copy" question has only one answer.

Note the reversal of intuition. Long free flights sound like *weak* constraints — the particle has more room. The opposite is true here, because the constraint being imposed is *arrival at a prescribed small target*, and more travel time means more sensitivity of the arrival point to the velocity. The gain comes from that sensitivity.

## 5. The pigeonhole that makes it work

The two halves of the argument fit together by a counting principle.

> **[H6] §1.4.1 heuristic.** *If the collision number grows too large, adjacent collisions must be $O(1)$-separated in time.*

Spelled out: within a time interval of length $\tau$, a molecule with very many atoms has very many bonds. The collision times all lie in that interval. If *every* bond were short, all these collisions would be crammed into short sub-intervals — a configuration that a local, essentially Euclidean analysis (where BFK *does* apply, because over short times the torus looks like $\mathbb{R}^d$) rules out. Hence at least one bond must be long.

So the logic is:

$$
\text{BFK fails}\ \Longrightarrow\ \text{molecules can be huge}\ \Longrightarrow\ \text{some bond is long}\ \Longrightarrow\ \text{extra gain }\varepsilon^{d-1-\theta}.
$$

**The failure of the classical bound supplies exactly the hypothesis needed for the replacement.** That is the elegance of §1.4.1, and it is the kind of argument worth recognizing when you meet it elsewhere: the bad case is not handled *despite* being bad, it is handled *because* being bad forces structure.

## 6. New elementary molecules

Because double collisions are realizable and long bonds must be tracked, [H6] must extend the list of elementary molecules from [LT] — hence the $\{3A\}$ class and the new bounds of Propositions 3.2–3.4 ([Lecture 10](10-cutting-operations.md) §3). This is the "new elementary molecules" half of the section title; the "long bonds" half is §§3–5 above. The two are inseparable: the new molecules exist to be the carriers of the long-bond gain.

## 7. What to look at in the visualization

[`viz/12-torus-recollisions.html`](../viz/12-torus-recollisions.html) is a side-by-side plane/torus comparison.

- **Left: $\mathbb{R}^2$.** Two particles collide. Their trajectories diverge and never meet again. A counter of pair recollisions stays at $0$ forever. Try to force a second collision by dragging the initial data — you cannot, and after a minute of trying the impossibility becomes obvious rather than merely stated.
- **Right: $\mathbb{T}^2$.** Same initial data, periodic wrapping. The pair meets again. The unfolded covering-space picture shows *why*: the second meeting is with a **lattice translate** $x_j+k$, $k\in\mathbb{Z}^2$, and the picture makes the role of the integer lattice in §4 concrete.
- **Long-bond detector.** Bonds with $\lvert t_{\mathfrak{n}_1}-t_{\mathfrak{n}_2}\rvert\ge$ threshold are drawn thick and gold; the threshold is a slider. Watch how the fraction of long bonds rises as you cram more collisions into the interval — the pigeonhole of §5, as an empirical curve.
- **Velocity-set explorer.** Fix a source atom and a target sphere and a flight time $\Delta t$; the panel shades the set of velocities achieving the hit, and reports its measure. Sweep $\Delta t$ from short to long and watch the shaded set fragment into thin slivers around lattice directions and its measure collapse from $\approx\varepsilon^{1}$ toward $\approx\varepsilon^{d-1}$. **This is property (♣), rendered.**
- **BFK stress test.** A preset with 4 particles on $\mathbb{T}^2$ whose collision counter runs without bound, next to the same configuration on $\mathbb{R}^2$ where it saturates.

## 8. Simplifications made here

- **The lattice mechanism in §4 is qualitative.** The actual estimate is a careful measure computation over the constrained velocity set, in [H6] §3.1 and §4; the Diophantine framing here is an interpretive gloss and should not be quoted as the paper's argument.
- "$O(1)$" in the long-bond definition hides a specific constant chosen relative to $\tau$ and the other parameters.
- The pigeonhole in §5 is presented as clean; in [H6] it is entangled with the cutting algorithm ([Lecture 13](13-the-new-algorithm.md)) rather than being a standalone lemma.
- BFK is quoted for its statement only.
- The visualization's velocity-set measure is computed by Monte Carlo sampling in $d=2$ at simulation-scale $\varepsilon$, so the exponents it reports are indicative, not asymptotic.

## 9. Exercises

1. Prove that in $\mathbb{R}^d$ two hard spheres collide at most once. (Two lines, using $(v_i-v_j)\cdot\omega>0$ after the collision.)
2. On $\mathbb{T}^1$ (or $\mathbb{T}^2$), construct explicit initial data for two particles that collide twice. Compute the time between collisions and decide whether the bond is long.
3. Fix a target sphere of radius $\varepsilon$ at distance $L$ and flight time $\Delta t$. Estimate the measure of the set of velocities hitting it, first in $\mathbb{R}^d$, then in $\mathbb{T}^d$ with $\Delta t$ large enough to wrap. Where does the extra smallness come from?
4. Explain why the implication in §5 runs the *right* way — i.e. why "many collisions" is a hypothesis one is entitled to assume when it is the difficult case.

---

**Previous:** [Lecture 11](11-excess-and-proposition-3-8.md) · **Next:** [Lecture 13 — The new cutting algorithm](13-the-new-algorithm.md)
