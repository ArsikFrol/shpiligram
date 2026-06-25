import { useEffect, useState } from 'react'

import { Api } from '@/services/api-client'
import { TChat } from '@/store/chats/types'

export function useFetchChat(chatId: string) {
    const [objChat, setObjChat] = useState<TChat>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        if (!chatId) console.log('Нет chatId')

        async function fetchChat() {
            try {
                await Api.chats.getChat(chatId).then(Chat => setObjChat(Chat))
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchChat()
    }, [chatId])

    return { objChat, loading, error }
}