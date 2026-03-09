"use client"

import { ImageConsorcio } from "@/types/imageConsorcio"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"

export default function ConsorcioCarousel() {
    const [images, setImages] = useState<ImageConsorcio[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch("/api/consorcio")
            .then(res => res.json())
            .then((data) => {
                if (!data?.success) {
                    setError(data?.error ?? "Erro ao carregar imagens")
                    return
                }

                setImages(data.data ?? [])
            })
            .catch((err) => {
                setError(err instanceof Error ? err.message : String(err))
            })
    }, [])

    if (error) {
        return (
            <div className="flex items-center justify-center h-48 text-red-600">
                {error}
            </div>
        )
    }

    if (!images.length) {
        return <div className="flex items-center justify-center h-48">Carregando...</div>
    }

    return (
        <div className="flex overflow-x-auto gap-4">
            {images.map((img) => (
                <Image
                    key={img.id}
                    src={img.url}
                    alt={img.name}
                    width={400}
                    height={300}
                />
            ))}
        </div>
    )
}