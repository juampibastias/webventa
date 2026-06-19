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

export interface PaymentInfo {
  buyerName: string;
  buyerEmail: string;
  planName: string;
  amount: number;
  paymentId: string | number;
}

export async function sendOwnerNotification(info: PaymentInfo) {
  await transporter.sendMail({
    from: `"JPBT Notificaciones" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `💰 Nuevo pago — Plan ${info.planName}`,
    html: `
      <h2>Nuevo pago recibido</h2>
      <table>
        <tr><td><b>Comprador:</b></td><td>${info.buyerName}</td></tr>
        <tr><td><b>Email:</b></td><td>${info.buyerEmail}</td></tr>
        <tr><td><b>Plan:</b></td><td>${info.planName}</td></tr>
        <tr><td><b>Monto:</b></td><td>$${info.amount.toLocaleString("es-AR")}</td></tr>
        <tr><td><b>ID de pago:</b></td><td>${info.paymentId}</td></tr>
      </table>
      <p>Contactalo a la brevedad para coordinar el inicio del proyecto.</p>
    `,
  });
}

export async function sendCheckoutInitiated(planName: string) {
  await transporter.sendMail({
    from: `"JPBT Notificaciones" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `👀 Alguien inició un pago — Plan ${planName}`,
    html: `
      <h2>Intento de pago iniciado</h2>
      <p>Alguien hizo click en "Pagar" y fue redirigido al checkout de Mercado Pago.</p>
      <p><b>Plan:</b> ${planName}</p>
      <p>Si no llega un email de pago aprobado en los próximos minutos, probablemente abandonó el proceso.</p>
    `,
  });
}

export async function sendPaymentRejected(info: PaymentInfo) {
  await transporter.sendMail({
    from: `"JPBT Notificaciones" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `❌ Pago rechazado — Plan ${info.planName}`,
    html: `
      <h2>Intento de pago rechazado</h2>
      <p>Alguien intentó pagar pero el pago fue rechazado por Mercado Pago.</p>
      <table>
        <tr><td><b>Comprador:</b></td><td>${info.buyerName}</td></tr>
        <tr><td><b>Email:</b></td><td>${info.buyerEmail}</td></tr>
        <tr><td><b>Plan:</b></td><td>${info.planName}</td></tr>
        <tr><td><b>Monto:</b></td><td>$${info.amount.toLocaleString("es-AR")}</td></tr>
        <tr><td><b>ID de pago:</b></td><td>${info.paymentId}</td></tr>
      </table>
      <p>Podés contactarlo para ayudarlo a completar el pago.</p>
    `,
  });
}

export async function sendBuyerConfirmation(info: PaymentInfo) {
  await transporter.sendMail({
    from: `"Juan Pedro Bastias" <${process.env.GMAIL_USER}>`,
    to: info.buyerEmail,
    subject: `✅ Pago confirmado — Plan ${info.planName}`,
    html: `
      <h2>¡Hola ${info.buyerName}!</h2>
      <p>Recibí tu pago correctamente. Estos son los detalles:</p>
      <table>
        <tr><td><b>Plan:</b></td><td>${info.planName}</td></tr>
        <tr><td><b>Monto:</b></td><td>$${info.amount.toLocaleString("es-AR")}</td></tr>
        <tr><td><b>ID de pago:</b></td><td>${info.paymentId}</td></tr>
      </table>
      <p>En las próximas horas te contacto por este email para coordinar el arranque de tu proyecto.</p>
      <p>Cualquier consulta respondé este email o escribime por WhatsApp.</p>
      <br>
      <p><b>Juan Pedro Bastias Torresi</b><br>
      Desarrollo web y software a medida<br>
      <a href="https://jpbt.vercel.app">jpbt.vercel.app</a></p>
    `,
  });
}
