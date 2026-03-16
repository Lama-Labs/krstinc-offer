"use client";

import { useActiveSection, SECTIONS, type SectionId } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LABELS: Record<SectionId, string> = {
  povzetek: "POVZETEK",
  vratar: "VRATAR",
  kotlovnice: "KOTLOVNICE",
  vloge: "VLOGE",
  faze: "FAZE",
  cena: "CENA",
  "naslednji-koraki": "KONTAKT",
};

export function Nav() {
  const active = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.10)]">
      <div className="mx-auto flex h-[70px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-20">
        {/* Collab Logo: Krštinc × Lama Labs */}
        <a href="#" className="flex items-center gap-3">
          {/* Krštinc logo */}
          <svg viewBox="0 0 44 44" className="h-9 w-auto" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="flameGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec1d24" />
                <stop offset="100%" stopColor="#f88b10" />
              </linearGradient>
            </defs>
            <path d="M14 38 C10 32 7 24 12 16 C12 16 13 22 18 23 C16 18 18 12 22 7 C22 7 21 16 27 19 C25 14 27 10 32 7 C32 7 30 16 35 22 C39 20 41 14 41 14 C46 22 42 30 38 38 Z" fill="url(#flameGrad)" />
          </svg>
          <span className="text-sm font-bold tracking-[0.04em] text-foreground">
            KRŠTINC
          </span>

          {/* × separator */}
          <span className="text-lg font-light text-muted-foreground">×</span>

          {/* Lama Labs logo + text */}
          <div className="flex items-center gap-1">
            <img src="/lama-labs.svg" alt="Lama Labs" className="h-9 w-auto" />
            <span className="text-sm font-bold tracking-[0.04em] text-foreground">
              LAMA LABS
            </span>
          </div>
        </a>

        {/* Desktop nav links with separators */}
        <div className="hidden items-center md:flex">
          {SECTIONS.map((id, i) => (
            <div key={id} className="flex items-center">
              {i > 0 && (
                <div className="mx-1 h-[18px] w-px bg-[#cccccc]" />
              )}
              <a
                href={`#${id}`}
                className={cn(
                  "flex h-[70px] items-center px-5 text-base transition-colors",
                  active === id
                    ? "border-b-[3px] border-brand-orange-red text-brand-orange-red"
                    : "border-b-[3px] border-transparent text-foreground hover:text-brand-orange-red"
                )}
              >
                {NAV_LABELS[id]}
              </a>
            </div>
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
        <div className="border-t border-border bg-white md:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col px-5 py-3">
            {SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-3 py-2.5 text-base font-semibold uppercase transition-colors",
                  active === id
                    ? "text-brand-orange-red"
                    : "text-foreground hover:text-brand-orange-red"
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
