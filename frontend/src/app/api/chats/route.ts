import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const ownerId = req.nextUrl.searchParams.get('ownerId')!

    const chats = await prisma.chat.findMany({
        where: {
            ownerId: ownerId
        },
        orderBy: {
            lastMessageAt: 'desc'
        },
        include: {
            interlocutor: {
                select: {
                    userId: true,
                    avatar: true,
                    lastName: true,
                    firstName: true,
                    lastSeen: true
                }
            },
            lastMessage: {
                select: {
                    content: true,
                    sendTime: true,
                }
            }
        }
    })

    return NextResponse.json(chats)
}