'use client'

import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"
import useChats from "@/store/chats/chatsStore"
import { TGetChat } from "@/store/chats/types"
import ChatElem from "./CartElem/ChatElem"

type Props = {
    listChats: TGetChat[],

    showBtnById: string,
    setShowBtnById: (value: string) => void
}

export default function SortingChatsByFolder(props: Props) {
    const {
        showRowStories, setShowRowStories
    } = useProfile()

    const {
        showChatById, setShowChatById
    } = useChats()

    return (
        <div className={cn(
            "flex flex-col gap-y-[30px] overflow-y-auto",
            showRowStories && 'h-[calc(100vh-420px)]',
            (showChatById && showRowStories) && 'w-[70px] h-[calc(100vh-320px)] py-[20px]',
            (showChatById === '' && showRowStories) && 'w-full h-[calc(100vh-420px)] px-[15px]',
            (showChatById && !showRowStories) && 'h-[calc(100vh-240px)] mt-[20px]',
            !showRowStories && !showChatById && 'h-[calc(100vh-320px)] px-[15px]'
        )}>
            {
                props.listChats.filter(objChat => objChat.pinned).map((objChat, index: number) => {
                    return (
                        <ChatElem key={index} objChat={objChat} setShowChatById={setShowChatById}
                            showChatById={showChatById} setShowRowStories={setShowRowStories}
                            showBtnById={props.showBtnById} setShowBtnById={props.setShowBtnById} />
                    )
                })
            }
            {
                props.listChats.filter(objChat => !objChat.pinned).map((objChat, index: number) => {
                    return (
                        <ChatElem key={index} objChat={objChat} setShowChatById={setShowChatById}
                            showChatById={showChatById} setShowRowStories={setShowRowStories}
                            showBtnById={props.showBtnById} setShowBtnById={props.setShowBtnById} />
                    )
                })
            }</div>
    )
}