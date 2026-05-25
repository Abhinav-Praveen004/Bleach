import { motion } from "framer-motion";
import { useState } from "react";
import c1 from "@/assets/char-1.jpg";
import c2 from "@/assets/char-2.jpg";
import c3 from "@/assets/char-3.jpg";
import c4 from "@/assets/char-4.jpg";

type Char = {
  name: string; rank: string; zanpakuto: string; element: string;
  img: string; tint: string; power: number;
};
const CHARS: Char[] = [
  { name: "Ichigo Kurosaki", rank: "Substitute Shinigami", zanpakuto: "Zangetsu", element: "Hollow Fire", img: c1, tint: "from-bankai/40 to-blood/30", power: 99 },
  { name: "Byakuya Kuchiki", rank: "Captain · Squad 6", zanpakuto: "Senbonzakura", element: "Cherry Steel", img: c2, tint: "from-pink-400/30 to-soul/30", power: 94 },
  { name: "Tōshirō Hitsugaya", rank: "Captain · Squad 10", zanpakuto: "Hyōrinmaru", element: "Heavenly Ice", img: c3, tint: "from-reishi/40 to-cyan-200/20", power: 91 },
  { name: "Sui-Fēng", rank: "Captain · Squad 2", zanpakuto: "Suzumebachi", element: "Shadow Sting", img: c4, tint: "from-soul/40 to-violet-300/20", power: 88 },
];

export function Characters() {
  const [active, setActive] = useState(0);
  return (
    <section id="characters" className="relative py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          kicker="The Gotei Ranks"
          title={<>Souls Forged in <span className="text-reishi text-glow-cyan">Steel</span></>}
          sub="Hover, focus, and feel the pressure of each captain's reiatsu."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CHARS.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              onMouseEnter={() => setActive(i)}
              className="group relative overflow-hidden rounded-2xl glass"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${c.tint} mix-blend-overlay opacity-70`} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                {/* Animated border */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-2xl" style={{
                    background: "conic-gradient(from 0deg, transparent, oklch(0.82 0.18 210 / .8), transparent 30%)",
                    animation: "spin 4s linear infinite",
                    mask: "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
                    WebkitMask: "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: 1,
                  }} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-reishi/90">{c.rank}</div>
                  <h3 className="mt-1 font-display text-xl text-white">{c.name}</h3>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-white/70">
                    <span>{c.zanpakuto}</span>
                    <span>{c.element}</span>
                  </div>
                  <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.power}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.08 }}
                      className="h-full bg-gradient-to-r from-reishi via-white to-bankai"
                    />
                  </div>
                  <div className="mt-1 flex justify-between text-[9px] uppercase tracking-widest text-white/40">
                    <span>Reiatsu</span><span>{c.power}%</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 text-center text-[10px] uppercase tracking-[0.4em] text-white/40">
          Focused: <span className="text-white/70">{CHARS[active].name}</span>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  kicker, title, sub,
}: { kicker: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.36em] text-reishi/90"
      >
        <span className="h-px w-10 bg-reishi/60" />
        {kicker}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.05 }}
        className="mt-4 font-display text-4xl text-white sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 max-w-xl text-white/65"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
