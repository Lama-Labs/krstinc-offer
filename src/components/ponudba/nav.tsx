"use client";

import { useActiveSection, SECTIONS, type SectionId } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LABELS: Record<SectionId, string> = {
  povzetek: "Povzetek",
  vratar: "Vratar",
  kotlovnice: "Kotlovnice",
  vloge: "Vloge",
  faze: "Faze",
  cena: "Cena",
  "naslednji-koraki": "Naslednji koraki",
};

export function Nav() {
  const active = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#"
          className="font-heading text-sm font-bold tracking-[0.2em] text-primary uppercase"
        >
          LAMA LABS
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm transition-colors",
                active === id
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {NAV_LABELS[id]}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
          aria-label="Meni"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-lg md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  active === id
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {NAV_LABELS[id]}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
