import { mercadoPago } from "@/lib/content";

type Props = {
  variant?: "inline" | "card";
  className?: string;
};

// Insignia OFICIAL de Mercado Pago (archivo en /public/mp).
// Se muestra a buen tamaño sobre fondo blanco para que el texto interno se lea.
export default function MercadoPagoBadge({ variant = "inline", className = "" }: Props) {
  if (!mercadoPago.isOfficialIntegrator) return null;

  const cert = mercadoPago.certificateUrl;

  if (variant === "card") {
    return (
      <div
        className={`flex items-center gap-4 rounded-2xl bg-white p-4 shadow-xl shadow-black/30 ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mercadoPago.insigniaImg}
          alt="Insignia oficial Integrador certificado de Mercado Pago"
          className="h-24 w-auto shrink-0"
        />
        <div className="leading-tight">
          <div className="text-sm font-bold text-[#0a0a0f]">
            Integrador Oficial de Mercado Pago
          </div>
          <div className="mt-0.5 text-xs text-slate-600">
            {mercadoPago.holder} · Checkout Pro
          </div>
          {cert && (
            <a
              href={cert}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-[#0073b1] hover:underline"
            >
              Ver certificado oficial
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
        </div>
      </div>
    );
  }

  // inline
  return (
    <span
      className={`inline-flex items-center gap-3 rounded-2xl bg-white py-2 pl-2.5 pr-4 shadow-lg shadow-black/25 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={mercadoPago.insigniaImg}
        alt="Insignia oficial Integrador certificado de Mercado Pago"
        className="h-16 w-auto"
      />
      <span className="flex flex-col leading-tight">
        <span className="text-[13px] font-bold text-[#0a0a0f]">
          Integrador Oficial · Mercado Pago
        </span>
        {cert ? (
          <a
            href={cert}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#0073b1] hover:underline"
          >
            Ver certificado oficial →
          </a>
        ) : (
          <span className="text-xs text-slate-500">Checkout Pro · pago seguro</span>
        )}
      </span>
    </span>
  );
}
