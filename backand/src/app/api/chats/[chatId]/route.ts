import { NextRequest, NextResponse } from "next/server"

import { prisma } from '@/lib/prisma'

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS', // 👈 PATCH добавлен
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
    'Access-Control-Allow-Credentials': 'true',
};

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: CORS_HEADERS,
    });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ chatId: string }> }) {
    try {
        const { chatId } = await params

        const chat = await prisma.chat.findFirst({
            where: {
                chatId
            }
        })

        if (!chat) {
            return NextResponse.json(
                { error: 'Чат не найден' },
                { status: 404 }
            )
        }

        await prisma.message.deleteMany({
            where: { chatId }
        })

        await prisma.chat.delete({
            where: { chatId }
        })

        return NextResponse.json(
            { message: 'Чат успешно удалён', chatId },
            { status: 200 }
        )

    } catch (error) {
        console.log('[CHAT_DELETE] Server error', error)
        return NextResponse.json(
            { message: 'Не удалось удалить чат' },
            { status: 500 }
        )
    }
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ chatId: string }> }) {
    try {
        const { chatId } = await params

        const chat = await prisma.chat.findFirst({
            where: {
                chatId
            }
        })

        return NextResponse.json(chat)
    } catch (error) {
        console.log('Ошибка!', error)
    }
}

type TPatchDataChat = {
    pinned?: boolean,
    folder?: string
    muteUntil?: string | null,
    isArchived?: boolean
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: { chatId: string } }
) {
    try {
        const { chatId } = params
        const data = await req.json() as TPatchDataChat

        if (!chatId) {
            return NextResponse.json(
                { error: 'chatId обязателен' },
                { status: 400, headers: CORS_HEADERS }
            )
        }

        const updatedChat = await prisma.chat.update({
            where: { chatId },
            data: data,
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

        return NextResponse.json(updatedChat, { headers: CORS_HEADERS })
    } catch (error) {
        console.error('Ошибка обновления чата:', error)
        return NextResponse.json(
            { error: 'Не удалось обновить чат' },
            { status: 500, headers: CORS_HEADERS }
        )
    }
}