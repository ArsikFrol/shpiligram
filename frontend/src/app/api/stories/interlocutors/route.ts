import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const userId = req.nextUrl.searchParams.get('userId')
    const interlocutorsId = req.nextUrl.searchParams.get('interlocutorsId')

    if (!userId || !interlocutorsId) {
        console.log('userId и interlocutorsId обязательные поля!')

        return NextResponse.json(
            { error: 'userId обязателен' },
            { status: 400 }
        )
    }

    const interlocutorsIds = interlocutorsId.split(',')

    const stories = await prisma.story.findMany({
        where: {
            userId: {
                in: interlocutorsIds
            },
            isArchined: false,
            NOT: {
                storyVieweds: {
                    some: {
                        userId
                    }
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            owner: {
                select: {
                    userId: true,
                    firstName: true,
                    lastName: true,
                    lastSeen: true,
                    avatar: true,
                }
            },
            likes: {
                where: {
                    userId
                },
                select: {
                    likedAt: true
                }
            },
            storyVieweds: {
                where: {
                    userId
                },
                select: {
                    viewedAt: true
                }
            },
            _count: {
                select: {
                    likes: true,
                    storyVieweds: true
                }
            }
        }
    })

    const result = stories.map(({ likes, storyVieweds, _count, ...story }) => ({
        ...story,
        isLiked: likes.length > 0,
        isViewed: storyVieweds.length > 0,
        viewedAt: storyVieweds[0]?.viewedAt || null,
        likedAt: likes[0]?.likedAt || null,
        likesCount: _count.likes,
        viewsCount: _count.storyVieweds
    }))

    return NextResponse.json(result)
}