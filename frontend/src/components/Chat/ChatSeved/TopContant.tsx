'use client'

import ThreeDots from "@/components/UI/ThreeDots";
import { useTypedRouter } from "@/hooks/useTypedRouter";
import { cn } from "@/lib/utils";
import { ArrowLeft, BookMarked } from "lucide-react";

export default function TopContant() {
    const router = useTypedRouter()

    const clickBack = () => {
        router.push('/chats')
    }

    return (
        <div className={cn(
            'mx-[10px] bg-container my-[10px] py-[10px]',
            'flex justify-between items-center px-[40px] rounded-2xl'
        )}>
            <div className='w-[35px] h-[35px] flex justify-center items-center group  cursor-pointer'
                onClick={clickBack}>
                <ArrowLeft color="#ffffff" size={20}
                    className="group-hover:scale-115 transition-transform duration-300" />
            </div>
            <div className="flex items-center gap-x-[10px]">
                <div className="rounded-[999px] p-[10px] bg-blue-500">
                    <BookMarked size={25} color="white" />
                </div>
                <div className="text-blue-500 text-[20px]">
                    Избранное
                </div>
            </div>
            <div className='w-[35px] h-[35px] flex justify-center items-center group cursor-pointer'>
                <ThreeDots onClick={() => { }} onClose={() => { }} classForElem="" listSettings={[]}
                    classForContainer="" />
            </div>
        </div>
    )
}