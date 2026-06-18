import { projects } from "@/lib/content";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-brand-300">Proyectos</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {projects.title}
          </h2>
          <p className="mt-4 text-slate-400">{projects.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.items.map((p, i) => (
            <Reveal key={p.client} delay={i * 70}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-gradient-border group flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{p.client}</h3>
                    <p className="mt-0.5 text-sm text-brand-300">{p.category}</p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-slate-300 transition-colors group-hover:border-brand-400/50 group-hover:text-white">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
