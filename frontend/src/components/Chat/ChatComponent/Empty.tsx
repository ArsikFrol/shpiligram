'use client'

import { useTypedRouter } from "@/hooks/useTypedRouter"
import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"
import EmptyTopContantChat from "../TopContantChat/EmptyTopContantChat"

export default function Empty() {
    const router = useTypedRouter()

    const {
        showRowStories
    } = useProfile()

    return (
        <div className={cn(
            'w-full bg-bg mt-[10px] rounded-2xl h-[calc(100vh-225px)]',
            showRowStories && 'h-[calc(100vh-310px)]'
        )}>
            <EmptyTopContantChat />
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