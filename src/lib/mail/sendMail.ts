import { transporter } from "./transporter";

interface ContactMailPayload {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message?: string;
}

export async function sendContactMail(data: ContactMailPayload): Promise<void> {
  const { name, surname, email, phone, message } = data;

  const recipientEmail = process.env.CONTACT_EMAIL_TO;
  if (!recipientEmail) throw new Error("CONTACT_EMAIL_TO não configurado");

  await transporter.sendMail({
    from: `"Site Hannah & Liberi" <${process.env.SMTP_USER}>`,
    to: recipientEmail,
    replyTo: email,
    subject: `Novo contato de ${name} ${surname}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #05214f;">Novo contato pelo site</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 120px;">Nome</td>
            <td style="padding: 8px 0; font-weight: 600;">${name} ${surname}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;">E-mail</td>
            <td style="padding: 8px 0; font-weight: 600;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;">Telefone</td>
            <td style="padding: 8px 0; font-weight: 600;">${phone}</td>
          </tr>
          ${
            message
              ? `<tr>
                  <td style="padding: 8px 0; color: #666; vertical-align: top;">Mensagem</td>
                  <td style="padding: 8px 0;">${message.replace(/\n/g, "<br/>")}</td>
                </tr>`
              : ""
          }
        </table>
      </div>
    `,
  });
}
