"use client";

import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, Minus, RotateCcw } from "lucide-react";

const PHASES = [
  {
    phase: "Faza 1",
    title: "Temelji sistema",
    duration: "2 tedna",
    baseAmount: 1600,
  },
  {
    phase: "Faza 2",
    title: "Modul Vratar",
    duration: "3–4 tedne",
    baseAmount: 2800,
  },
  {
    phase: "Faza 3",
    title: "Modul Kotlovnice",
    duration: "2–3 tedne",
    baseAmount: 2400,
  },
  {
    phase: "Faza 4",
    title: "Integracija & predaja",
    duration: "1 teden",
    baseAmount: 1200,
  },
];

const PHASE_DETAILS = [
  {
    phase: "Faza 1",
    title: "Temelji sistema",
    items: [
      {
        name: "Zasnova podatkovne strukture",
        desc: "Načrtovanje podatkovnega modela — kako se podatki o uporabnikih, kotlovnicah, vozilih in vnosih med seboj povezujejo ter kje se shranjujejo.",
      },
      {
        name: "Vzpostavitev strežniškega okolja (Backend API)",
        desc: "Priprava programske logike na strežniku, ki sprejema in obdeluje zahtevke iz aplikacije — npr. prijava, shranjevanje vnosov, pridobivanje podatkov.",
      },
      {
        name: "Sistem za prijavo in pravice uporabnikov",
        desc: "Varna prijava z uporabniškim imenom in geslom ter nastavitev uporabniških vlog (admin, serviser, pregledovalec), da vsak vidi le tisto, kar mu pripada.",
      },
      {
        name: "Osnovna skrbniška konzola",
        desc: "Vmesnik za administratorja, kjer lahko dodaja, ureja in upravlja uporabniške račune ter osnovne nastavitve sistema.",
      },
    ],
  },
  {
    phase: "Faza 2",
    title: "Modul Vratar",
    items: [
      {
        name: "Koledar z dnevnimi vnosi",
        desc: "Interaktivni koledar, kjer zaposleni vnašajo delovne ure, malice in poti — s pregledi po dnevu, mesecu in letu ter barvnim označevanjem (delo, dopust, bolniška).",
      },
      {
        name: "Register vozil in sledenje kilometrov",
        desc: "Sistem za vodenje podatkov o vozilih, samodejni prenos začetnih kilometrov med zaposlenimi ter beleženje relacij (opis poti) in parkirnin.",
      },
      {
        name: "Evidenca dopustov in odsotnosti",
        desc: "Vnos dopustov in bolniških z obdobjem, samodejni izračun preostalih dni in ur v mesecu ter letni pregled po tipu odsotnosti.",
      },
      {
        name: "Dnevni pregled in obvestila",
        desc: "Dashboard (pregledna nadzorna plošča), ki ob vstopu v aplikacijo prikaže obveznosti za tekoči dan, prihajajoče naloge in opomnike.",
      },
      {
        name: "Izvoz podatkov v standardne formate",
        desc: "Priprava izvoza v Excel in PDF — potni nalogi, evidenca prisotnosti (interna in za računovodstvo) ter mesečni povzetki ur in nadur.",
      },
      {
        name: "Testiranje in popravki modula",
        desc: "Temeljit preizkus vseh funkcionalnosti modula Vratar, odpravljanje odkritih napak in zagotavljanje, da sistem deluje pravilno v različnih scenarijih.",
      },
    ],
  },
  {
    phase: "Faza 3",
    title: "Modul Kotlovnice",
    items: [
      {
        name: "Kotlovnice kot nastavljive enote",
        desc: "Vsaka kotlovnica dobi lastno kartico s konfigurabilnimi polji (polifosfat, sol, tlak, topla voda …), ki jih administrator prilagodi glede na dejansko opremo.",
      },
      {
        name: "QR skeniranje za hitro delo na terenu",
        desc: "Nalepka s QR kodo na kotlovnici — serviser jo skenira s telefonom in takoj odpre podrobnosti lokacije ter izbere vrsto storitve, brez nepotrebnih klikov.",
      },
      {
        name: "Kontrolni obhodi s potrditvenimi polji",
        desc: "Digitalni obrazec za redne kontrolne obhode, kjer serviser potrdi stanje posameznih elementov — ob zaznanem pomanjkanju se samodejno sproži opozorilo (rdeča lučka).",
      },
      {
        name: "Beleženje vseh vrst storitev",
        desc: "Evidenca rednih servisov, urgentnih popravil, praznjenja/polnjenja sistema, sprememb nastavitev in drugih posegov — z datumom, trajanjem, opombami in izvajalcem.",
      },
      {
        name: "Nadzorna plošča s statusom kotlovnic",
        desc: "Hiter pregled vseh kotlovnic na enem zaslonu z barvnimi oznakami (zelena = v redu, rdeča = potrebna pozornost), filtriranjem po statusu in neposrednim dostopom do podrobnosti.",
      },
      {
        name: "Dnevnik in zgodovina posegov",
        desc: "Samodejno beleženje vseh vnosov in sprememb v digitalni dnevnik, ki nadomesti ročno pisane evidence — z možnostjo izvoza v PDF za upravnike stavb.",
      },
    ],
  },
  {
    phase: "Faza 4",
    title: "Integracija & predaja",
    items: [
      {
        name: "Povezava modulov v enotno aplikacijo",
        desc: "Usklajevanje obeh modulov (Vratar in Kotlovnice) v skupno okolje — enotna prijava, skupna navigacija in konsistentna uporabniška izkušnja.",
      },
      {
        name: "Končno testiranje in zagotavljanje kakovosti",
        desc: "Celovit preizkus celotnega sistema v pogojih, ki posnemajo resnično uporabo — preverjanje vseh kombinacij vlog, naprav (telefon, računalnik) in scenarijev.",
      },
      {
        name: "Namestitev na produkcijsko okolje (oblak)",
        desc: "Uvedba aplikacije na strežnik v oblaku, nastavitev domene, varnostnih certifikatov (HTTPS) in začetna konfiguracija za dejansko uporabo.",
      },
      {
        name: "Uvajanje uporabnikov in izobraževanje",
        desc: "Kratka navodila za uporabo ter uvajalno izobraževanje (online), da boste sistem lahko samostojno uporabljali — vključno z 30 dnevi podpore po predaji.",
      },
    ],
  },
];

function formatEuro(amount: number) {
  return `€${amount.toLocaleString("sl-SI")}`;
}

const DEFAULT_ADJUSTMENTS = [0, 0, 0, 0];

export function Pricing() {
  const [adjustments, setAdjustments] = useState(DEFAULT_ADJUSTMENTS);

  const setPhaseAdjustment = useCallback((index: number, value: number) => {
    setAdjustments((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    setAdjustments([0, 0, 0, 0]);
  }, []);

  const phaseAmounts = PHASES.map(
    (phase, i) => Math.round(phase.baseAmount * (1 + adjustments[i] / 100)),
  );
  const total = phaseAmounts.reduce((sum, a) => sum + a, 0);
  const isDefault = adjustments.every((a) => a === 0);

  return (
    <section id="cena" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-20">
        <div className="reveal mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Skupna cena projekta
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <Card className="reveal border-border ring-2 ring-brand-red/20 shadow-md">
            <CardContent className="py-10 text-center">
              <p className="flex items-center justify-center gap-4 font-mono text-5xl font-bold tracking-tight text-brand-red sm:text-6xl">
                {formatEuro(total)}
                {isDefault && (
                  <span className="text-2xl font-medium text-muted-foreground sm:text-3xl">
                    ±10%
                  </span>
                )}
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                Ocenjena cena za celoten obseg, opisan v tej ponudbi. Končni
                znesek se lahko giblje med €7.200 in €8.800, odvisno od
                natančnega obsega in morebitnih prilagoditev med razvojem.
              </p>
            </CardContent>
          </Card>

          {/* Phase-by-phase pricing breakdown */}
          <div className="reveal reveal-delay-1 mt-10">
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              Razčlenitev cene po fazah
            </h3>
            <p className="mb-6 text-sm text-foreground/80">
              Spodnja razčlenitev prikazuje, kako je strošek razporejen po fazah
              razvoja in kakšne tehnične zahteve vključuje posamezna faza.
              Premikajte drsnike, da prilagodite obseg posamezne faze za ±10 %.
            </p>

            {/* Interactive summary table */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Faza</TableHead>
                  <TableHead>Obseg</TableHead>
                  <TableHead className="text-right">Čas</TableHead>
                  <TableHead className="hidden min-[540px]:table-cell">
                    Prilagoditev
                  </TableHead>
                  <TableHead className="text-right">Znesek</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {PHASES.map((phase, i) => (
                  <TableRow key={phase.phase}>
                    <TableCell className="font-medium">
                      {phase.phase}
                    </TableCell>
                    <TableCell>{phase.title}</TableCell>
                    <TableCell className="text-right font-mono text-xs">
                      {phase.duration}
                    </TableCell>
                    <TableCell className="hidden min-[540px]:table-cell">
                      <div className="flex items-center gap-2">
                        <span className="w-10 text-right font-mono text-xs text-muted-foreground">
                          {adjustments[i] > 0 ? "+" : ""}
                          {adjustments[i]}%
                        </span>
                        <input
                          type="range"
                          min={-10}
                          max={10}
                          step={1}
                          value={adjustments[i]}
                          onChange={(e) =>
                            setPhaseAdjustment(i, Number(e.target.value))
                          }
                          className="h-1.5 w-24 cursor-pointer appearance-none rounded-full bg-border accent-brand-red"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      <span
                        className={
                          adjustments[i] !== 0
                            ? adjustments[i] > 0
                              ? "text-destructive"
                              : "text-success"
                            : ""
                        }
                      >
                        {formatEuro(phaseAmounts[i])}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow className="bg-muted/50 font-semibold">
                  <TableCell colSpan={2}>Skupaj</TableCell>
                  <TableCell className="text-right" />
                  <TableCell className="hidden min-[540px]:table-cell">
                    {!isDefault && (
                      <Button
                        variant="ghost"
                        size="xs"
                        className="gap-1 text-xs text-muted-foreground"
                        onClick={resetAll}
                      >
                        <RotateCcw className="size-3" />
                        Ponastavi
                      </Button>
                    )}
                  </TableCell>
                  <TableCell className="text-right font-mono">
                    <span
                      className={
                        total !== 8000
                          ? total > 8000
                            ? "text-destructive"
                            : "text-success"
                          : ""
                      }
                    >
                      {formatEuro(total)}
                    </span>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>

            {/* Mobile sliders (shown below table on small screens) */}
            <div className="mt-4 space-y-3 min-[540px]:hidden">
              <p className="text-xs font-medium text-muted-foreground">
                Prilagodite obseg posamezne faze:
              </p>
              {PHASES.map((phase, i) => (
                <div key={phase.phase} className="flex items-center gap-3">
                  <span className="w-14 shrink-0 text-xs font-medium text-foreground">
                    {phase.phase}
                  </span>
                  <input
                    type="range"
                    min={-10}
                    max={10}
                    step={1}
                    value={adjustments[i]}
                    onChange={(e) =>
                      setPhaseAdjustment(i, Number(e.target.value))
                    }
                    className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-border accent-brand-red"
                  />
                  <span className="w-10 text-right font-mono text-xs text-muted-foreground">
                    {adjustments[i] > 0 ? "+" : ""}
                    {adjustments[i]}%
                  </span>
                </div>
              ))}
              {!isDefault && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 text-xs text-muted-foreground"
                  onClick={resetAll}
                >
                  <RotateCcw className="size-3" />
                  Ponastavi na privzeto
                </Button>
              )}
            </div>
          </div>

          {/* Detailed phase breakdowns */}
          <div className="mt-10 space-y-8">
            {PHASE_DETAILS.map((phase, i) => (
              <div
                key={phase.phase}
                className={`reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <Badge className="bg-brand-red text-white font-mono text-xs">
                    {phase.phase}
                  </Badge>
                  <h4 className="text-base font-semibold text-foreground">
                    {phase.title}
                  </h4>
                  <span className="ml-auto font-mono text-sm text-muted-foreground">
                    {formatEuro(phaseAmounts[i])}
                  </span>
                </div>

                <div className="rounded-lg border border-border/60 bg-card">
                  {phase.items.map((item, j) => (
                    <div
                      key={j}
                      className={`px-4 py-3.5 ${j !== phase.items.length - 1 ? "border-b border-border/40" : ""}`}
                    >
                      <p className="text-sm font-medium text-foreground">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/60">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Separator className="reveal my-8" />

          {/* Includes / Excludes */}
          <div className="reveal reveal-delay-2 space-y-8">
            <p className="text-sm text-foreground/80">
              V ceno je vključena priprava celotne rešitve, ki bo stranki
              omogočala enostavno uporabo preko računalnika in mobilnih naprav.
              Uporabniki bodo imeli na voljo jasno, pregledno in sodobno
              grafično okolje, do katerega bodo dostopali prek spletnega
              brskalnika, brez potrebe po dodatni namestitvi programov.
            </p>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-red">
                  Vključeno v ceno
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "Načrtovanje uporabniške izkušnje in priprava grafičnega vmesnika, ki bo razumljiv tudi manj tehnično podkovanim uporabnikom.",
                    "Prilagodljiv (responsive) dizajn, ki bo lepo deloval na računalnikih, tablicah in telefonih.",
                    "Vzpostavitev sistema za shranjevanje in obdelavo podatkov, da bodo informacije varno shranjene in vedno dostopne po prijavi.",
                    "Priprava skrbniškega pogleda, kjer boste lahko urejali vsebino, podatke in osnovne nastavitve sistema.",
                    "Vzpostavitev uporabniških računov (prijava z uporabniškim imenom in geslom) ter osnovne ravni pravic za različne tipe uporabnikov.",
                    "Uvedba delujoče rešitve v produkcijsko okolje (oblak) in začetna konfiguracija.",
                    "Osnovno testiranje ključnih funkcionalnosti ter odprava napak, ki jih odkrijemo v tej fazi.",
                    "Kratka pisna navodila in kratko uvajalno izobraževanje (online), da boste rešitev lahko samostojno uporabljali.",
                    "30 dni podpore po predaji projekta za manjše popravke in pomoč pri uporabi v okviru dogovorjenih funkcionalnosti.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/70"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Ni vključeno v ceno
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "Mesečni stroški strežnika in storitve oblaka pri zunanjih ponudnikih.",
                    "Dodatne funkcionalnosti ali večje spremembe, ki niso opisane v tej ponudbi (npr. povsem nove vrste modulov ali zaslonov).",
                    "Priprava vsebin (besedila, fotografije, videi), profesionalno fotografiranje ali snemanje.",
                    "Napredne integracije z internimi sistemi (npr. obstoječimi računovodskimi, proizvodnimi ali CRM sistemi).",
                    "Nadaljnji razvoj po zaključku projekta (novi moduli, nadgradnje ali večje prilagoditve po predaji).",
                    "Podpora končnim uporabnikom (helpdesk za vaše stranke) izven dogovorjenega obdobja podpore.",
                    "Daljše ali ponavljajoče se izobraževanje zaposlenih, ki presega osnovno uvajalno izobraževanje.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/70"
                    >
                      <Minus className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-sm text-foreground/80">
              Za navedeno ceno dobite delujoč, pregleden in za uporabo preprost
              spletni sistem, ki bo vašim uporabnikom dostopen preko računalnika
              in mobilnih naprav, vam pa bo omogočal varen vpogled in urejanje
              podatkov. Vse dodatne želje, razširitve ali zunanje mesečne
              naročnine niso vključene v ceno in bodo, če se zanje naknadno
              odločite, predmet ločenega dogovora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
