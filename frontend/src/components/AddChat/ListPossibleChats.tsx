'use client'

import { CircleUser } from "lucide-react"
import { useRouter } from "next/navigation"

import { formatDateTime } from "@/lib/formatDate"
import { cn } from "@/lib/utils"
import usePossibleChats from "@/store/possibleChats/possibleChatsStore"
import SkeletonAddChats from "../Skeletons/SkeletonAddChats"
import PossibleElem from "./PossibleElem"

export default function ListPossibleChats() {

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
                    ? listPossibleChats.map((obj, index) => <PossibleElem profile={obj} key={index}/>)
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