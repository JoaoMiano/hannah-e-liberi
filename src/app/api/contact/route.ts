import { NextRequest, NextResponse } from "next/server";
import { NewContactSchema } from "@/schemas/contact-schema";
import { sendContactMail } from "@/lib/mail/sendMail";

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Requisição inválida." },
      { status: 400 }
    );
  }

  const parsed = NewContactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Dados inválidos.", errors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  try {
    await sendContactMail(parsed.data);
    return NextResponse.json(
      { success: true, message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[contact/route] Falha ao enviar e-mail:", error);
    return NextResponse.json(
      { success: false, message: "Não foi possível enviar sua mensagem. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
