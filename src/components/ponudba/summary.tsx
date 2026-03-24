import { StatCard } from "./stat-card";

export function Summary() {
  return (
    <section id="povzetek" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-20">
        <div className="reveal mb-12 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Povzetek projekta
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Na osnovi sestankov smo pripravili posodobljeno ponudbo za razvoj enotnega
            poslovnega sistema, ki združuje tri module: Vratar (evidenca zaposlenih),
            Kotlovnice (upravljanje ogrevalnih sistemov) ter CRM (upravljanje strank,
            delovnih nalogov in materiala). Sistem nadomesti obstoječo aplikacijo Vratar,
            obstoječi CRM (serviserji.si) ter ročno vodene evidence kotlovnic — vse v eni
            aplikaciji z enotno prijavo.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          <StatCard value="3 moduli" label="Vratar · Kotlovnice · CRM" delay={1} />
          <StatCard value="~12 tednov" label="Predviden čas razvoja" delay={2} />
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
