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
                €20.000
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                Fiksna cena za celoten obseg, opisan v tej ponudbi.
              </p>
            </CardContent>
          </Card>

          {/* Payment schedule */}
          <div className="reveal reveal-delay-1 mt-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Plačilo v treh obrokih
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Obrok</TableHead>
                  <TableHead>Mejnik</TableHead>
                  <TableHead className="text-right">Znesek</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">40%</TableCell>
                  <TableCell>Ob začetku</TableCell>
                  <TableCell className="text-right font-mono">€8.000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">30%</TableCell>
                  <TableCell>Po zaključku faze 2</TableCell>
                  <TableCell className="text-right font-mono">€6.000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">30%</TableCell>
                  <TableCell>Ob predaji</TableCell>
                  <TableCell className="text-right font-mono">€6.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <Separator className="reveal my-8" />

          {/* Includes / Excludes */}
          <div className="reveal reveal-delay-2 grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Vključuje
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Razvoj backend in frontend",
                  "Responsiven dizajn (telefon + računalnik)",
                  "Namestitev na strežnik",
                  "30 dni podpore po predaji",
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
                Ne vključuje
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Strežniška infrastruktura (mesečni strošek)",
                  "Nadaljnji razvoj izven opisanega obsega",
                  "Integracija z obstoječim CRM sistemom",
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
        </div>
      </div>
    </section>
  );
}
