import { whyUs } from "@/lib/content";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function WhyUs() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-medium text-brand-300">Por qué nosotros</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {whyUs.title}
            </h2>
            <p className="mt-4 max-w-md text-slate-400">{whyUs.subtitle}</p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-brand-600/20 to-transparent p-6">
              <p className="text-lg font-medium text-white">
                &ldquo;No vendemos código. Vendemos el resultado que ese código produce.&rdquo;
              </p>
              <p className="mt-3 text-sm text-slate-400">
                Cada proyecto arranca con tus números y termina midiendo el impacto.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 70}>
                <div className="card-gradient-border h-full rounded-2xl p-5">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyber-500/15 text-cyber-400">
                    <Icon name={reason.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
