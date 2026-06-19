"use client";

import { useState } from "react";
import { finalCta, site } from "@/lib/content";
import Reveal from "./Reveal";
import MercadoPagoBadge from "./MercadoPagoBadge";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Sitio web / Landing",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("ok");
        setForm({ name: "", email: "", service: "Sitio web / Landing", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-colors focus:border-brand-400/60 focus:ring-2 focus:ring-brand-500/20";

  return (
    <section id="contacto" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/20 via-ink-800 to-ink-800">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
            {/* Texto */}
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {finalCta.title}
              </h2>
              <p className="mt-4 max-w-md text-slate-300">{finalCta.subtitle}</p>

              <a
                href={site.meetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 font-medium text-ink shadow-lg transition-transform hover:scale-[1.03]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <rect x="2.5" y="6" width="13" height="12" rx="2.5" fill="#00832d" />
                  <path d="M15.5 10l5-3v10l-5-3z" fill="#00ac47" />
                  <path d="M15.5 10V8a2 2 0 0 0-2-2H9l6.5 4z" fill="#0066da" />
                  <path d="M2.5 14v2a2 2 0 0 0 2 2h6l-8-4z" fill="#0066da" opacity="0.0" />
                  <path d="M15.5 14l5 3v-3.5l-5-2.5z" fill="#ffba00" />
                </svg>
                {finalCta.meetCta}
              </a>

              <div className="mt-8 space-y-4 text-sm">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/5">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6}>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>
                  {site.email}
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/5">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7L7 20.5A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.7.7-2.7-.2-.3A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 3.9 3.4 1.5.6 2 .6 2.7.5.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z" />
                    </svg>
                  </span>
                  WhatsApp directo
                </a>
                <p className="flex items-center gap-3 text-slate-400">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/5">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6}>
                      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  {site.location}
                </p>
              </div>

              <div className="mt-8">
                <MercadoPagoBadge variant="card" />
              </div>
            </Reveal>

            {/* Formulario */}
            <Reveal delay={100}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  type="text"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={field}
                />
                <input
                  required
                  type="email"
                  placeholder="Tu email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                />
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={field}
                >
                  <option>Sitio web / Landing</option>
                  <option>Aplicación / Software a medida</option>
                  <option>E-commerce</option>
                  <option>Implementación de IA</option>
                  <option>Mantenimiento / Soporte</option>
                </select>
                <textarea
                  required
                  rows={4}
                  placeholder="Contanos brevemente tu proyecto..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${field} resize-none`}
                />
                <button
                  type="submit"
                  disabled={status === "sending" || status === "ok"}
                  className="w-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-brand-600/30 transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Enviando..." : status === "ok" ? "¡Mensaje enviado! ✓" : finalCta.cta}
                </button>
                {status === "error" && (
                  <p className="text-center text-sm text-red-400">
                    No se pudo enviar. Escribinos por WhatsApp.
                  </p>
                )}
                {status === "idle" && (
                  <p className="text-center text-xs text-slate-500">
                    Respondemos en menos de 24 horas hábiles.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
