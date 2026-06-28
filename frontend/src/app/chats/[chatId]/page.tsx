'use client'

import { useEffect } from "react";
import ContentLoader from "react-content-loader";

import Chat from "@/components/Chat/Chat";
import { cn } from "@/lib/utils";
import useChats from "@/store/chats/chatsStore";
import useProfile from "@/store/profile/profileStore";
import SkeletonForLogoChats from "@/components/Skeletons/SkeletonForLogoChats";
import ElemChatForChatIdPage from "@/components/Chat/ElemChatForChatIdPage";

export default function page() {

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
                'grid grid-cols-[50px_auto] gap-x-[20px]',
                'min-xl:grid-cols-[250px_auto]'
            )}>
                <div className={cn(
                    'flex flex-col gap-y-[30px] h-[calc(100vh-240px)] overflow-y-auto mt-[20px]',
                    showRowStories && 'h-[calc(100vh-320px)]'
                )}>
                    {loading
                        ? [...Array(10)].map((_, index) => {
                            return (
                                <div className='' key={index}>
                                    <div className='min-xl:hidden'>
                                        <SkeletonForLogoChats key={index} />
                                    </div>
                                    <div className='max-xl:hidden'>
                                        <ContentLoader speed={2} width={300} height={50} viewBox="0 0 300 50"
                                            backgroundColor="#3f3f46" foregroundColor="#52525b" >
                                            <circle cx="25" cy="25" r="25" />
                                            <rect x="55" y="0" rx="6" ry="6" width="140" height="20" />
                                            <rect x="55" y="25" rx="6" ry="6" width="150" height="20" />
                                        </ContentLoader>
                                    </div>
                                </div>
                            )
                        })
                        : listChats.map((obj, index) => {
                            return (
                                <ElemChatForChatIdPage obj={obj} key={index} />
                            )
                        })
                    }
                </div>
                <Chat />
            </div>
        </>)
}