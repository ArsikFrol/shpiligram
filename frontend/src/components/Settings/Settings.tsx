'use client'

import { BellRing, CircleUser, FolderCog, Languages, MessageCircleMore, Search, UserRoundKey } from "lucide-react";
import ThreeDots from "../UI/ThreeDots";
import PhotoProfile from "../Profile/PhotoProfile";
import useProfile from "@/store/profile/profileStore";
import { JSX } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { TypeRoutes, useTypedRouter } from "@/hooks/useTypedRouter";
import { useFetchProfile } from "@/hooks/useFetchProfile";

type TElem = {
    id: number,
    title: string,
    link: TypeRoutes,
    desc: string,
    elem: JSX.Element,
    bgColor: string,
}

const listElem: TElem[] = [
    { id: 1, elem: <CircleUser color="white" size={35} strokeWidth={1.5} />, title: 'Account', link: '/editInfo', desc: 'Number, UserName, Bio', bgColor: '#60A5FA' },
    { id: 2, elem: <MessageCircleMore color="white" size={35} strokeWidth={1.5} />, title: 'Chat Settings', link: '/settings/chatSettings', desc: 'Night Mode, wallpaper', bgColor: '#34D399' },
    { id: 3, elem: <UserRoundKey color="white" size={35} strokeWidth={1.5} />, title: 'Privacy', link: '/settings/privacy', desc: 'Last seen, ', bgColor: '#A78BFA' },
    { id: 4, elem: <BellRing color="white" size={35} strokeWidth={1.5} />, title: 'Notifications', link: '/settings/notifications', desc: '', bgColor: '#FB923C' },
    { id: 5, elem: <FolderCog color="white" size={35} strokeWidth={1.5} />, title: 'Chat Folders', link: '/settings/chatsFolder', desc: '', bgColor: '#2DD4BF' },
    { id: 6, elem: <Languages color="white" size={35} strokeWidth={1.5} />, title: 'Language', link: '/settings/language', desc: '', bgColor: '#F472B6' }
]

export default function Settings() {
    const router = useTypedRouter()

    const {
        userId
    } = useProfile()

    /* const { objProfile, loading } = useFetchProfile(userId) */

    const clickElem = (link: TypeRoutes) => {
        router.push(link)
    }

    const loading = true    
    const objProfile: any = []

    return (
        <div className="h-[calc(100vh-190px)] overflow-y-auto">
            <div className="flex items-center gap-x-[10px] w-[60px] ml-auto">
                <Search color="white" size={25} />
                <ThreeDots onClick={() => { }} />
            </div>
            <div className="h-[calc(100vh-235px)] mt-[20px] overflow-y-auto scrollbar">
                <PhotoProfile loading={loading} objProfile={objProfile} />
                <div className={cn(
                    "w-[600px] rounded-2xl mx-auto bg-bg p-[20px] mt-[50px]",
                    'flex flex-col gap-y-[20px] '
                )}>
                    {
                        listElem.map((obj: TElem, index) => {
                            return (
                                <div className={cn(
                                    "flex items-center gap-x-[20px]",
                                    'hover:scale-101 transition-transform duration-300 cursor-pointer'
                                )}
                                    key={index} onClick={() => clickElem(obj.link)}>
                                    <div className="w-[50px] h-[50px] rounded-2xl flex items-center justify-center"
                                        style={{ background: `${obj.bgColor}` }}>
                                        {obj.elem}
                                    </div>
                                    <div className="flex flex-col gap-x-[10px]">
                                        <div className="text-[18px] font-semibold text-white">{obj.title}</div>
                                        <div className="text-[16px] font-medium text-gray-500">{obj.desc}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}