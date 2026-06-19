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
