'use client'

import { useTypedRouter } from "@/hooks/useTypedRouter";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

export default function ReturnToSettings() {
    const router = useTypedRouter()
    
    return(
        <div className="flex items-center gap-x-[20px]">
                <ArrowLeft color='white' size={25} className={cn(
                    "group-hover:scale-105 group-hover:translate-x-[-5px]",
                    'transition-transform duration-300'
                )} onClick={() => router.push('/settings')}/>
                <div className='text-[25px] font-semibold text-white'>Settings</div>
            </div>
    )
}