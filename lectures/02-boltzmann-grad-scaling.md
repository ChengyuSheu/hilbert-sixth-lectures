# Lecture 02 — The Boltzmann–Grad scaling

> **Maps to:** [H6] §1.2.2 (the scaling relation $\mathbb{E}(N)\cdot\varepsilon^{d-1}\approx\alpha$), and §1.3 for the role of $\alpha$ in the second limit.
> **Fidelity:** **Q** for the scaling relation; **F** for the volume-fraction computation; **B** for the mean-free-path heuristics, which are standard kinetic theory and not in [H6].
> **Visualization:** [`viz/02-boltzmann-grad.html`](../viz/02-boltzmann-grad.html)
> **Prerequisites:** [Lecture 01](01-hard-sphere-dynamics.md).

---

## 1. The scaling, and where it comes from

We want a limit $\varepsilon\to0$, $N\to\infty$ in which a typical particle collides at a *finite, nonzero* rate. There is exactly one way to tune this.

Consider a tagged sphere of diameter $\varepsilon$ moving with speed $\lvert v\rvert$ through a sea of $N$ others distributed with unit density on $\mathbb{T}^d$. In time $t$ it sweeps out a cylinder of cross-sectional area $\asymp\varepsilon^{d-1}$ and length $\lvert v\rvert t$, hence of volume $\asymp\varepsilon^{d-1}\lvert v\rvert t$. The expected number of other centers in that tube is

$$
\#\text{collisions}\ \asymp\ N\cdot\varepsilon^{d-1}\lvert v\rvert\, t .
$$

For this to be $O(1)$ on $O(1)$ time scales we need $N\varepsilon^{d-1}$ to stay bounded away from $0$ and $\infty$. That is the **Boltzmann–Grad scaling**, and in [H6] §1.2.2 it takes the form

$$
\boxed{\ \mathbb{E}(N)\cdot\varepsilon^{d-1}\ \approx\ \alpha\ }
$$

with $\alpha$ the **collision rate parameter**. (The expectation appears because $N$ is random under the grand canonical ensemble — see [Lecture 03](03-grand-canonical-ensemble.md).)

Three readings of $\alpha$, all used later:

- **Collisions per particle per unit time.** A tagged particle undergoes $O(\alpha)$ collisions in unit time.
- **Inverse mean free time.** The mean free time is $\asymp\alpha^{-1}$; the product $\alpha t$ counts *mean free times elapsed*. This is why Theorem 1's hypothesis constrains $\alpha\,A\,t_{\mathrm{fin}}$ rather than $t_{\mathrm{fin}}$.
- **Inverse Knudsen number.** The Knudsen number is (mean free path)/(macroscopic length) $\asymp\alpha^{-1}$; hydrodynamics is the regime $\mathrm{Kn}\to0$, i.e. $\alpha\to\infty$.

That last reading is the reason $\alpha$ is a *parameter* in this paper and not a constant normalized to $1$: it is the dial that the second limit turns.

## 2. The dilute-gas consequence

The total volume occupied by the spheres is $\asymp N\varepsilon^d$. Under the scaling,

$$
N\varepsilon^{d}\ =\ (N\varepsilon^{d-1})\cdot\varepsilon\ \approx\ \alpha\,\varepsilon\ \xrightarrow[\varepsilon\to0]{}\ 0 .
$$

**The volume fraction vanishes.** This is not an artifact — it is forced. If you want $O(1)$ collisions you must accept $O(\varepsilon)$ packing. Boltzmann's equation *is* a dilute-gas equation, and no amount of care in the derivation changes that.

Note what happens when the second limit is taken. Sending $\alpha\to\infty$ *after* $\varepsilon\to0$ increases the collision rate without ever increasing the volume fraction, because the fraction $\alpha\varepsilon$ was already sent to $0$ first. This iterated structure is precisely the target of Gao's critique ([arXiv:2504.06297](https://arxiv.org/abs/2504.06297)): he argues that a limit taken in this order yields "a rescaled gas model rather than a true continuum." [Lecture 16](16-scope-and-critique.md) takes the objection seriously and states what it does and does not undermine. For now, simply register the arithmetic: $N\varepsilon^d\to0$ is a theorem, not an oversight.

## 3. The two other scalings you might have chosen (and why not)

| Scaling | $N\varepsilon^{d-1}$ | $N\varepsilon^d$ | Limit behaviour |
|---|---|---|---|
| **Boltzmann–Grad** | $\to\alpha\in(0,\infty)$ | $\to0$ | finite collision rate; **Boltzmann equation** |
| Mean-field / weak coupling | $\to0$ | $\to0$ | collisions become negligible individually, many of them; **Vlasov** |
| Dense / hydrodynamic-from-the-start | $\to\infty$ | $\to c>0$ | genuine liquid; **no rigorous theory exists** |

The third row is what a critic means by "a real fluid." It is entirely open — there is no derivation of any fluid equation from a dense particle system, and none is in prospect. Hilbert's program as *Hilbert framed it*, and as the entire subsequent literature has framed it, goes through the first row.

## 4. Numbers, for calibration

Take $d=3$ and $\alpha=1$, so $N=\varepsilon^{-2}$.

| $\varepsilon$ | $N=\varepsilon^{-2}$ | volume fraction $\approx\varepsilon$ | mean free path $\approx\alpha^{-1}$ |
|---|---|---|---|
| $10^{-3}$ | $10^{6}$ | $10^{-3}$ | $1$ |
| $10^{-6}$ | $10^{12}$ | $10^{-6}$ | $1$ |
| $10^{-11}$ | $10^{22}$ | $10^{-11}$ | $1$ |

For comparison, air at standard conditions has volume fraction $\approx 10^{-3}$ and about $10^{19}$ molecules per litre — so the middle rows are physically reasonable for a *gas*. Water has volume fraction $\approx 0.4$, which is the third row of the table in §3, and out of scope.

Keep the last column in mind for [Lecture 06](06-time-scales.md): the mean free path is $O(1)$ *by construction*, so "long time" always means "many mean free times", and the entire achievement of Theorem 1 is measured in that unit.

## 5. What to look at in the visualization

[`viz/02-boltzmann-grad.html`](../viz/02-boltzmann-grad.html) has one master slider: $\varepsilon$, with $N$ slaved to it by $N=\alpha\varepsilon^{-(d-1)}$ for a choice of $\alpha$ and $d$. As you drag:

- the **collision rate** readout stays pinned near $\alpha$ — the invariant the scaling is designed to preserve;
- the **volume fraction** readout falls off linearly in $\varepsilon$;
- the picture visibly becomes a *sparser* gas of *smaller, more numerous* particles.

Two comparison modes let you break the scaling deliberately: hold $N$ fixed and shrink $\varepsilon$ (collisions die out — the collisionless/Vlasov direction), or hold $\varepsilon$ fixed and grow $N$ (the box jams — the dense direction with no theory). Seeing all three side by side is the fastest way to internalize why the middle one is the only one anybody can prove anything about.

## 6. Simplifications made here

- The cylinder heuristic in §1 ignores the relative-velocity distribution; the honest computation replaces $\lvert v\rvert$ by $\int\lvert v-v_1\rvert n(v_1)dv_1$ and produces the constants in the collision operator.
- "$\mathbb{E}(N)\varepsilon^{d-1}\approx\alpha$" is written with $\approx$ in [H6] because the grand canonical ensemble fixes a fugacity, not a particle number; the precise statement is in [Lecture 03](03-grand-canonical-ensemble.md).
- The Knudsen-number identification in §1 is standard but informal; the rigorous version is the scaling of Theorems 2 and 3, where the parameter is called $\delta$.

## 7. Exercises

1. In $d=2$ the scaling is $N\varepsilon=\alpha$. Redo the table of §4. Is the volume fraction still $\asymp\varepsilon$?
2. Suppose you insisted on a *joint* limit $\varepsilon\to0$ with $\alpha=\alpha(\varepsilon)\to\infty$. From Theorem 1's hypothesis $\alpha A t_{\mathrm{fin}}\ll(\log\lvert\log\varepsilon\rvert)^{1/2}$, how fast may $\alpha(\varepsilon)$ grow while still allowing $t_{\mathrm{fin}}\ge1$? Compare with what the hydrodynamic limit needs. This exercise is the honest way to see why [H6] takes iterated rather than joint limits.
3. Why is the exponent $d-1$ and not $d$? Give the one-sentence geometric reason.

---

**Previous:** [Lecture 01](01-hard-sphere-dynamics.md) · **Next:** [Lecture 03 — Grand canonical ensemble and correlation functions](03-grand-canonical-ensemble.md)
