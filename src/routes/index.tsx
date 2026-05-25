import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Characters } from "@/components/Characters";
import { Bankai } from "@/components/Bankai";
import { Arcs } from "@/components/Arcs";
import { World } from "@/components/World";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen text-white">
      <Navbar />
      <Hero />
      <Characters />
      <Bankai />
      <Arcs />
      <World />
      <Footer />
    </main>
  );
}
