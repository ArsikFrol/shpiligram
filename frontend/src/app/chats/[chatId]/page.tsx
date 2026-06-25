'use client'

import { useEffect } from "react";
import { CircleUser } from "lucide-react";
import { useRouter } from "next/navigation";

import Chat from "@/components/Chat/Chat";
import { cn } from "@/lib/utils";
import useChats from "@/store/chats/chatsStore";
import useProfile from "@/store/profile/profileStore";
import SkeletonForLogoChats from "@/components/Skeletons/SkeletonForLogoChats";

export default function page() {
    const router = useRouter()

    const {
        loading,
        listChats,
        fetchListChats
    } = useChats()

    const {
        userId,
        showRowStories
    } = useProfile()

    useEffect(() => {
        fetchListChats(userId)
    }, [])

    return (
        <>
            <div className={cn(
                'grid grid-cols-[50px_auto] gap-x-[20px]'
            )}>
                <div className={cn(
                    'flex flex-col items-center gap-y-[30px] w-[60px] h-[calc(100vh-240px)] overflow-y-auto mt-[20px]',
                    showRowStories && 'h-[calc(100vh-320px)]'
                )}>
                    {loading
                        ? [...Array(10)].map((_, index) => <SkeletonForLogoChats key={index} />)
                        : listChats.map((obj, index) => {
                            return (
                                <CircleUser key={index} size={50} strokeWidth={1} color="#ffffff"
                                    onClick={() => router.push(`/chats/${obj.chatId}`)}
                                    className={cn(
                                        "w-[50px] h-[50px] flex-shrink-0",
                                        'hover:scale-105 transition-transform duration-300 cursor-pointer'
                                    )} />
                            )
                        })
                    }
                </div>
                <Chat />
            </div>
        </>)
}