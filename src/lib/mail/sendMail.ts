import { resend } from "./transporter";

interface ContactMailPayload {
  name: string;
  surname: string;
  email: string;
  phone: string;
  servico: string;
  message?: string;
}

export async function sendContactMail(data: ContactMailPayload): Promise<void> {
  const { name, surname, email, phone, servico, message } = data;

  const recipientEmail = process.env.CONTACT_EMAIL_TO;
  if (!recipientEmail) throw new Error("CONTACT_EMAIL_TO não configurado");

  const whatsappNumber = (phone ?? "")
    .replace(/\D/g, "");

  const whatsappText = encodeURIComponent(
    `Olá ${name}, vi que você entrou em contato pelo site da Liberi & Meneghetti com interesse em ${servico}. Posso te ajudar?`
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  const { error } = await resend.emails.send({
    from: `Liberi & Meneghetti <${process.env.CONTACT_EMAIL_TO}>`,
    to: recipientEmail,
    replyTo: email,
    subject: `Novo contato — ${servico} · ${name} ${surname}`,
    html: `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:'Segoe UI',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#05214f;padding:32px 40px;text-align:center;">
              <p style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:0.5px;">
                Liberi &amp; Meneghetti
              </p>
              <p style="margin:6px 0 0;color:#a3b2b8;font-size:13px;">Corretora de Seguros</p>
            </td>
          </tr>

          <!-- Tag de serviço -->
          <tr>
            <td style="padding:28px 40px 0;text-align:center;">
              <span style="display:inline-block;background:#e8f0fe;color:#1972b2;font-size:13px;font-weight:600;padding:6px 16px;border-radius:20px;letter-spacing:0.3px;">
                ${servico}
              </span>
            </td>
          </tr>

          <!-- Título -->
          <tr>
            <td style="padding:16px 40px 24px;text-align:center;">
              <h1 style="margin:0;color:#05214f;font-size:20px;font-weight:700;">Novo contato recebido</h1>
              <p style="margin:8px 0 0;color:#6b7280;font-size:14px;">Um cliente entrou em contato pelo site e aguarda retorno.</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 40px;"><div style="height:1px;background:#e5e7eb;"></div></td></tr>

          <!-- Dados do cliente -->
          <tr>
            <td style="padding:28px 40px;">
              <p style="margin:0 0 16px;color:#05214f;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">Dados do cliente</p>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;width:40%;">
                    <span style="color:#6b7280;font-size:13px;">Nome</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                    <span style="color:#111827;font-size:14px;font-weight:600;">${name} ${surname}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                    <span style="color:#6b7280;font-size:13px;">E-mail</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                    <a href="mailto:${email}" style="color:#1972b2;font-size:14px;font-weight:600;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                    <span style="color:#6b7280;font-size:13px;">Telefone</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                    <span style="color:#111827;font-size:14px;font-weight:600;">${phone}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <span style="color:#6b7280;font-size:13px;">Interesse</span>
                  </td>
                  <td style="padding:10px 0;">
                    <span style="color:#111827;font-size:14px;font-weight:600;">${servico}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${message ? `
          <!-- Mensagem -->
          <tr>
            <td style="padding:0 40px 28px;">
              <p style="margin:0 0 10px;color:#05214f;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">Mensagem</p>
              <div style="background:#f9fafb;border-left:3px solid #1972b2;border-radius:4px;padding:14px 16px;">
                <p style="margin:0;color:#374151;font-size:14px;line-height:1.7;">${message.replace(/\n/g, "<br/>")}</p>
              </div>
            </td>
          </tr>
          ` : ""}

          <!-- Divider -->
          <tr><td style="padding:0 40px;"><div style="height:1px;background:#e5e7eb;"></div></td></tr>

          <!-- Botão WhatsApp -->
          <tr>
            <td style="padding:32px 40px;text-align:center;">
              <p style="margin:0 0 20px;color:#374151;font-size:14px;">Clique no botão abaixo para entrar em contato direto com o cliente via WhatsApp:</p>
              <a href="${whatsappLink}" target="_blank"
                style="display:inline-block;background:#25D366;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:8px;letter-spacing:0.3px;">
                &#128172; Responder pelo WhatsApp
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;padding:20px 40px;text-align:center;border-top:1px solid #e5e7eb;">
              <p style="margin:0;color:#9ca3af;font-size:12px;">
                Este e-mail foi gerado automaticamente pelo site <strong>liberimeneghetti.com.br</strong>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
    `,
  });

  if (error) throw new Error(error.message);
}
