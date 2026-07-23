import { NextRequest, NextResponse } from "next/server"

import { prisma } from '@/lib/prisma'

export async function DELETE(req: NextRequest, { params }: {
    params: Promise<{
        chatId: string,
        messageId: string
    }>
}) {
    try {

        const { chatId, messageId } = await params

        if (!chatId || chatId.trim() === '') {
            return NextResponse.json(
                { error: 'Не передан chatId' },
                { status: 400 }
            )
        }

        if (!messageId || messageId.trim() === '') {
            return NextResponse.json(
                { error: 'Не передан messageId' },
                { status: 400 }
            )
        }

        const chat = await prisma.chat.findFirst({
            where: {
                chatId: chatId.trim()
            }
        })

        if (!chat) {
            return NextResponse.json(
                { error: `Чата с таким chatId=${chatId} нет` },
                { status: 404 }
            )
        }

        const message = await prisma.message.findFirst({
            where: {
                messageId: messageId.trim(),
                chatId: chatId.trim()
            }
        })

        if (!message) {
            return NextResponse.json(
                { message: `Сообщения с messageId=${messageId} нет` },
                { status: 404 }
            )
        }

        await prisma.message.delete({
            where: {
                messageId: messageId.trim()
            }
        })

        return NextResponse.json(
            {
                message: 'Сообщение успешно удалено',
                chatId: chatId.trim(),
                messageId: messageId.trim()
            },
            { status: 200 }
        )

    } catch (error) {
        console.error('DELETE /api/chats/[chatId]/messages/[messageId]:', error)
        return NextResponse.json(
            { error: 'Не удалось удалить все сообщения по chat_id' },
            { status: 500 }
        )
    }
}