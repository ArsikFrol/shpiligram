import { useEffect, useState } from 'react'

import { Api } from '@/services/api-client'
import { TGetUser } from '@/store/profile/types'

type TReturn = {
    listPossibleChats: TGetUser[] | undefined,
    loading: boolean,
    error: Error | undefined
}

export function useFetchPossibleChats(userName: string, userId: string, listInterlocutorsId: string[]): TReturn {
    const [listPossibleChats, setListPossibleChats] = useState<TGetUser[]>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        if (!userId) {
            console.log('Нет userId')
            setLoading(false)
            return
        }

        async function fetchPossibleChats() {
            try {
                const data = await Api.profile.getBySearch(userName, userId)
                const filtered = data.filter(user => !listInterlocutorsId.includes(user.userId))
                setListPossibleChats(filtered)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchPossibleChats()
    }, [userName, userId])

    return { listPossibleChats, loading, error }
}