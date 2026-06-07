'use client'

import { cn } from "@/lib/utils"
import { Dispatch, SetStateAction, useState } from "react"

type Props = {
    setShowRowStories: Dispatch<SetStateAction<boolean>>
    setShowBtn: Dispatch<SetStateAction<string>>
}

type TElem = {
    id: number,
    titleGroup: string
}

const listGroup: TElem[] = [
    { id: 1, titleGroup: 'All Chats' },
    { id: 2, titleGroup: 'Study' }
]

export default function Groups(props: Props) {
    const [activeGroup, setActiveGroup] = useState<number>(1)

    const clickGroup = (obj: TElem) => {
        setActiveGroup(obj.id)
        props.setShowRowStories(false)
        props.setShowBtn('')
    }

    return (
        <div className='bg-[#202D3D] rounded-4xl flex items-center gap-x-[10px] px-[5px] py-[5px] shadow my-[20px]'>
            {
                listGroup.map((obj, index: number) => {
                    const isActive = activeGroup === obj.id

                    return (
                        <div className={cn(
                            'text-white font-semibold text-[15px] w-[100px] py-[10px] text-center',
                            'flex-1',
                            !isActive && 'hover:scale-110 transition-transform duration-300 cursor-pointer',
                            isActive && 'bg-active-bg rounded-4xl',
                            isActive && 'text-blue-500/80'
                        )} key={index} onClick={() => clickGroup(obj)}>{obj.titleGroup}</div>
                    )
                })
            }
        </div>
    )
}