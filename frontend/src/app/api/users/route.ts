import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const userId = req.nextUrl.searchParams.get('userId')

    if (!userId) {
        return NextResponse.json(
            {messages: "userId не передан"},
            {status: 400}
        )
    }

    const user = await prisma.user.findMany({
        where: {
            userId: userId
        }
    })

    return NextResponse.json(user[0])
}