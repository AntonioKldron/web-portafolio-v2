import React, { useEffect, useRef } from 'react';

const MOBILE_BREAKPOINT = 1024;
const TRACES_DESKTOP = 30;
const TRACES_MOBILE = 14;
const PACKETS_DESKTOP = 22;
const PACKETS_MOBILE = 10;
const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

const THEMES = {
  dark: {
    composite: 'lighter',
    trace: '56,189,248',
    traceAlpha: 0.16,
    pad: '129,140,248',
    packet: '0,246,255',
    packetAlpha: 1,
    flash: '224,255,255',
  },
  light: {
    composite: 'source-over',
    trace: '37,99,235',
    traceAlpha: 0.14,
    pad: '37,99,235',
    packet: '29,78,216',
    packetAlpha: 0.85,
    flash: '255,255,255',
  },
};

const rgba = (rgb, a) => `rgba(${rgb}, ${a})`;
const dist = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);

/* Placa de circuito: caminos ortogonales aleatorios sobre una rejilla */
const buildCircuit = (w, h, cell, count) => {
  const cols = Math.ceil(w / cell) + 1;
  const rows = Math.ceil(h / cell) + 1;
  const traces = [];

  for (let t = 0; t < count; t++) {
    let x = Math.floor(Math.random() * cols);
    let y = Math.floor(Math.random() * rows);
    let dir = DIRS[Math.floor(Math.random() * 4)];
    const cells = [[x, y]];
    const segments = 3 + Math.floor(Math.random() * 5);

    for (let s = 0; s < segments; s++) {
      const len = 1 + Math.floor(Math.random() * 5);
      const nx = Math.min(cols - 1, Math.max(0, x + dir[0] * len));
      const ny = Math.min(rows - 1, Math.max(0, y + dir[1] * len));
      if (nx === x && ny === y) {
        dir = DIRS[Math.floor(Math.random() * 4)];
        continue;
      }
      x = nx;
      y = ny;
      cells.push([x, y]);
      dir = dir[0] !== 0
        ? [0, Math.random() < 0.5 ? 1 : -1]
        : [Math.random() < 0.5 ? 1 : -1, 0];
    }

    if (cells.length < 2) continue;

    const pts = cells.map(([cx, cy]) => [cx * cell, cy * cell]);
    const cum = [0];
    for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + dist(pts[i - 1], pts[i]));
    traces.push({ pts, cum, total: cum[cum.length - 1] });
  }
  return traces;
};

/* Posición a lo largo de una traza (en px desde el inicio) */
const pointAt = (tr, d) => {
  const { pts, cum } = tr;
  let i = 0;
  while (i < pts.length - 2 && cum[i + 1] < d) i++;
  const seg = cum[i + 1] - cum[i] || 1;
  const k = Math.min(1, Math.max(0, (d - cum[i]) / seg));
  return {
    x: pts[i][0] + (pts[i + 1][0] - pts[i][0]) * k,
    y: pts[i][1] + (pts[i + 1][1] - pts[i][1]) * k,
  };
};

const makeSprite = (rgb, size = 32) => {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const x = c.getContext('2d');
  const half = size / 2;
  const g = x.createRadialGradient(half, half, 0, half, half, half);
  g.addColorStop(0, rgba(rgb, 1));
  g.addColorStop(0.35, rgba(rgb, 0.45));
  g.addColorStop(1, rgba(rgb, 0));
  x.fillStyle = g;
  x.fillRect(0, 0, size, size);
  return c;
};

export default function FondoAnimado({ isActive = true }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!isActive || !wrap || !canvas) return undefined;

    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const traceCanvas = document.createElement('canvas');
    const tctx = traceCanvas.getContext('2d');

    let w = 0;
    let h = 0;
    let circuit = [];
    let packets = [];
    let rings = [];
    let theme = THEMES.dark;
    let packetSprite = null;
    let padSprite = null;
    let raf = 0;
    let last = 0;

    const isDarkTheme = () =>
      root.classList.contains('dark') || document.body.classList.contains('dark');

    const applyTheme = () => {
      theme = isDarkTheme() ? THEMES.dark : THEMES.light;
      packetSprite = makeSprite(theme.packet, 32);
      padSprite = makeSprite(theme.flash, 24);
    };

    /* Placa estática pre-renderizada: profundidad con dos pasadas (fina y ancha) */
    const drawTraces = () => {
      tctx.setTransform(1, 0, 0, 1, 0, 0);
      tctx.clearRect(0, 0, traceCanvas.width, traceCanvas.height);
      tctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      tctx.lineJoin = 'round';
      tctx.lineCap = 'round';

      // Halo ancho y tenue bajo cada traza: da sensación de profundidad
      tctx.strokeStyle = rgba(theme.trace, theme.traceAlpha * 0.35);
      tctx.lineWidth = 4;
      for (const tr of circuit) {
        tctx.beginPath();
        tr.pts.forEach(([x, y], i) => (i === 0 ? tctx.moveTo(x, y) : tctx.lineTo(x, y)));
        tctx.stroke();
      }

      // Traza fina encima
      tctx.strokeStyle = rgba(theme.trace, theme.traceAlpha);
      tctx.lineWidth = 1;
      for (const tr of circuit) {
        tctx.beginPath();
        tr.pts.forEach(([x, y], i) => (i === 0 ? tctx.moveTo(x, y) : tctx.lineTo(x, y)));
        tctx.stroke();
      }

      // Pads: los extremos son conectores más grandes
      for (const tr of circuit) {
        tr.pts.forEach(([x, y], i) => {
          const end = i === 0 || i === tr.pts.length - 1;
          tctx.beginPath();
          tctx.arc(x, y, end ? 3.2 : 2, 0, Math.PI * 2);
          tctx.fillStyle = rgba(theme.pad, end ? theme.traceAlpha * 3 : theme.traceAlpha * 1.8);
          tctx.fill();
        });
      }
    };

    const spawnPacket = (initial) => {
      const ti = Math.floor(Math.random() * circuit.length);
      return {
        ti,
        d: initial ? Math.random() * circuit[ti].total : 0,
        speed: 90 + Math.random() * 150,
        tail: 50 + Math.random() * 90,
        lastPad: -1,
      };
    };

    const resize = () => {
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      traceCanvas.width = canvas.width;
      traceCanvas.height = canvas.height;

      const mobile = w < MOBILE_BREAKPOINT;
      const cell = mobile ? 36 : 48;
      circuit = buildCircuit(w, h, cell, mobile ? TRACES_MOBILE : TRACES_DESKTOP);
      packets = Array.from({ length: mobile ? PACKETS_MOBILE : PACKETS_DESKTOP }, () =>
        spawnPacket(true)
      );
      rings = [];
      drawTraces();
    };

    const drawPackets = (dt) => {
      ctx.globalCompositeOperation = theme.composite;

      for (const p of packets) {
        const tr = circuit[p.ti];
        if (!tr) continue;
        const prevD = p.d;
        p.d += p.speed * dt;

        // Destello al cruzar un pad interior
        let padIndex = -1;
        for (let i = 1; i < tr.cum.length - 1; i++) {
          if (tr.cum[i] > prevD && tr.cum[i] <= p.d) { padIndex = i; break; }
        }
        if (padIndex >= 0) {
          const pt = tr.pts[padIndex];
          rings.push({ x: pt[0], y: pt[1], age: 0, life: 0.45, small: true });
        }

        if (p.d >= tr.total) {
          const end = tr.pts[tr.pts.length - 1];
          rings.push({ x: end[0], y: end[1], age: 0, life: 0.9, small: false });
          Object.assign(p, spawnPacket(false));
          continue;
        }

        // Estela con degradado: el tramo más cercano a la cabeza es el más brillante
        const N = 8;
        let prev = pointAt(tr, Math.max(0, p.d - p.tail));
        for (let i = 1; i <= N; i++) {
          const dd = Math.max(0, p.d - p.tail + (p.tail * i) / N);
          const cur = pointAt(tr, dd);
          const k = i / N;
          ctx.strokeStyle = rgba(theme.packet, k * theme.packetAlpha * 0.8);
          ctx.lineWidth = 1.2 + k * 0.8;
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(cur.x, cur.y);
          ctx.stroke();
          prev = cur;
        }

        // Cabeza: halo + núcleo
        const head = pointAt(tr, p.d);
        ctx.globalAlpha = theme.packetAlpha;
        ctx.drawImage(packetSprite, head.x - 9, head.y - 9, 18, 18);
        ctx.globalAlpha = 1;
      }
    };

    const drawRings = (dt) => {
      rings = rings.filter((r) => {
        r.age += dt;
        if (r.age >= r.life) return false;
        const k = r.age / r.life;
        if (r.small) {
          // Destello breve en el pad
          ctx.globalAlpha = (1 - k) * 0.9;
          ctx.drawImage(padSprite, r.x - 6, r.y - 6, 12, 12);
          ctx.globalAlpha = 1;
        } else {
          ctx.lineWidth = 1;
          ctx.strokeStyle = rgba(theme.packet, (1 - k) * 0.8);
          ctx.beginPath();
          ctx.arc(r.x, r.y, 3 + k * 18, 0, Math.PI * 2);
          ctx.stroke();
        }
        return true;
      });
    };

    const draw = (dt) => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(traceCanvas, 0, 0, w, h);
      drawPackets(dt);
      drawRings(dt);
      ctx.globalCompositeOperation = 'source-over';
    };

    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      draw(dt);
      raf = requestAnimationFrame(frame);
    };

    applyTheme();
    resize();

    const observer = new MutationObserver(() => {
      applyTheme();
      drawTraces();
      if (reduce) draw(0);
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    window.addEventListener('resize', resize);

    if (reduce) {
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(traceCanvas, 0, 0, w, h);
    } else {
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, [isActive]);

  return (
    <div
      id="floating-bg"
      ref={wrapRef}
      aria-hidden="true"
      className={isActive ? 'active' : ''}
    >
      <div className="aurora-blob aurora-blob--a" />
      <div className="aurora-blob aurora-blob--b" />
      <div className="aurora-blob aurora-blob--c" />
      <canvas ref={canvasRef} />
    </div>
  );
}