import { hero, site, trustedBy } from "@/lib/content";
import MercadoPagoBadge from "./MercadoPagoBadge";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      {/* Fondos decorativos */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/30 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-cyber-500/20 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-cyber-400 shadow-[0_0_12px] shadow-cyber-400" />
            {hero.badge}
          </div>

          <h1 className="animate-fade-up mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {hero.title}{" "}
            <span className="text-gradient">{hero.titleHighlight}</span>
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-pretty text-lg text-slate-300">
            {hero.subtitle}
          </p>

          <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={site.meetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 font-medium text-white shadow-lg shadow-brand-600/30 transition-transform hover:scale-[1.03]"
            >
              {hero.primaryCta}
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#servicios"
              className="rounded-full border border-white/15 px-7 py-3.5 font-medium text-white transition-colors hover:bg-white/5"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <div className="animate-fade-up mt-7 flex justify-center">
            <MercadoPagoBadge variant="inline" />
          </div>
        </div>

        {/* Stats */}
        <div className="animate-fade-up mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="bg-ink/40 px-4 py-6 text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trusted by */}
        <div className="mt-14 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            {trustedBy.label}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
            {trustedBy.logos.map((logo) => (
              <span key={logo} className="text-lg font-semibold text-slate-400">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
