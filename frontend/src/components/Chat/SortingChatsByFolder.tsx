'use client'

import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"
import { TChat } from "@/store/chats/types"
import ChatElem from "./CartElem/ChatElem"
import { useChatNavigation } from "@/hooks/useChatNavigation"
import { useTypedRouter } from "@/hooks/useTypedRouter"
import useChats from "@/store/chats/chatsStore"

type Props = {
    listChats: TChat[],

    showBtnById: string,
    setShowBtnById: (value: string) => void
}

export default function SortingChatsByFolder(props: Props) {
    const router = useTypedRouter()

    const { showRowStories } = useProfile()
    const { chatRefs } = useChatNavigation(props.listChats)
    const { deleteFromStoreAllChats, setLoadingChats, activeIdElemChatNav } = useChats()

    const clickChat = (chatId: string) => {
        router.push(`/chats/${chatId}`)

        deleteFromStoreAllChats()
        setLoadingChats(true)
    }

    const clickPKM = (e: any, chatId: string) => {
        e.preventDefault()
        props.setShowBtnById(chatId)
    }

    return (
        <div className={cn(
            "flex flex-col gap-y-[10px] overflow-y-auto px-[7px]"
        )} style={{
            height: showRowStories ? 'var(--chat-height-with-stories)' : 'var(--chat-height-without-stories)'
        }}>
            {
                props.listChats.map((objChat, index: number) => {
                    return (
                        <div key={objChat.chatId} ref={(el) => {
                            chatRefs.current[index] = el
                        }} className={cn(
                            'hover:scale-101 transition-transform duration-300 cursor-pointer',
                            'relative p-[10px]',
                            props.showBtnById === objChat.chatId && [
                                'scale-101 bg-bg rounded-2xl'
                            ],
                            activeIdElemChatNav === index && [
                                'scale-101 bg-bg rounded-2xl'
                            ]
                        )} onClick={() => clickChat(objChat.chatId)} onContextMenu={(e) => clickPKM(e, objChat.chatId)}>
                            <ChatElem key={index} objChat={objChat} showBtnById={props.showBtnById}
                                setShowBtnById={props.setShowBtnById} />
                        </div>
                    )
                })
            }
        </div>
    )
}