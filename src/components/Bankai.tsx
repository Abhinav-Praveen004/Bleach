import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Flame, Wind, Snowflake, Zap } from "lucide-react";
import bankai from "@/assets/bankai.jpg";
import { SectionHeader } from "./Characters";

const RELEASES = [
  { icon: Flame, name: "Tensa Zangetsu", master: "Ichigo", quote: "Heaven Chain Slaying Moon" },
  { icon: Wind, name: "Senbonzakura Kageyoshi", master: "Byakuya", quote: "Vibrant Display of a Thousand Cherry Blossoms" },
  { icon: Snowflake, name: "Daiguren Hyōrinmaru", master: "Hitsugaya", quote: "Great Crimson Lotus Ice Ring" },
  { icon: Zap, name: "Jakuhō Raikōben", master: "Sui-Fēng", quote: "Hornet Thunder Whip" },
];

export function Bankai() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1.15, 1.25]);
  const rot = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <section id="bankai" ref={ref} className="relative overflow-hidden py-32">
      {/* Bg image */}
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10 opacity-60">
        <img src={bankai} alt="Bankai energy release pillar" loading="lazy" width={1600} height={1024} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-ink" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          kicker="Final Release"
          title={<>Witness the <span className="text-bankai text-glow-orange">Bankai</span></>}
          sub="The second phase of a Shinigami's sword. A pact made flesh. A skyline torn open."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Energy core */}
          <motion.div style={{ rotate: rot }} className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 animate-pulse-aura rounded-full" style={{
              background: "radial-gradient(circle, oklch(0.82 0.18 210/.55), transparent 60%)",
            }} />
            <div className="absolute inset-6 animate-pulse-aura rounded-full" style={{
              background: "radial-gradient(circle, oklch(0.75 0.21 50/.45), transparent 65%)",
              animationDelay: "0.5s",
            }} />
            <div className="absolute inset-0 rounded-full border border-white/15" />
            <div className="absolute inset-8 rounded-full border border-reishi/30" style={{ animation: "spin 18s linear infinite" }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-reishi/70"
                  style={{ transform: `rotate(${i * 30}deg) translateY(-1px)`, transformOrigin: "50% 50% " }} />
              ))}
            </div>
            <div className="absolute inset-16 rounded-full border border-bankai/40" style={{ animation: "spin 26s linear infinite reverse" }} />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="font-display text-6xl text-white text-glow-cyan">卍解</div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.45em] text-white/60">Ban · kai</div>
              </div>
            </div>
          </motion.div>

          {/* Release list */}
          <ul className="space-y-3">
            {RELEASES.map((r, i) => (
              <motion.li
                key={r.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group relative overflow-hidden rounded-xl glass p-5 transition hover:border-bankai/60"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-bankai/15 text-bankai transition group-hover:bg-bankai/25 group-hover:shadow-[0_0_24px_oklch(0.75_0.21_50/0.5)]">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg text-white">{r.name}</h3>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">{r.master}</span>
                    </div>
                    <p className="mt-1 text-sm italic text-white/60">"{r.quote}"</p>
                  </div>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-px translate-y-px bg-gradient-to-r from-transparent via-bankai to-transparent opacity-0 transition group-hover:opacity-100" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
