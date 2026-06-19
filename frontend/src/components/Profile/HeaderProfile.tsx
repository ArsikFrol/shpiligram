'use client'

import { ArrowLeft, ArrowLeftToLine, EllipsisVertical } from "lucide-react";
import QrCodeCom from "./QrCodeCom";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { UserModel } from "@/generated/prisma/models";
import { JSX, useState } from "react";
import { TRout } from "@/types/router";
import ThreeDots from "../UI/ThreeDots";

type Props = {
    isPageUserProfile: boolean,
    profile: UserModel
}

type TSetting = {
    id: number,
    text: string
    elem?: JSX.Element,
    link: TRout
}

const listSettings: TSetting[] = [
    { id: 1, link: '/settings', text: 'Найстроки' },
    { id: 2, link: '/signIn', text: 'Выйти', elem: <ArrowLeftToLine strokeWidth={1} size={20} className="rotate-180" /> }
]

export default function HeaderProfile(props: Props) {
    const router = useRouter()

    const [showSettings, setShowSettings] = useState<boolean>(false)

    const clickBackPage = () => {
        router.back()
    }

    const clickElem = (link: TRout) => {
        router.push(link)
    }

    return (
        <div className="flex justify-between items-center">
            {props.isPageUserProfile &&
                <div className={cn(
                    'group flex justify-center items-center w-[50px] h-[50px] bg-bg rounded-2xl cursor-pointer'
                )} onClick={clickBackPage}>
                    <ArrowLeft color='white' size={25}
                        className={cn(
                            "group-hover:scale-105 group-hover:translate-x-[-5px]",
                            'transition-transform duration-300'
                        )} />
                </div>
            }
            <div className={cn(
                'flex items-center',
                props.isPageUserProfile ? 'gap-x-[20px]' : 'w-full justify-between'
            )}>
                <QrCodeCom userId={props.profile.userId}
                    userName={props.profile.userName} />
                <div className='relative'>
                    <ThreeDots onClick={() => setShowSettings(!showSettings)} />
                    {showSettings &&
                        <div className={cn(
                            "absolute w-[150px] top-[30px] left-[-130px] bg-bg rounded-2xl p-[20px]",
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