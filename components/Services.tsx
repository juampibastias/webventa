import { services } from "@/lib/content";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="servicios" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-brand-300">Servicios</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Todo lo que tu producto digital necesita
          </h2>
          <p className="mt-4 text-slate-400">
            Desde la idea hasta el crecimiento. Elegí el servicio o combinamos los que
            necesites en una sola solución.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <article className="card-gradient-border group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/15 text-brand-300 transition-colors group-hover:bg-brand-500/25">
                    <Icon name={service.icon} />
                  </div>
                  {service.tag && (
                    <span className="rounded-full bg-cyber-500/15 px-3 py-1 text-xs font-medium text-cyber-400">
                      {service.tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-300">
                      <Icon name="check" className="h-4 w-4 text-cyber-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
