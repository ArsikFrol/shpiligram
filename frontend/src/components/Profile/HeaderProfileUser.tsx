'use client'

import { ArrowLeft, ArrowLeftToLine } from "lucide-react";
import { JSX, useState } from "react";

import { TypeRoutes, useTypedRouter } from "@/hooks/useTypedRouter";
import { cn } from "@/lib/utils";
import QrCodeCom from "./QrCodeCom";
import ThreeDots from "../UI/ThreeDots";
import { TGetUser } from "@/store/profile/types";

type Props = {
    profile: TGetUser
}

type TSetting = {
    id: number,
    text: string
    elem?: JSX.Element,
    link: TypeRoutes
}

export default function HeaderProfileUser(props: Props) {
    const router = useTypedRouter()

    const [showSettings, setShowSettings] = useState<boolean>(false)

    const clickBackPage = () => {
        router.back()
    }

    const clickElem = (link: TypeRoutes) => {
        router.push(link)
    }

    return (
        <div className="">
            <div className={cn(
                'group flex justify-between w-full items-center h-[50px] rounded-2xl cursor-pointer'
            )}>
                <ArrowLeft color='white' size={25}
                    className={cn(
                        "group-hover:scale-105 group-hover:translate-x-[-5px]",
                        'transition-transform duration-300'
                    )} onClick={clickBackPage} />
                <div className='flex items-center gap-x-[20px]'>
                    <QrCodeCom userId={props.profile.userId}
                        userName={props.profile.userName} />
                    <div className={cn(
                        'relative flex items-center gap-x-[20px]',
                    )}>
                        <ThreeDots onClick={() => setShowSettings(!showSettings)} />

                    </div>
                </div>
            </div>
        </div>
    )
}