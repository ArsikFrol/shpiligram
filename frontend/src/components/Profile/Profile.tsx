'use client'

import useProfile from "@/store/profile/profileStore"
import PhotoProfile from "./PhotoProfile"
import SettingsProfile from "./SettingsProfile"
import Tabs from "./StoryAndGift/Tabs"
import Description from "./Description/Description"

export default function Profile() {

    const {
        loadingProfile,
        objProfile,
        errorProfile,
        userId
    } = useProfile()

    return (
        <>
            <PhotoProfile loading={loadingProfile} objProfile={objProfile} error={errorProfile} />
            <SettingsProfile />
            <Description loading={loadingProfile} objProfile={objProfile} error={errorProfile} />
            <Tabs userId={userId}/>
        </>
    )
}