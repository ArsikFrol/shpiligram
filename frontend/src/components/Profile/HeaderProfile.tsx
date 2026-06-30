'use client'

import { ArrowLeftToLine } from "lucide-react";
import { JSX, useState } from "react";

import { cn } from "@/lib/utils";

import ThreeDots from "../UI/ThreeDots";
import QrCodeCom from "./QrCodeCom";
import { TypeRoutes, useTypedRouter } from "@/hooks/useTypedRouter";
import SideProfile from "./SideProfile";
import { TGetUser } from "@/store/profile/types";

type Props = {
    profile: TGetUser,

    profileSide: boolean
    setProfileSide: (value: boolean) => void,
}

type TSetting = {
    id: number,
    text: string
    elem?: JSX.Element,
    link: TypeRoutes
}

const listSettings: TSetting[] = [
    { id: 1, link: '/settings', text: 'Найстроки' },
    { id: 2, link: '/signIn', text: 'Выйти', elem: <ArrowLeftToLine strokeWidth={1} size={20} className="rotate-180" /> }
]

export default function HeaderProfile(props: Props) {
    const router = useTypedRouter()

    const [showSettings, setShowSettings] = useState<boolean>(false)

    const clickElem = (link: TypeRoutes) => {
        router.push(link)
    }

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
                    <ThreeDots onClick={() => setShowSettings(!showSettings)} />
                    {showSettings &&
                        <div className={cn(
                            "absolute w-[150px] top-[30px] left-[-70px] bg-bg rounded-2xl p-[20px]",
                            'flex flex-col gap-y-[10px]'
                        )}>
                            {
                                listSettings.map((obj, index: number) => {
                                    return (
                                        <div key={index} className={cn(
                                            'h-[30px] leading-[30px] text-[18px] text-white',
                                            'flex items-center gap-x-[20px]',
                                            'hover:scale-105 transition-transform duration-300 cursor-pointer'
                                        )} onClick={() => clickElem(obj.link)}>
                                            <div className='flex-1 text-left'>{obj.text}</div>
                                            {obj.elem}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}