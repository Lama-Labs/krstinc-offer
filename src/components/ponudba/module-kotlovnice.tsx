import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FeatureGroup } from "./feature-group";

const FEATURES = [
  {
    title: "Kotlovnice kot entitete",
    features: [
      "Vsaka kotlovnica ima konfigurirane lastnosti (polifosfat, topla voda, sol, tlak …)",
      "Admin določa, katera polja se prikažejo za posamezno kotlovnico",
      "Podpora za toplotne podpostaje (ena stopnja globine)",
      "Opisna polja: lokacija glavnega ventila, opombe, pomembne informacije",
    ],
  },
  {
    title: "QR skeniranje",
    features: [
      "Nalepka na kotlovnici → skeniranje odpre podrobnosti lokacije",
      "Takojšen izbor storitve (kontrolni obhod, servis, popravilo …)",
      "Preskočenih več klikov — hitrejši začetek dela",
    ],
  },
  {
    title: "Kontrolni obhod",
    features: [
      "Potrditvena polja glede na konfiguracijo kotlovnice",
      "Stanje polifosfata ✓ / zmanjkuje ✗",
      "Stanje soli, tlak v sistemu, …",
      "Ob označitvi \"zmanjkuje\" → samodejno opozorilo na pregledu (rdeča lučka)",
    ],
  },
  {
    title: "Storitve na kotlovnici",
    features: [
      "Kontrolni obhod",
      "Letni servis (redni pregled naprav)",
      "Urgentno popravilo",
      "Redno popravilo",
      "Obisk v stanovanju",
      "Praznjenje / polnjenje sistema",
      "Dopolnjevanje sistema",
      "Sprememba nastavitev (beleženje parametrov, npr. tlak črpalke)",
      "Vsaka storitev beleži: datum, čas trajanja, opombe, izvajalec",
    ],
  },
  {
    title: "Hiter pregled stanja (Dashboard)",
    features: [
      "Seznam vseh kotlovnic v eni vrstici",
      "Barvne lučke za status (zelena = OK, rdeča = pozor)",
      "Filtriranje in sortiranje po statusu",
      "Klik na kotlovnico → podrobnosti, zgodovina, zavihki",
    ],
  },
  {
    title: "Obvestila in naloge (To-Do)",
    features: [
      "Koledar prihajajočih dogodkov: praznjenje, polnjenje, zagon, izklop ogrevanja",
      "Opozorila nekaj dni pred načrtovanim dogodkom",
      "Dashboard ob vstopu v aplikacijo: \"Kaj te čaka\"",
      "Ročni vnos planiranih dogodkov z datumom",
    ],
  },
  {
    title: "Dnevnik",
    features: [
      "Vsak vnos (kontrolni obhod, servis, popravilo) se zabeleži v zgodovino",
      "Nadomešča ročno pisane dnevnike",
      "Izvoz dnevnika v PDF za upravnike",
      "Zgodovina sprememb nastavitev (npr. tlak črpalke skozi leta)",
    ],
  },
  {
    title: "Dostop za upravnike (opcijsko / faza 2)",
    features: [
      "Možnost omejenega dostopa za upravnike stavb",
      "Pregled dnevnika brez možnosti urejanja",
      "Časovno omejen dostop ali odobritev s strani admina",
    ],
  },
];

export function ModuleKotlovnice() {
  return (
    <section id="kotlovnice" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-20">
        <div className="reveal mb-10">
          <div className="mb-4 flex items-center gap-3">
            <Badge variant="outline" className="font-mono text-xs uppercase tracking-wider">
              Modul 2
            </Badge>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-brand-orange-red sm:text-3xl">
            Upravljanje kotlovnic
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nov modul za evidenco in vzdrževanje kotlovnic ter toplotnih podpostaj.
            Zasnovan za hitro delo na terenu (QR skeniranje) in pregledno spremljanje
            stanja v pisarni.
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
