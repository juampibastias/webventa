import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { pricing, site } from "@/lib/content";

// Route handler que crea una preferencia de pago de Mercado Pago
// y devuelve el init_point (URL del checkout) para redirigir al cliente.
//
// Requiere la variable de entorno MP_ACCESS_TOKEN (ver .env.example).
// Como Integrador Oficial podés usar tu propio Access Token de producción.

// Limpia el token de BOM, comillas y espacios accidentales al pegarlo.
function cleanToken(raw: string | undefined): string {
  if (!raw) return "";
  return raw
    .replace(/^﻿/, "") // BOM al inicio
    .replace(/^["']|["']$/g, "") // comillas envolventes
    .trim();
}

export async function POST(req: NextRequest) {
  try {
    const { planId } = await req.json();
    const plan = pricing.plans.find((p) => p.id === planId);

    if (!plan || plan.payment !== "online" || !plan.amount) {
      return NextResponse.json(
        { error: "Plan inválido o no disponible para pago online." },
        { status: 400 }
      );
    }

    const accessToken = cleanToken(process.env.MP_ACCESS_TOKEN);
    if (!accessToken) {
      return NextResponse.json(
        { error: "Falta configurar MP_ACCESS_TOKEN en el servidor." },
        { status: 500 }
      );
    }

    const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || site.url;
    const siteUrl = rawUrl.replace(/^﻿/, "").trim().replace(/\/$/, "");

    const client = new MercadoPagoConfig({ accessToken });
    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            id: plan.id,
            title: `${site.name} — Plan ${plan.name}`,
            description: plan.description,
            quantity: 1,
            unit_price: plan.amount,
            currency_id: site.currency,
          },
        ],
        back_urls: {
          success: `${siteUrl}/gracias?status=success`,
          failure: `${siteUrl}/gracias?status=failure`,
          pending: `${siteUrl}/gracias?status=pending`,
        },
        auto_return: "approved",
        statement_descriptor: site.name.toUpperCase().slice(0, 22),
        metadata: { plan_id: plan.id },
      },
    });

    return NextResponse.json({
      id: result.id,
      init_point: result.init_point,
    });
  } catch (err) {
    console.error("Error creando preferencia MP:", err);
    return NextResponse.json(
      { error: "No se pudo iniciar el pago. Intentá de nuevo." },
      { status: 500 }
    );
  }
}
