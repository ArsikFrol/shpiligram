'use client'

import { CircleUser } from "lucide-react";

import { useTypedRouter } from "@/hooks/useTypedRouter";
import { formatDateTime } from "@/lib/formatDate";
import { cn } from "@/lib/utils";
import { TGetUser } from "@/store/profile/types";

type Props = {
    profile: TGetUser
}

export default function PossibleElem(props: Props) {
    const router = useTypedRouter()

    return (
        <div className={cn(
            'flex items-center gap-x-[10px]',
            'hover:scale-101 transition-transform duration-300 cursor-pointer'
        )} onClick={() => router.push(`/profile/${props.profile.userId}?createNewChat=true`)}>
            <CircleUser size={50} strokeWidth={1} color="#ffffff" />
            <div className=''>
                <div className='flex items-center gap-x-[5px]'>
                    <div className='text-[18px] font-semibold text-white'>
                        {props.profile.firstName}
                    </div>
                    <div className='text-[18px] font-semibold text-white'>
                        {props.profile.lastName}
                    </div>
                </div>
                <div className='text-[15px] font-medium text-gray-500'>
                    {formatDateTime(new Date(props.profile.lastSeen))}
                </div>
            </div>
        </div>
    )
}