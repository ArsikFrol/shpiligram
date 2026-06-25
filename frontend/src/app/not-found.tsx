'use client'

import Image from "next/image";

import notFoundImage from '../../public/404.png'
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NotFound() {
    const router = useRouter()

    return (
        <div className="fixed w-full h-screen top-0 left-0 z-10 bg-bg">
            <div className={cn(
                'bg-container rounded-2xl w-[1200px] h-[calc(100vh-100px)] pt-[50px]',
                'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            )}>
                <Image src={notFoundImage} alt='' width={475} height={490} draggable='false'
                    className="mx-auto" />
                <div className='text-[46px] text-white text-center'>OOOps!</div>
                <div className='text-[46px] text-white text-center'>Page Not Found</div>
                <div className={cn(
                    'w-[200px] h-[60px] mx-auto bg-bg rounded-2xl flex justify-center items-center',
                    'hover:scale-105 transition-transform duration-300 cursor-pointer',
                    'text-[20px] text-white mt-[50px]'
                )} onClick={() => router.push('/chats')}>Back to Chats</div>
            </div>
        </div>
    )
}