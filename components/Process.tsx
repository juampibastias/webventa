import { process } from "@/lib/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="proceso" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-brand-300">Proceso</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {process.title}
          </h2>
          <p className="mt-4 text-slate-400">{process.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 70}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-4xl font-bold text-gradient">{step.number}</div>
                <h3 className="mt-4 font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
