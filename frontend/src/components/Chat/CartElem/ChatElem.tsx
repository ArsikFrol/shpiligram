'use client'

import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { TChat } from "@/store/chats/types"
import Interlocutor from "./Interlocutor"
import useChats from "@/store/chats/chatsStore"
import { useTypedRouter } from "@/hooks/useTypedRouter"

type Props = {
    objChat: TChat,

    setShowRowStories: (activeId: boolean) => void

    setShowBtnById: (value: string) => void,
    showBtnById: string,
}

export default function ChatElem(props: Props) {
    const router = useTypedRouter()

    const {
        deleteFromStoreAllChats,
        setLoadingChats
    } = useChats()

    const clickChat = () => {
        router.push(`/chats/${props.objChat.chatId}`)

        deleteFromStoreAllChats()
        setLoadingChats(true)
    }

    const clickPKM = (e: any) => {
        e.preventDefault()
        props.setShowBtnById(props.objChat.chatId)
    }

    return (
        <div className={cn(
            'flex items-center justify-between',
            'hover:scale-101 transition-transform duration-300 cursor-pointer'
        )} onClick={clickChat} onContextMenu={(e) => clickPKM(e)}>
            <Interlocutor objChat={props.objChat} showBtnById={props.showBtnById}
                setShowBtnById={props.setShowBtnById} />
        </div>
    )
}