'use client'

import { CircleUser } from "lucide-react"

import { useTypedRouter } from "@/hooks/useTypedRouter"
import { cn } from "@/lib/utils"
import { TChat } from "@/store/chats/types"

type Props = {
    obj: TChat
}

export default function LittleUser(props: Props) {
    const router = useTypedRouter()

    return (
        <>
            <CircleUser size={50} strokeWidth={1} color="#ffffff"
                onClick={() => router.push(`/chats/${props.obj.chatId}`)}
                className={cn(
                    "w-[50px] h-[50px] flex-shrink-0",
                    'hover:scale-105 transition-transform duration-300 cursor-pointer'
                )} />
            <div className={cn(
                'absolute right-0 top-0',
                'w-[20px] h-[20px] bg-blue-500 rounded-2xl text-[14px] text-white flex items-center justify-center'
            )}>
                1
            </div>
            <div className={cn(
                'w-[10px] h-[10px] bg-green-300 rounded-2xl',
                'absolute bottom-[3px] right-[3px]'
            )} style={props.obj.interlocutor.isOnline ? {} : { display: 'none' }}></div>
        </>
    )
}