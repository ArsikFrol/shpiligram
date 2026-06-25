import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    const recipientId = req.nextUrl.searchParams.get('recipientId')!

    const gifts = await prisma.gift.findMany({
        where: {
            recipientId
        },
        include: {
            sender: {
                select: {
                    userId: true,
                    avatar: true,
                    firstName: true,
                    lastName: true,
                }
            }
        }
    })

    return NextResponse.json(gifts)
}