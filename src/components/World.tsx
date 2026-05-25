import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import world from "@/assets/soul-society.jpg";
import { SectionHeader } from "./Characters";

export function World() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);

  return (
    <section id="world" ref={ref} className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          kicker="Realm Walk"
          title={<>Into the <span className="text-reishi text-glow-cyan">Seireitei</span></>}
          sub="Pagodas of white stone. Rivers of reishi. The city floats above the dead."
        />
      </div>

      <motion.div style={{ y: y1 }} className="relative mt-16">
        <div className="relative mx-auto h-[70vh] max-w-7xl overflow-hidden rounded-3xl glass">
          <motion.img
            style={{ scale, y: y2 }}
            src={world}
            alt="Soul Society Seireitei at night with rivers of blue spiritual energy"
            loading="lazy"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,oklch(0.82_0.18_210/0.35),transparent_60%)]" />

          {/* Floating glyphs */}
          {["生", "死", "魂", "卍", "刀"].map((g, i) => (
            <motion.span
              key={g}
              className="absolute font-display text-white/10 animate-float-slow"
              style={{
                fontSize: `${4 + i * 1.4}rem`,
                left: `${10 + i * 18}%`,
                top: `${15 + (i % 3) * 22}%`,
                animationDelay: `${i * 0.7}s`,
              }}
            >{g}</motion.span>
          ))}

          {/* HUD */}
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-6 p-6 sm:p-10">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-reishi/90">Coord · 38.7°N · ∞°E</div>
              <div className="mt-2 font-display text-3xl text-white sm:text-4xl">Sōkyoku Hill</div>
              <p className="mt-1 max-w-md text-sm text-white/70">
                The execution ground. Where wings of phoenix-iron once tasted captain blood.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl glass text-center">
              {[
                { k: "Reishi", v: "Stable" },
                { k: "Hollows", v: "Low" },
                { k: "Senkaimon", v: "Open" },
              ].map((s) => (
                <div key={s.k} className="px-5 py-3">
                  <div className="text-[9px] uppercase tracking-[0.3em] text-white/50">{s.k}</div>
                  <div className="mt-1 text-sm text-white">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
