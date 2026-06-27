'use client'

import { useTypedRouter } from "@/hooks/useTypedRouter"

export default function page() {
    const router = useTypedRouter()
    
    return(
        <div className="absolute top-0 left-0 w-full h-screen bg-bg">
            <div className="m-[20px] bg-container rounded-2xl h-[calc(100vh-40px)] flex items-center justify-center flex-col">
                <div className="text-white text-[25px]">Добавить что-нибудь сюда</div>
                <div className="text-[23px] text-blue-400" 
                    onClick={() => router.push('/chats')}>К чатам</div>
            </div>
        </div>
    )
}