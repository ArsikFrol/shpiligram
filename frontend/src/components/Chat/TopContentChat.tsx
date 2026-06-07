import { TElemChat } from "@/app/page"
import { cn } from "@/lib/utils"
import { ArrowLeft, CircleUser, EllipsisVertical, Phone } from "lucide-react"
import { Dispatch, SetStateAction, useEffect } from "react"

type Props = {
    setShowChatById: Dispatch<SetStateAction<string>>,
    obj: TElemChat
}

export default function TopContentChat(props: Props) {

    const clickToReturn = () => {
        props.setShowChatById('')
    }

    useEffect(() => {

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') props.setShowChatById('')
        }

        window.addEventListener('keydown', handleEsc)
        return () => {
            window.removeEventListener('keydown', handleEsc)
        }

    }, [])

    return (
        <div className={cn(
            'w-[1050px] bg-container my-[10px] mx-auto py-[10px]',
            'flex justify-between items-center px-[40px] rounded-2xl'
        )}>
            <div className='w-[35px] h-[35px] flex justify-center items-center group  cursor-pointer'
                onClick={clickToReturn}>
                <ArrowLeft color="#ffffff" size={20}
                    className="group-hover:scale-115 transition-transform duration-300" />
            </div>
            <div className='flex gap-x-[10px]'>
                <CircleUser size={40} strokeWidth={1} color="#ffffff" />
                <div className=''>
                    <div className='text-[16px] font-semibold text-white'>{props.obj.nameProfil}</div>
                    <div className='text-[14px] font-medium text-gray-500'>{props.obj.recentlyOnline}</div>
                </div>
            </div>
            <div className='flex gap-x-[20px] items-center'>
                <div className='w-[35px] h-[35px] flex justify-center items-center group cursor-pointer'>
                    <Phone color="#ffffff" size={25}
                        className="group-hover:scale-115 transition-transform duration-300" />
                </div>
                <div className='w-[35px] h-[35px] flex justify-center items-center group cursor-pointer'>
                    <EllipsisVertical color="#ffffff" size={25}
                        className="group-hover:scale-115 transition-transform duration-300" />
                </div>

            </div>
        </div>
    )
}