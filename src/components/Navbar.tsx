import { motion } from "framer-motion";
import { Swords, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Overture" },
  { href: "#characters", label: "Shinigami" },
  { href: "#bankai", label: "Bankai" },
  { href: "#arcs", label: "Arcs" },
  { href: "#world", label: "Soul Society" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="#hero" className="group flex items-center gap-2">
          <span className="relative grid h-9 w-9 place-items-center rounded-md glass glow-cyan">
            <Swords className="h-4 w-4 text-reishi" />
            <span className="absolute inset-0 rounded-md animate-pulse-aura" style={{ boxShadow: "0 0 28px oklch(0.82 0.18 210/.6)" }} />
          </span>
          <span className="font-display text-sm uppercase tracking-[0.3em] text-white/90">
            Soul<span className="text-reishi text-glow-cyan">Society</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full px-2 py-1.5 glass md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-white/70 transition hover:text-white"
            >
              <span className="relative z-10">{l.label}</span>
            </a>
          ))}
        </nav>

        <a
          href="#bankai"
          className="hidden rounded-full border border-bankai/40 bg-bankai/10 px-4 py-2 text-xs font-medium uppercase tracking-widest text-bankai transition hover:bg-bankai/20 hover:shadow-[0_0_30px_oklch(0.75_0.21_50/0.5)] md:inline-flex"
        >
          Release Bankai
        </a>

        <button
          aria-label="Menu"
          className="grid h-10 w-10 place-items-center rounded-md glass md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-4 w-4 text-white" />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-5 mt-2 rounded-2xl glass p-4 md:hidden"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm uppercase tracking-widest text-white/80">
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
