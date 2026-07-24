'use client'

import useProfile from "@/store/profile/profileStore"
import PhotoProfile from "../PhotoProfile"
import DescriptionProfile from "../DescriptionProfile"
import StoryAndGift from "../StoryAndGift/StoryAndGift"

export default function ProfileSide() {
    const {
        loadingProfile,
        objProfile,
        errorProfile
    } = useProfile()
    
    return(
        <>
            <PhotoProfile loading={loadingProfile} objProfile={objProfile} error={errorProfile} />
            <DescriptionProfile loading={loadingProfile} objProfile={objProfile} error={errorProfile} />
            {/* <SortStoryAndGiftInUser obj={objProfile}/>   */}
            <StoryAndGift hiddenBtnArchinedStories/>
        </>
    )
}