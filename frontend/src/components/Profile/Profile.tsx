'use client'

import Posts from "./Posts";
import SettingsProfile from "./SettingsProfile";
import useProfile from "@/store/profile/profileStore";
import PhotoProfile from "./PhotoProfile";
import DescriptionProfile from "./DescriptionProfile";
import Header from "../Header/Header";

export default function Profile() {

    const {
        name, lastName,
        mobile,
        userName,
        birthday,
        bio,
        userId
    } = useProfile()

    return (
        <div className='h-[calc(100vh-200px)] overflow-y-auto'>
            <Header showQrCode userId={userId} userName={userName} />
            <PhotoProfile imageProfile="" lastName={lastName} name={name} />
            <SettingsProfile />
            <DescriptionProfile bio={bio} birthday={birthday} mobile={mobile} userName={userName} />
            <Posts />
        </div>
    )
}