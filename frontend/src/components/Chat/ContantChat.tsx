'use client'

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

import { MessageModel } from "@/generated/prisma/models"

import useMessages from "@/store/messages/messagesStore"
import useProfile from "@/store/profile/profileStore"

import { cn } from "@/lib/utils"
import { useFetchChat } from "@/hooks/useFetchChat"
import Dialogue from "./Dialogue"
import InputFolder from "./InputFolder"
import { TypeRoutes } from "@/hooks/useTypedRouter"

export default function ContantChat() {
    const pathName: TypeRoutes = usePathname() as TypeRoutes 

    const { loading, objChat } = useFetchChat(pathName.split('/')[2])

    const {
        listMessages,
        fetchListMessages,
        addMessageInChat
    } = useMessages()

    const messagesEndRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

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
        const obj: MessageModel = {
            messageId: tempId,
            content: 'Привет!',
            senderId: userId,
            sendTime: new Date(),
            chatId: objChat?.chatId || '',
            updatedAt: new Date(),
            createdAt: new Date(),
            isRead: false,
            isEdited: false,
        }

        await addMessageInChat(objChat?.chatId || '', obj)

        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
        }
    }

    useEffect(() => {
        fetchListMessages(objChat?.chatId || '')
    }, [objChat?.chatId])

    useEffect(() => {
        scrollToBottom()
    }, [listMessages.length])


    if (!objChat) return;

    return (
        <div className="flex flex-col gap-y-[15px]">
            <div ref={containerRef} className={cn(
                'h-[calc(100vh-400px)] px-[10px] overflow-y-auto',
                'flex flex-col gap-y-[10px] scrollbar',
                showRowStories && 'h-[calc(100vh-505px)]'
            )}>
                <Dialogue listMessages={listMessages} clickSentHello={clickSentHello}
                    userId={userId} loading={loading} />
                <div ref={messagesEndRef} />
            </div>
            <InputFolder objChat={objChat} userId={userId} addMessageInChat={addMessageInChat}
                textareaRef={textareaRef} />
        </div>
    )
}