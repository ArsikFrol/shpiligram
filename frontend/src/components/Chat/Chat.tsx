import { Dispatch, SetStateAction } from "react"

import TopContentChat from "./TopContentChat"
import ContantChat from "./ContantChat"
import { cn } from "@/lib/utils"
import { TElemChat } from "@/store/chats/types"

type Props = {
    obj: TElemChat,
    setShowChatById: Dispatch<SetStateAction<string>>
    showRowStories: boolean
}

export default function Chat({ obj, setShowChatById, showRowStories }: Props) {
    return (
        <div className={cn(
            'w-full bg-bg mt-[10px] rounded-2xl h-[calc(100vh-230px)]',
            showRowStories && 'h-[calc(100vh-310px)]'
        )}>
            <TopContentChat setShowChatById={setShowChatById} obj={obj} />
            <ContantChat obj={obj} showRowStories={showRowStories} />
        </div>
    )
}