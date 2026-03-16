import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface FeatureGroupProps {
  title: string;
  features: string[];
  delay?: number;
}

export function FeatureGroup({ title, features, delay = 0 }: FeatureGroupProps) {
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <Card className={`reveal ${delayClass} border-border shadow-sm`}>
      <CardHeader className="pb-0">
        <CardTitle className="text-base font-semibold text-brand-red">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2.5">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/80">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-orange-red" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
