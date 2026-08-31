import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    const userName = req.nextUrl.searchParams.get('userName')
    const userId = req.nextUrl.searchParams.get('userId')

    if (!userId || userId.trim() === '') {
        return NextResponse.json(
            { error: 'userId не указан' },
            { status: 400 }
        )
    }

    if (!userName || userName.trim() === '') {
        return NextResponse.json(
            { error: 'userName не прописан' },
            { status: 400 }
        )
    }

    const chats = await prisma.chat.findMany({
        where: {
            OR: [
                { ownerId: userId },
                { interlocutorId: userId }
            ],
            interlocutor: {
                OR: [
                    { firstName: { contains: userName, mode: 'insensitive' } },
                    { lastName: { contains: userName, mode: 'insensitive' } }
                ]
            },
            lastMessage: {
                isNot: null
            }
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
                    lastSeen: true,
                    isOnline: true
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