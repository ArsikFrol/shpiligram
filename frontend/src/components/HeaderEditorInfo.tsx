'use client'

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeaderEditorInfo() {
    const router = useRouter()

    return (
        <div className="flex items-center gap-x-[15px]">
            <ArrowLeft color="white" size={25} onClick={() => router.push('/profile')}
                className="hover:scale-105 hover:translate-x-[-5px] transition-transform duration-300 cursor-pointer" />
            <div className='text-[25px] font-semibold text-white'>Profile</div>
        </div>
    )
}