'use client'

import { useCallback } from "react"

import { TActiveBtn } from "./Tabs"
import { cn } from "@/lib/utils"
import useGifts from "@/store/gifts/giftsStore"
import SkeletStoryAndGift from "@/components/Skeletons/SkeletStoryAndGift"
import useStories from "@/store/stories/storiesStore"
import ListStories from "./Story/ListStories"
import ListGifts from "./Gift/ListGifts"

type Props = {
    activeBtn: TActiveBtn,

    userId: string
}

export default function Sort(props: Props) {
    const {listStoriesProfile, loadingStories, errorStories} = useStories()
    const {listGifts, loadingGifts, errorGifts} = useGifts()

    if (loadingStories || loadingGifts) return (
        <div className={cn(
            'bg-bg rounded-2xl mx-auto grid grid-cols-3 grid-row-1 gap-y-[15px] py-[10px] justify-items-center',
            'min-lg:w-[800px] max-lg:mx-[30px]'
        )}>
            {
                [...Array(3)].map((_, index) => <SkeletStoryAndGift key={index} />)
            }
        </div>
    )

    return(
        <div className={cn(
                'bg-bg rounded-2xl mx-auto grid grid-cols-3 grid-row-1 gap-y-[15px] py-[10px] min-h-[250px]',
                'min-lg:w-[800px] max-lg:mx-[30px]'
            )}>
            {props.activeBtn === 'stories' &&
                <ListStories listStoriesProfile={listStoriesProfile} />
            }
            {props.activeBtn === 'arshinedStories' &&
                <ListStories listStoriesProfile={listStoriesProfile.filter(obj => obj.isArchined)} arshinedStories />
            }
            {props.activeBtn === 'gifts' &&
                <ListGifts listGifts={listGifts }/>
            }
        </div>
    )
}