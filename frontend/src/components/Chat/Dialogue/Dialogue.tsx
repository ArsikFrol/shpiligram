'use client'

import { RefObject, useEffect, useRef } from "react"

import { TGetMessage } from "@/store/messages/types"
import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"
import { TChat } from "@/store/chats/types"
import Message from "./Message"

type Props = {
    listMessages: TGetMessage[],

    objChat: TChat,
    textareaRef: RefObject<HTMLTextAreaElement | null>

    addMessageInChat: (chatId: string, message: TGetMessage) => void
}

export default function Dialogue(props: Props) {

    const messagesEndRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const {
        userId,
        showRowStories
    } = useProfile()

    const scrollToBottom = () => {
        if (containerRef.current) {
            requestAnimationFrame(() => {
                containerRef.current?.scrollTo({
                    top: containerRef.current.scrollHeight,
                    behavior: 'smooth'
                })
            })
        }
    }

    const clickSentHello = async () => {
        const tempId = `temp_${Date.now()}`
        const obj: TGetMessage = {
            messageId: tempId,
            content: 'Привет!',
            senderId: userId,
            sendTime: new Date(),
            chatId: props.objChat.chatId,
            updatedAt: new Date(),
            createdAt: new Date(),
            isRead: false,
            isEdited: false,
        }

        await props.addMessageInChat(props.objChat.chatId, obj)

        if (props.textareaRef.current) {
            props.textareaRef.current.style.height = 'auto'
        }
    }

    useEffect(() => {
        scrollToBottom()
    }, [props.listMessages.length])


    return (
        <div ref={containerRef} className={cn(
            'px-[10px] overflow-y-auto',
            'flex flex-col gap-y-[10px] scrollbar',
        )} style={showRowStories ? { height: 'calc(100vh - 475px)' } : { height: 'calc(100vh - 395px' }} >
            {
                props.listMessages.map((obj, index: number) => <Message objMessage={obj} userId={userId} key={index} />)
            }
            <div ref={messagesEndRef} />
        </div>
    )
}