import { useEffect, useState } from 'react'
import { Api } from '@/services/api-client'
import { ChatModel } from '@/generated/prisma/models'

export function useFetchChats(userId: string) {
    const [chats, setChats] = useState<ChatModel[]>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        if (!userId) console.log('Нет userId')

        async function fetchChats() {
            try {
                await Api.chats.getChats(userId).then(listChat => setChats(listChat))
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchChats()
    }, [userId])

    return { chats, loading, error }
}