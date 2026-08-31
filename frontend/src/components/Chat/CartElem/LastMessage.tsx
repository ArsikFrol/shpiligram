import { formatDateTime } from "@/lib/formatDate"
import { cn } from "@/lib/utils"
import { TChat } from "@/store/chats/types"
import { PinOff } from "lucide-react"

type Props = {
    objChat: TChat,

    clickPinOff: () => void,
}

export default function LastMessage(props: Props) {
    return (
        <div className='flex items-center gap-x-[10px]'>
            <div className='flex flex-col gap-y-[5px]'>
                <div className='text-[14px] font-medium text-gray-500'>
                    {formatDateTime(new Date(props.objChat.lastMessageAt))}
                </div>
                <div className={cn(
                    'text-[14px] font-semibold text-white w-[25px] h-[25px] bg-gray-700',
                    'flex items-center justify-center rounded-4xl ml-auto'
                )}>1</div>
            </div>
            {props.objChat.pinned &&
                <div title='Открепить' className={cn(
                    'w-[45px] h-[45px] rounded-2xl flex justify-center items-center',
                    'bg-blue-400 ml-[10px]'
                )} onClick={props.clickPinOff}>
                    <PinOff />
                </div>
            }
        </div>
    )
}