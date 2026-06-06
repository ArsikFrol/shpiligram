import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    console.log('Получен запрос для userId:', userId)

    if (!userId) {
        return NextResponse.json({ error: 'userId нужен' }, { status: 400 })
    }

    try {
        const chats = await prisma.chatMember.findMany({
            where: { userId },
            include: {
                chat: {
                    include: {
                        lastMessage: true,
                        members: {
                            include: {
                                user: true
                            }
                        }
                    }
                }
            }
        })

        console.log('Найдено чатов:', chats.length)

        const result = chats.map((member: any) => {
            const chat = member.chat
            let name = chat.title

            if (chat.type === 'DIALOG') {
                const other = chat.members.find((m: any) => m.userId !== userId)
                name = other?.user.name || 'Неизвестный'
            }

            return {
                id: chat.id,
                name: name,
                lastMessage: chat.lastMessage?.content || 'Нет сообщений',
                lastMessageTime: chat.lastMessage?.sentAt || chat.createdAt
            }
        })

        return NextResponse.json({ chats: result })
    } catch (error) {
        console.error('Ошибка:', error)
        return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
    }
}
