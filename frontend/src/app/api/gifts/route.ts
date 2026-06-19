import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const recipientId = req.nextUrl.searchParams.get('recipientId')!

    const gifts = await prisma.gift.findMany({
        where: {
            recipientId
        }
    })

    return NextResponse.json(gifts)
}