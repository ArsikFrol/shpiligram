'use client'

import { Folder, Pin, PinOff, Trash, Volume2, VolumeOff, X } from "lucide-react"

import { cn } from "@/lib/utils"
import useChats from "@/store/chats/chatsStore"
import { TChat } from "@/store/chats/types"
import { JSX } from "react/jsx-runtime"

type Props = {
    objChat: TChat,

    setShowBtnById: (value: string) => void,

    clickPinOff: () => void
}

type TElemBtn = {
    id: number,
    elem: JSX.Element,
    text: string,
    onClick: () => void,
}

export default function Btn(props: Props) {

    const { deleteChat, updateChat } = useChats()

    const clickPin = () => {
        console.log('clickPin')
        if (props.objChat.pinned) {
            updateChat(props.objChat.chatId, { pinned: false })
        } else {
            updateChat(props.objChat.chatId, { pinned: true })
        }
    }

    const clickX = () => {
        props.setShowBtnById('')
    }

    const clickDeleteChat = () => {
        deleteChat(props.objChat.chatId)
    }

    const listBtn: TElemBtn[] = [
        { id: 1, elem: <Trash color="white" size={20} />, onClick: clickDeleteChat, text: 'Удалить чат' },
        { id: 2, elem: <PinOff color="white" size={20} />, onClick: clickPin, text: 'Закрепить' },
        { id: 3, elem: <Volume2 color="white" size={20} />, onClick: () => console.log('🔇 Убрать звук'), text: 'Убрать звук' },
        { id: 4, elem: <Folder color="white" size={20} />, onClick: () => console.log('📁 Добавить в папку'), text: 'Добавить в папку' }
    ]

    return (
        <div className='flex flex-col gap-y-[15px]'>
            {
                listBtn.map((obj, index) => {
                    return (
                        <div key={index} className={cn(
                            'text-[15px] text-white flex items-center gap-x-[15px]',
                            'hover:scale-101 transition-transform duration-300 cursor-pointer'
                        )} onMouseDown={(e) => {
                            e.stopPropagation()
                            console.log('🖱️ mousedown по:', obj.text)
                            obj.onClick()
                        }}>
                            {obj.elem}
                            <div className=''>{obj.text}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}