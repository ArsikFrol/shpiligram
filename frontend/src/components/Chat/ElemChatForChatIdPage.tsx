import { CircleUser } from "lucide-react"

import { useTypedRouter } from "@/hooks/useTypedRouter"
import { cn } from "@/lib/utils"
import { TChat } from "@/store/chats/types"


type Props = {
    obj: TChat
}

export default function ElemChatForChatIdPage(props: Props) {
    const router = useTypedRouter()

    return (
        <>
            <div className="min-xl:hidden">
                <CircleUser size={50} strokeWidth={1} color="#ffffff"
                    onClick={() => router.push(`/chats/${props.obj.chatId}`)}
                    className={cn(
                        "w-[50px] h-[50px] flex-shrink-0",
                        'hover:scale-105 transition-transform duration-300 cursor-pointer'
                    )} />
            </div>
            <div className="max-xl:hidden flex items-center gap-x-[10px]"
                onClick={() => router.push(`/chats/${props.obj.chatId}`)}>
                <CircleUser size={50} strokeWidth={1} color="#ffffff" className={cn(
                    "w-[50px] h-[50px] flex-shrink-0",
                    'hover:scale-105 transition-transform duration-300 cursor-pointer'
                )} />
                <div className=''>
                    <div className='text-[18px] font-semibold text-white'>
                        {props.obj.interlocutor.firstName} {props.obj.interlocutor.lastName}
                    </div>
                    <div className='text-[15px] font-medium text-gray-500'>
                        {props.obj.lastMessage.content.length > 22
                            ? <span>{props.obj.lastMessage.content.slice(0, 21)}...</span>
                            : props.obj.lastMessage.content
                        }
                    </div>
                </div>
            </div>
        </>
    )
}