'use client'

import Image from "next/image";

import notFoundImage from '../../public/404.png'
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function notfound() {
    const router = useRouter()

    return (
        <>
            <Image src={notFoundImage} alt='' width={475} height={490} draggable='false'
                className="mx-auto mt-[20px]" />
            <div className='text-[46px] text-white text-center'>OOOps!</div>
            <div className='text-[46px] text-white text-center'>Page Not Found</div>
            <div className={cn(
                'w-[200px] h-[60px] mx-auto bg-bg rounded-2xl flex justify-center items-center',
                'hover:scale-105 transition-transform duration-300 cursor-pointer',
                'text-[20px] text-white mt-[50px]'
            )} onClick={() => router.push('/')}>Back to Chats</div>
        </>
    )
}