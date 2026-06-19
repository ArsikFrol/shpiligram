import { TGetChat } from "@/store/chats/types"
import { CircleUser, PinOff } from "lucide-react"
import Btn from "./Btn"
import { formatDateTime } from "@/lib/formatDate"
import { cn } from "@/lib/utils"

type Props = {
    objChat: TGetChat,

    showBtnById: string,
    setShowBtnById: (value: string) => void
}

export default function Interlocutor(props: Props) {

    const clickPinOff = () => {

    }

    return (
        <>
            <div className='flex items-center gap-x-[10px]'>
                <CircleUser size={51} strokeWidth={1} color="#ffffff" />
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
            <div className='flex items-center gap-x-[20px]'>
                {props.showBtnById === props.objChat.chatId
                    ? <Btn objChat={props.objChat} setShowBtnById={props.setShowBtnById}
                        clickPinOff={clickPinOff} />
                    : <div className='flex items-center gap-x-[10px]'>
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
                            < div title='Открепить' className={cn(
                                'w-[45px] h-[45px] rounded-2xl flex justify-center items-center',
                                'bg-blue-400 ml-[10px]'
                            )} onClick={clickPinOff}>
                                <PinOff />
                            </div>
                        }
                    </div>
                }
            </div>
        </>
    )
}