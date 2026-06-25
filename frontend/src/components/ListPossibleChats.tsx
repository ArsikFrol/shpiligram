'use client'

import { CircleUser } from "lucide-react"
import { useRouter } from "next/navigation"

import { UserModel } from "@/generated/prisma/models"
import { formatDateTime } from "@/lib/formatDate"
import { cn } from "@/lib/utils"
import usePossibleChats from "@/store/possibleChats/possibleChatsStore"
import SkeletonAddChats from "./Skeletons/SkeletonAddChats"

export default function ListPossibleChats() {
    const router = useRouter()

    const {
        listPossibleChats,
        loading
    } = usePossibleChats()

    return (
        <div className={cn(
            'flex flex-col gap-y-[20px] bg-bg rounded-2xl mt-[20px] p-[20px] h-[calc(100vh-250px)] overflow-y-auto',
            'scrollbar'
        )}>
            {loading
                ? <div className='flex flex-col gap-y-[20px]'>
                    {
                        [...Array(20)].map((_, index) => <SkeletonAddChats key={index} />)
                    }
                </div>
                : listPossibleChats.length
                    ? listPossibleChats.map((obj, index) => {
                        return (
                            <div key={index} className={cn(
                                'flex items-center gap-x-[10px]',
                                'hover:scale-101 transition-transform duration-300 cursor-pointer'
                            )} onClick={() => router.push(`/profile/${obj.userId}?createNewChat=true`)}>
                                <CircleUser size={50} strokeWidth={1} color="#ffffff" />
                                <div className=''>
                                    <div className='flex items-center gap-x-[5px]'>
                                        <div className='text-[18px] font-semibold text-white'>
                                            {obj.firstName}
                                        </div>
                                        <div className='text-[18px] font-semibold text-white'>
                                            {obj.lastName}
                                        </div>
                                    </div>
                                    <div className='text-[15px] font-medium text-gray-500'>
                                        {formatDateTime(new Date(obj.lastSeen))}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    : <div className={cn(
                        'text-center text-[25px] text-white h-[calc(100vh-320px)]',
                        'flex flex-col items-center justify-center w-[400px] mx-auto'
                    )}>
                        Список пуст, проверте введенный userName
                    </div>
            }
        </div>

    )
}