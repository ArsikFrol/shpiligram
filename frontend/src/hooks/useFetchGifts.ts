import { useEffect, useState } from 'react'
import { Api } from '@/services/api-client'
import { GiftModel } from '@/generated/prisma/models'

export function useFetchGifts(userId: string) {
    const [gifts, setGifts] = useState<GiftModel[]>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        if (!userId) console.log('Нет userId')

        async function fetchGifts() {
            try {
                await Api.gifts.gifts(userId).then(listGit => setGifts(listGit))
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchGifts()
    }, [userId])

    return { gifts, loading, error }
}