'use client'

import { ArrowLeft, RotateCcw } from "lucide-react";

import { cn } from "@/lib/utils";
import { useTypedRouter } from "@/hooks/useTypedRouter";

export default function ErrorSettings() { 
    const router = useTypedRouter()

    const clickBack = () => { 
        router.push('/profile')
    }

    const clickReload = () => {
        window.location.reload()
    }

    return(
        <div className={cn(
            "w-full h-full bg-bg rounded-2xl mx-auto text-[20px] text-white text-center",
            'flex flex-col p-[20px]',
            'min-lg:w-[800px] max-lg:mx-[30px]'
        )}>
            <div className="group flex items-center gap-x-[10px] cursor-pointer"
                onClick={clickBack}>
                <ArrowLeft color="white" size={25} className="group-hover:translate-x-[-5px] duration-300" />
                <div className="text-white text-[18px]">Перейти в профиль</div>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <span>Ошибка при загрузке настроек, перезагрузите страницу</span>
                <div className={cn(
                    "flex items-center gap-x-[10px] bg-[#20364D] text-white p-[10px] rounded-2xl w-[200px] mx-auto mt-[20px]",
                    'group hover:scale-101 transition-transform duration-300 cursor-pointer'
                )} onClick={clickReload}>
                    <RotateCcw color="white" size={25} className={cn(
                        "group-hover:rotate-[-360deg] transition-transform duration-1000"
                    )} />
                    <div className="">Перезагрузить</div>
                </div>
            </div>
        </div>
    )
}