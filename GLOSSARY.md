# Glossary and notation

Notation follows [H6] = [arXiv:2503.01800](https://arxiv.org/abs/2503.01800) and [LT] = [arXiv:2408.07818](https://arxiv.org/abs/2408.07818). Where this repository introduces a symbol for exposition, it is marked *(ours)*.

## Kinetic-theory layer

| Symbol | Meaning | Source |
|---|---|---|
| $d$ | dimension, $d\in\{2,3\}$ | [H6] §1.2 |
| $\mathbb{T}^d$ | the periodic box (torus); the paper works here, **not** on $\mathbb{R}^d$ | [H6] §1.2.1 |
| $N$ | number of particles (random under the grand canonical ensemble) | [H6] Def. 1.3 |
| $\varepsilon$ | particle diameter | [H6] Def. 1.1 |
| $z_j=(x_j,v_j)$ | phase point of particle $j$, in $\mathbb{T}^d\times\mathbb{R}^d$ | [H6] Def. 1.1 |
| $\boldsymbol{z}_s$ | the tuple $(z_1,\dots,z_s)$ | [H6] Def. 1.1 |
| $\mathcal{D}_N$ | $\{\boldsymbol{z}_N:\lvert x_i-x_j\rvert_{\mathbb{T}}\ge\varepsilon\ \forall i\ne j\}$, the non-overlapping domain | [H6] Def. 1.1 |
| $\omega$ | collision direction $(x_i-x_j)/\varepsilon\in\mathbb{S}^{d-1}$ | [H6] Def. 1.1 |
| $\alpha$ | collision rate parameter; $\mathbb{E}(N)\cdot\varepsilon^{d-1}\approx\alpha$ | [H6] §1.2.2 |
| $n_0,\ n(t,x,v)$ | initial datum and solution of the Boltzmann equation | [H6] Def. 1.4 |
| $n',n_1'$ | post-collisional values $n(t,x,v'),n(t,x,v_1')$ in the gain term | [H6] Def. 1.4 |
| $W_{0,N}$, $W_N(t,\cdot)$ | grand canonical density at time $0$ and time $t$ | [H6] Def. 1.3 |
| $f_s(t,\boldsymbol{z}_s)$ | $s$-particle correlation function (normalized marginal) | [H6] Def. 1.3 |
| $\beta$ | Gaussian velocity weight: bounds involve $e^{2\beta\lvert v\rvert^2}$ | [H6] Thm. 1 |
| $A$ | size of the Boltzmann solution: $\lVert e^{2\beta\lvert v\rvert^2}n(t)\rVert_{L^\infty}\le A$ | [H6] Thm. 1 |
| $t_{\mathrm{fin}}$ | final kinetic time in Theorem 1 | [H6] Thm. 1 |
| $\theta$ | small positive exponent in the $\varepsilon^\theta$ error | [H6] Thm. 1 |
| $\kappa$ | velocity-truncation exponent, $\lvert v\rvert\le\varepsilon^{-\kappa}$ | [H6] Thm. 2 |

**Mean free time.** With rate parameter $\alpha$, a tagged particle experiences $O(\alpha)$ collisions per unit time, so the mean free time is $\asymp\alpha^{-1}$ and the quantity $\alpha\,t$ counts *collisions per particle*. This is why $\alpha\,A\,t_{\mathrm{fin}}$ — not $t_{\mathrm{fin}}$ — is the quantity constrained in Theorem 1. *(ours, as an interpretive remark)*

## Proof-architecture layer

| Symbol | Meaning | Source |
|---|---|---|
| $\tau$, $L$ | time-layer width and number of layers, $L\tau=t_{\mathrm{fin}}$ | [LT] |
| $f_A$ | the "main" one-particle density carried across layers | [LT] |
| $E_H(t,z_H)$ | cumulant indexed by the particle subset $H$; measures departure from independence | [LT] |
| $\mathbb{M}$ | a molecule (collision history diagram) | [H6] §2.1 |
| $\mathfrak{n}$ | an atom of a molecule | [H6] §1.4.1 |
| $t_{\mathfrak{n}}$ | the collision time attached to atom $\mathfrak{n}$ | [H6] §1.4.1 |
| C-atom | atom representing a genuine collision | [LT] |
| O-atom | atom representing an overlap | [LT] |
| bond | edge joining two atoms; a trajectory segment of one particle | [H6] §2.1 |
| particle line | maximal chain of bonds belonging to one particle, with a bottom end (initial time) and top end (final time) | [LT] |
| degree | number of incident bonds plus free ends at an atom, **excluding fixed ends** | [LT] |
| $\{2\},\{3\},\{4\},\{33\}$ | elementary molecule types by degree profile; $\{33\}$ are the "good" ones | [LT] |
| $\{3A\}$ | the molecule class in which the long-bond gain (♣) is proved | [H6] §1.4.1 |
| $\upsilon$ | the $\varepsilon$-power gained from a good $\{33\}$ molecule | [LT] |
| $\rho$ | **circuit rank** of $\mathbb{M}$ as an undirected graph = number of independent cycles = number of recollisions | [LT] |
| long bond | bond $e$ between atoms $\mathfrak{n}_1,\mathfrak{n}_2$ with $\lvert t_{\mathfrak{n}_1}-t_{\mathfrak{n}_2}\rvert\ge O(1)$ | [H6] §1.4.1 |
| excess | best power of $\varepsilon$ by which the trivial estimate for $\mathcal{J}(\mathbb{M})$ can be improved | [H6] Def. 3.6 |
| $\mathcal{J}(\mathbb{M})$ | the integral attached to a molecule, eq. (2.3) | [H6] §2.1 |
| cutting | partition of $\mathbb{M}$ into $\mathbb{M}_1$ (cut free) and $\mathbb{M}_2$ (cut fixed), giving $I_{\mathbb{M}}=I_{\mathbb{M}_1}\circ I_{\mathbb{M}_2}$ | [LT], [H6] §2.2 |
| UD molecule | "up–down" two-layer molecule produced by cutting algorithm I | [LT] |
| UP, DOWN, 2CONNUP, 3COMPUP, MAINUD | named cutting routines in [LT] | [LT] |
| BFK bound | Burago–Ferleger–Kononenko bound on the number of collisions of $n$ hard spheres in $\mathbb{R}^d$; **unavailable on $\mathbb{T}^d$** | [H6] §1.4.1 |

## Fluid layer

| Symbol | Meaning | Source |
|---|---|---|
| $\delta$ | hydrodynamic / fluctuation parameter; sent to $0$ after the Boltzmann–Grad limit | [H6] §1.3 |
| $T_{\mathrm{fin}}$ | final *fluid* time (kinetic time is $\asymp\delta^{-1}T_{\mathrm{fin}}$) | [H6] Thm. 2 |
| $u(t,x)$ | bulk velocity | [H6] Thms. 2, 3 |
| $\rho(t,x)$ | density (Thm. 3) / temperature-density fluctuation (Thm. 2) | [H6] Thms. 2, 3 |
| $T(t,x)$ | temperature | [H6] Thm. 3 |
| $p$ | pressure; $p=\rho T$ in Theorem 3 | [H6] Thm. 3 |
| $\mu_1,\mu_2$ | viscosity and heat-conduction coefficients, determined by the linearized collision operator | [H6] Thm. 2 |
| $\mathfrak{M}$ | local Maxwellian | [H6] §1.3.2 |
| $\mathcal{L}$ | linearized Boltzmann collision operator; $\mathcal{L}^{-1}$ appears in the Hilbert expansion | [H6] §1.3.2 |
| $F_0,\dots,F_6$ | Hilbert expansion coefficients | [H6] §1.3.2 |
| $u_{\mathrm{em}}[\psi],\rho_{\mathrm{em}}[\psi],T_{\mathrm{em}}$ | empirical observables built from the actual particle system | [H6] Thms. 2, 3 |

## Notation collisions to watch for

These are genuine clashes in the source material; this repository disambiguates by context and flags them here.

- **$\rho$** is the circuit rank of a molecule in [LT] **and** the fluid density in [H6] Theorem 3. Lectures 09–13 use it only in the graph sense; Lectures 14–15 only in the fluid sense.
- **$\alpha$** is the collision rate parameter in [H6] §1.2.2, and also appears as an exponent in the cumulant ansatz $\lVert E_H\rVert_{L^1}\le\varepsilon^{\alpha\lvert H\rvert}$ in [LT]. Lecture 08 writes the ansatz exponent as $\alpha_\ast$ to avoid the clash. *(ours)*
- **$T$** is temperature in Theorem 3 and $T_{\mathrm{fin}}$ is a time in Theorem 2.
- **$n$** is the Boltzmann solution in [H6] and a generic integer index elsewhere.
