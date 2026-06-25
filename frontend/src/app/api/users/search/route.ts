import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const userName = req.nextUrl.searchParams.get('userName')
    const userId = req.nextUrl.searchParams.get('userId')

    if (!userId) {
        return NextResponse.json(
            { error: 'userId не прописан' },
            { status: 400 }
        )
    }

    if (!userName || userName.trim() == '') {
        const users = await prisma.user.findMany({
            where: {
                userId: {
                    not: userId
                }
            }
        })

        return NextResponse.json(users)
    }

    const users = await prisma.user.findMany({
        where: {
            userName: { contains: userName, mode: 'insensitive' },
            userId: {
                not: userId
            }
        },
    })

    return NextResponse.json(users)
}