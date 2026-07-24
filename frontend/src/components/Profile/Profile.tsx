'use client'

import useProfile from "@/store/profile/profileStore";
import PhotoProfile from "./PhotoProfile";
import SettingsProfile from "./SettingsProfile";
import DescriptionProfile from "./DescriptionProfile";
import StoryAndGift from "./StoryAndGift/StoryAndGift";

export default function Profile() {

    const {
        loadingProfile,
        objProfile,
        errorProfile
    } = useProfile()

    return (
        <>
            <PhotoProfile loading={loadingProfile} objProfile={objProfile} error={errorProfile} />
            <SettingsProfile />
            <DescriptionProfile loading={loadingProfile} objProfile={objProfile} error={errorProfile} />
            <StoryAndGift />
        </>
    )
}