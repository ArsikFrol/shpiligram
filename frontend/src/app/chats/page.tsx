'use client'

import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"

import { cn } from "@/lib/utils"
import Navigation from "@/components/Navigation"
import Folders from "../../components/Folders/Folders"
import useChats from "@/store/chats/chatsStore"
import ListChats from "@/components/Chat/ListChats"
import useProfile from "@/store/profile/profileStore"
import SkeletonFolder from "@/components/Skeletons/SkeletonFolder"
import { useTypedRouter } from "@/hooks/useTypedRouter"

export default function Home() {
    const router = useTypedRouter()

    const [showBtnById, setShowBtnById] = useState<string>('')

    const {
        userId
    } = useProfile()

    const {
        listChats, fetchListChats,
        loading
    } = useChats()

    useEffect(() => {

        fetchListChats(userId)

    }, [userId])

    return (
        <>
            {loading
                ? [...Array(1)].map((_, index) => {
                    return (
                        <div className={cn(
                            'my-[20px]'
                        )} key={index}>
                            <SkeletonFolder />
                        </div>
                    )
                })
                : <Folders setShowBtnById={setShowBtnById} />
            }
            <div className='w-full'>
                {loading
                    ? <ClipLoader color="#3B82F6" size={50} className={cn(
                        'w-[50px] h-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                    )} cssOverride={{
                        borderWidth: '2px'
                    }} />
                    : listChats.length
                        ? <ListChats setShowBtnById={setShowBtnById} showBtnById={showBtnById} />
                        : <div className={cn(
                            'text-center text-[25px] text-white h-[calc(100vh-320px)]',
                            'flex flex-col items-center justify-center'
                        )}>
                            <div className=''>Список чатов пуст :(</div>
                            <div className={cn(
                                'hover:scale-101 transition-transform duration-300 cursor-pointer',
                                'text-blue-400'
                            )} onClick={() => router.push('/addChat')}>Нашите кому-нибудь</div>
                        </div>
                }
            </div>
            <div className={cn(
                'absolute bottom-[20px] left-1/2 -translate-x-1/2 z-0',
            )} style={{ zIndex: 0 }}>
                <Navigation activeElem={1} />
            </div>
        </>
    )
}
