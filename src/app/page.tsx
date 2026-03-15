"use client";

import { useReveal } from "@/hooks/use-reveal";
import { Nav } from "@/components/ponudba/nav";
import { Hero } from "@/components/ponudba/hero";
import { Summary } from "@/components/ponudba/summary";
import { ModuleVratar } from "@/components/ponudba/module-vratar";
import { ModuleKotlovnice } from "@/components/ponudba/module-kotlovnice";
import { Roles } from "@/components/ponudba/roles";
import { Phases } from "@/components/ponudba/phases";
import { Pricing } from "@/components/ponudba/pricing";
import { NextSteps } from "@/components/ponudba/next-steps";
import { Footer } from "@/components/ponudba/footer";

export default function PonudbaPage() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      <Nav />
      <Hero />
      <main>
        <Summary />
        <ModuleVratar />
        <ModuleKotlovnice />
        <Roles />
        <Phases />
        <Pricing />
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
}
