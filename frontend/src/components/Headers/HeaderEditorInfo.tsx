'use client'

import useProfile from "@/store/profile/profileStore";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type Props = {
    valueInpoutName: string,
    valueInpoutLastName: string,
    valueBio: string,

    setShowWarning: Dispatch<SetStateAction<boolean>>
}

export default function HeaderEditorInfo(props: Props) {
    const router = useRouter()

    const {
        objProfile
    } = useProfile()

    const clickBackPage = () => {
        if (props.valueInpoutName !== objProfile.firstName
            || props.valueInpoutLastName !== objProfile.lastName
            || props.valueBio !== objProfile.bio) {
            props.setShowWarning(true)
        } else router.push('/profile')
    }

    return (
        <div className="flex items-center gap-x-[15px]">
            <ArrowLeft color="white" size={25} onClick={clickBackPage}
                className="hover:scale-105 hover:translate-x-[-5px] transition-transform duration-300 cursor-pointer" />
            <div className='text-[25px] font-semibold text-white'>Profile</div>
        </div>
    )
}