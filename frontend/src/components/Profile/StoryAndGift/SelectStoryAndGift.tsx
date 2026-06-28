'use client'

import { useState } from "react";

import { cn } from "@/lib/utils";
import SortStoryAndGiftProfile from "./SortStoryAndGiftProfile";

export type TActiveBtn = 'stories' | 'arshinedStories' | 'gifts'

type TPostBtn = {
    id: number,
    text: string
    type: TActiveBtn
}

const listPostBtn: TPostBtn[] = [
    { id: 1, type: 'stories', text: 'Stories' },
    { id: 2, type: 'arshinedStories', text: 'Archined Stories' },
    { id: 3, type: 'gifts', text: 'Gifts' }
]

export default function SelectStoryAndGift() {

    const [activeBtn, setActiveBtn] = useState<TActiveBtn>('stories')

    return (
        <div className=''>
            <div className='flex gap-x-[10px] w-[440px] mx-auto bg-bg p-[5px] rounded-2xl my-[20px]'>
                {
                    listPostBtn.map((obj, index: number) => {
                        const style = activeBtn === obj.type
                            ? 'bg-active-bg text-blue-400 rounded-2xl'
                            : 'hover:scale-105 transition-transform duration-300 cursor-pointer'

                        return (
                            <div key={index} className={cn(
                                'text-[15px] w-[150px] text-center font-bold text-gray-500 py-[5px]',
                                style
                            )} onClick={() => setActiveBtn(obj.type)}>{obj.text}</div>
                        )
                    })
                }
            </div>
            <SortStoryAndGiftProfile activeBtn={activeBtn} />
        </div>
    )
}