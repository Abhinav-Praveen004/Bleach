import { motion } from "framer-motion";
import { SectionHeader } from "./Characters";

const ARCS = [
  { year: "I", title: "Substitute Shinigami", note: "A teenager inherits the duty of a soul reaper and the burden of a city.", color: "from-reishi to-cyan-200" },
  { year: "II", title: "Soul Society Invasion", note: "A rescue mission tears open the Seireitei and reveals a conspiracy at its core.", color: "from-pink-300 to-soul" },
  { year: "III", title: "Arrancar & Hueco Mundo", note: "A war of espadas, masks, and white sands.", color: "from-bankai to-blood" },
  { year: "IV", title: "Fake Karakura Town", note: "Heaven and hell collide above a duplicate of a sleeping city.", color: "from-bankai to-reishi" },
  { year: "V", title: "Thousand-Year Blood War", note: "The Quincy return. The Soul King falls. Reality itself bleeds.", color: "from-soul to-blood" },
];

export function Arcs() {
  return (
    <section id="arcs" className="relative py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          kicker="Saga Index"
          title={<>Arcs that Shook <span className="text-bankai text-glow-orange">Two Worlds</span></>}
          sub="A scrolling chronicle from the first hollow to the final blood war."
        />

        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-reishi/50 to-transparent md:left-1/2 md:block" />

          <ul className="space-y-12">
            {ARCS.map((a, i) => {
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={a.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
                  className={`relative grid gap-4 md:grid-cols-2 ${left ? "" : "md:[&>*:first-child]:order-2"}`}
                >
                  <div className={`relative ${left ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/50">
                      Arc {a.year}
                    </div>
                    <h3 className={`mt-2 font-display text-3xl text-white bg-gradient-to-r ${a.color} bg-clip-text text-transparent`}>
                      {a.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm text-white/65 md:inline-block">{a.note}</p>
                  </div>
                  <div className="hidden md:block" />

                  {/* node */}
                  <span className="absolute left-4 top-2 grid h-3 w-3 -translate-x-1/2 place-items-center md:left-1/2">
                    <span className="absolute h-6 w-6 animate-pulse-aura rounded-full bg-reishi/40" />
                    <span className="h-2 w-2 rounded-full bg-reishi shadow-[0_0_20px_oklch(0.82_0.18_210)]" />
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
