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
        const chats = await prisma.chat.findMany({
            where: {
                OR: [
                    { ownerId: userId },
                    { interlocutorId: userId }
                ]
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

        const sortedChats = chats.sort((a, b) => {
            const nameA = `${a.interlocutor.firstName || ''} ${a.interlocutor.lastName || ''}`.trim()
            const nameB = `${b.interlocutor.firstName || ''} ${b.interlocutor.lastName || ''}`.trim()
            return nameA.localeCompare(nameB)
        })

        return NextResponse.json(sortedChats)
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

    const sortedChats = chats.sort((a, b) => {
        const nameA = `${a.interlocutor.firstName || ''} ${a.interlocutor.lastName || ''}`.trim()
        const nameB = `${b.interlocutor.firstName || ''} ${b.interlocutor.lastName || ''}`.trim()
        return nameA.localeCompare(nameB)
    })

    return NextResponse.json(sortedChats)
}