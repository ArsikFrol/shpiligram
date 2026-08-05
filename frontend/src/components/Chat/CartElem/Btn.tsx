'use client'

import { Pin, PinOff, Trash, Volume2, VolumeOff, X } from "lucide-react"

import { cn } from "@/lib/utils"
import useChats from "@/store/chats/chatsStore"
import { TChat } from "@/store/chats/types"

type Props = {
    objChat: TChat,

    setShowBtnById: (value: string) => void,

    clickPinOff: () => void
}

export default function Btn(props: Props) {

    const {
        deleteChat,
        updateChat
    } = useChats()

    const clickPin = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (props.objChat.pinned) {
            updateChat(props.objChat.chatId, { pinned: false })
        } else {
            updateChat(props.objChat.chatId, { pinned: true })
        }
    }

    const clickX = (e: React.MouseEvent) => {
        e.stopPropagation()
        props.setShowBtnById('')
    }

    const clickDeleteChat = (e: React.MouseEvent) => {
        e.stopPropagation()
        deleteChat(props.objChat.chatId)
    }

    return (
        <div className='flex items-center gap-x-[20px]'>
            <div className={cn(
                'w-[45px] h-[45px] rounded-2xl flex justify-center items-center',
                'bg-red-600'
            )} onClick={e => clickDeleteChat(e)}>
                <Trash color="white" />
            </div>
            <div className={cn(
                'w-[45px] h-[45px] rounded-2xl flex justify-center items-center',
                'bg-blue-400'
            )} onClick={props.objChat.pinned ? props.clickPinOff : (e) => clickPin(e)}>
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
            )} onClick={(e) => clickX(e)} >
                <X />
            </div>
        </div>
    )
}