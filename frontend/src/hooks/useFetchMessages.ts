import { useEffect, useState } from 'react'
import { Api } from '@/services/api-client'
import { MessageModel, UserModel } from '@/generated/prisma/models'

export function useFetchMessages(chatId: string) {
    const [messages, setMessages] = useState<MessageModel[]>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        if (!chatId) console.log('Нет chatId')

        async function fetchMessages() {
            try {
                await Api.messages.messages(chatId).then(listMessage => setMessages(listMessage))
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchMessages()
    }, [chatId])

    return { messages, loading, error }
}