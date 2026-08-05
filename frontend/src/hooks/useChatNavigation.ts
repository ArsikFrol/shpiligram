import { RefObject, useEffect, useRef, useState } from "react"
import { useEscape } from "./useEscape"
import { useKey } from "react-use"
import { useTypedRouter } from "./useTypedRouter"
import { TChat } from "@/store/chats/types"

type TReturn = {
    activeIndex: number,
    chatRefs: RefObject<(HTMLDivElement | null)[]>
}

export function useChatNavigation(listChats: TChat[]): TReturn {
    const router = useTypedRouter()

    const [activeIndex, setActiveIndex] = useState<number>(-1)
    const chatRefs = useRef<(HTMLDivElement | null)[]>([])

    useKey('ArrowDown', (e) => {
        if (listChats.length === 0) return
        setActiveIndex((prev) =>
            prev < listChats.length - 1 ? prev + 1 : 0
        )
    })

    useKey('ArrowUp', (e) => {
        if (listChats.length === 0) return
        setActiveIndex((prev) =>
            prev > 0 ? prev - 1 : -1
        )
    })

    useKey('Enter', () => {
        console.log(activeIndex)
        if (activeIndex >= 0 && activeIndex < listChats.length) {
            const chat = listChats[activeIndex]
            router.push(`/chats/${chat.chatId}`)
        }
    })

    useEffect(() => {
        if (activeIndex >= 0 && chatRefs.current[activeIndex]) {
            chatRefs.current[activeIndex]?.scrollIntoView({
                block: 'nearest',
                behavior: 'smooth'
            })
        }
    }, [activeIndex])

    useEffect(() => {
        setActiveIndex(-1)
    }, [listChats])

    useEscape(() => setActiveIndex(-1))


    return { activeIndex, chatRefs }
}