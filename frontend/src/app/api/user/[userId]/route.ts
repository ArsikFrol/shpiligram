import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
    request: Request,
    { params }: { params: Promise<{ userId: string }> }
) {
    try {
        const { userId } = await params

        console.log('Получен userId:', userId)

        if (!userId) {
            return NextResponse.json(
                { error: 'userId не указан' },
                { status: 400 }
            )
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                userName: true,
                avatar: true,
                email: true,
                mobile: true,
                birthday: true,
                createdAt: true,
                updatedAt: true
            }
        })

        if (!user) {
            return NextResponse.json(
                { error: 'Пользователь не найден' },
                { status: 404 }
            )
        }

        return NextResponse.json({ user })
    } catch (error) {
        console.error('Ошибка API:', error)
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500 }
        )
    }
}