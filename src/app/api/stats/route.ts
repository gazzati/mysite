import { NextResponse } from "next/server"

import { getVisitRepository } from "@/lib/db/data-source"

export async function GET() {
  try {
    const visitRepo = await getVisitRepository()
    const visits = await visitRepo.count()

    return NextResponse.json({ visits })
  } catch {
    return NextResponse.json({ visits: 0 })
  }
}
