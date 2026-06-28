'use client'

import useProfile from "@/store/profile/profileStore";
import PhotoProfile from "./PhotoProfile";
import SettingsProfile from "./SettingsProfile";
import DescriptionProfile from "./DescriptionProfile";
import SelectStoryAndGift from "./StoryAndGift/SelectStoryAndGift";

export default function Profile() {
    
    const {
        loading,
        objProfile
    } = useProfile()

    return(
        <>
            <PhotoProfile loading={loading} objProfile={objProfile}/>
            <SettingsProfile />
            <DescriptionProfile loading={loading} objProfile={objProfile}/>
            <SelectStoryAndGift />
        </>
    )
}