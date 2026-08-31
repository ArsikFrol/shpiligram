import Image from "next/image"

import user from '../../../public/user.jpg'
import { TGetStory } from "@/store/stories/types"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

type Props = {
    listStories: TGetStory[]

    setIdStoriesShow: (id: string) => void,
    setShowBigStories: (value: boolean) => void
}

export default function RowStories(props: Props) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        requestAnimationFrame(() => {
            setIsVisible(true)
        })
    }, [])

    const clickStory = (id: string) => {
        props.setShowBigStories(true)
        props.setIdStoriesShow(id)
    }

    const unviewedStories = props.listStories.filter(story => !story.isViewed)
    const viewedStories = props.listStories.filter(story => story.isViewed)

    return (
        <div className={cn(
            'flex gap-x-[20px] w-full overflow-x-auto p-[10px] transition-all duration-500 ease-in-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
        )}>
            {
                unviewedStories.map((obj, index: number) => {
                    return (
                        <Image src={user} alt='' width={40} height={40} draggable='false' key={index}
                            className={cn(
                                "hover:scale-105 transition-transform duration-300 cursor-pointer w-[60px]",
                                'flex-shrink-0 border-2 border-green-300 rounded-[999px]'
                            )} onClick={() => clickStory(obj.storyId)} />
                    )
                })
            }
            {
                viewedStories.map((obj, index: number) => {
                    return (
                        <Image src={user} alt='' width={40} height={40} draggable='false' key={index}
                            className={cn(
                                "hover:scale-105 transition-transform duration-300 cursor-pointer w-[60px]",
                                'flex-shrink-0 rounded-[999px]'
                            )} onClick={() => clickStory(obj.storyId)} />
                    )
                })
            }
        </div>
    )
}