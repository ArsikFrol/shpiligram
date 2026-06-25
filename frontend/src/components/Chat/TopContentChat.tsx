'use client'

import { ArrowLeft, CircleUser, Phone } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

import { cn } from "@/lib/utils"
import useChats from "@/store/chats/chatsStore"

import ThreeDots from "../UI/ThreeDots"
import { formatDateTime } from "@/lib/formatDate"
import { useFetchProfile } from "@/hooks/useFetchProfile"
import { useFetchChat } from "@/hooks/useFetchChat"
import { useEscape } from "@/hooks/useEscape"
import SkeletonAddChats from "../Skeletons/SkeletonAddChats"
import LoadingTopContent from "./LoadingTopContent"

export default function TopContentChat() {
    const router = useRouter()
    const pathName = usePathname()

    const [showSettings, setShowSettings] = useState<boolean>(false)

    const { objChat } = useFetchChat(pathName.split('/')[2])

    const { objProfile, loading } = useFetchProfile(objChat?.interlocutorId || '')

    const {
        deleteFromStoreAllChats,
        setLoadingChats
    } = useChats()

    const clickToReturn = () => {
        deleteFromStoreAllChats()
        setLoadingChats(true)

        router.push('/chats')
    }

    const clickUser = (useId: string) => {
        router.push(`/profile/${useId}`)
    }

    const clickThreeDots = () => {
        setShowSettings(!showSettings)
    }

    useEscape(() => {
        router.push('/chats')

        deleteFromStoreAllChats()
        setLoadingChats(true)
    })

    if (!objChat) return;
    if (!objProfile) return <LoadingTopContent />

    return (
        <div className={cn(
            'w-[1050px] bg-container my-[10px] mx-auto py-[10px]',
            'flex justify-between items-center px-[40px] rounded-2xl'
        )}>
            <div className='w-[35px] h-[35px] flex justify-center items-center group  cursor-pointer'
                onClick={clickToReturn}>
                <ArrowLeft color="#ffffff" size={20}
                    className="group-hover:scale-115 transition-transform duration-300" />
            </div>
            <div className={cn(
                'flex gap-x-[10px] hover:scale-105 transition-transform duration-300 cursor-pointer'
            )} onClick={() => clickUser(objProfile.userId)}>
                <CircleUser size={40} strokeWidth={1} color="#ffffff" />
                <div className=''>
                    <div className='flex items-center gap-x-[5px]'>
                        <div className='text-[16px] font-semibold text-white'>
                            {objProfile.firstName}
                        </div>
                        <div className='text-[16px] font-semibold text-white'>
                            {objProfile.lastName}
                        </div>
                    </div>
                    <div className='text-[14px] font-medium text-gray-500'>
                        {formatDateTime(new Date(objProfile.lastSeen))}
                    </div>
                </div>
            </div>
            <div className='flex gap-x-[20px] items-center'>
                <div className='w-[35px] h-[35px] flex justify-center items-center group cursor-pointer'>
                    <Phone color="#ffffff" size={25}
                        className="group-hover:scale-115 transition-transform duration-300" />
                </div>
                <div className='w-[35px] h-[35px] flex justify-center items-center group cursor-pointer'>
                    <ThreeDots onClick={clickThreeDots} />
                </div>
            </div>
        </div>
    )
}