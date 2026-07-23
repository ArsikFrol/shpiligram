'use client'

import { useEffect, useRef } from "react"

import useMessages from "@/store/messages/messagesStore"
import useProfile from "@/store/profile/profileStore"

import { cn } from "@/lib/utils"
import { TGetMessage } from "@/store/messages/types"
import { TChat } from "@/store/chats/types"
import InputFolder from "./InputFolder/InputFolder"
import Dialogue from "./Dialogue/Dialogue"

type Props = {
    objChat: TChat,
    loadingChat: boolean

    listMessages: TGetMessage[],
    loadingMessages: boolean
}

export default function ContantChat(props: Props) {

    const {
        addMessageInChat,
    } = useMessages()

    const {
        userId
    } = useProfile()

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    return (
        <div className="flex flex-col">
            <Dialogue listMessages={props.listMessages} objChat={props.objChat} addMessageInChat={addMessageInChat}
                textareaRef={textareaRef} />
            <InputFolder objChat={props.objChat} userId={userId} addMessageInChat={addMessageInChat}
                textareaRef={textareaRef} />
        </div>
    )
}