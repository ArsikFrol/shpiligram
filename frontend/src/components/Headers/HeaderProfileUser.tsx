'use client'

import { ArrowLeft, BadgeInfo, Gift, Share } from "lucide-react";
import { useState } from "react";

import { useTypedRouter } from "@/hooks/useTypedRouter";
import { cn } from "@/lib/utils";
import ThreeDots, { TSetting } from "../UI/ThreeDots";
import { TGetUser } from "@/store/profile/types";
import QrCodeCom from "../Profile/QrCodeCom";

type Props = {
    profile: TGetUser
}

const listSettings: TSetting[] = [
    { id: 1, onClick: () => { }, text: 'Share account', elem: <Share color="white" size={25} strokeWidth={1.5} /> },
    { id: 2, onClick: () => { }, text: 'Block user', elem: <BadgeInfo color="white" size={25} strokeWidth={1.5} /> },
    { id: 3, onClick: () => { }, text: 'Send a Gift', elem: <Gift color="white" size={25} strokeWidth={1.5} /> },
]

export default function HeaderProfileUser(props: Props) {
    const router = useTypedRouter()

    const [showSettings, setShowSettings] = useState<boolean>(false)

    const clickBackPage = () => {
        router.back()
    }

    return (
        <div className="">
            <div className={cn(
                'flex justify-between w-full items-center h-[50px] rounded-2xl'
            )}>
                <ArrowLeft color='white' size={25}
                    className={cn(
                        "hover:scale-105 hover:translate-x-[-3px] cursor-pointer",
                        'transition-transform duration-300 w-[25px]'
                    )} onClick={clickBackPage} />
                <div className='flex items-center gap-x-[20px]'>
                    <QrCodeCom userId={props.profile.userId}
                        userName={props.profile.userName} />
                    <ThreeDots onClick={() => setShowSettings(!showSettings)} onClose={() => setShowSettings(false)}
                        classForContainer={cn(
                            'bg-bg w-[200px] gap-y-[20px]'
                        )} classForElem={cn(
                            'text-white text-[17px] flex items-center gap-x-[10px]'
                        )} listSettings={listSettings} />
                </div>
            </div>
        </div>
    )
}