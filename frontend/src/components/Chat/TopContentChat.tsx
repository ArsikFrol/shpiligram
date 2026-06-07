import { ArrowLeft, CircleUser, EllipsisVertical, Phone } from "lucide-react"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction, useEffect } from "react"

import { cn } from "@/lib/utils"
import { TElemChat } from "@/store/chats/types"
import useUsers from "@/store/users/usersStore"

type Props = {
    setShowChatById: Dispatch<SetStateAction<string>>,
    obj: TElemChat
}

export default function TopContentChat(props: Props) {
    const router = useRouter()

    const {
        listUsers
    } = useUsers()

    const clickToReturn = () => {
        props.setShowChatById('')
    }

    const clickUser = (useId: string) => {
        router.push(`/profile/${useId}`)
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
            <div className={cn(
                'flex gap-x-[10px] hover:scale-105 transition-transform duration-300 cursor-pointer'
            )} onClick={() => clickUser(props.obj.userId)}>
                <CircleUser size={40} strokeWidth={1} color="#ffffff" />
                <div className=''>
                    <div className='flex items-center gap-x-[5px]'>
                        <div className='text-[16px] font-semibold text-white'>
                            {listUsers.find(obj => obj.userId === props.obj.userId)?.name}
                        </div>
                        <div className='text-[16px] font-semibold text-white'>
                            {listUsers.find(obj => obj.userId === props.obj.userId)?.lastName}
                        </div>
                    </div>
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