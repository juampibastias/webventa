"use client";

import { useState } from "react";
import { pricing } from "@/lib/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import MercadoPagoBadge from "./MercadoPagoBadge";

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePay = async (planId: string) => {
    setError(null);
    setLoading(planId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });
      const data = await res.json();
      if (data.init_point) {
        window.location.href = data.init_point; // redirige al checkout de Mercado Pago
      } else {
        setError(data.error ?? "No se pudo iniciar el pago.");
        setLoading(null);
      }
    } catch {
      setError("Error de conexión. Intentá de nuevo.");
      setLoading(null);
    }
  };

  return (
    <section id="planes" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-brand-300">Planes</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {pricing.title}
          </h2>
          <p className="mt-4 text-slate-400">{pricing.subtitle}</p>
          <div className="mt-6 flex justify-center">
            <MercadoPagoBadge variant="inline" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricing.plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 80}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-7 ${
                  plan.highlighted
                    ? "border-2 border-brand-400/60 bg-gradient-to-b from-brand-600/15 to-transparent shadow-2xl shadow-brand-600/20"
                    : "border border-white/10 bg-white/[0.03]"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-400 to-cyber-400 px-4 py-1 text-xs font-semibold text-ink">
                    Más elegido
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <div className="mt-3 flex items-end gap-1.5">
                  <span className="text-3xl font-bold text-white">{plan.priceLabel}</span>
                  {plan.payment === "online" && (
                    <span className="mb-1 text-xs text-slate-500">pago único</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-400">{plan.description}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-cyber-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                {plan.payment === "online" ? (
                  <button
                    onClick={() => handlePay(plan.id)}
                    disabled={loading === plan.id}
                    className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02] disabled:opacity-60 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-brand-400 to-brand-600 text-white shadow-lg shadow-brand-600/30"
                        : "border border-white/15 text-white hover:bg-white/5"
                    }`}
                  >
                    {loading === plan.id ? "Redirigiendo..." : plan.cta}
                    {loading !== plan.id && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                ) : (
                  <a
                    href="#contacto"
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02] hover:bg-white/5"
                  >
                    {plan.cta}
                  </a>
                )}

                {plan.payment === "online" && (
                  <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
                    <Icon name="shield" className="h-3.5 w-3.5 text-cyber-400" />
                    Pago seguro con Mercado Pago
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {error && (
          <p className="mt-6 text-center text-sm text-red-400">{error}</p>
        )}

        <p className="mt-8 text-center text-sm text-slate-500">{pricing.securityNote}</p>
      </div>
    </section>
  );
}
