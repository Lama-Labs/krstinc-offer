import { StatCard } from "./stat-card";

export function Summary() {
  return (
    <section id="povzetek" className="bg-texture py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mb-12 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-primary sm:text-3xl">
            Povzetek projekta
          </h2>
          <p className="text-base leading-relaxed text-foreground/70 sm:text-lg">
            Na osnovi najinih pogovorov smo pripravili ponudbo za razvoj enotnega sistema,
            ki bo nadomestil obstoječo aplikacijo Vratar in dodal nov modul za upravljanje
            kotlovnic. Sistem bo zasnovan za uporabo na telefonu (teren) in računalniku (pisarna),
            z enotno prijavo in skupno bazo uporabnikov.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          <StatCard value="2 modula" label="Vratar + Kotlovnice" delay={1} />
          <StatCard value="~8 tednov" label="Predviden čas razvoja" delay={2} />
          <StatCard
            value="3 vloge"
            label="Admin · Serviser · Pregledovalec"
            delay={3}
          />
        </div>
      </div>
    </section>
  );
}
