import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import hero from "@/assets/hero-reaper.jpg";
import { Particles } from "./Particles";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mx.set((e.clientX - cx) / cx);
      my.set((e.clientY - cy) / cy);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const tx = useTransform(sx, (v) => v * -20);
  const ty = useTransform(sy, (v) => v * -20);
  const tx2 = useTransform(sx, (v) => v * 14);
  const ty2 = useTransform(sy, (v) => v * 14);

  return (
    <section id="hero" ref={ref} className="relative isolate min-h-screen overflow-hidden">
      <motion.div style={{ y, scale, x: tx, translateY: ty }} className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Soul reaper standing under blood moon with cyan spiritual energy"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_60%,transparent_0%,oklch(0.06_0.015_250/0.85)_80%)]" />
      </motion.div>

      <motion.div style={{ opacity }} className="absolute inset-0 -z-10">
        <Particles className="h-full w-full" density={70} />
      </motion.div>

      {/* Scanline */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-[0.07]">
        <div className="absolute inset-x-0 h-px bg-reishi" style={{ animation: "scan 6s linear infinite" }} />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28">
        <motion.div style={{ x: tx2, y: ty2 }} className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] uppercase tracking-[0.32em] text-white/80"
          >
            <Sparkles className="h-3 w-3 text-bankai" />
            Chapter Zero — Awakening
          </motion.div>

          <h1 className="font-display text-[clamp(2.6rem,8vw,6.5rem)] font-black leading-[0.95] text-white">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
              className="block"
            >
              BLEACH
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
              className="block bg-gradient-to-r from-reishi via-white to-bankai bg-clip-text text-transparent text-glow-cyan"
            >
              Soul&nbsp;Society
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 max-w-xl text-base text-white/70 sm:text-lg"
          >
            Step beyond the veil. Walk the moonlit pagodas of the spirit realm, witness
            captains release their Bankai, and trace the arcs that shook two worlds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#characters"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-reishi to-reishi/80 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink transition hover:shadow-[0_0_50px_oklch(0.82_0.18_210/0.6)]"
            >
              <span className="relative z-10">Enter the Realm</span>
              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#bankai"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-white/90 transition hover:border-bankai hover:text-bankai"
            >
              Witness Bankai
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-16 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl glass"
          >
            {[
              { k: "13", v: "Gotei Squads" },
              { k: "∞", v: "Reishi Currents" },
              { k: "001", v: "Soul King" },
            ].map((s) => (
              <div key={s.v} className="px-5 py-5">
                <div className="font-display text-3xl text-white text-glow-cyan">{s.k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/55">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#characters"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
