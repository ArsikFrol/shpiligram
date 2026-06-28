'use client'

import useProfile from "@/store/profile/profileStore"
import PhotoProfile from "../PhotoProfile"
import DescriptionProfile from "../DescriptionProfile"
import SortStoryAndGiftInUser from "../StoryAndGift/SortStoryAndGiftInUser"

export default function ProfileSide() {
    const {
        loading,
        objProfile
    } = useProfile()
    
    return(
        <>
            <PhotoProfile loading={loading} objProfile={objProfile}/>
            <DescriptionProfile loading={loading} objProfile={objProfile}/>
            <SortStoryAndGiftInUser obj={objProfile}/>  
        </>
    )
}