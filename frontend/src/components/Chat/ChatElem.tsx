import { TElemChat } from "@/app/page"
import { cn } from "@/lib/utils"
import { CircleUser, Cross, Music, Pin, PinOff, Trash, Volume2, X } from "lucide-react"
import { Dispatch, SetStateAction, useState } from "react"

type Props = {
    obj: TElemChat,
    setShowChatId: Dispatch<SetStateAction<string>>,
    showChatId: string
}

export default function ChatElem(props: Props) {

    const [showBtn, setShowBtn] = useState<boolean>(false)

    const clickChat = () => {
        props.setShowChatId(props.obj.id)
        setShowBtn(false)
    }

    const clickPKM = (e: any) => {
        e.preventDefault()
        setShowBtn(true)
    }

    const clickPin = () => {

    }

    const clickX = () => {
        setShowBtn(false)
    }

    const clickPinOff = () => {

    }

    return (
        <div className={cn(
            'flex items-center justify-between',
            'hover:scale-101 transition-transform duration-300 cursor-pointer'
        )} onClick={clickChat} onContextMenu={(e) => clickPKM(e)}>
            {props.showChatId
                ? <CircleUser size={51} strokeWidth={1} color="#ffffff" />
                : <>
                    <div className='flex items-center gap-x-[10px]'>
                        <CircleUser size={51} strokeWidth={1} color="#ffffff" />
                        <div className=''>
                            <div className='text-[18px] font-semibold text-white'>{props.obj.nameProfil}</div>
                            <div className='text-[15px] font-medium text-gray-500'>{props.obj.lastMessage}</div>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-[20px]'>
                        {showBtn ?
                            <div className='flex items-center gap-x-[20px]'>
                                <div className={cn(
                                    'w-[45px] h-[45px] rounded-2xl flex justify-center items-center',
                                    'bg-red-600'
                                )}>
                                    <Trash color="white" />
                                </div>
                                <div className={cn(
                                    'w-[45px] h-[45px] rounded-2xl flex justify-center items-center',
                                    'bg-blue-400'
                                )} onClick={props.obj.pinned ? clickPinOff : clickPin}>
                                    {props.obj.pinned
                                        ? <PinOff />
                                        : <Pin />
                                    }
                                </div>
                                <div className={cn(
                                    'w-[45px] h-[45px] rounded-2xl flex justify-center items-center',
                                    'bg-green-500'
                                )}>
                                    <Volume2 color="white" />  {/* <VolumeOff /> */}
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
                            </div> :
                            <div className='flex items-center gap-x-[10px]'>
                                <div className='flex flex-col items-center gap-y-[5px]'>
                                    <div className='text-[14px] font-medium text-gray-500'>{props.obj.timeSend}</div>
                                    <div className={cn(
                                        'text-[14px] font-semibold text-white w-[25px] h-[25px] bg-gray-700',
                                        'flex items-center justify-center rounded-4xl',
                                        !props.obj.countUnreadMessages && 'hidden'
                                    )}>{props.obj.countUnreadMessages}</div>
                                </div>
                                {props.obj.pinned &&
                                    < div title='Открепить' className={cn(
                                        'w-[45px] h-[45px] rounded-2xl flex justify-center items-center',
                                        'bg-blue-400'
                                    )} onClick={clickPinOff}>
                                        <PinOff />
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </>
            }
        </div>
    )
}