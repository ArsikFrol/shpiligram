'use client'

import { cn } from "@/lib/utils";
import TitleSettings from "../UI/TitleSettings";
import { TypeRoutes, useTypedRouter } from "@/hooks/useTypedRouter";
import DeleteMyProfile from "./DeleteMyProfile";

type TElem = {
    id: number,
    title: string,
    link: TypeRoutes
}

const listElem: TElem[] = [
    {id: 1, link: '/settings/privacy/phoneNomber', title: 'Phone number'},
    {id: 2, link: '/settings/privacy/lastSeen', title: 'Last seen & Online'},
    {id: 3, link: '/settings/privacy/forwardedMessages', title: 'Forwarded messages'},
    {id: 4, link: '/settings/privacy/calls', title: 'Calls'},
    {id: 5, link: '/settings/privacy/voiceMessages', title: 'Voice messages'},
    {id: 6, link: '/settings/privacy/messages', title: 'Messages'},
    {id: 7, link: '/settings/privacy/birthday', title: 'Birthday'},
    {id: 8, link: '/settings/privacy/gifts', title: 'Gifts'},
    {id: 9, link: '/settings/privacy/bio', title: 'Bio'}
]

export default function () {
    const router = useTypedRouter()

    return(
        <div className="w-full h-[calc(100vh-250px)] overflow-y-auto scrollbar">
            <div className={cn(
                "bg-bg rounded-2xl p-[20px] mx-auto mt-[30px]",
                'min-lg:w-[800px] max-lg:mx-[30px]'
            )}>
                <TitleSettings title="Privacy"/>
                <div className={cn(
                    "border-t border-t-gray-700 mt-[10px] pt-[20px] flex flex-col gap-y-[10px] "
                )}>
                    {
                        listElem.map((obj: TElem, index) => {
                            return(
                                <div className="flex items-center justify-between bg-container rounded-2xl py-[15px] px-[20px]" key={index}
                                    onClick={() => router.push(obj.link)}>
                                    <div className="text-white text-[18px]">{obj.title}</div>
                                    <div className="text-[15px] font-medium text-gray-500">EveryBody</div>
                                </div>
                            )
                        })
                    }
                </div>
                <DeleteMyProfile />
            </div>
        </div>
    )
}