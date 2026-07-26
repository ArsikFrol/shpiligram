'use client'

import { useTypedRouter } from "@/hooks/useTypedRouter"
import { cn } from "@/lib/utils"

export default function Empty() {
    const router = useTypedRouter()

    return (
        <div className={cn(
            'text-center text-[25px] text-white h-[calc(100vh-320px)]',
            'flex flex-col items-center justify-center'
        )}>
            <div className=''>Список чатов пуст :(</div>
            <div className={cn(
                'hover:scale-101 transition-transform duration-300 cursor-pointer',
                'text-blue-400'
            )} onClick={() => router.push('/addChat')}>Нашите кому-нибудь</div>
        </div>
    )
}