import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"JPBT Leads" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `🎯 Nuevo lead — ${service}`,
      html: `
        <h2>Nuevo contacto desde jpbt.vercel.app</h2>
        <table cellpadding="8">
          <tr><td><b>Nombre:</b></td><td>${name}</td></tr>
          <tr><td><b>Email:</b></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td><b>Servicio:</b></td><td>${service}</td></tr>
          <tr><td><b>Mensaje:</b></td><td>${message}</td></tr>
        </table>
        <p>Respondé directo a este email para contactar al lead.</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact error:", err);
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 500 });
  }
}
