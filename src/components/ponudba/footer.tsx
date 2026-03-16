import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:px-20">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <img src="/lama-labs.svg" alt="Lama Labs" className="h-7 w-auto brightness-0 invert" />
              <span className="text-sm font-bold tracking-[0.2em] uppercase">
                LAMA LABS
              </span>
            </div>
            <p className="mt-3 text-sm text-hero-muted">
              info@lama-labs.com
            </p>
          </div>
          <div className="text-sm text-hero-muted">
            <p>Ljubljana, marec 2026</p>
          </div>
        </div>
        <Separator className="my-6 bg-white/10" />
        <p className="text-center text-xs text-hero-muted/60">
          Ta ponudba je zaupne narave in namenjena izključno naslovniku.
        </p>
      </div>
      <div className="brand-bar" />
    </footer>
  );
}
