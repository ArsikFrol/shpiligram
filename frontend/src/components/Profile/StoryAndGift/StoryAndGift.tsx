'use client'

import { cn } from "@/lib/utils"
import { useState } from "react"
import Sort from "./Sort"

type Props = {
    hiddenBtnArchinedStories?: boolean,

    userId: string
}

export type TActiveBtn = 'stories' | 'arshinedStories' | 'gifts'

type TBtn = {
    id: number,
    text: string
    type: TActiveBtn
}

const listPostBtn: TBtn[] = [
    { id: 1, type: 'stories', text: 'Stories' },
    { id: 2, type: 'arshinedStories', text: 'Archined Stories' },
    { id: 3, type: 'gifts', text: 'Gifts' }
]

export default function StoryAndGift(props: Props) {
    
    const [activeBtn, setActiveBtn] = useState<TActiveBtn>('stories')
    
    return(
        <>
            <div className='flex gap-x-[10px] w-[440px] p-[5px] mx-auto bg-bg rounded-2xl my-[20px]'>
                {
                    listPostBtn.map((obj, index: number) => {
                        const style = activeBtn === obj.type
                            ? 'bg-active-bg text-blue-400 rounded-2xl'
                            : 'hover:scale-105 transition-transform duration-300 cursor-pointer'

                        return (
                            <div key={index} onClick={() => setActiveBtn(obj.type)} className={cn(
                                'flex-1 text-[15px] w-[150px] text-center font-bold text-gray-500 py-[5px]',
                                style
                            )} style={props.hiddenBtnArchinedStories && obj.type === 'arshinedStories' 
                                ? {display: 'none'}
                                : {}
                            }>{obj.text}</div>
                        )
                    })
                }
            </div>
            <Sort activeBtn={activeBtn} userId={props.userId} />
        </>
    )
}