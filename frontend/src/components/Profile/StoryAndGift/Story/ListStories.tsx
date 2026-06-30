'use client'

import { useEffect } from "react"

import useStories from "@/store/stories/storiesStore"
import StoryElem from "./StoryElem"
import { cn } from "@/lib/utils"

type Props = {
    recipientId: string
}

export default function ListStories(props: Props) {

    const {
        fetchListStoriesProfile,
        listStoriesProfile,
        loading
    } = useStories()

    useEffect(() => {
        fetchListStoriesProfile(props.recipientId)
    }, [props.recipientId])

    if (loading) return <div className=''>Загрузка...</div>
    if (!listStoriesProfile) return <div className=''>Нет данных...</div>

    return (
        <div className={cn(
            "bg-bg rounded-2xl mx-auto grid grid-cols-3 grid-row-1 gap-y-[15px] py-[10px]",
            'min-lg:w-[800px] max-lg:mx-[30px]'
        )}>
            {
                listStoriesProfile.map((obj, index) => <StoryElem clickStory={() => { }} obj={obj} key={index} />)
            }
        </div>
    )
}