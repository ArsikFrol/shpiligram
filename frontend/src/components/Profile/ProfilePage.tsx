'use client'

import { useEffect, useState } from "react";

import useProfile from "@/store/profile/profileStore";
import HeaderProfile from "../Headers/HeaderProfile";
import Profile from "./Profile";
import ProfileSide from "./ProfileSide/ProfileSide";

export default function ProfilePage() {

    const [profileSide, setProfileSide] = useState<boolean>(false)

    const {
        userId,
        fetchProfile,
        objProfile,
    } = useProfile()

    useEffect(() => {
        fetchProfile(userId)
    }, [userId])

    if (!objProfile) return <div className=''>Нет данных профиля</div>

    return (
        <div className='h-[calc(100vh-190px)] overflow-y-hidden w-full'>
            <HeaderProfile profile={objProfile} profileSide={profileSide}
                setProfileSide={setProfileSide} />
            <div className='mt-[60px] h-[calc(100vh-250px)] overflow-y-auto scrollbar'>
                {profileSide
                    ? <ProfileSide />
                    : <Profile />
                }
            </div>
        </div>
    )
}