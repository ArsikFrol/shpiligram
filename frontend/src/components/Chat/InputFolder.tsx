'use client'

import { Mic, Paperclip, SendHorizontal, Sticker } from "lucide-react"
import { RefObject, useState } from "react"

import { MessageModel } from "@/generated/prisma/models"
import { cn } from "@/lib/utils"
import { TChat } from "@/store/chats/types"

type Props = {
    userId: string,

    objChat: TChat,
    textareaRef: RefObject<HTMLTextAreaElement | null>,

    addMessageInChat: (chatId: string, message: MessageModel) => void,
}

export default function InputFolder(props: Props) {

    const [valueInput, setValueInput] = useState<string>('')

    const clickSent = async () => {
        if (!valueInput.trim()) return

        if (valueInput.trim()) {
            const tempId = `temp_${Date.now()}`
            const obj: MessageModel = {
                messageId: tempId,
                content: valueInput,
                senderId: props.userId,
                sendTime: new Date(),
                chatId: props.objChat?.chatId || '',
                updatedAt: new Date(),
                createdAt: new Date(),
                isRead: false,
                isEdited: false,
            }

            await props.addMessageInChat(props.objChat?.chatId || '', obj)
            setValueInput('')

            if (props.textareaRef.current) {
                props.textareaRef.current.style.height = 'auto'
            }
        }
    }


    return (
        <div className='relative w-full'>
            <div className='absolute bottom-[-65px] left-1/2 transform -translate-x-1/2 w-[99%] min-w-[300px]'>
                <div className={cn(
                    'flex items-center gap-x-[20px] shadow-xl rounded-2xl',
                    'bg-[#202D3D] p-[10px] w-full'
                )}>
                    <Sticker color="white" size={28} strokeWidth={1.5} className={cn(
                        'hover:scale-105 transition-transform duration-300 cursor-pointer flex-shrink-0'
                    )} />
                    <textarea ref={props.textareaRef} placeholder="Message" value={valueInput} autoFocus
                        className={cn(
                            'flex-1 text-white px-[10px] py-[7px] border border-white/30 rounded-xl',
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
                    <div className='flex items-center gap-x-[15px]'>
                        <Paperclip color="white" strokeWidth={1.5} size={20} className={cn(
                            'hover:scale-105 transition-transform duration-300 cursor-pointer flex-shrink-0'
                        )} />
                        <div className={cn(
                            'bg-blue-500/40 w-[40px] h-[40px] flex justify-center',
                            'items-center rounded-xl cursor-pointer hover:bg-blue-500/60 transition'
                        )} onClick={clickSent}>
                            {valueInput.trim()
                                ? <SendHorizontal color="white" size={22} />
                                : <Mic color="white" size={22} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}