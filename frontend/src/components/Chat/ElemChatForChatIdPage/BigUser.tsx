'use client'

import { CircleUser } from "lucide-react"

import { useTypedRouter } from "@/hooks/useTypedRouter"
import { cn } from "@/lib/utils"
import { TChat } from "@/store/chats/types"

type Props = {
    obj: TChat
}

export default function BigUser(props: Props) {
    const router = useTypedRouter()

    return (
        <div className="flex items-center justify-between gap-x-[10px]"
            onClick={() => router.push(`/chats/${props.obj.chatId}`)}>
            <div className='flex gap-x-[10px]'>
                <div className='relative'>
                    <CircleUser size={50} strokeWidth={1} color="#ffffff" className={cn(
                        "w-[50px] h-[50px] flex-shrink-0",
                        'hover:scale-105 transition-transform duration-300 cursor-pointer'
                    )} />
                    <div className={cn(
                        'w-[10px] h-[10px] bg-green-300 rounded-2xl',
                        'absolute bottom-[3px] right-[3px]'
                    )} style={props.obj.interlocutor.isOnline ? {} : { display: 'none' }}></div>
                </div>
                <div className='w-[160px]'>
                    <div className='text-[18px] font-semibold text-white'>
                        {props.obj.interlocutor.firstName} {props.obj.interlocutor.lastName}
                    </div>
                    <div className='text-[15px] font-medium text-gray-500'>
                        {props.obj.lastMessage.content.length > 20
                            ? <span>{props.obj.lastMessage.content.slice(0, 19)}...</span>
                            : props.obj.lastMessage.content
                        }
                    </div>
                </div>
            </div>
            <div className={cn(
                'w-[20px] h-[20px] bg-blue-500 rounded-2xl text-[14px] text-white flex items-center justify-center'
            )}>
                1
            </div>
        </div>
    )
}