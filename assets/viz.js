/* Shared helpers for the Hilbert-6 visualizations. MIT licensed.
   No dependencies. Plain ES2018, loaded as a CLASSIC script (not a module) so
   that every visualization also works when opened directly from the file system
   -- ES module imports are blocked by CORS on file:// URLs.
   Everything below is exposed on window.H6 at the end of this file.          */
(function () {
'use strict';

/* ---------- page chrome ---------- */

function head({ title, maps, lecture, prev, next }) {
  document.title = title + " — Hilbert's Sixth Problem";
  const h = document.createElement('header');
  h.className = 'viz-head';
  h.innerHTML = `
    <h1>${title}</h1>
    <div class="maps">Maps to: ${maps}</div>
    <nav>
      <a href="../index.html">&#8598; all visualizations</a>
      ${lecture ? `<a href="../lectures/${lecture}">read the lecture</a>` : ''}
      ${prev ? `<a href="${prev}">&#8592; previous</a>` : ''}
      ${next ? `<a href="${next}">next &#8594;</a>` : ''}
    </nav>`;
  document.body.prepend(h);
}

function foot(html) {
  const f = document.createElement('footer');
  f.className = 'viz-foot';
  f.innerHTML = html;
  document.body.append(f);
}

/* ---------- DOM helpers ---------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function el(tag, attrs = {}, ...kids) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') n.className = v;
    else if (k === 'html') n.innerHTML = v;
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v);
  }
  for (const kid of kids) n.append(kid);
  return n;
}

/** Range control. onInput receives the numeric value. Returns {wrap, input, set}. */
function slider(labelText, { min, max, step, value, fmt = (v) => v }, onInput) {
  const lab = el('label');
  const input = el('input', { type: 'range', min, max, step, value });
  const wrap = el('div', { class: 'ctl' }, lab, input);
  const paint = () => { lab.textContent = `${labelText} = ${fmt(+input.value)}`; };
  input.addEventListener('input', () => { paint(); onInput(+input.value); });
  paint();
  return { wrap, input, set: (v) => { input.value = v; paint(); onInput(+input.value); } };
}

function toggle(labelText, initial, onChange) {
  const input = el('input', { type: 'checkbox' });
  input.checked = !!initial;
  const wrap = el('label', { class: 'chk' }, input, document.createTextNode(' ' + labelText));
  input.addEventListener('change', () => onChange(input.checked));
  return { wrap, input };
}

function button(text, onClick) {
  return el('button', { onclick: onClick }, document.createTextNode(text));
}

/** Simple key/value readout table. rows() re-renders. */
function readout(pairs) {
  const t = el('table', { class: 'readout' });
  const render = (list) => {
    t.innerHTML = list.map(([k, v, cls]) =>
      `<tr class="${cls || ''}"><td>${k}</td><td>${v}</td></tr>`).join('');
  };
  render(pairs);
  return { node: t, set: render };
}

/* ---------- canvas ---------- */

/** Device-pixel-ratio aware canvas. Returns ctx with logical size in c.W/c.H. */
function fitCanvas(canvas, aspect = 1) {
  const ctx = canvas.getContext('2d');
  const resize = () => {
    const cssW = canvas.clientWidth || 600;
    const cssH = Math.round(cssW / aspect);
    const dpr = window.devicePixelRatio || 1;
    canvas.style.height = cssH + 'px';
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.W = cssW; ctx.H = cssH;
  };
  resize();
  window.addEventListener('resize', resize);
  return ctx;
}

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function loop(fn) {
  let last = performance.now(), running = true;
  const tick = (now) => {
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    fn(dt);
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  return { stop: () => { running = false; }, resume: () => { running = true; last = performance.now(); requestAnimationFrame(tick); } };
}

/* ---------- math ---------- */

function gaussian(rng = Math.random) {
  let u = 0, v = 0;
  while (u === 0) u = rng();
  while (v === 0) v = rng();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

/** Deterministic PRNG so presets are reproducible. */
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Minimum-image displacement on the unit torus. */
function minImage(dx) {
  return dx - Math.round(dx);
}

/* ---------- hard sphere dynamics on the unit torus T^2 ----------
   Implements [H6] Definition 1.1 exactly:
     - free transport between contacts,
     - at contact with omega = (x_i - x_j)/eps,
       v_i += -((v_i - v_j).omega) omega,  v_j += +((v_i - v_j).omega) omega.
   Advance is continuous-collision: within each frame we repeatedly locate the
   earliest pair contact and resolve it, so the collision law is applied at the
   exact contact time rather than after an overlap has been allowed to form.   */

class HardSpheres {
  /** @param {number} n particle count @param {number} eps diameter @param {number} seed */
  constructor(n, eps, seed = 12345) {
    this.eps = eps;
    this.rng = mulberry32(seed);
    this.t = 0;
    this.collisions = 0;
    /** pair key -> count, used to detect recollisions */
    this.pairCount = new Map();
    this.recollisions = 0;
    this.lastEvent = null;          // {i,j,ox,oy,vi,vj,vi2,vj2,t}
    this.onCollision = null;        // optional callback
    this.reset(n);
  }

  reset(n) {
    const { rng } = this;
    this.x = new Float64Array(n); this.y = new Float64Array(n);
    this.vx = new Float64Array(n); this.vy = new Float64Array(n);
    this.n = n;
    for (let i = 0; i < n; i++) {
      let ok = false, tries = 0;
      while (!ok && tries++ < 4000) {
        this.x[i] = rng(); this.y[i] = rng();
        ok = true;
        for (let j = 0; j < i; j++) {
          if (this.dist2(i, j) < (this.eps * 1.02) ** 2) { ok = false; break; }
        }
      }
      const sp = 0.35;
      this.vx[i] = sp * gaussian(rng); this.vy[i] = sp * gaussian(rng);
    }
    this.collisions = 0; this.recollisions = 0;
    this.pairCount.clear(); this.t = 0;
  }

  setEps(eps) { this.eps = eps; }

  dist2(i, j) {
    const dx = minImage(this.x[i] - this.x[j]);
    const dy = minImage(this.y[i] - this.y[j]);
    return dx * dx + dy * dy;
  }

  /** Earliest contact time in (0, dt] over all pairs, or null. */
  nextEvent(dt) {
    const { n, eps } = this;
    let best = null;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = minImage(this.x[i] - this.x[j]);
        const dy = minImage(this.y[i] - this.y[j]);
        const dvx = this.vx[i] - this.vx[j];
        const dvy = this.vy[i] - this.vy[j];
        const b = dx * dvx + dy * dvy;
        if (b >= 0) continue;                       // separating: no contact
        const a = dvx * dvx + dvy * dvy;
        if (a === 0) continue;
        const c = dx * dx + dy * dy - eps * eps;
        const disc = b * b - a * c;
        if (disc <= 0) continue;
        const tc = (-b - Math.sqrt(disc)) / a;
        if (tc > 1e-12 && tc <= dt && (best === null || tc < best.t)) {
          best = { t: tc, i, j };
        }
      }
    }
    return best;
  }

  drift(dt) {
    for (let i = 0; i < this.n; i++) {
      this.x[i] = (this.x[i] + this.vx[i] * dt + 1) % 1;
      this.y[i] = (this.y[i] + this.vy[i] * dt + 1) % 1;
    }
    this.t += dt;
  }

  resolve(i, j) {
    const dx = minImage(this.x[i] - this.x[j]);
    const dy = minImage(this.y[i] - this.y[j]);
    const r = Math.hypot(dx, dy) || this.eps;
    const ox = dx / r, oy = dy / r;                 // omega = (x_i - x_j)/eps
    const dvx = this.vx[i] - this.vx[j];
    const dvy = this.vy[i] - this.vy[j];
    const dot = dvx * ox + dvy * oy;
    const before = { vi: [this.vx[i], this.vy[i]], vj: [this.vx[j], this.vy[j]] };
    this.vx[i] -= dot * ox; this.vy[i] -= dot * oy;
    this.vx[j] += dot * ox; this.vy[j] += dot * oy;

    this.collisions++;
    const key = i < j ? `${i},${j}` : `${j},${i}`;
    const prev = this.pairCount.get(key) || 0;
    this.pairCount.set(key, prev + 1);
    if (prev > 0) this.recollisions++;

    this.lastEvent = {
      i, j, ox, oy, t: this.t, repeat: prev > 0,
      viIn: before.vi, vjIn: before.vj,
      viOut: [this.vx[i], this.vy[i]], vjOut: [this.vx[j], this.vy[j]],
    };
    if (this.onCollision) this.onCollision(this.lastEvent);
  }

  /** Advance by dt, resolving every contact at its exact time. */
  step(dt) {
    let remaining = dt, guard = 0;
    while (remaining > 1e-12 && guard++ < 5000) {
      const ev = this.nextEvent(remaining);
      if (!ev) { this.drift(remaining); break; }
      this.drift(ev.t);
      this.resolve(ev.i, ev.j);
      remaining -= ev.t;
    }
  }

  reverse() { for (let i = 0; i < this.n; i++) { this.vx[i] = -this.vx[i]; this.vy[i] = -this.vy[i]; } }

  kineticEnergy() {
    let e = 0;
    for (let i = 0; i < this.n; i++) e += this.vx[i] ** 2 + this.vy[i] ** 2;
    return e / 2;
  }

  /** alpha = N * eps^(d-1); d = 2 here. */
  alpha() { return this.n * this.eps; }
  volumeFraction() { return this.n * Math.PI * (this.eps / 2) ** 2; }

  draw(ctx, { trace = null, highlight = null } = {}) {
    const S = Math.min(ctx.W, ctx.H);
    ctx.clearRect(0, 0, ctx.W, ctx.H);
    ctx.save();
    ctx.translate((ctx.W - S) / 2, (ctx.H - S) / 2);
    ctx.strokeStyle = cssVar('--line');
    ctx.strokeRect(0.5, 0.5, S - 1, S - 1);
    const R = (this.eps / 2) * S;
    for (let i = 0; i < this.n; i++) {
      const px = this.x[i] * S, py = this.y[i] * S;
      const isHi = highlight != null && (i === highlight);
      ctx.fillStyle = isHi ? cssVar('--gold') : cssVar('--accent');
      // draw the 9 periodic images so wrapping reads correctly
      for (let ax = -1; ax <= 1; ax++) for (let ay = -1; ay <= 1; ay++) {
        const qx = px + ax * S, qy = py + ay * S;
        if (qx < -R || qx > S + R || qy < -R || qy > S + R) continue;
        ctx.beginPath(); ctx.arc(qx, qy, Math.max(1.4, R), 0, 7); ctx.fill();
      }
    }
    if (trace) trace(ctx, S);
    ctx.restore();
  }
}

/* ---------- molecule graphs ---------- */

/** Undirected multigraph with atoms (nodes) and bonds (edges). */
class Molecule {
  constructor() { this.atoms = []; this.bonds = []; }
  addAtom(props = {}) {
    const a = { id: this.atoms.length, t: 0, kind: 'C', freeEnds: 0, fixedEnds: 0, ...props };
    this.atoms.push(a); return a;
  }
  addBond(i, j, props = {}) {
    const b = { id: this.bonds.length, i, j, ...props }; this.bonds.push(b); return b;
  }
  /** degree = incident bonds + free ends, excluding fixed ends ([LT]) */
  degree(id) {
    let d = this.atoms[id].freeEnds || 0;
    for (const b of this.bonds) { if (b.i === id) d++; if (b.j === id) d++; }
    return d;
  }
  components() {
    const seen = new Array(this.atoms.length).fill(-1);
    let c = 0;
    const adj = this.atoms.map(() => []);
    for (const b of this.bonds) { adj[b.i].push(b.j); adj[b.j].push(b.i); }
    for (let i = 0; i < this.atoms.length; i++) {
      if (seen[i] !== -1) continue;
      const stack = [i]; seen[i] = c;
      while (stack.length) {
        const u = stack.pop();
        for (const v of adj[u]) if (seen[v] === -1) { seen[v] = c; stack.push(v); }
      }
      c++;
    }
    return { count: c, label: seen };
  }
  /** circuit rank rho = E - V + c  ([LT]: = number of recollisions) */
  circuitRank() {
    const V = this.atoms.length, E = this.bonds.length;
    if (V === 0) return 0;
    return E - V + this.components().count;
  }
  /** adjacent pairs of degree-3 atoms: the "good" {33} molecules */
  goodPairs() {
    const out = [];
    for (const b of this.bonds) {
      if (this.degree(b.i) === 3 && this.degree(b.j) === 3) out.push(b);
    }
    return out;
  }
  degree4() { return this.atoms.filter(a => this.degree(a.id) >= 4); }
  /** long bonds: |t_n1 - t_n2| >= threshold  ([H6] §1.4.1) */
  longBonds(threshold) {
    return this.bonds.filter(b => Math.abs(this.atoms[b.i].t - this.atoms[b.j].t) >= threshold);
  }
}

/** KaTeX is optional; render if present, degrade silently if offline. */
function renderMath() {
  if (window.renderMathInElement) {
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
      ],
      throwOnError: false,
    });
  }
}
window.addEventListener('load', function () { setTimeout(renderMath, 60); });

/* ---------- public surface ---------- */

window.H6 = {
  head, foot, $, $$, el, slider, toggle, button, readout,
  fitCanvas, cssVar, loop,
  gaussian, mulberry32, minImage,
  HardSpheres, Molecule, renderMath,
};

})();
