'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import DescriptionProfile from "@/components/Profile/DescriptionProfile";
import PhotoProfile from "@/components/Profile/PhotoProfile";
import StoriesGifts from "@/components/Profile/StoryAndGift/StoriesGifts";
import { TRout } from "@/types/router";
import HeaderProfile from "@/components/Profile/HeaderProfile";
import { useFetchProfile } from "@/hooks/useFetchProfile";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import useChats from "@/store/chats/chatsStore";
import useProfile from "@/store/profile/profileStore";

export default function page() {
    const pathName: TRout = usePathname() as TRout
    const router = useRouter()

    const searchParams = useSearchParams()
    const [createNewChat, setCreateNewChat] = useState<boolean>(false)

    const { objProfile, loading } = useFetchProfile(pathName.split('/')[2])

    const {
        userId
    } = useProfile()

    const {
        createChat
    } = useChats()

    const clickWriteMessage = async () => {
        if (!objProfile) return

        try {
            const result = await createChat(userId, objProfile.userId)

            console.log(result)

            if (result) {
                router.push(`/chats/${result.chat.chatId}`)
            }
        } catch (error) {
            console.error('Ошибка создания чата:', error)
        }
    }

    useEffect(() => {

        const createParam = searchParams.get('createNewChat')
        setCreateNewChat(createParam === 'true')

    }, [searchParams])

    if (loading) return <div className=''>Загрузка...</div>

    return (
        <>
            {objProfile &&
                <div className='h-[calc(100vh-200px)] overflow-y-auto' >
                    <HeaderProfile isPageUserProfile profile={objProfile} />
                    <PhotoProfile objProfile={objProfile} />
                    {createNewChat &&
                        <div className={cn(
                            'w-[600px] mx-auto text-center bg-bg rounded-2xl text-white text-[20px] mt-[20px] py-[10px]',
                            'hover:scale-101 transition-transform duration-300 cursor-pointer'
                        )} onClick={clickWriteMessage}>
                            Написать сообщенение
                        </div>
                    }
                    <DescriptionProfile objProfile={objProfile} />
                    <StoriesGifts obj={objProfile} />
                </div >
            }
        </>
    )
}