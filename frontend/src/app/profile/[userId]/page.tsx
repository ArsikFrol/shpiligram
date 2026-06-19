'use client'

import { usePathname } from "next/navigation";

import DescriptionProfile from "@/components/Profile/DescriptionProfile";
import PhotoProfile from "@/components/Profile/PhotoProfile";
import StoriesGifts from "@/components/Profile/StoryAndGift/StoriesGifts";
import { TRout } from "@/types/router";
import HeaderProfile from "@/components/Profile/HeaderProfile";
import { useFetchProfile } from "@/hooks/useFetchProfile";

export default function page() {
    const pathName: TRout = usePathname() as TRout

    const { objProfile, loading } = useFetchProfile(pathName.split('/')[2])

    if (loading) return <div className=''>Загрузка...</div>

    return (
        <>
            {objProfile &&
                < div className='h-[calc(100vh-200px)] overflow-y-auto' >
                    <HeaderProfile isPageUserProfile profile={objProfile} />
                    <PhotoProfile objProfile={objProfile} />
                    <DescriptionProfile objProfile={objProfile} />
                    <StoriesGifts obj={objProfile} />
                </div >
            }
        </>
    )
}