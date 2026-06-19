import { NextRequest, NextResponse } from "next/server";
import { sendOwnerNotification, sendBuyerConfirmation } from "@/lib/mailer";
import { pricing } from "@/lib/content";

function cleanEnv(raw: string | undefined): string {
  if (!raw) return "";
  return raw.replace(/^﻿/, "").replace(/^["']|["']$/g, "").trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // MP envía topic=payment con el id del pago
    if (body.type !== "payment" && body.topic !== "payment") {
      return NextResponse.json({ ok: true });
    }

    const paymentId = body.data?.id ?? body.id;
    if (!paymentId) return NextResponse.json({ ok: true });

    const accessToken = cleanEnv(process.env.MP_ACCESS_TOKEN);
    const mpRes = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!mpRes.ok) return NextResponse.json({ ok: true });

    const payment = await mpRes.json();

    // Solo procesar pagos aprobados
    if (payment.status !== "approved") return NextResponse.json({ ok: true });

    const planId = payment.metadata?.plan_id as string | undefined;
    const plan = pricing.plans.find((p) => p.id === planId);

    const info = {
      buyerName: payment.payer?.first_name
        ? `${payment.payer.first_name} ${payment.payer.last_name ?? ""}`.trim()
        : "Sin nombre",
      buyerEmail: payment.payer?.email ?? "",
      planName: plan?.name ?? planId ?? "Desconocido",
      amount: payment.transaction_amount ?? 0,
      paymentId,
    };

    await Promise.all([
      sendOwnerNotification(info),
      info.buyerEmail ? sendBuyerConfirmation(info) : Promise.resolve(),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ ok: true }); // siempre 200 para que MP no reintente
  }
}
