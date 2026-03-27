import { NextRequest, NextResponse } from "next/server"
import { getConsorcioImages } from "@/services/google-drive"

// Função assíncrona que lida com requisições GET para a rota /api/consorcio
export async function GET(request: NextRequest) {
  // Chama a função para obter as imagens de consórcio do Google Drive
  const result = await getConsorcioImages()

  if (!result.success) {
    return NextResponse.json({ success: false, error: result.error }, { status: 500 })
  }

  // Mapeia os dados das imagens, extraindo categoria e pessoa do nome do arquivo
  const mapped = result.data.map((img) => {
    //limpa a extansao .jpg ou .png
    img.name = img.name.replace(/\.(jpg|jpeg|png|gif)$/i, "")

    // Divide o nome da imagem por "-" e mapeia para obter categoria e pessoa, convertendo para minúsculas e removendo espaços
    const [category = "", person = ""] = img.name
      .split("-")
      .map((part) => part.trim().toLowerCase())

    // Retorna o objeto da imagem com as propriedades adicionais de categoria e pessoa
    return {
      ...img,
      category,
      person
    }
  })

  // Retorna uma resposta JSON com sucesso e os dados filtrados
  return NextResponse.json({ success: true, data: mapped }, { status: 200 })}