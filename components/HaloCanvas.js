/**
 * HaloCanvas — the hero's ambient particle field.
 *
 * Slow-orbiting red/steel-blue lights around a soft glow that drifts toward
 * the pointer. Colors are read from the --gn-accent / --gn-sec theme tokens
 * and refresh when the theme changes (data-theme mutation or OS preference).
 * Paused when the tab is hidden; renders a single static frame under
 * prefers-reduced-motion.
 */
import { useEffect, useRef } from 'react';

function hexToRgb(c) {
  c = c.replace('#', '');
  if (c.length === 3) c = c.replace(/./g, (x) => x + x);
  return [parseInt(c.substr(0, 2), 16), parseInt(c.substr(2, 2), 16), parseInt(c.substr(4, 2), 16)];
}

export default function HaloCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0;
    let H = 0;
    let particles = [];
    let running = false;
    let raf = 0;
    let palette = { red: [232, 85, 78], blue: [127, 178, 229], dark: true };
    const pointer = { x: 0.5, y: 0.45, tx: 0.5, ty: 0.45 };

    const readPalette = () => {
      const cs = getComputedStyle(canvas);
      const red = (cs.getPropertyValue('--gn-accent') || '#e8554e').trim();
      const blue = (cs.getPropertyValue('--gn-sec') || '#7fb2e5').trim();
      const bg = (cs.getPropertyValue('--gn-bg') || '#0a1322').trim();
      palette = {
        red: hexToRgb(red),
        blue: hexToRgb(blue),
        dark: parseInt(bg.replace('#', ''), 16) < 0x7fffff,
      };
    };

    const resize = () => {
      const box = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(1, Math.round(box.width));
      H = Math.max(1, Math.round(box.height));
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      particles = [];
      const n = Math.min(110, Math.round(W / 11));
      for (let i = 0; i < n; i += 1) {
        particles.push({
          a: Math.random() * Math.PI * 2,
          r: 40 + Math.random() * Math.min(W, H) * 0.55,
          sp: (0.0012 + Math.random() * 0.0028) * (Math.random() < 0.5 ? 1 : -1),
          sz: 0.8 + Math.random() * 2.4,
          hue: Math.random(),
          wob: Math.random() * Math.PI * 2,
        });
      }
    };

    const mix = (a, b, t) =>
      `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)},${Math.round(a[1] + (b[1] - a[1]) * t)},${Math.round(
        a[2] + (b[2] - a[2]) * t
      )})`;

    const frame = (t) => {
      ctx.clearRect(0, 0, W, H);
      pointer.x += (pointer.tx - pointer.x) * 0.03;
      pointer.y += (pointer.ty - pointer.y) * 0.03;
      const cx = W * pointer.x;
      const cy = H * pointer.y;

      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(W, H) * 0.75);
      const [r1, g1, b1] = palette.red;
      const [r2, g2, b2] = palette.blue;
      g.addColorStop(0, `rgba(${r1},${g1},${b1},${palette.dark ? 0.09 : 0.1})`);
      g.addColorStop(0.55, `rgba(${r2},${g2},${b2},${palette.dark ? 0.05 : 0.06})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      const baseA = palette.dark ? 0.75 : 0.55;
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.a += p.sp;
        const wob = Math.sin(t * 0.0005 + p.wob) * 10;
        const x = cx + Math.cos(p.a) * (p.r + wob);
        const y = cy + Math.sin(p.a) * (p.r + wob) * 0.62;
        const tw = 0.5 + 0.5 * Math.sin(t * 0.002 + p.wob * 3);
        ctx.globalAlpha = baseA * (0.25 + 0.75 * tw) * Math.max(0, 1 - p.r / (Math.min(W, H) * 0.62));
        ctx.fillStyle = mix(palette.red, palette.blue, p.hue);
        ctx.beginPath();
        ctx.arc(x, y, p.sz, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t) => {
      if (!running) return;
      frame(t);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    seed();
    readPalette();

    const onResize = () => {
      resize();
      seed();
      if (reduce) frame(0);
    };
    const onVis = () => (document.hidden ? stop() : start());
    const onMove = (e) => {
      const b = canvas.getBoundingClientRect();
      pointer.tx = 0.5 + ((e.clientX - b.left) / b.width - 0.5) * 0.3;
      pointer.ty = 0.45 + ((e.clientY - b.top) / b.height - 0.5) * 0.2;
    };
    const onLeave = () => {
      pointer.tx = 0.5;
      pointer.ty = 0.45;
    };

    // Re-read colors when the theme toggle or the OS preference changes.
    const observer = new MutationObserver(() => readPalette());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onScheme = () => readPalette();
    if (mq.addEventListener) mq.addEventListener('change', onScheme);

    window.addEventListener('resize', onResize);
    if (reduce) {
      frame(0);
    } else {
      start();
      document.addEventListener('visibilitychange', onVis);
      canvas.parentElement.addEventListener('pointermove', onMove);
      canvas.parentElement.addEventListener('pointerleave', onLeave);
    }

    return () => {
      stop();
      observer.disconnect();
      if (mq.removeEventListener) mq.removeEventListener('change', onScheme);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVis);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('pointermove', onMove);
        canvas.parentElement.removeEventListener('pointerleave', onLeave);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />;
}
