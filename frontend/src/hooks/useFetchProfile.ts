import { useEffect, useState } from 'react'

import { Api } from '@/services/api-client'
import { TGetUser } from '@/store/profile/types'

type TReturn = {
    objProfile: TGetUser | undefined,
    loading: boolean,
    error: Error | undefined
}

export function useFetchProfile(userId: string): TReturn {
    const [objProfile, setObjProfile] = useState<TGetUser>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        if (!userId) {
            console.log('Нет userId')
            setLoading(false)
            return
        }

        async function fetchProfile() {
            try {
                await Api.profile.getProfile(userId).then(profile => setObjProfile(profile))
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchProfile()
    }, [userId])

    return { objProfile, loading, error }
}