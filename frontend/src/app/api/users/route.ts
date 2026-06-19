import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const userId = req.nextUrl.searchParams.get('userId')!

    const user = await prisma.user.findMany({
        where: {
            userId: userId
        }
    })

    return NextResponse.json(user[0])
}