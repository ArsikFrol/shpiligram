import { useEffect, useState } from 'react'
import { Api } from '@/services/api-client'
import { UserModel } from '@/generated/prisma/models'

export function useFetchProfile(userId: string) {
    const [objProfile, setObjProfile] = useState<UserModel>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        if (!userId) console.log('Нет userId')

        async function fetchProfile() {
            try {
                await Api.profile.profile(userId).then(profile => setObjProfile(profile))
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