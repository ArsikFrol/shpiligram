'use client'

import { ArrowLeftToLine, Settings } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import ThreeDots, { TSetting } from "../UI/ThreeDots";
import { useTypedRouter } from "@/hooks/useTypedRouter";
import { TGetUser } from "@/store/profile/types";
import QrCodeCom from "../Profile/QrCodeCom";
import SideProfile from "../Profile/SideProfile";

type Props = {
    profile: TGetUser,

    profileSide: boolean
    setProfileSide: (value: boolean) => void,
}

export default function HeaderProfile(props: Props) {
    const router = useTypedRouter()

    const listSettings: TSetting[] = [
        { id: 1, onClick: () => router.push('/settings'), link: '/settings', text: 'Найстроки', elem: <Settings strokeWidth={1.5} size={25} /> },
        { id: 2, onClick: () => router.push('/signIn'), link: '/signIn', text: 'Выйти', elem: <ArrowLeftToLine strokeWidth={1.5} size={25} className="rotate-180" /> }
    ]

    const [showSettings, setShowSettings] = useState<boolean>(false)

    return (
        <div className="fixed flex justify-between items-center bg-container w-[calc(100%-93px)]">
            <div className={cn(
                'flex items-center w-full justify-between'
            )}>
                <QrCodeCom userId={props.profile.userId}
                    userName={props.profile.userName} />
                <div className={cn(
                    'relative flex items-center gap-x-[20px]',
                )}>
                    <SideProfile setProfileSide={props.setProfileSide} profileSide={props.profileSide} />
                    <ThreeDots onClick={() => setShowSettings(!showSettings)} onClose={() => setShowSettings(false)}
                        classForElem={cn(
                            'h-[30px] leading-[30px] text-[19px] text-white',
                            'flex items-center',
                        )} listSettings={listSettings} classForContainer={cn(
                            'bg-bg w-[200px] gap-y-[15px]'
                        )} />
                </div>
            </div>
        </div>
    )
}