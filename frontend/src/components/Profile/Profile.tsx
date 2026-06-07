'use client'

import { cn } from "@/lib/utils";
import Posts from "./Posts";
import SettingsProfile from "../SettingsProfile";
import { UserCircle2Icon } from "lucide-react";
import useProfile from "@/store/profile/profileStore";

export default function Profile() {

    const {
        name, lastName,
        mobile,
        userName,
        birthday
    } = useProfile()

    return (
        <div className='h-[calc(100vh-260px)] overflow-y-auto'>
            <div className='w-[200px] mx-auto'>
                <UserCircle2Icon size={100} color="white" strokeWidth={1} className="mx-auto" />
                <div className='text-white text-[25px] text-center'>{name} {lastName}</div>
            </div>
            <SettingsProfile />
            <div className={cn(
                'w-[600px] mx-auto bg-bg rounded-2xl p-[20px]',
                'flex flex-col gap-y-[30px]'
            )}>
                <div className=''>
                    <div className='text-[20px] text-white'>{mobile}</div>
                    <div className='text-[16px] text-gray-500'>Mobile</div>
                </div>
                <div className=''>
                    <div className='text-[20px] text-white'>@{userName}</div>
                    <div className='text-[16px] text-gray-500'>Username</div>
                </div>
                <div className=''>
                    <div className='text-[20px] text-white'>{birthday}</div>
                    <div className='text-[16px] text-gray-500'>Birthday</div>
                </div>
            </div>
            <Posts />
        </div>
    )
}