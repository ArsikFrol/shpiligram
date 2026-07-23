'use client'

import { Mic, Paperclip, SendHorizontal } from "lucide-react"
import { RefObject, useState } from "react"

import { cn } from "@/lib/utils"
import { TChat } from "@/store/chats/types"
import { TGetMessage } from "@/store/messages/types"

import Textarea from "./Textarea"
import Sticker from "./Sticker"

type Props = {
    userId: string,

    objChat: TChat,
    textareaRef: RefObject<HTMLTextAreaElement | null>,

    addMessageInChat: (chatId: string, message: TGetMessage) => void,
}

export default function InputFolder(props: Props) {

    const [valueInput, setValueInput] = useState<string>('')

    const clickSent = async () => {
        if (!valueInput.trim()) return

        if (valueInput.trim()) {
            const tempId = `temp_${Date.now()}`
            const obj: TGetMessage = {
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
        <div className='relative w-full mt-[10px]'>
            <div className='w-[98%] mx-auto'>
                <div className={cn(
                    'flex items-center gap-x-[20px] shadow-xl rounded-2xl',
                    'bg-[#202D3D] p-[10px] w-full'
                )}>
                    <Sticker />
                    <Textarea addMessageInChat={props.addMessageInChat} objChat={props.objChat}
                        setValueInput={setValueInput} textareaRef={props.textareaRef}
                        userId={props.userId} valueInput={valueInput} />
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