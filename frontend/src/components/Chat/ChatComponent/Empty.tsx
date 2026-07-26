'use client'

import { ArrowLeft, CircleUser, EllipsisVertical, Phone } from "lucide-react"

import { useTypedRouter } from "@/hooks/useTypedRouter"
import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"

type Props = {

}

export default function Empty(props: Props) {
    const router = useTypedRouter()

    const {
        showRowStories
    } = useProfile()

    return (
        <div className={cn(
            'w-full bg-bg mt-[10px] rounded-2xl h-[calc(100vh-225px)]',
            showRowStories && 'h-[calc(100vh-310px)]'
        )}>
            <div className={cn(
                'mx-[10px] bg-container my-[10px] py-[10px]',
                'flex justify-between items-center px-[40px] rounded-2xl'
            )}>
                <div className='w-[35px] h-[35px] flex justify-center items-center group  cursor-pointer'>
                    <ArrowLeft color="#ffffff" size={20}
                        className="group-hover:scale-115 transition-transform duration-300" />
                </div>
                <div className={cn(
                    'flex gap-x-[10px] hover:scale-105 transition-transform duration-300 cursor-pointer'
                )}>
                    <CircleUser size={40} strokeWidth={1} color="#ffffff" />
                    <div className=''>
                        <div className='flex items-center gap-x-[5px]'>
                            <div className='text-[16px] font-semibold text-white'>
                                Пользователь
                            </div>
                            <div className='text-[16px] font-semibold text-white'>
                                не найден
                            </div>
                        </div>
                        <div className='text-[14px] font-medium text-gray-500'>
                            Неизвестно
                        </div>
                    </div>
                </div>
                <div className='flex gap-x-[20px] items-center'>
                    <div className='w-[35px] h-[35px] flex justify-center items-center group cursor-pointer'>
                        <Phone color="#ffffff" size={25}
                            className="group-hover:scale-115 transition-transform duration-300" />
                    </div>
                    <div className='w-[35px] h-[35px] flex justify-center items-center group cursor-pointer'>
                        <EllipsisVertical size={25} color="white" />
                    </div>
                </div>
            </div>
            <div className={cn(
                'h-[calc(100vh-380px)] px-[10px] flex flex-col justify-center items-center',
                'text-[30px] text-white text-center',
                showRowStories && 'h-[calc(100vh-485px)]'
            )}>
                Произошло ошибка, не смогли найти пользователя
                <div className='text-blue-400 text-[20px]' onClick={() => router.push('/chats')}>Перейти к списку чатов</div>
            </div>
        </div>
    )
}