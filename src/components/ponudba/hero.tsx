import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero text-hero-foreground">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start md:gap-10 lg:gap-12">
          <div className="md:col-span-8">
            <p className="mb-6 font-heading text-xs font-bold tracking-[0.3em] text-accent uppercase">
              LAMA LABS
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Ponudba za razvoj sistema
            </h1>
            <p className="mb-2 font-heading text-lg font-medium text-hero-muted sm:text-xl">
              Krštinc — Upravljanje kotlovnic &amp; evidenca zaposlenih
            </p>
            <p className="mt-6 text-base leading-relaxed text-hero-muted/80 sm:text-lg">
              Celovita rešitev za upravljanje kotlovnic, terenski servis
              in evidenco delovnega časa — v eni aplikaciji.
            </p>

            <div className="mt-10">
              <Button
                nativeButton={false}
                render={<a href="#povzetek" />}
                className="h-11 gap-2 bg-accent px-6 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
              >
                Preglej ponudbo
                <ArrowDown className="size-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:col-span-4 md:justify-end">
            <img
              src="/logo_krstinc.svg"
              alt="Krštinc"
              className="h-24 w-auto sm:h-32 md:h-36 lg:h-40"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
