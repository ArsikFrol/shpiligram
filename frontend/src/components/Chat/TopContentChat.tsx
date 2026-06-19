'use client'

import { ArrowLeft, CircleUser, Phone } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import useChats from "@/store/chats/chatsStore"
import { Tinterlocutor } from "@/store/chats/types"

import ThreeDots from "../UI/ThreeDots"
import { formatDateTime } from "@/lib/formatDate"

export default function TopContentChat() {
    const router = useRouter()

    const [showSettings, setShowSettings] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    const [objProfile, setObjProfile] = useState<Tinterlocutor>()

    const {
        showChatById, setShowChatById,
        listChats
    } = useChats()

    const clickToReturn = () => {
        setShowChatById('')
    }

    const clickUser = (useId: string) => {
        router.push(`/profile/${useId}`)
    }

    const clickThreeDots = () => {
        setShowSettings(!showSettings)
    }

    useEffect(() => {

        const interlocutor: Tinterlocutor = listChats.find(chat => chat.chatId === showChatById)!.interlocutor

        if (interlocutor) {
            setObjProfile({
                userId: interlocutor.userId,
                avatar: interlocutor.avatar,
                firstName: interlocutor.firstName,
                lastName: interlocutor.lastName,
                lastSeen: interlocutor.lastSeen
            })
        } else {
            setObjProfile({
                userId: 'null',
                avatar: 'null',
                firstName: 'null',
                lastName: 'null',
                lastSeen: new Date()
            })
            console.log('Чат не найден')
        }
        setLoading(false)

    }, [listChats, setLoading, setObjProfile, showChatById])

    if (loading) return <div className='h-[65px]'>Загрузка</div>
    if (!objProfile) return <div className='h-[65px]'>лдывоа</div>

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