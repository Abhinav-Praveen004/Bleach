import { useEffect, useRef } from "react";

type Props = { density?: number; colors?: string[]; className?: string };

export function Particles({
  density = 80,
  colors = ["#7dd3fc", "#fb923c", "#a78bfa", "#ffffff"],
  className,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number; r: number; c: string; a: number };
    let parts: P[] = [];

    const reset = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      parts = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.6 - 0.1,
        r: Math.random() * 1.8 + 0.4,
        c: colors[Math.floor(Math.random() * colors.length)],
        a: Math.random() * 0.6 + 0.2,
      }));
    };
    reset();
    const onResize = () => { ctx.setTransform(1,0,0,1,0,0); reset(); };
    window.addEventListener("resize", onResize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grad.addColorStop(0, p.c + "ff");
        grad.addColorStop(1, p.c + "00");
        ctx.fillStyle = grad;
        ctx.globalAlpha = p.a;
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, [density, colors]);

  return <canvas ref={ref} className={className} aria-hidden />;
}
