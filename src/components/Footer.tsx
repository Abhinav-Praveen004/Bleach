import { motion } from "framer-motion";
import { Swords, Github, Twitter, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 pt-24 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-reishi/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] uppercase tracking-[0.32em] text-white/70">
            <Sparkles className="h-3 w-3 text-bankai" /> End of Transmission
          </div>
          <h2 className="mt-6 font-display text-5xl text-white sm:text-7xl">
            The <span className="text-reishi text-glow-cyan">soul</span> never <span className="text-bankai text-glow-orange">bleeds</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/65">
            Built as a cinematic tribute to BLEACH. Step back through the Senkaimon whenever you wish.
          </p>
        </motion.div>

        <div className="mt-20 grid items-center gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
          <a href="#hero" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md glass glow-cyan">
              <Swords className="h-4 w-4 text-reishi" />
            </span>
            <span className="font-display text-sm uppercase tracking-[0.3em] text-white/80">
              Soul<span className="text-reishi">Society</span>
            </span>
          </a>
          <p className="text-center text-xs text-white/40">
            © {new Date().getFullYear()} — A fan-made cinematic experience. Not affiliated with Tite Kubo or Shueisha.
          </p>
          <div className="flex justify-end gap-3">
            {[Github, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full glass text-white/70 transition hover:text-reishi hover:glow-cyan">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* huge background kanji */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 flex justify-center">
        <span className="font-display text-[24vw] leading-none text-white/[0.025]">BLEACH</span>
      </div>
    </footer>
  );
}
