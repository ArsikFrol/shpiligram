'use client'

import { ArrowLeft, BrushCleaning, CircleUser, Images, Trash, Volume2 } from "lucide-react"
import { JSX, useState } from "react"

import { cn } from "@/lib/utils"
import useChats from "@/store/chats/chatsStore"

import ThreeDots from "../../UI/ThreeDots"
import { formatDateTime } from "@/lib/formatDate"
import { useFetchProfile } from "@/hooks/useFetchProfile"
import { useTypedRouter } from "@/hooks/useTypedRouter"
import SkeletonTopContentChat from "../../Skeletons/SkeletonTopContentChat"
import { TChat } from "@/store/chats/types"
import EmptyTopContantChat from "./EmptyTopContantChat"
import SearchUI from "../../UI/SearchUI"
import WarningText from "../../UI/WarningText"

type Props = {
    loadingChat: boolean,
    objChat: TChat
}

type TSetting = {
    id: number,
    text: string,
    elem: JSX.Element,
    onClick: () => void,
}


export default function TopContentChat(props: Props) {
    const router = useTypedRouter()

    const [showSettings, setShowSettings] = useState<boolean>(false)
    const [deleteChatClick, setDeleteChatClick] = useState<boolean>(false)

    const { objProfile } = useFetchProfile(props.objChat.interlocutorId || '')

    const listSettings: TSetting[] = [
        { id: 1, text: 'Mute', onClick: () => { }, elem: <Volume2 color="white" size={25} /> },
        { id: 2, text: 'Change wallpaper', onClick: () => { }, elem: <Images color="white" size={25} /> },
        { id: 3, text: 'Clear history', onClick: () => { }, elem: <BrushCleaning color="white" size={25} /> },
        { id: 4, text: 'Delet chat', onClick: () => setDeleteChatClick(true), elem: <Trash color="white" size={25} /> },
    ]


    const {
        deleteChat
    } = useChats()

    const clickToReturn = () => {
        router.push('/chats')
    }

    const clickUser = (useId: string) => {
        router.push(`/profile/${useId}`)
    }

    const clickThreeDots = () => {
        setShowSettings(!showSettings)
    }

    const closeThreeDots = () => {
        setShowSettings(false)
    }

    const deleteChatFunc = () => {
        deleteChat(props.objChat.chatId)
        router.push('/chats')
    }

    if (props.loadingChat) return <SkeletonTopContentChat />
    if (!objProfile) return <EmptyTopContantChat />;

    return (
        <>
            <div className={cn(
                'mx-[10px] bg-container my-[10px] py-[10px]',
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
                    <SearchUI width={200} placeholder="Message" />
                    <div className='w-[35px] h-[35px] flex justify-center items-center group cursor-pointer'>
                        <ThreeDots onClick={clickThreeDots} onClose={closeThreeDots} classForElem={cn(
                            'text-[18px] text-white'
                        )} listSettings={listSettings}
                            classForContainer={cn(
                                'bg-bg rounded-2xl w-[220px] gap-y-[15px] '
                            )} />
                    </div>
                </div>
            </div>
            {deleteChatClick &&
                <WarningText functionNo={() => setDeleteChatClick(false)} functionYes={deleteChatFunc} textWarning={'Уверены что хотите удалить чат?'} />
            }
        </>
    )
}