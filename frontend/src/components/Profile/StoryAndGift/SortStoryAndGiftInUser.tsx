'use client'

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import ListGifts from "./Gift/ListGifts"
import ListStories from "./Story/ListStories"
import { TGetUser } from "@/store/profile/types"
import useStories from "@/store/stories/storiesStore"
import useGifts from "@/store/gifts/giftsStore"

type Props = {
    obj: TGetUser,
}

export type TActiveBtnSort = 'Stories' | 'Gifts'

type TPostBtn = {
    id: number,
    text: string
}

export default function SortStoryAndGiftInUser(props: Props) {

    const [activeBtn, setActiveBtn] = useState<TActiveBtnSort>('Stories')

    const {
        fetchListStoriesProfile,
        listStoriesProfile
    } = useStories()

    const {
        fetchListGifts,
        listGifts
    } = useGifts()

    useEffect(() => {
        fetchListStoriesProfile(props.obj.userId)
        fetchListGifts(props.obj.userId)
    }, [props.obj.userId])

    return (
        <div className=''>
            <div className={cn(
                'flex gap-x-[10px] w-[310px] mx-auto bg-bg p-[5px] rounded-2xl my-[20px]',
                'text-[15px] text-gray-500'
            )}>
                <div className={cn(
                    'w-[150px] py-[5px] font-bold text-center',
                    activeBtn === 'Stories'
                        ? 'bg-active-bg text-blue-400 rounded-2xl'
                        : 'hover:scale-105 transition-transform duration-300 cursor-pointer'
                )} onClick={() => setActiveBtn('Stories')}>
                    Stories
                </div>
                <div className={cn(
                    'w-[150px] py-[5px] font-bold text-center',
                    activeBtn === 'Gifts'
                        ? 'bg-active-bg text-blue-400 rounded-2xl'
                        : 'hover:scale-105 transition-transform duration-300 cursor-pointer'
                )} onClick={() => setActiveBtn('Gifts')}>
                    Gifts
                </div>
            </div>
            {activeBtn === 'Stories'
                ? <ListStories recipientId={props.obj.userId} listStoriesProfile={listStoriesProfile} />
                : <ListGifts recipientId={props.obj.userId} listGifts={listGifts} />
            }
        </div>
    )
}