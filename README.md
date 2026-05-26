<div align="center">

# ⚔️ BLEACH — Soul Society

> *"If fate is a millstone, then we are the grist."*

A cinematic, anime-grade fan site for the **Bleach** universe — built with modern web tech, glowing UI, and soul reaper energy.

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TanStack](https://img.shields.io/badge/TanStack_Start-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

---

## ✨ Features

- 🌌 **Cinematic Hero** — Full-screen animated landing with floating particles and reishi aura effects
- 👤 **Characters** — Showcase of iconic Soul Reapers, Hollows, and Espada
- ⚔️ **Arcs** — Timeline of major story arcs from the Bleach universe
- 🌍 **World** — Lore section covering Soul Society, Hueco Mundo, and the Human World
- 💥 **Bankai** — Dedicated section for the most powerful Bankai releases
- 🎨 **Anime-grade UI** — Glassmorphism cards, cyan/orange glow effects, grain overlays, and custom scrollbar
- 🔤 **Orbitron + Inter** — Display font pairing for that sci-fi soul reaper aesthetic
- 📱 **Fully Responsive** — Looks sharp on all screen sizes

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (SSR) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 + tw-animate-css |
| Components | Radix UI + shadcn/ui |
| Animations | Framer Motion + GSAP |
| Charts | Recharts |
| Forms | React Hook Form + Zod |
| Routing | TanStack Router |
| Build Tool | Vite 7 |
| Language | TypeScript 5 |
| Deployment | Cloudflare Workers |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ or [Bun](https://bun.sh/)

### Installation

```bash
# Clone the repo
git clone https://github.com/Abhinav-Praveen004/Bleach.git
cd Bleach

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/          # Radix UI / shadcn base components
│   ├── Hero.tsx     # Landing hero section
│   ├── Navbar.tsx   # Top navigation
│   ├── Characters.tsx
│   ├── Arcs.tsx
│   ├── World.tsx
│   ├── Bankai.tsx
│   ├── Particles.tsx
│   └── Footer.tsx
├── routes/
│   ├── __root.tsx   # Root layout
│   └── index.tsx    # Home page
├── styles.css       # Global styles & theme tokens
└── router.tsx
```

---

## 🎨 Design System

The theme is built around the Bleach universe's visual identity:

| Token | Color | Usage |
|---|---|---|
| `--reishi` | Cyan | Primary accent, glow effects |
| `--bankai` | Orange | Secondary accent, highlights |
| `--soul` | Purple | Tertiary / spiritual energy |
| `--blood` | Red | Danger / hollow energy |
| `--ink` | Near-black | Base background |

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

---

## 🌐 Deployment

This project is configured for **Cloudflare Workers** via `wrangler.jsonc`. To deploy:

```bash
npx wrangler deploy
```

---

<div align="center">

Made with ⚔️ and reishi energy &nbsp;|&nbsp; Inspired by Tite Kubo's *Bleach*

</div>
