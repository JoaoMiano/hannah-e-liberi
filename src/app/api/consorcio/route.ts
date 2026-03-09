import { NextRequest, NextResponse } from "next/server"
import { getConsorcioImages } from "@/services/googleDrive"

export async function GET(request: NextRequest) {
  const result = await getConsorcioImages()

  if (!result.success) {
    return NextResponse.json({ success: false, error: result.error }, { status: 500 })
  }

  const { searchParams } = request.nextUrl
  const categoryFilter = searchParams.get("category")?.toLowerCase()
  const personFilter = searchParams.get("person")?.toLowerCase()

  const mapped = result.data.map((img) => {
    const [category = "", person = ""] = img.name
      .split("-")
      .map((part) => part.trim().toLowerCase())

    return {
      ...img,
      category,
      person
    }
  })

  const filtered = mapped.filter((img) => {
    if (categoryFilter && img.category !== categoryFilter) return false
    if (personFilter && img.person !== personFilter) return false
    return true
  })

  return NextResponse.json({ success: true, data: filtered })
}