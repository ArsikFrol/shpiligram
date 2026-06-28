'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import DescriptionProfile from "@/components/Profile/DescriptionProfile";
import PhotoProfile from "@/components/Profile/PhotoProfile";
import StoriesGifts from "@/components/Profile/StoryAndGift/SortStoryAndGiftInUser";
import HeaderProfile from "@/components/Profile/HeaderProfile";
import { useFetchProfile } from "@/hooks/useFetchProfile";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import useChats from "@/store/chats/chatsStore";
import useProfile from "@/store/profile/profileStore";
import { TypeRoutes } from "@/hooks/useTypedRouter";
import HeaderProfileUser from "@/components/Profile/HeaderProfileUser";

export default function page() {
    const pathName: TypeRoutes = usePathname() as TypeRoutes
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
                    <HeaderProfileUser profile={objProfile} />
                    <PhotoProfile objProfile={objProfile} loading={loading} />
                    {createNewChat &&
                        <div className={cn(
                            'w-[600px] mx-auto text-center bg-bg rounded-2xl text-white text-[20px] mt-[20px] py-[10px]',
                            'hover:scale-101 transition-transform duration-300 cursor-pointer'
                        )} onClick={clickWriteMessage}>
                            Написать сообщенение
                        </div>
                    }
                    <DescriptionProfile objProfile={objProfile} loading={loading}/>
                    <StoriesGifts obj={objProfile} />
                </div >
            }
        </>
    )
}