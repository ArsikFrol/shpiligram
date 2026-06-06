import { TElemChat } from "@/app/page"
import { cn } from "@/lib/utils"
import { CircleUser } from "lucide-react"
import { Dispatch, SetStateAction } from "react"

type Props = {
    obj: TElemChat,
    setShowChatId: Dispatch<SetStateAction<string>>,
    showChatId: string
}

export default function ChatElem(props: Props) {

    const clickChat = () => {
        props.setShowChatId(props.obj.id)
    }

    return (
        <div className={cn(
            'flex justify-between',
            'hover:scale-101 transition-transform duration-300 cursor-pointer'
        )} onClick={clickChat}>
            {props.showChatId
                ? <CircleUser size={50} strokeWidth={1} color="#ffffff" />
                : <>
                    <div className='flex items-center gap-x-[10px]'>
                        <CircleUser size={50} strokeWidth={1} color="#ffffff" />
                        <div className=''>
                            <div className='text-[18px] font-semibold text-white'>{props.obj.nameProfil}</div>
                            <div className='text-[15px] font-medium text-gray-500'>{props.obj.lastMessage}</div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-y-[5px]'>
                        <div className='text-[14px] font-medium text-gray-500'>{props.obj.timeSend}</div>
                        <div className={cn(
                            'text-[14px] font-semibold text-white w-[25px] h-[25px] bg-gray-700',
                            'flex items-center justify-center rounded-4xl',
                            !props.obj.countUnreadMessages && 'hidden'
                        )}>{props.obj.countUnreadMessages}</div>
                    </div>
                </>
            }
        </div>
    )
}