import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const chatId = req.nextUrl.searchParams.get('chatId')!

    const gifts = await prisma.message.findMany({
        where: {
            chatId
        }
    })

    return NextResponse.json(gifts)
}

export async function POST(req: NextRequest) {
    try {
        const { content, chatId, senderId } = await req.json()

        if (!content || !chatId || !senderId) {
            return NextResponse.json(
                { error: 'Не все поля заполнены' },
                { status: 400 }
            )
        }

        const message = await prisma.message.create({
            data: {
                messageId: `msg_${Date.now()}`,
                content,
                chatId,
                senderId,
                sendTime: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        })

        await prisma.chat.update({
            where: { chatId },
            data: {
                lastMessageId: message.messageId,
                lastMessageAt: new Date()
            }
        })

        return NextResponse.json(message, { status: 201 })
    } catch (error) {
        console.error('POST /api/messages:', error)
        return NextResponse.json(
            { error: 'Не удалось отправить сообщение' },
            { status: 500 }
        )
    }
}