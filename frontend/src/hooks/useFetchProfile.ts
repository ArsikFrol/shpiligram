import { useEffect, useState } from 'react'

import { Api } from '@/services/api-client'
import { TGetUser } from '@/store/profile/types'

type TReturn = {
    objProfile: TGetUser | undefined,
    loadingProfileHookFetch: boolean,
    errorProfileHookFetch: Error | undefined
}

export function useFetchProfile(userId: string): TReturn {
    const [objProfile, setObjProfile] = useState<TGetUser>()
    const [loadingProfileHookFetch, setLoadingProfileHookFetch] = useState(true)
    const [errorProfileHookFetch, setErrorProfileHookFetch] = useState<Error>()

    useEffect(() => {
        if (!userId) {
            console.log('Нет userId')
            setLoadingProfileHookFetch(false)
            return
        }

        async function fetchProfile() {
            try {
                await Api.profile.getProfile(userId).then(profile => setObjProfile(profile))
            } catch (err) {
                setErrorProfileHookFetch(err as Error)
            } finally {
                setLoadingProfileHookFetch(false)
            }
        }

        fetchProfile()
    }, [userId])

    return { objProfile, loadingProfileHookFetch, errorProfileHookFetch }
}