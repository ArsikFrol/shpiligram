'use client'

import EditInfo from "@/components/EditInfo";
import HeaderEditorInfo from "@/components/HeaderEditorInfo";
import WarningText from "@/components/UI/WarningText";
import { useFetchProfile } from "@/hooks/useFetchProfile";
import useProfile from "@/store/profile/profileStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function page() {
    const router = useRouter()

    const {
        setFirstName,
        setLastName,
        setBio,
        objProfile
    } = useProfile()

    const [valueInpoutName, setValueInpoutName] = useState<string>(objProfile.firstName)
    const [valueInpoutLastName, setValueInpoutLastName] = useState<string>(objProfile.lastName)
    const [valueBio, setValueBio] = useState<string>(objProfile.bio)

    const [showWarning, setShowWarning] = useState<boolean>(false)

    const clickBackPage = () => {
        router.push('/profile')
        toast.success('Данные не сохранены!')
    }

    const clickSave = () => {
        setFirstName(valueInpoutName)
        setLastName(valueInpoutLastName)
        setBio(valueBio)

        router.push('/profile')
        toast.success('Данные сохранены!')
        setShowWarning(false)
    }

    return (
        <>
            <HeaderEditorInfo valueInpoutName={valueInpoutName}
                valueInpoutLastName={valueInpoutLastName} valueBio={valueBio}
                setShowWarning={setShowWarning} />
            <EditInfo valueInpoutName={valueInpoutName} setValueInpoutName={setValueInpoutName}
                valueInpoutLastName={valueInpoutLastName} setValueInpoutLastName={setValueInpoutLastName}
                valueBio={valueBio} setValueBio={setValueBio} />
            {showWarning &&
                <WarningText functionNo={clickBackPage} functionYes={clickSave}
                    textWarning="Уверены, что хотите изменить данные?" />
            }
        </>
    )
}