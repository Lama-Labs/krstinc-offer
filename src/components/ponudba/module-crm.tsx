import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { FeatureGroup } from "./feature-group";
import { ArrowLeftRight } from "lucide-react";

const FEATURES = [
  {
    title: "Stranke",
    features: [
      "Uvoz strank iz računovodskega programa (enosmerna sinhronizacija)",
      "Prikaz vseh podatkov o stranki na enem mestu",
      "Iskanje in filtriranje po imenu, naslovu, šifri",
    ],
  },
  {
    title: "Kontakti",
    features: [
      "Vodenje kontaktnih oseb pri posamezni stranki (telefon, e-pošta)",
      "Podatki shranjeni v CRM-ju (računovodski program tega ne podpira)",
      "Možnost več kontaktov na stranko",
    ],
  },
  {
    title: "Delovni nalogi",
    features: [
      "Ustvarjanje nalogov: letni pregled, popravilo, servis, drugo",
      "Dodeljevanje serviserjem s koledarskim prikazom",
      "Statusni tok: nov → dodeljen → v izvajanju → zaključen",
      "Ob ustvarjanju naloga se samodejno prenesejo predpripravljene postavke (šifrant del za stranko)",
      "Opombe in opis dela na nalogu",
    ],
  },
  {
    title: "Šifrant materiala in storitev",
    features: [
      "Uvoz materialnega šifranta iz računovodskega programa",
      "Predpripravljene postavke pri posamezni stranki (kaj se redno dela)",
      "Serviser na terenu izbere postavke — cene so že predizpolnjene",
      "Možnost ročnega dodajanja postavk",
    ],
  },
  {
    title: "Zaključek na terenu",
    features: [
      "Serviser na telefonu potrdi opravljen nalog",
      "Zabeleži porabljeni material in količine",
      "Opombe in opis opravljenega dela",
      "Podpis stranke na napravi (opcijsko / faza 2)",
    ],
  },
  {
    title: "Povratna integracija z računovodstvom",
    features: [
      "Zaključeni nalogi s postavkami se pošljejo nazaj v računovodski program",
      "Samodejni prenos šifer, količin in cen za izdajo računa",
      "Odprava ročnega prepisovanja podatkov",
    ],
  },
  {
    title: "E-pošta",
    features: [
      "Pošiljanje nalogov in potrditev strankam po e-pošti neposredno iz sistema",
    ],
  },
];

const MODULE_CONNECTIONS = [
  {
    label: "CRM ↔ Kotlovnice",
    items: [
      "Delovni nalog se lahko nanaša na konkretno kotlovnico",
      "Zaključen obhod na kotlovnici lahko samodejno ustvari zahtevek v CRM-ju za obračunavanje",
      "Interne vzdrževalne naloge (brez stranke) ostanejo samo v modulu Kotlovnic",
    ],
  },
  {
    label: "CRM ↔ Vratar",
    items: [
      "Koledar nalogov v CRM-ju in koledar v Vratarju sta sinhronizirana prek Google koledarja",
    ],
  },
  {
    label: "Vratar ↔ Kotlovnice",
    items: [
      "Serviser, ki izvaja storitev na kotlovnici, je isti uporabnik, ki beleži ure v Vratarju",
      "Skupna prijava, skupne vloge, skupna navigacija",
    ],
  },
];

export function ModuleCRM() {
  return (
    <section id="crm" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-20">
        <div className="reveal mb-10">
          <div className="mb-4 flex items-center gap-3">
            <Badge variant="outline" className="font-mono text-xs uppercase tracking-wider">
              Modul 3
            </Badge>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-brand-orange sm:text-3xl">
            CRM — Upravljanje strank in delovnih nalogov
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nov modul, ki nadomesti obstoječi sistem serviserji.si in združi upravljanje
            strank, delovnih nalogov ter materiala v enotnem okolju. Ključna prednost je
            dvosmerna integracija z obstoječim računovodskim programom — uvoz strank in
            šifranta, povratni tok za izdajo računov.
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

        {/* Module connections */}
        <div className="reveal mt-14">
          <Card className="border-brand-orange/20 bg-brand-orange/5 shadow-sm">
            <CardContent className="py-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-brand-orange/10">
                  <ArrowLeftRight className="size-5 text-brand-orange" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Kako se moduli povezujejo
                </h3>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                {MODULE_CONNECTIONS.map((connection) => (
                  <div key={connection.label}>
                    <p className="mb-3 text-sm font-bold text-brand-orange">
                      {connection.label}
                    </p>
                    <ul className="space-y-2">
                      {connection.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm leading-relaxed text-foreground/70"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-orange" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
