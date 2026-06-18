import Link from "next/link";
import { site } from "@/lib/content";

const states = {
  success: {
    title: "¡Pago confirmado! 🎉",
    message:
      "Recibimos tu pago. En las próximas horas te contactamos por email para coordinar el arranque de tu proyecto.",
    color: "from-emerald-400 to-cyber-400",
  },
  pending: {
    title: "Tu pago está pendiente",
    message:
      "El pago quedó en proceso. Cuando se acredite, te escribimos para empezar. Si tenés dudas, contactanos.",
    color: "from-amber-400 to-yellow-400",
  },
  failure: {
    title: "El pago no se completó",
    message:
      "No pudimos procesar el pago. Podés intentarlo de nuevo o escribirnos y lo resolvemos juntos.",
    color: "from-rose-400 to-red-400",
  },
};

export default function Gracias({
  searchParams,
}: {
  searchParams: { status?: string };
}) {
  const status = (searchParams.status ?? "success") as keyof typeof states;
  const s = states[status] ?? states.success;

  return (
    <main className="grid min-h-screen place-items-center px-5">
      <div className="mx-auto max-w-md text-center">
        <div
          className={`mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${s.color} text-ink`}
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2.2}>
            {status === "failure" ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </div>
        <h1 className="mt-6 text-3xl font-bold text-white">{s.title}</h1>
        <p className="mt-4 text-slate-400">{s.message}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            Volver al inicio
          </Link>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:bg-white/5"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
