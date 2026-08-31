'use client'

import { useRef } from "react"

import useMessages from "@/store/messages/messagesStore"
import useProfile from "@/store/profile/profileStore"

import { TChat } from "@/store/chats/types"
import InputFolder from "./InputFolder/InputFolder"
import Dialogue from "./Dialogue/Dialogue"

type Props = {
    objChat: TChat,
}

export default function ContantChat(props: Props) {

    const { addMessageInChat } = useMessages()
    const { userId } = useProfile()

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    return (
        <div className="flex flex-col">
            <Dialogue />
            <InputFolder objChat={props.objChat} userId={userId} addMessageInChat={addMessageInChat}
                textareaRef={textareaRef} />
        </div>
    )
}