import { CircleUser } from "lucide-react"

import { cn } from "@/lib/utils"
import { TGetChat } from "@/store/chats/types"
import Interlocutor from "./Interlocutor"

type Props = {
    objChat: TGetChat,

    setShowChatById: (activeId: string) => void,
    showChatById: string,

    setShowRowStories: (activeId: boolean) => void

    setShowBtnById: (value: string) => void,
    showBtnById: string,
}

export default function ChatElem(props: Props) {

    const clickChat = () => {
        props.setShowChatById(props.objChat.chatId)
        props.setShowBtnById('')
        props.setShowRowStories(false)
    }

    const clickPKM = (e: any) => {
        if (!props.showChatById) {
            e.preventDefault()
            props.setShowBtnById(props.objChat.chatId)
        }
    }

    return (
        <div className={cn(
            'flex items-center justify-between',
            'hover:scale-101 transition-transform duration-300 cursor-pointer'
        )} onClick={clickChat} onContextMenu={(e) => clickPKM(e)}>
            {props.showChatById
                ? <CircleUser size={51} strokeWidth={1} color="#ffffff" />
                : <Interlocutor objChat={props.objChat} showBtnById={props.showBtnById}
                    setShowBtnById={props.setShowBtnById} />
            }
        </div>
    )
}