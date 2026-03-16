import { Badge } from "@/components/ui/badge";

const PHASES = [
  {
    phase: "Faza 1",
    title: "Temelji",
    duration: "2 tedna",
    items: [
      "Zasnova podatkovnega modela (uporabniki, kotlovnice, vozila, vnosi)",
      "Backend API",
      "Sistem prijave in uporabniških vlog",
      "Osnovna admin konzola",
    ],
  },
  {
    phase: "Faza 2",
    title: "Modul Vratar",
    duration: "3–4 tedne",
    items: [
      "Koledar z dnevnimi vnosi in pregled meseca/leta",
      "Vozila, sledenje kilometrov in relacije",
      "Dopusti, bolniške in avtomatski izračun ur",
      "Dashboard z obveznostmi za tekoči dan",
      "Obvestila in to-do seznam za zaposlenega",
      "Izvoz podatkov (Excel, PDF) — potni nalogi, evidenca prisotnosti",
      "Testiranje modula in popravki",
    ],
  },
  {
    phase: "Faza 3",
    title: "Modul Kotlovnice",
    duration: "2–3 tedne",
    items: [
      "Entitete kotlovnic s konfigurabilnimi polji",
      "QR skeniranje in izbor storitve",
      "Kontrolni obhodi s potrditvenimi polji",
      "Vse vrste storitev z beleženjem",
      "Hiter pregled stanja (dashboard z lučkami)",
      "Dnevnik, zgodovina in izvoz v PDF",
      "Testiranje modula in popravki",
    ],
  },
  {
    phase: "Faza 4",
    title: "Integracija & predaja",
    duration: "1 teden",
    items: [
      "Povezava obeh modulov v celoto — enotna izkušnja",
      "Končno testiranje in odpravljanje napak",
      "Namestitev na produkcijsko okolje",
      "Uvajanje uporabnikov in kratko izobraževanje",
    ],
  },
];

export function Phases() {
  return (
    <section id="faze" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-20">
        <div className="reveal mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Faze razvoja
          </h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute top-0 bottom-0 left-[19px] hidden w-px bg-border sm:block" />

          <div className="space-y-8 sm:space-y-10">
            {PHASES.map((phase, i) => (
              <div
                key={phase.phase}
                className={`reveal reveal-delay-${i + 1} relative sm:pl-14`}
              >
                {/* Timeline dot */}
                <div className="absolute top-1 left-[12px] hidden size-[15px] rounded-full border-[3px] border-brand-orange-red bg-background sm:block" />

                <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <Badge className="bg-brand-red text-white font-mono text-xs">
                      {phase.phase}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground">
                      {phase.title}
                    </h3>
                    <span className="ml-auto font-mono text-sm text-muted-foreground">
                      {phase.duration}
                    </span>
                  </div>
                  <ul className="grid gap-1.5 sm:grid-cols-2">
                    {phase.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm leading-relaxed text-foreground/70"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-orange-red" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
