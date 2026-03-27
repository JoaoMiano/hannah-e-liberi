export type ConsorcioImage = {
    id: string
    name: string
    url: string
}

export type ConsorcioImagesResult =
    | { success: true; data: ConsorcioImage[] }
    | { success: false; error: string }

export async function getConsorcioImages(): Promise<ConsorcioImagesResult> {
    const folderId = process.env.NEXT_PUBLIC_CONSORCIO_FOLDER_ID
    const apiKey = process.env.GOOGLE_API_KEY

    
    if (!folderId || !apiKey) {
        return {
            success: false,
            error: "Missing Google Drive folder ID or API key (NEXT_PUBLIC_CONSORCIO_FOLDER_ID / GOOGLE_API_KEY)."
        }
    }

    try {
        const res = await fetch(
            `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name)`
        )

        if (!res.ok) {
            const body = await res.text()
            return {
                success: false,
                error: `Google Drive API error: ${res.status} ${res.statusText} - ${body}`
            }
        }

        const data: { files?: { id: string; name: string }[] } = await res.json()
        const files = Array.isArray(data?.files) ? data.files : []

        return {
            success: true,
            data: files.map((file) => ({
                id: file.id,
                name: file.name,
                url: `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`
            }))
        }
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : String(error)
        }
    }
}