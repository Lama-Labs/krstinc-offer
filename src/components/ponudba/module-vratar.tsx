import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FeatureGroup } from "./feature-group";

const FEATURES = [
  {
    title: "Prijava in uporabniki",
    features: [
      "Enotna prijava z uporabniškim imenom in geslom",
      "Admin vidi vse zaposlene, zaposleni vidi samo svoje podatke",
      "Upravljanje uporabnikov (dodajanje, urejanje, deaktivacija)",
    ],
  },
  {
    title: "Dnevni vnos",
    features: [
      "Datum, ura začetka, ura konca, malica (opcijsko)",
      "Izbira vozila s samodejnim prenosom začetnih kilometrov",
      "Končni kilometri, parkirnine, relacije (opis poti)",
      "Zaposleni lahko ureja vnos samo 24 ur za nazaj",
      "Validacija podatkov — sistem opozori na manjkajoča polja",
      "Pregled in kopiranje preteklih vnosov za hitrejše delo",
    ],
  },
  {
    title: "Koledar & pregled",
    features: [
      "Mesečni koledar z barvnim označevanjem (delo, dopust, bolniška, praznik)",
      "Pregled dneva za posameznega zaposlenega ali vse (admin)",
      "Pregled meseca in leta s skupnimi urami, nadurami, odsotnostmi",
      "Dashboard z obveznostmi za tekoči dan (to-do seznam)",
      "Obvestila o prihajajočih nalogah in opomnikih",
    ],
  },
  {
    title: "Vozila",
    features: [
      "Register vozil s podatki",
      "Samodejno sledenje kilometrov med zaposlenimi",
      "Možnost popravka začetnega stanja",
    ],
  },
  {
    title: "Dopusti in odsotnosti",
    features: [
      "Vnos dopusta in bolniške z obdobjem (od–do)",
      "Pregled preostalih dni dopusta",
      "Avtomatski izračun ur v mesecu",
      "Letni pregled odsotnosti po tipu (dopust, bolniška, praznik)",
    ],
  },
  {
    title: "Izvoz podatkov",
    features: [
      "Potni nalogi",
      "Evidenca prisotnosti (interna, za delavce, računovodska)",
      "Letni pregled vseh zaposlenih",
      "Izvoz v Excel/CSV",
      "Mesečni povzetek ur in nadur za računovodstvo",
    ],
  },
];

export function ModuleVratar() {
  return (
    <section id="vratar" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-20">
        <div className="reveal mb-10">
          <div className="mb-4 flex items-center gap-3">
            <Badge variant="outline" className="font-mono text-xs uppercase tracking-wider">
              Modul 1
            </Badge>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-brand-red sm:text-3xl">
            Vratar — Evidenca zaposlenih
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Popoln prepis obstoječe Android aplikacije Vratar v sodobno spletno aplikacijo
            z izboljšano uporabniško izkušnjo, dostopno na vseh napravah.
          </p>
        </div>

        <Separator className="reveal mb-10" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((group, i) => (
            <FeatureGroup
              key={group.title}
              title={group.title}
              features={group.features}
              delay={(i % 3) + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
