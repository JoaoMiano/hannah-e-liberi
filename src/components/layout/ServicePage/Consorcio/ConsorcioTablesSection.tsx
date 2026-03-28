"use client"

import { useState, useMemo, useEffect } from "react"
import { ConsorcioCarousel } from "@/components/Carousel/Carousel"
import { ImageConsorcio } from "@/types/consorcio"
import { Button } from "@/components/ui/button" // Supondo que você use o Button do shadcn
import { abhayaLibre } from "@/fonts/fonts"

export const ConsorcioTablesSection = () => {
  const [allImages, setAllImages] = useState<ImageConsorcio[]>([])
  const [loading, setLoading] = useState(true)

  // Estados dos filtros
  const [perfil, setPerfil] = useState<"fisica" | "juridica">("fisica")
  const [categoria, setCategoria] = useState<"auto" | "casa" | "frota">("auto")

  // 1. Busca os dados uma única vez (Fetch no Mount)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/consorcio")
        const result = await response.json()
        if (result.success) setAllImages(result.data)
      } catch (error) {
        console.error("Erro ao carregar imagens:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // 2. Filtra os dados no Front-end usando useMemo por performance
  const filteredImages = useMemo(() => {
    return allImages.filter(
      (img) => img.person === perfil && img.category === categoria
    )
  }, [allImages, perfil, categoria])

  if (loading) return <div className="py-10 text-center">Carregando tabelas...</div>

  return (
    <section className="py-12 border-b border-gray-300">
      <div className="flex flex-col items-center container gap-3 md:gap-6 py-12 px-4 lg:px-8">
        <div className="text-center">
          <h2 className={`${abhayaLibre.className} text-4xl md:text-5xl text-primary mb-4 text-center`}>Tabela de Valores.</h2>
          <p className="text-lg text-center text-zinc-700 mb-6">Confira as opções de consórcios disponíveis para você ou sua empresa.</p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-evenly w-full gap-6 items-center">

          {/* Filtro de Perfil */}
          <div className="flex flex-col  justify-center items-center gap-2">
            <p className="text-xl text-primary">Perfil de Cliente</p>
            <div className="flex gap-2">
              {(["fisica", "juridica"] as const).map((p) => (
                <Button
                  key={p}
                  onClick={() => setPerfil(p)}
                  className={`capitalize border rounded-full border-primary text-md ${perfil === p ? "bg-primary/90 text-white" : "bg-primary/10 text-primary hover:bg-primary/20"}`}
                >
                  Pessoa {p === "fisica" ? "Física" : "Jurídica"}
                </Button>
              ))}
            </div>
          </div>

          {/* Filtro de Categoria */}
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-xl text-primary">Categoria</p>
            <div className="flex flex-wrap justify-center gap-3">
              {(["auto", "casa", "frota"] as const).map((c) => (
                <Button
                  key={c}
                  onClick={() => setCategoria(c)}
                  className={`capitalize rounded-full border border-primary text-md ${categoria === c ? "bg-primary/90 text-white" : "bg-primary/10 text-primary hover:bg-primary/20"}`}
                >
                  {c}
                </Button>
              ))}
            </div>
          </div>

        </div>

        {/* 3. Renderização Condicional do Carousel */}
        {filteredImages.length > 0 ? (
          // A key aqui é o "pulo do gato": se o filtro mudar, o carousel reinicia
          <ConsorcioCarousel
            key={`${perfil}-${categoria}`}
            images={filteredImages}
          />
        ) : (
          <div className="h-75 flex items-center justify-center text-muted-foreground">
            Nenhuma tabela disponível para este filtro.
          </div>
        )}
      </div>
    </section>


  )
}