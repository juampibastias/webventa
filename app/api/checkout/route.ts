import { NextRequest, NextResponse } from "next/server";
import { pricing, site } from "@/lib/content";

function cleanEnv(raw: string | undefined): string {
  if (!raw) return "";
  return raw.replace(/^﻿/, "").replace(/^["']|["']$/g, "").trim();
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

    const accessToken = cleanEnv(process.env.MP_ACCESS_TOKEN);
    if (!accessToken) {
      return NextResponse.json(
        { error: "Falta configurar MP_ACCESS_TOKEN en el servidor." },
        { status: 500 }
      );
    }

    const siteUrl = cleanEnv(process.env.NEXT_PUBLIC_SITE_URL) || site.url;

    const body = {
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
    };

    const mpRes = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await mpRes.text();
    const data = JSON.parse(text.replace(/^﻿/, ""));

    if (!mpRes.ok) {
      console.error("MP error:", mpRes.status, data);
      return NextResponse.json(
        { error: "No se pudo iniciar el pago. Intentá de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ id: data.id, init_point: data.init_point });
  } catch (err) {
    console.error("Error creando preferencia MP:", err);
    return NextResponse.json(
      { error: "No se pudo iniciar el pago. Intentá de nuevo." },
      { status: 500 }
    );
  }
}
