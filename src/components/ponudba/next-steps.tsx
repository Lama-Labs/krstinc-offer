import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const STEPS = [
  "Pregled ponudbe in potrditev obsega",
  "Podpis pogodbe in prvi obrok",
  "Začetek razvoja — prvi rezultati v 2 tednih",
];

export function NextSteps() {
  return (
    <section id="naslednji-koraki" className="bg-texture py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal">
            <h2 className="mb-10 text-2xl font-bold text-primary sm:text-3xl">
              Naslednji koraki
            </h2>
          </div>

          <ol className="reveal reveal-delay-1 mb-10 space-y-4">
            {STEPS.map((step, i) => (
              <li
                key={i}
                className="flex items-center gap-4 rounded-xl border border-border/60 bg-card p-4 text-left shadow-sm"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                  {step}
                </span>
              </li>
            ))}
          </ol>

          <div className="reveal reveal-delay-2">
            <Button
              render={<a href="mailto:info@lamalabs.si" />}
              className="h-12 gap-2 bg-accent px-8 text-base font-semibold text-accent-foreground hover:bg-accent/90"
            >
              <Mail className="size-4" />
              Potrdi ponudbo
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Vprašanja? Pišite na{" "}
              <a
                href="mailto:info@lamalabs.si"
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                info@lamalabs.si
              </a>{" "}
              ali pokličite{" "}
              <a
                href="tel:+38640123456"
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                040 123 456
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
