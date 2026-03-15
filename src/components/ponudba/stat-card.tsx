import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, label, delay = 0 }: StatCardProps) {
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <Card className={`reveal ${delayClass} border-0 ring-1 ring-border/60 shadow-sm text-center`}>
      <CardContent className="flex flex-col items-center gap-1 py-6">
        <span className="font-mono text-3xl font-bold tracking-tight text-primary">
          {value}
        </span>
        <span className="text-sm text-muted-foreground">{label}</span>
      </CardContent>
    </Card>
  );
}
