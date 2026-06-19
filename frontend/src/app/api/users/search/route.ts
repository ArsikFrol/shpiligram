import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const firstName = req.nextUrl.searchParams.get('firstName')!

    const users = await prisma.user.findMany({
        where: {
            firstName: {
                contains: firstName,
                mode: 'insensitive'
            }
        }
    })

    return NextResponse.json(users)
}