'use client'

import { useEffect, useState } from "react"

import { useFetchGifts } from "@/hooks/useFetchGifts"
import { TActiveBtn } from "./Stories"
import StoryElem from "./StoryElem"
import GiftElem from "./GiftElem"
import useProfile from "@/store/profile/profileStore"
import useStories from "@/store/stories/storiesStore"
import { useEscape } from "@/hooks/useEscape"
import StoryProfile from "./StoryProfile"

type Props = {
    activeBtn: TActiveBtn
}

export default function ListStories(props: Props) {

    const [showStory, setShowStory] = useState<boolean>(false)
    const [showIdSroty, setShowIdSroty] = useState<string>('')

    const {
        userId
    } = useProfile()

    const {
        listStoriesProfile,
        fetchListStoriesProfile,
        loading
    } = useStories()

    const { gifts } = useFetchGifts(userId)

    const clickStory = (storyId: string) => {
        setShowStory(true)
        setShowIdSroty(storyId)
    }

    useEscape(() => setShowStory(false))

    useEffect(() => {
        fetchListStoriesProfile(userId)
    }, [userId])

    if (loading) return <div className=''>Загрузка...</div>
    if (!listStoriesProfile) return <div className=''>Историй нет</div>
    if (!gifts) return <div className=''>Подарков нет</div>

    return (
        <>
            <div className='w-[600px] bg-bg rounded-2xl mx-auto grid grid-cols-3 grid-row-1 gap-y-[15px] py-[10px]'>
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
                    gifts.map((obj, index: number) => {
                        return (
                            <GiftElem key={index} clickGift={() => { }} obj={obj} />
                        )
                    })
                }
            </div>
            {showStory &&
                <StoryProfile listStoriesProfile={listStoriesProfile} showIdSroty={showIdSroty}
                    setShowStory={setShowStory} />
            }
        </>
    )
}