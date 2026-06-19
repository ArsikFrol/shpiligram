'use client'

import { Mic, Paperclip, SendHorizontal, Sticker } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { MessageModel } from "@/generated/prisma/models"
import { cn } from "@/lib/utils"

import useChats from "@/store/chats/chatsStore"
import useMessages from "@/store/messages/messagesStore"
import useProfile from "@/store/profile/profileStore"
import { formatDateTime } from "@/lib/formatDate"

export default function ContantChat() {

    const {
        showChatById,
        listChats
    } = useChats()

    const {
        listMessages,
        fetchListMessages,
        addMessageInChat
    } = useMessages()

    const [valueInput, setValueInput] = useState<string>('')

    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const {
        userId,
        showRowStories
    } = useProfile()

    const clickSent = async () => {
        if (!valueInput.trim()) return

        const tempId = `temp_${Date.now()}`
        const obj: MessageModel = {
            messageId: tempId,
            content: valueInput,
            senderId: userId,
            sendTime: new Date(),
            chatId: showChatById,
            updatedAt: new Date(),
            createdAt: new Date(),
            isRead: false,
            isEdited: false,
        }

        await addMessageInChat(showChatById, obj)
        setValueInput('')

        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
        }
    }

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

    useEffect(() => {

        scrollToBottom()
        fetchListMessages(showChatById)

    }, [showChatById, listMessages])

    return (
        <div className="flex flex-col gap-y-[15px]">
            <div ref={containerRef} className={cn(
                'w-[1064px] h-[calc(100vh-400px)] px-[10px] overflow-y-auto',
                'flex flex-col gap-y-[10px] scrollbar',
                showRowStories && 'h-[calc(100vh-505px)]'
            )}>
                {listMessages.map((obj, index: number) => (
                    <div key={index} className={cn(
                        'w-fit max-w-[500px] p-[10px] rounded-t-2xl',
                        obj.senderId === userId
                            ? 'ml-auto text-right bg-active-bg rounded-l-2xl'
                            : 'mr-auto text-left bg-active-bg/50 rounded-r-2xl'
                    )} >
                        <div className='text-white text-[16px]'>{obj.content}</div>
                        <div className='text-[12px] font-medium text-gray-500'>
                            {formatDateTime(new Date(obj.sendTime))}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className='relative'>
                <div className='absolute bottom-[-65px] left-1/2 transform -translate-x-1/2 w-[1050px]'>
                    <div className={cn(
                        'flex justify-between items-center gap-2 shadow-xl rounded-2xl',
                        'bg-[#202D3D] p-[10px]'
                    )}>
                        <Sticker color="white" size={28} strokeWidth={1.5} className={cn(
                            'hover:scale-105 transition-transform duration-300 cursor-pointer'
                        )} />
                        <div className="w-[850px]">
                            <textarea ref={textareaRef} placeholder="Message" value={valueInput} autoFocus
                                className={cn(
                                    'w-full text-white px-[10px] py-[7px] border border-white/30 rounded-xl',
                                    'resize-none overflow-y-auto bg-transparent overflow-hidden',
                                    'focus:outline-none focus:border-white/50 transition-colors',
                                    'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20'
                                )} onChange={(e) => {
                                    setValueInput(e.target.value)
                                    e.target.style.height = 'auto'
                                    const newHeight = Math.min(e.target.scrollHeight, 100)
                                    e.target.style.height = `${newHeight}px`
                                }} onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault()
                                        if (valueInput.trim()) {
                                            clickSent()
                                        }
                                    }
                                }} rows={1} style={{ minHeight: '40px', maxHeight: '100px' }} />
                        </div>
                        <div className='flex items-center gap-x-[15px]'>
                            <Paperclip color="white" strokeWidth={1.5} size={20} className={cn(
                                'hover:scale-105 transition-transform duration-300 cursor-pointer'
                            )} />
                            <div className={cn(
                                'bg-blue-500/40 w-[40px] h-[40px] flex justify-center',
                                'items-center rounded-xl cursor-pointer hover:bg-blue-500/60 transition'
                            )}>
                                {valueInput.trim()
                                    ? <SendHorizontal color="white" size={22} onClick={clickSent} />
                                    : <Mic color="white" size={22} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}