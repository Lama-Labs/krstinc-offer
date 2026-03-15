import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, Minus } from "lucide-react";

export function Pricing() {
  return (
    <section id="cena" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mb-12">
          <h2 className="mb-4 text-2xl font-bold text-primary sm:text-3xl">
            Skupna cena projekta
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <Card className="reveal border-0 ring-2 ring-primary/20 shadow-md">
            <CardContent className="py-10 text-center">
              <p className="font-mono text-5xl font-bold tracking-tight text-primary sm:text-6xl">
                €8.000
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                Končna fiksna cena za celoten obseg, opisan v tej ponudbi.
              </p>
            </CardContent>
          </Card>

           {/* Pricing breakdown */}
           <div className="reveal reveal-delay-1 mt-8">
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              Okvirna razčlenitev cene
            </h3>
            <p className="mb-4 text-sm text-foreground/80">
              Spodnja razčlenitev prikazuje, kako je približno razporejen strošek po
              glavnih sklopih projekta. Zneski so informativni in služijo boljši
              predstavi, vsa dela pa se izvajajo kot celota po fiksni skupni ceni.
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sklop</TableHead>
                  <TableHead className="text-right">Okvirni delež</TableHead>
                  <TableHead className="text-right">Okvirni znesek</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    Načrtovanje rešitve, delavnice in priprava strukture sistema
                  </TableCell>
                  <TableCell className="text-right">20 %</TableCell>
                  <TableCell className="text-right font-mono">€1.600</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Oblikovanje grafičnega vmesnika in uporabniške izkušnje
                  </TableCell>
                  <TableCell className="text-right">20 %</TableCell>
                  <TableCell className="text-right font-mono">€1.600</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Izvedba sistema za shranjevanje podatkov in logiko delovanja
                  </TableCell>
                  <TableCell className="text-right">30 %</TableCell>
                  <TableCell className="text-right font-mono">€2.400</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Vzpostavitev skrbniških pogledov, uporabniških računov in
                    osnovnih nastavitev
                  </TableCell>
                  <TableCell className="text-right">15 %</TableCell>
                  <TableCell className="text-right font-mono">€1.200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Namestitev, testiranje, navodila za uporabo in podpora po
                    predaji
                  </TableCell>
                  <TableCell className="text-right">15 %</TableCell>
                  <TableCell className="text-right font-mono">€1.200</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <Separator className="reveal my-8" />

          {/* Includes / Excludes */}
          <div className="reveal reveal-delay-2 space-y-8">
            <p className="text-sm text-foreground/80">
              V ceno je vključena priprava celotne rešitve, ki bo stranki
              omogočala enostavno uporabo preko računalnika in mobilnih naprav.
              Uporabniki bodo imeli na voljo jasno, pregledno in sodobno grafično
              okolje, do katerega bodo dostopali prek spletnega brskalnika, brez
              potrebe po dodatni namestitvi programov.
            </p>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                  Vključeno v ceno
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "Načrtovanje uporabniške izkušnje in priprava grafičnega vmesnika, ki bo razumljiv tudi manj tehnično podkovanim uporabnikom.",
                    "Prilagodljiv (responsive) dizajn, ki bo lepo deloval na računalnikih, tablicah in telefonih.",
                    "Vzpostavitev sistema za shranjevanje in obdelavo podatkov, da bodo informacije varno shranjene in vedno dostopne po prijavi.",
                    "Priprava skrbniškega pogleda, kjer boste lahko urejali vsebino, podatke in osnovne nastavitve sistema.",
                    "Vzpostavitev uporabniških računov (prijava z uporabniškim imenom in geslom) ter osnovne ravni pravic za različne tipe uporabnikov.",
                    "Namestitev delujoče rešitve na dogovorjeno okolje (npr. oblak ali obstoječi strežnik) in osnovna konfiguracija.",
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
                    "Mesečni stroški strežnika, domene, e‑poštnih predalov ali drugih naročnin pri zunanjih ponudnikih.",
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
              Za navedeno ceno dobite delujoč, pregleden in za
              uporabo preprost spletni sistem, ki bo vašim uporabnikom dostopen
              preko računalnika in mobilnih naprav, vam pa bo omogočal varen
              vpogled in urejanje podatkov. Vse dodatne želje, razširitve ali
              zunanje mesečne naročnine niso vključene v ceno in bodo, če se zanje
              naknadno odločite, predmet ločenega dogovora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
