import { RefObject, useEffect, useRef } from "react"

import { useEscape } from "./useEscape"
import { useTypedRouter } from "./useTypedRouter"
import { TChat } from "@/store/chats/types"
import useChats from "@/store/chats/chatsStore"

type TReturn = {
    chatRefs: RefObject<(HTMLDivElement | null)[]>
}

export function useChatNavigation(listChats: TChat[]): TReturn {
    const router = useTypedRouter()
    const { activeIdElemChatNav, setActiveIdElemChatNav } = useChats()
    const chatRefs = useRef<(HTMLDivElement | null)[]>([])
    const prevChatIdsRef = useRef<string>('')

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault()
                    setActiveIdElemChatNav((prev) => {
                        if (prev < listChats.length - 1) return prev + 1
                        return 0
                    })
                    break

                case 'ArrowUp':
                    e.preventDefault()
                    setActiveIdElemChatNav((prev) => {
                        if (prev > -2) return prev - 1
                        return -2
                    })
                    break

                case 'Enter':
                    e.preventDefault()
                    if (activeIdElemChatNav >= 0 && activeIdElemChatNav < listChats.length) {
                        const chat = listChats[activeIdElemChatNav]
                        router.push(`/chats/${chat.chatId}`)
                    }
                    break
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [listChats, activeIdElemChatNav, setActiveIdElemChatNav, router])

    useEffect(() => {
        if (activeIdElemChatNav >= 0 && chatRefs.current[activeIdElemChatNav]) {
            chatRefs.current[activeIdElemChatNav]?.scrollIntoView({
                block: 'nearest',
                behavior: 'smooth'
            })
        }
    }, [activeIdElemChatNav])

    useEffect(() => {
        const currentChatIds = listChats.map(chat => chat.chatId).join(',')

        if (prevChatIdsRef.current !== currentChatIds) {
            setActiveIdElemChatNav(-1)
            prevChatIdsRef.current = currentChatIds
        }
    }, [listChats, setActiveIdElemChatNav])

    useEscape(() => setActiveIdElemChatNav(-1))

    return { chatRefs }
}