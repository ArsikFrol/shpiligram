import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from "next/server";

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept, X-Requested-With',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Max-Age': '86400',
        },
    })
}

export async function GET(req: NextRequest) {
    try {
        const userId = req.nextUrl.searchParams.get('userId')

        if (!userId) {
            return NextResponse.json(
                { error: 'userId обязателен' },
                {
                    status: 400,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
                    }
                }
            )
        }

        const stories = await prisma.story.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                _count: {
                    select: {
                        storyVieweds: true,
                        likes: true
                    }
                }
            }
        })

        const result = stories.map(story => ({
            ...story,
            _countViewed: story._count.storyVieweds,
            _countLikes: story._count.likes
        }))

        return NextResponse.json(result, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
                'Access-Control-Allow-Credentials': 'true',
            }
        })

    } catch (error) {
        console.error('❌ Ошибка в GET /api/stories:', error)
        return NextResponse.json(
            { error: 'Ошибка сервера', details: String(error) },
            {
                status: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
                }
            }
        )
    }
}