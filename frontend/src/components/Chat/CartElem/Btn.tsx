'use client'

import { cn } from "@/lib/utils"
import useChats from "@/store/chats/chatsStore"
import { TChat } from "@/store/chats/types"
import { Pin, PinOff, Trash, Volume2, VolumeOff, X } from "lucide-react"

type Props = {
    objChat: TChat,

    setShowBtnById: (value: string) => void,

    clickPinOff: () => void
}

export default function Btn(props: Props) {

    const {
        deleteChat
    } = useChats()

    const clickPin = () => {

    }

    const clickX = () => {
        props.setShowBtnById('')
    }

    const clickDeleteChat = () => {
        deleteChat(props.objChat.chatId)
    }

    return (
        <div className='flex items-center gap-x-[20px]'>
            <div className={cn(
                'w-[45px] h-[45px] rounded-2xl flex justify-center items-center',
                'bg-red-600'
            )} onClick={e => {
                e.stopPropagation()
                clickDeleteChat()
            }}>
                <Trash color="white" />
            </div>
            <div className={cn(
                'w-[45px] h-[45px] rounded-2xl flex justify-center items-center',
                'bg-blue-400'
            )} onClick={props.objChat.pinned ? props.clickPinOff : clickPin}>
                {props.objChat.pinned
                    ? <PinOff />
                    : <Pin />
                }
            </div>
            <div className={cn(
                'w-[45px] h-[45px] rounded-2xl flex justify-center items-center',
                'bg-green-500'
            )}>
                {props.objChat.muteUntil
                    ? <Volume2 color="white" />
                    : <VolumeOff color="white" />
                }
            </div>
            <div className={cn(
                'w-[45px] h-[45px] rounded-2xl flex justify-center items-center',
                'bg-white'
            )} onClick={(e) => {
                e.stopPropagation()
                clickX()
            }} >
                <X />
            </div>
        </div>
    )
}