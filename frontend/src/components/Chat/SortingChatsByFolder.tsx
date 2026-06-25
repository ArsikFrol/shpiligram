'use client'

import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"
import { TChat } from "@/store/chats/types"
import ChatElem from "./CartElem/ChatElem"

type Props = {
    listChats: TChat[],

    showBtnById: string,
    setShowBtnById: (value: string) => void
}

export default function SortingChatsByFolder(props: Props) {
    const {
        showRowStories, setShowRowStories
    } = useProfile()

    return (
        <div className={cn(
            "flex flex-col gap-y-[30px] overflow-y-auto",
            showRowStories ? 'h-[calc(100vh-420px)]' : 'h-[calc(100vh-320px)] px-[15px]'
        )}>
            {
                props.listChats.filter(objChat => objChat.pinned).map((objChat, index: number) => {
                    return (
                        <ChatElem key={index} objChat={objChat} setShowRowStories={setShowRowStories}
                            showBtnById={props.showBtnById} setShowBtnById={props.setShowBtnById} />
                    )
                })
            }
            {
                props.listChats.filter(objChat => !objChat.pinned).map((objChat, index: number) => {
                    return (
                        <ChatElem key={index} objChat={objChat} setShowRowStories={setShowRowStories}
                            showBtnById={props.showBtnById} setShowBtnById={props.setShowBtnById} />
                    )
                })
            }</div>
    )
}