'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import DescriptionProfile from "@/components/Profile/DescriptionProfile";
import PhotoProfile from "@/components/Profile/PhotoProfile";
import SortStoryAndGiftInUser from "@/components/Profile/StoryAndGift/SortStoryAndGiftInUser";
import { useFetchProfile } from "@/hooks/useFetchProfile";
import { cn } from "@/lib/utils";
import useChats from "@/store/chats/chatsStore";
import useProfile from "@/store/profile/profileStore";
import { TypeRoutes } from "@/hooks/useTypedRouter";
import NotFound from "@/app/not-found";
import HeaderProfileUser from "@/components/Headers/HeaderProfileUser";
import SkeletonProfilePageUser from "@/components/Skeletons/SkeletonProfilePageUser";

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

    if (loading) return <SkeletonProfilePageUser />
    if (!objProfile) return <NotFound />

    return (
        <div className='h-[calc(100vh-200px)] overflow-y-hidden' >
            <HeaderProfileUser profile={objProfile} />
            <div className='h-[calc(100vh-250px)] overflow-y-auto scrollbar'>
                <PhotoProfile objProfile={objProfile} loading={loading} />
                {createNewChat &&
                    <div className={cn(
                        'mx-auto text-center bg-bg rounded-2xl text-white text-[20px] mt-[20px] py-[10px]',
                        'hover:scale-101 transition-transform duration-300 cursor-pointer',
                        'min-lg:w-[800px] max-lg:mx-[30px]'
                    )} onClick={clickWriteMessage}>
                        Написать сообщенение
                    </div>
                }
                <DescriptionProfile objProfile={objProfile} loading={loading} />
                <SortStoryAndGiftInUser obj={objProfile} />
            </div>
        </div >
    )
}