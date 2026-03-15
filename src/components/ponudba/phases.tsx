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
    duration: "2–3 tedne",
    items: [
      "Koledar z dnevnimi vnosi",
      "Pregled meseca/leta",
      "Vozila in kilometri",
      "Izvoz podatkov (Excel, PDF)",
      "Dashboard za zaposlenega",
    ],
  },
  {
    phase: "Faza 3",
    title: "Modul Kotlovnice",
    duration: "3–4 tedne",
    items: [
      "Entitete kotlovnic s konfigurabilnimi polji",
      "QR skeniranje in izbor storitve",
      "Kontrolni obhodi s potrditvenimi polji",
      "Vse vrste storitev z beleženjem",
      "Hiter pregled stanja (dashboard z lučkami)",
      "Dnevnik in zgodovina",
    ],
  },
  {
    phase: "Faza 4",
    title: "Zaključek",
    duration: "1 teden",
    items: [
      "Obvestila in to-do seznam",
      "Testiranje in popravki",
      "Namestitev in predaja",
      "Uvajanje uporabnikov",
    ],
  },
];

export function Phases() {
  return (
    <section id="faze" className="bg-texture py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mb-12">
          <h2 className="mb-4 text-2xl font-bold text-primary sm:text-3xl">
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
                <div className="absolute top-1 left-[12px] hidden size-[15px] rounded-full border-[3px] border-accent bg-background sm:block" />

                <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <Badge className="bg-primary text-primary-foreground font-mono text-xs">
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
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
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
