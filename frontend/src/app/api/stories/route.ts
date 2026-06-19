import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const userId = req.nextUrl.searchParams.get('userId')

    if (!userId) {
        console.log('userId обязательные поля!')

        return NextResponse.json(
            { error: 'userId обязателен' },
            { status: 400 }
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

    return NextResponse.json(result)
}