'use client'

import { TElemChat } from "@/app/page"
import { cn } from "@/lib/utils"
import { Mic, Paperclip, SendHorizontal, Sticker } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"

type Props = {
    obj: TElemChat,
}

type TELemMessage = {
    id: string,
    text: string,
    senderId: string,
    senderTime: string
}

const listMessage: TELemMessage[] = [
    { id: "1", text: "Привет! Как дела?", senderId: "1", senderTime: "09:00" },
    { id: "2", text: "Привет! У меня всё отлично, спасибо! А у тебя?", senderId: "2", senderTime: "09:02" },
    { id: "3", text: "Тоже хорошо. Что делаешь?", senderId: "1", senderTime: "09:05" },
    { id: "4", text: "Работаю над проектом", senderId: "2", senderTime: "09:08" },
    { id: "5", text: "Понятно. А какой проект?", senderId: "1", senderTime: "09:10" },
    { id: "6", text: "Мессенджер делаю", senderId: "2", senderTime: "09:15" },
    { id: "7", text: "Круто! На чем пишешь?", senderId: "1", senderTime: "09:18" },
    { id: "8", text: "Next.js + Prisma + PostgreSQL", senderId: "2", senderTime: "09:22" },
    { id: "9", text: "Отличный стек!", senderId: "1", senderTime: "09:25" },
    { id: "10", text: "Да, мне очень нравится", senderId: "2", senderTime: "09:28" },
    { id: "11", text: "Тяжело?", senderId: "1", senderTime: "09:32" },
    { id: "12", text: "Бывает сложно, но интересно", senderId: "2", senderTime: "09:35" },
    { id: "13", text: "Понимаю", senderId: "1", senderTime: "09:38" },
    { id: "14", text: "А у тебя чем занимаешься?", senderId: "2", senderTime: "09:42" },
    { id: "15", text: "Тоже программирую", senderId: "1", senderTime: "09:45" },
    { id: "16", text: "Класс! На чём?", senderId: "2", senderTime: "09:48" },
    { id: "17", text: "React, TypeScript, Node.js", senderId: "1", senderTime: "09:52" },
    { id: "18", text: "Здорово! Может, вместе что-то сделаем?", senderId: "2", senderTime: "09:55" },
    { id: "19", text: "Было бы круто!", senderId: "1", senderTime: "09:58" },
    { id: "20", text: "Отлично! Давай на следующей неделе обсудим", senderId: "2", senderTime: "10:02" },
    { id: "21", text: "Договорились!", senderId: "1", senderTime: "10:05" },
    { id: "22", text: "Кстати, видел новый фильм?", senderId: "2", senderTime: "10:10" },
    { id: "23", text: "Нет, какой?", senderId: "1", senderTime: "10:12" },
    { id: "24", text: "Дюна 2. Очень советую", senderId: "2", senderTime: "10:15" },
    { id: "25", text: "О, слышал о нём. Обязательно посмотрю", senderId: "1", senderTime: "10:18" },
    { id: "26", text: "Да, там отличные спецэффекты", senderId: "2", senderTime: "10:22" },
    { id: "27", text: "А в кинотеатре или дома смотреть?", senderId: "1", senderTime: "10:25" },
    { id: "28", text: "Лучше в кинотеатре, масштаб не тот", senderId: "2", senderTime: "10:28" },
    { id: "29", text: "Согласен, пойду на выходных", senderId: "1", senderTime: "10:32" },
    { id: "30", text: "Хорошего просмотра!", senderId: "2", senderTime: "10:35" },
    { id: "31", text: "Хорошего просмотра!", senderId: "2", senderTime: "10:35" },
    { id: "32", text: "Хорошего просмотра!", senderId: "2", senderTime: "10:35" }
]
export default function ContantChat(props: Props) {
    const [valueInput, setValueInput] = useState<string>('')
    const [listMessages, setListMessages] = useState<TELemMessage[]>(listMessage)

    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const clickSent = () => {
        if (!valueInput.trim()) return

        const obj: TELemMessage = {
            id: Date.now().toString(),
            text: valueInput,
            senderId: props.obj.id,
            senderTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }

        setListMessages(prev => [...prev, obj])
        setValueInput('')

        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
        }
    }

    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: 'smooth'
            })
        }
    }

    useEffect(() => {
        scrollToBottom()
    }, [listMessages])

    return (
        <div className="flex flex-col gap-y-[15px]">
            <div ref={containerRef} className={cn(
                'w-[1064px] h-[calc(100vh-405px)] px-[10px] overflow-y-auto',
                'flex flex-col gap-y-[10px]'
            )} >
                {listMessages.map((obj, index: number) => (
                    <div key={index} className={cn(
                        'w-fit max-w-[500px] p-[10px] rounded-t-2xl',
                        obj.senderId === props.obj.id
                            ? 'ml-auto text-right bg-active-bg rounded-l-2xl'
                            : 'mr-auto text-left bg-active-bg/50 rounded-r-2xl'
                    )} >
                        <div className='text-white text-[16px]'>{obj.text}</div>
                        <div className='text-[12px] font-medium text-gray-500'>{obj.senderTime}</div>
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
                        <Sticker color="white" size={28} strokeWidth={1.5} />
                        <div className="w-[850px]">
                            <textarea ref={textareaRef} placeholder="Message" value={valueInput}
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
                            <Paperclip color="white" strokeWidth={1.5} size={20} />
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