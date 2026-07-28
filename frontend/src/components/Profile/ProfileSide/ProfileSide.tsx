'use client'

import useProfile from "@/store/profile/profileStore"
import PhotoProfile from "../PhotoProfile"
import Tabs from "../StoryAndGift/Tabs"
import Description from "../Description/Description"

export default function ProfileSide() {
    const {
        loadingProfile,
        objProfile,
        errorProfile,
        userId
    } = useProfile()
    
    return(
        <>
            <PhotoProfile loading={loadingProfile} objProfile={objProfile} error={errorProfile} />
            <Description loading={loadingProfile} objProfile={objProfile} error={errorProfile} moreMT />
            <Tabs hiddenBtnArchinedStories userId={userId}/>
        </>
    )
}