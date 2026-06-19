'use client'

import { useEffect } from "react";

import Stories from "./StoryAndGift/Stories";
import SettingsProfile from "./SettingsProfile";
import useProfile from "@/store/profile/profileStore";
import PhotoProfile from "./PhotoProfile";
import DescriptionProfile from "./DescriptionProfile";
import HeaderProfile from "./HeaderProfile";
import { useFetchProfile } from "@/hooks/useFetchProfile";

export default function Profile() {

    const {
        setObjProfile,
        userId
    } = useProfile()

    const { objProfile, loading } = useFetchProfile(userId)

    useEffect(() => {
        if (objProfile) setObjProfile(objProfile)
    }, [objProfile, setObjProfile])

    if (loading) return <div className=''>Загрузка</div>
    if (!objProfile) return <div className=''>Нет данных профиля</div>

    return (
        <div className='h-[calc(100vh-200px)] overflow-y-auto'>
            <HeaderProfile isPageUserProfile={false} profile={objProfile} />
            <div className='pt-[20px]'>
                <div className='h-[calc(100vh-260px)] overflow-y-auto scrollbar'>
                    <PhotoProfile objProfile={objProfile} />
                    <SettingsProfile />
                    <DescriptionProfile objProfile={objProfile} />
                    <Stories />
                </div>
            </div>
        </div>
    )
}