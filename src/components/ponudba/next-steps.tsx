import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const STEPS = [
  "Pregled ponudbe in potrditev obsega",
  "Podpis pogodbe in prvi obrok",
  "Začetek razvoja — prvi rezultati v 2 tednih",
];

export function NextSteps() {
  return (
    <section id="naslednji-koraki" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal">
            <h2 className="mb-10 text-2xl font-bold text-foreground sm:text-3xl">
              Naslednji koraki
            </h2>
          </div>

          <ol className="reveal reveal-delay-1 mb-10 space-y-4">
            {STEPS.map((step, i) => (
              <li
                key={i}
                className="flex items-center gap-4 rounded-lg border border-border/60 bg-card p-4 text-left shadow-sm"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-red font-mono text-sm font-bold text-white">
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
              nativeButton={false}
              render={<a href="mailto:info@lama-labs.com" />}
              className="h-12 gap-2 rounded-full bg-brand-red px-8 text-base font-bold text-white hover:bg-brand-orange-red"
            >
              <Mail className="size-4" />
              Potrdi ponudbo
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Vprašanja? Pišite na{" "}
              <a
                href="mailto:info@lama-labs.com"
                className="text-brand-red underline underline-offset-2 hover:no-underline"
              >
                info@lama-labs.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
