import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
          <div className="flex-1">
            <p className="font-heading text-sm font-bold tracking-[0.2em] uppercase">
              LAMA LABS
            </p>
            <div className="mt-3 space-y-1 text-sm text-hero-muted">
              <p>info@lamalabs.si</p>
              <p>040 123 456</p>
            </div>
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
    </footer>
  );
}
