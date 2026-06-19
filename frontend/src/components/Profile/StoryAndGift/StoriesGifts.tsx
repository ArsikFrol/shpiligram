'use client'

import { useState } from "react"

import { cn } from "@/lib/utils"
import ListStories from "./ListStories"
import ListGifts from "./ListGifts"
import { UserModel } from "@/generated/prisma/models"

type Props = {
    obj: UserModel
}

type TPostBtn = {
    id: number,
    text: string
}

const listPostBtn: TPostBtn[] = [
    { id: 1, text: 'Stories' },
    { id: 2, text: 'Gifts' }
]

export default function StoriesGifts(props: Props) {
    const [activeBtn, setactiveBtn] = useState<number>(1)

    return (
        <div className=''>
            <div className='flex gap-x-[10px] w-[310px] mx-auto bg-bg p-[5px] rounded-2xl my-[20px]'>
                {
                    listPostBtn.map((obj, index: number) => {
                        return (
                            <div key={index} className={cn(
                                'text-[15px] w-[150px] text-center font-bold text-gray-500 py-[5px]',
                                activeBtn === obj.id
                                    ? 'bg-active-bg text-blue-400 rounded-2xl'
                                    : 'hover:scale-105 transition-transform duration-300 cursor-pointer'
                            )} onClick={() => setactiveBtn(obj.id)}>{obj.text}</div>
                        )
                    })
                }
            </div>
            {activeBtn === 1
                ? <ListStories userId={props.obj.userId} activeBtn="stories" />
                : <ListGifts recipientId={props.obj.userId} />
            }
        </div>
    )
}