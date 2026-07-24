import { useEffect, useState } from 'react'

import { Api } from '@/services/api-client'
import { TGetStoryProfile } from '@/store/stories/types'

type TReturn = {
    listStories: TGetStoryProfile[] | undefined,
    loadingHookFetchStories: boolean,
    errorHookFetchStories: Error | undefined
}

export default function useFetchStories(userId: string): TReturn {
    const [listStories, setListStories] = useState<TGetStoryProfile[]>()
    const [loadingHookFetchStories, setLoadingHookFetchStories] = useState(true)
    const [errorHookFetchStories, setErrorHookFetchStories] = useState<Error>()

    useEffect(() => {
        if (!userId) {
            console.log('Нет userId')
            setLoadingHookFetchStories(false)
            return
        }

        async function fetchProfile() {
            try {
                await Api.stories.getStoriesProfile(userId).then(stories => setListStories(stories))
            } catch (err) {
                setErrorHookFetchStories(err as Error)
            } finally {
                setLoadingHookFetchStories(false)
            }
        }

        fetchProfile()
    }, [userId])

    return { listStories, loadingHookFetchStories, errorHookFetchStories }
}