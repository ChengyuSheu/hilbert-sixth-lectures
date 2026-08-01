# Lecture 09 — Collision history molecules

> **Maps to:** [H6] §2.1 "Molecules and associated notions", which summarizes [LT].
> **Fidelity:** **Q** for the definition of degree and for "recollisions = independent cycles"; **F** for the anatomy of atoms, bonds and particle lines; **S** for the classification of molecule types, which is stated informally.
> **Visualization:** [`viz/09-molecule-explorer.html`](../viz/09-molecule-explorer.html)
> **Prerequisites:** [Lectures 07](07-bbgky-and-collision-trees.md), [08](08-cumulants-and-ansatz.md).

---

## 1. The idea

Each Duhamel term of [Lecture 07](07-bbgky-and-collision-trees.md) is an integral over collision times, impact parameters and velocities. Its *size* depends on almost none of that detail — it depends on the **combinatorial pattern** of which particle collided with which, in what order.

A **molecule** is that pattern: a graph that records the topology of a collision history and discards the geometry. It is the exact analogue of a Feynman diagram, and it plays the same role — an index set for the terms of an expansion, on which one proves estimates *diagrammatically*.

The pipeline is:

$$
\text{collision history}\ \longrightarrow\ \text{molecule }\mathbb{M}\ \longrightarrow\ \text{integral }\mathcal{J}(\mathbb{M})\ \longrightarrow\ \text{bound via cutting}.
$$

## 2. Anatomy

**Atoms** $\mathfrak{n}$ — the vertices. Each represents one interaction event, and carries a time $t_{\mathfrak{n}}$.

- **C-atoms**: genuine **c**ollisions.
- **O-atoms**: **o**verlaps — configurations where two spheres would occupy overlapping positions. These arise from the $\varepsilon$-shifts in the BBGKY operator and from the difference between pre- and post-collisional parametrizations. They are not physical collisions but they must be tracked, and they behave differently in the estimates.

**Bonds** — the edges. A bond joins two atoms and represents a free-flight trajectory segment of a single particle between two of its interaction events.

**Particle lines** — a maximal chain of bonds belonging to one particle: the particle's whole life. Each has a **bottom end** (initial time) and a **top end** (final time). Lines corresponding to the particles appearing in the cumulant $E_H$ are the **root particle lines**.

**Degree.** From [LT]: *the degree of an atom is the number of incident bonds plus free ends, excluding fixed ends.* Ends are the dangling half-edges at the top and bottom of the diagram; some are "fixed" (pinned by the initial data or by the cumulant's arguments) and some are "free" (integrated over). Degree counts the free directions available at that atom — which is exactly what controls how much integration is available there, hence how much smallness can be extracted.

**Layers.** Sub-molecules $\mathbb{M}_\ell$ collecting the atoms whose times fall in $[(\ell-1)\tau,\ell\tau]$ — the time layering of [Lecture 08](08-cumulants-and-ansatz.md), inherited by the diagram.

## 3. Recollisions are cycles

This is the identification that makes the whole approach work.

> **[LT].** The number of recollisions equals the number of **independent cycles** $\rho$ in $\mathbb{M}$ — its **circuit rank** as an undirected graph: $\rho=E-V+c$ with $E$ bonds, $V$ atoms, $c$ connected components.

Why: a collision history with no recollisions is a *tree*, because each new particle attaches to exactly one existing one and never rejoins ([Lecture 07](07-bbgky-and-collision-trees.md) §3(b)). Every time two particles that already share history meet again, the corresponding edge closes a loop.

The consequences are the reason for the entire formalism:

- **Trees ($\rho=0$) reconstruct the Boltzmann equation.**
- **Each independent cycle carries an $\varepsilon$-gain**, because closing a loop means a trajectory has to hit a target of size $\varepsilon$.
- **The estimate becomes graph theory.** "How much smallness does this term carry" becomes "how much can be extracted from a graph with $V$ atoms and circuit rank $\rho$" — a question with a combinatorial answer, uniform over the geometric details.

That last point is what makes long times reachable. The old argument asked for *measure of recolliding configurations*, a quantity that degrades as time grows. The new one asks for a *structural* property of the graph, which does not.

## 4. Elementary molecule types

The estimates classify small molecules by the degrees of their atoms. Following [LT]:

| Type | Description | Behaviour |
|---|---|---|
| $\{2\}$ | a single degree-2 atom | **normal** — no gain |
| $\{3\}$ | a single degree-3 atom | **normal** — no gain |
| $\{4\}$ | a single degree-4 atom | costly; the algorithms are designed to **minimize** their number |
| $\{33\}$ | two adjacent degree-3 atoms | **good** — gains a factor $\varepsilon^{\upsilon}$ |
| $\{3A\}$ | the class in which the long-bond gain is proved | see [Lecture 12](12-torus-and-long-bonds.md) |

Read the table as a scoring system. The cutting algorithms of [Lectures 10](10-cutting-operations.md) and [13](13-the-new-algorithm.md) are *searches* whose objective is:

$$
\text{maximize }\#\{33\},\qquad \text{minimize }\#\{4\}.
$$

The total gain accumulated is the **excess** of [Lecture 11](11-excess-and-proposition-3-8.md), and Proposition 3.8 says the search always succeeds well enough.

## 5. The integral attached to a molecule

To each molecule is attached $\mathcal{J}(\mathbb{M})$ — [H6] equation (2.3) — an integral over the collision times of all atoms and the impact parameters of all bonds, of a product of indicator functions expressing the geometric constraints (particle $i$ must reach particle $j$'s $\varepsilon$-sphere at time $t_{\mathfrak{n}}$, etc.).

The **trivial estimate** bounds $\mathcal{J}(\mathbb{M})$ by taking each constraint at face value. It is far too lossy for long times. The quantity that measures the improvement is the excess, and the method for obtaining it is cutting.

## 6. What to look at in the visualization

[`viz/09-molecule-explorer.html`](../viz/09-molecule-explorer.html) is the translator between the two pictures.

- **Left: space-time collision history.** Particle world-lines on $\mathbb{T}^2$ with time vertical. Click to add a collision between two lines at a chosen time; drag to change times.
- **Right: the molecule.** Rebuilt live. Atoms placed by time, bonds drawn, each atom labelled with its degree, free ends dangling, fixed ends marked.
- **Live readouts:** $V$, $E$, components $c$, and $\rho=E-V+c$. Add a recollision and $\rho$ increments — the identity of §3, verified by construction rather than asserted.
- **Type highlighter.** Adjacent degree-3 pairs are outlined in green ($\{33\}$, good); degree-4 atoms in red ($\{4\}$, costly). Building a history and watching the score change is the fastest way to develop intuition for what the algorithms are hunting.
- **Layer bands.** Toggle the layer width $\tau$ and see $\mathbb{M}$ partitioned into $\mathbb{M}_\ell$.
- **Gallery.** Preset histories: a pure tree, a single recollision, a double collision (torus-only — see [Lecture 12](12-torus-and-long-bonds.md)), a high-$\rho$ tangle.

## 7. Simplifications made here

- **The type classification is genuinely more intricate than §4.** [LT] distinguishes many sub-cases, with conditions on which ends are free or fixed, on layer membership, and on whether atoms are C or O. The table gives the scoring intuition, not the definitions.
- The distinction between C-atoms and O-atoms is described but not used; in the real estimates it matters a great deal.
- $\mathcal{J}(\mathbb{M})$ is described qualitatively; equation (2.3) of [H6] is not reproduced, since it depends on notation from [LT] that this lecture does not set up.
- The visualization enforces graph consistency but does **not** check that a drawn history is *physically realizable* — many drawable molecules correspond to no actual hard-sphere trajectory. Realizability is precisely what the geometric estimates decide.

## 8. Exercises

1. Verify $\rho=E-V+c$ on three examples from the gallery.
2. A collision history of $k$ particles with no recollisions: how many atoms and bonds? Confirm $\rho=0$.
3. Two particles colliding twice: draw the molecule. What is $\rho$? What are the degrees? Then explain why this molecule cannot occur in $\mathbb{R}^d$ ([Lecture 12](12-torus-and-long-bonds.md)).
4. Why should a degree-4 atom be *worse* than two degree-3 atoms, given that both involve four bond-ends? Answer in terms of available integrations.

---

**Previous:** [Lecture 08](08-cumulants-and-ansatz.md) · **Next:** [Lecture 10 — Cutting operations and elementary molecules](10-cutting-operations.md)
