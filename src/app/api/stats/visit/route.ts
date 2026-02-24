import { NextRequest, NextResponse } from "next/server"
import path from "path"
import { UAParser } from "ua-parser-js"
import type { CityResponse } from "maxmind"

import { getVisitRepository } from "@/lib/db/data-source"

async function getIpLookup(ip: string) {
  try {
    const { open } = await import("maxmind")
    const dbPath = path.join(process.cwd(), "data.mmdb")
    const lookup = await open<CityResponse>(dbPath)
    const result = lookup.get(ip)
    if (!result) return null

    return {
      country: result.country?.names?.en || undefined,
      region: result.subdivisions?.at(0)?.names?.en || undefined,
      city: result.city?.names?.en || undefined,
      latitude: result.location?.latitude?.toFixed(4) || undefined,
      longitude: result.location?.longitude?.toFixed(4) || undefined,
    }
  } catch {
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-real-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      ""

    const userAgent = request.headers.get("user-agent") || ""
    const { ua, browser, os, device } = UAParser(userAgent)

    const ipLookup = await getIpLookup(ip)

    const visitRepo = await getVisitRepository()
    await visitRepo.insert({
      ip,
      ua,
      browser: browser.name ? `${browser.name}:${browser.version}` : undefined,
      os: os.name ? `${os.name}:${os.version}` : undefined,
      device: device.vendor ? `${device.vendor}-${device.model}` : undefined,
      ...(ipLookup ?? {}),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false })
  }
}
