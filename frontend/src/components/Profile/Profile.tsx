'use client'

import Posts from "./Posts";
import SettingsProfile from "../SettingsProfile";
import useProfile from "@/store/profile/profileStore";
import PhotoProfile from "./PhotoProfile";
import DescriptionProfile from "./DescriptionProfile";

export default function Profile() {

    const {
        name, lastName,
        mobile,
        userName,
        birthday,
        bio
    } = useProfile()

    return (
        <div className='h-[calc(100vh-260px)] overflow-y-auto'>
            <PhotoProfile imageProfile="" lastName={lastName} name={name} />
            <SettingsProfile />
            <DescriptionProfile bio={bio} birthday={birthday} mobile={mobile} userName={userName} />
            <Posts />
        </div>
    )
}