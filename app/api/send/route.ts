import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/validations/contact"
import { sendContactEmail } from "@/lib/mail"
import { rateLimit } from "@/lib/rate-limit"

export const runtime = "nodejs"

export async function POST(req: Request) {
    try {
        const ip =
            req.headers.get("x-forwarded-for") ??
            "unknown"

        if (!rateLimit(ip)) {
            return NextResponse.json(
                { error: "Too many requests" },
                { status: 429 }
            )
        }

        const body = await req.json()

        const parsed = contactSchema.safeParse(body)

        if (!parsed.success) {
            return NextResponse.json(
                { error: parsed.error.flatten() },
                { status: 400 }
            )
        }

        const { email, idea } = parsed.data

        await sendContactEmail(email, idea)

        return NextResponse.json({ ok: true })

    } catch (error) {
        console.error(error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}