'use client'

import { useEffect, useState } from "react"

import StoryElem from "./Story/StoryElem"
import GiftElem from "./Gift/GiftElem"
import ShowStoryFromProfile from "./ShowStoryFromProfile"
import DescGift from "./Gift/DescGift"
import SkeletStoryAndGift from "../../Skeletons/SkeletStoryAndGift"

import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"
import useStories from "@/store/stories/storiesStore"
import useGifts from "@/store/gifts/giftsStore"
import { useEscape } from "@/hooks/useEscape"
import { TActiveBtn } from "./StoryAndGift"

type Props = {
    activeBtn: TActiveBtn
}

export default function SortStoryAndGiftProfile(props: Props) {

    const [showStory, setShowStory] = useState<boolean>(false)
    const [showIdSroty, setShowIdSroty] = useState<string>('')

    const [showGift, setShowGift] = useState<boolean>(false)
    const [showIdGift, setShowIdGift] = useState<string>('')

    const {
        userId
    } = useProfile()

    const {
        listStoriesProfile,
        fetchListStoriesProfile,
        loadingStories,
        errorStories
    } = useStories()

    const {
        listGifts,
        fetchListGifts,
        loadingGifts,
        errorGifts  
    } = useGifts()

    const clickStory = (storyId: string) => {
        setShowStory(true)
        setShowIdSroty(storyId)
    }

    const clickGit = (giftId: string) => {
        setShowGift(true)
        setShowIdGift(giftId)
    }

    useEscape(() => setShowStory(false))

    useEffect(() => {
        fetchListStoriesProfile(userId)
        fetchListGifts(userId)
    }, [userId])

    if (loadingStories) return (
        <div className={cn(
            'bg-bg rounded-2xl mx-auto grid grid-cols-3 grid-row-1 gap-y-[15px] py-[10px] justify-items-center',
            'min-lg:w-[800px] max-lg:mx-[30px]'
        )}>
            {
                [...Array(3)].map((_, index) => <SkeletStoryAndGift key={index} />)
            }
        </div>
    )
    if (!listStoriesProfile) return <div className=''>Историй нет</div>

    return (
        <>
            <div className={cn(
                'bg-bg rounded-2xl mx-auto grid grid-cols-3 grid-row-1 gap-y-[15px] py-[10px] min-h-[250px]',
                'min-lg:w-[800px] max-lg:mx-[30px]'
            )}>
                {props.activeBtn === 'stories' &&
                    listStoriesProfile.filter(obj => !obj.isArchined).map((obj, index: number) => {
                        return (
                            <StoryElem key={index} obj={obj} clickStory={clickStory} />
                        )
                    })
                }
                {props.activeBtn === 'arshinedStories' &&
                    listStoriesProfile.filter(obj => obj.isArchined).map((obj, index: number) => {
                        return (
                            <StoryElem key={index} obj={obj} clickStory={clickStory} />
                        )
                    })
                }
                {props.activeBtn === 'gifts' &&
                    listGifts.map((obj, index: number) => {
                        return (
                            <GiftElem key={index} clickGift={clickGit} obj={obj} />
                        )
                    })
                }
            </div>
            {showStory &&
                <ShowStoryFromProfile listStoriesProfile={listStoriesProfile} showIdSroty={showIdSroty}
                    setShowStory={setShowStory} />
            }
            {showGift &&
                <DescGift obj={listGifts.find(gift => gift.giftId === showIdGift)!} setShowDescGift={setShowGift} />
            }
        </>
    )
}