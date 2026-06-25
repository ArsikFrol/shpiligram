import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

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