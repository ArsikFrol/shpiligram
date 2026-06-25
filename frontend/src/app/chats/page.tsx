'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header/Header";
import Folders from "../../components/Folders";
import useChats from "@/store/chats/chatsStore";
import ListChats from "@/components/Chat/ListChats";
import useProfile from "@/store/profile/profileStore";
import SkeletonForListChats from "@/components/Skeletons/SkeletonForListChats";
import SkeletonFolder from "@/components/Skeletons/SkeletonFolder";
import usePossibleChats from "@/store/possibleChats/possibleChatsStore";

export default function Home() {
    const router = useRouter()

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
            <Header />
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
                    ? <div className='w-full flex flex-col gap-y-[20px] h-[calc(100vh-320px)] overflow-y-auto'>
                        {[...Array(10)].map((_, index) => <SkeletonForListChats key={index} />)}
                    </div>
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
                            )} onClick={() => router.push('/addFriend')}>Нашите кому-нибудь</div>
                        </div>
                }
            </div>
            <div className={cn(
                'absolute bottom-[20px] left-1/2 -translate-x-1/2 z-0',
            )}
                style={{ zIndex: 0 }}>
                <Navigation activeElem={1} />
            </div>
        </>
    )
}
