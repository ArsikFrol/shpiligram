import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from "next/server";

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
        },
    })
}

export async function GET(req: NextRequest) {
    try {
        const ownerId = req.nextUrl.searchParams.get('ownerId')

        if (!ownerId) {
            return NextResponse.json(
                { error: 'ownerId обязателен' },
                {
                    status: 400,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    }
                }
            )
        }

        const chats = await prisma.chat.findMany({
            where: {
                OR: [
                    { ownerId },
                    { interlocutorId: ownerId }
                ],
                lastMessageId: {
                    not: null
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

        return NextResponse.json(chats, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
            }
        })

    } catch (error) {
        console.error('[API] Ошибка: ', error)
        return NextResponse.json(
            { error: 'Ошибка сервера' },
            {
                status: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            }
        )
    }

}

interface CreateChatBody {
    ownerId: string
    interlocutorId: string
}

export async function POST(req: NextRequest) {
    try {
        const body: CreateChatBody = await req.json() as CreateChatBody
        const { ownerId, interlocutorId } = body

        if (!ownerId) {
            return NextResponse.json(
                { error: 'ownerId не прописан' },
                { status: 400 }
            )
        }

        if (!interlocutorId) {
            return NextResponse.json(
                { error: 'interlocutorId не прописан' },
                { status: 400 }
            )
        }

        if (ownerId === interlocutorId) {
            return NextResponse.json(
                { error: 'Нельзя создать чат с самим собой' },
                { status: 400 }
            )
        }

        const interlocutor = await prisma.user.findUnique({
            where: { userId: interlocutorId }
        })

        if (!interlocutor) {
            return NextResponse.json(
                { error: 'Пользователь не найден' },
                { status: 404 }
            )
        }

        const existingChat = await prisma.chat.findFirst({
            where: {
                OR: [
                    {
                        ownerId: ownerId,
                        interlocutorId: interlocutorId
                    },
                    {
                        ownerId: interlocutorId,
                        interlocutorId: ownerId
                    }
                ]
            }
        })

        if (existingChat) {
            return NextResponse.json({
                chat: existingChat,
                message: 'Чат уже существует'
            }, { status: 200 })
        }

        const newChat = await prisma.chat.create({
            data: {
                ownerId: ownerId,
                interlocutorId: interlocutorId,
                lastMessageAt: new Date(),
                pinned: false,
                folder: "ALL_CHATS",
                isArchived: false,
            },
            include: {
                interlocutor: {
                    select: {
                        userId: true,
                        firstName: true,
                        lastName: true,
                        userName: true,
                        avatar: true,
                        lastSeen: true,
                        isOnline: true
                    }
                },
                lastMessage: {
                    select: {
                        content: true,
                        sendTime: true,
                        senderId: true
                    }
                }
            }
        })

        return NextResponse.json({
            chat: newChat,
            message: 'Чат успешно создан'
        }, { status: 201 })

    } catch (error) {
        console.error('[API] Ошибка создания чата:', error)

        if (error && typeof error === 'object' && 'code' in error) {
            const prismaError = error as { code: string }

            if (prismaError.code === 'P2002') {
                return NextResponse.json(
                    { error: 'Чат уже существует' },
                    { status: 409 }
                )
            }

            if (prismaError.code === 'P2003') {
                return NextResponse.json(
                    { error: 'Пользователь не найден' },
                    { status: 404 }
                )
            }
        }

        return NextResponse.json(
            { error: 'Ошибка сервера при создании чата' },
            { status: 500 }
        )
    }
}