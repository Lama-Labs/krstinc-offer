import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Wrench, Eye } from "lucide-react";

const ROLES = [
  {
    title: "Administrator",
    icon: Shield,
    badge: "Polni dostop",
    features: [
      "Polni dostop do vseh modulov",
      "Upravljanje uporabnikov in kotlovnic",
      "Konfiguracija polj in lastnosti",
      "Pregled in izvoz vseh podatkov",
      "Urejanje vnosov brez časovne omejitve",
    ],
  },
  {
    title: "Serviser",
    icon: Wrench,
    badge: "Teren + vnos",
    features: [
      "Vnos dnevnega dela (ure, km, naloge)",
      "Izvajanje storitev na kotlovnicah",
      "Pregled svojih podatkov in zgodovine",
      "Urejanje vnosov do 24 ur za nazaj",
      "Dashboard z nalogami za dan",
    ],
  },
  {
    title: "Pregledovalec",
    icon: Eye,
    badge: "Samo branje",
    features: [
      "Samo branje — brez možnosti urejanja",
      "Pregled dnevnikov kotlovnic",
      "Pregled zadnje verzije vnosov",
      "Namenjen upravnikom stavb ali nadzoru",
    ],
  },
];

export function Roles() {
  return (
    <section id="vloge" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-20">
        <div className="reveal mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Uporabniške vloge
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {ROLES.map((role, i) => {
            const Icon = role.icon;
            return (
              <Card
                key={role.title}
                className={`reveal reveal-delay-${i + 1} border-border shadow-sm`}
              >
                <CardHeader>
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-brand-red/10">
                      <Icon className="size-5 text-brand-red" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {role.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-brand-red">
                    {role.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {role.features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm leading-relaxed text-foreground/70"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-orange-red" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
