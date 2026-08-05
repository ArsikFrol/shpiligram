'use client'

import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"
import { TChat } from "@/store/chats/types"
import ChatElem from "./CartElem/ChatElem"
import { useChatNavigation } from "@/hooks/useChatNavigation"

type Props = {
    listChats: TChat[],

    showBtnById: string,
    setShowBtnById: (value: string) => void
}

export default function SortingChatsByFolder(props: Props) {
    const { showRowStories, setShowRowStories } = useProfile()
    const { activeIndex, chatRefs } = useChatNavigation(props.listChats)

    return (
        <div className={cn(
            "flex flex-col gap-y-[10px] overflow-y-auto",
            showRowStories ? 'h-[calc(100vh-420px)]' : 'h-[calc(100vh-320px)] px-[15px]'
        )}>
            {
                props.listChats.map((objChat, index: number) => {
                    return (
                        <div key={objChat.chatId} ref={(el) => {
                            chatRefs.current[index] = el
                        }}
                            className={cn(
                                'transition-all duration-200 rounded-xl p-[10px]',
                                activeIndex === index && 'bg-bg'
                            )}>
                            <ChatElem key={index} objChat={objChat} setShowRowStories={setShowRowStories}
                                showBtnById={props.showBtnById} setShowBtnById={props.setShowBtnById} />
                        </div>
                    )
                })
            }
        </div>
    )
}