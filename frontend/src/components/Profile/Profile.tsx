'use client'

import { useEffect } from "react";

import Stories from "./StoryAndGift/Stories";
import SettingsProfile from "./SettingsProfile";
import useProfile from "@/store/profile/profileStore";
import PhotoProfile from "./PhotoProfile";
import DescriptionProfile from "./DescriptionProfile";
import HeaderProfile from "./HeaderProfile";

export default function Profile() {

    const {
        userId,
        fetchProfile,
        objProfile,
        loading,
    } = useProfile()

    useEffect(() => {
        fetchProfile(userId)
    }, [])

    if (!objProfile) return <div className=''>Нет данных профиля</div>

    return (
        <div className='h-[calc(100vh-190px)] overflow-y-auto'>
            <HeaderProfile isPageUserProfile={false} profile={objProfile} />
            <div className='pt-[50px]'>
                <div className='h-[calc(100vh-240px)] overflow-y-auto scrollbar'>
                    <PhotoProfile objProfile={objProfile} loading={loading} />
                    <SettingsProfile />
                    <DescriptionProfile objProfile={objProfile} loading={loading} />
                    <Stories />
                </div>
            </div>
        </div>
    )
}