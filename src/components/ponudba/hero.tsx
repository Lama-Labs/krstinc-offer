import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero text-hero-foreground">
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28 lg:px-20 lg:py-36">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-16">
          <div className="md:col-span-8">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">
              LAMA LABS
            </p>
            <h1 className="mb-4 text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-[48px] lg:leading-[58px]">
              PONUDBA ZA RAZVOJ SISTEMA
            </h1>
            <div className="mb-5 h-[3px] w-10 bg-white" />
            <p className="text-xl font-bold text-white/90 underline underline-offset-4">
              Krštinc d.o.o.
            </p>
            <p className="mt-6 text-base leading-relaxed text-hero-muted sm:text-lg">
              Celovita rešitev za evidenco zaposlenih, upravljanje kotlovnic
              in CRM z delovnimi nalogi — v eni aplikaciji.
            </p>

            <div className="mt-10">
              <a
                href="#povzetek"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-3 text-base font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-brand-orange-red"
              >
                PREGLEJ PONUDBO
                <ArrowDown className="size-4" />
              </a>
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
    </section>
  );
}
