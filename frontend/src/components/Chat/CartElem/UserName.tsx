import { CircleUser } from "lucide-react"

import { cn } from "@/lib/utils"
import { TChat } from "@/store/chats/types"

type Props = {
    objChat: TChat
}

export default function UserName(props: Props) {
    return (
        <div className={cn(
            'flex items-center gap-x-[10px]',
        )}>
            <div className='relative'>
                <CircleUser size={51} strokeWidth={1} color="#ffffff" />
                <div className={cn(
                    'w-[10px] h-[10px] bg-green-300 rounded-2xl',
                    'absolute bottom-[3px] right-[3px]'
                )} style={props.objChat.interlocutor.isOnline ? {} : { display: 'none' }}></div>
            </div>
            <div className=''>
                <div className='flex items-center gap-x-[5px]'>
                    <div className='text-[18px] font-semibold text-white'>
                        {props.objChat.interlocutor.firstName}
                    </div>
                    <div className='text-[18px] font-semibold text-white'>
                        {props.objChat.interlocutor.lastName}
                    </div>
                </div>
                <div className='text-[15px] font-medium text-gray-500'>
                    {props.objChat.lastMessage.content}
                </div>
            </div>
        </div>
    )
}