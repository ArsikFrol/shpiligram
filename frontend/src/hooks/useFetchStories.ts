import { useEffect, useState } from 'react'
import { Api } from '@/services/api-client'
import { StoryModel } from '@/generated/prisma/models'

export function useFetchStories(userId: string) {
    const [stories, setStories] = useState<StoryModel[]>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        if (!userId) console.log('Нет userId')

        async function fetchStories() {
            try {
                await Api.stories.stories(userId).then(stories => setStories(stories))
                setLoading(true)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchStories()
    }, [userId])

    return { stories, loading, error }
}