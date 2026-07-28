import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import NotFound from "@/app/not-found"
import SkeletonProfilePageUser from "../Skeletons/SkeletonProfilePageUser"
import HeaderProfileUser from "../Headers/HeaderProfileUser"
import PhotoProfile from "../Profile/PhotoProfile"
import Description from "../Profile/Description/Description"
import { TypeRoutes } from "@/hooks/useTypedRouter"
import { useFetchProfile } from "@/hooks/useFetchProfile"
import WriteMessage from "./WriteMessage"
import Tabs from "../Profile/StoryAndGift/Tabs"

export default function ProfileUser() {
    const pathName: TypeRoutes = usePathname() as TypeRoutes
    const searchParams = useSearchParams()

    const [createNewChat, setCreateNewChat] = useState<boolean>(false)

    const { objProfile, loadingProfileHookFetch, errorProfileHookFetch } = useFetchProfile(pathName.split('/')[2])

    useEffect(() => {

        const createParam = searchParams.get('createNewChat')
        setCreateNewChat(createParam === 'true')

    }, [searchParams])

    if (loadingProfileHookFetch) return <SkeletonProfilePageUser />
    if (!objProfile) return <NotFound />

    return (
        <>
            <HeaderProfileUser profile={objProfile} />
            <div className='h-[calc(100vh-250px)] overflow-y-auto'>
                <PhotoProfile objProfile={objProfile} loading={loadingProfileHookFetch}
                    error={Boolean(errorProfileHookFetch)} />
                {createNewChat &&
                    <WriteMessage objProfile={objProfile}/>
                }
                <Description objProfile={objProfile} loading={loadingProfileHookFetch}
                    error={Boolean(errorProfileHookFetch)} />
                <Tabs userId={objProfile.userId} />
            </div>
        </>
    )
}