import Image from "next/image"

import user from '../../../public/user.jpg'
import { TGetStory } from "@/store/stories/types"
import { cn } from "@/lib/utils"

type Props = {
    listStories: TGetStory[]

    setIdStoriesShow: (id: string) => void,
    setShowBigStories: (value: boolean) => void
}

export default function RowStories(props: Props) {

    const clickStory = (id: string) => {
        props.setShowBigStories(true)
        props.setIdStoriesShow(id)
    }

    return (
        <div className='flex gap-x-[20px] w-[1140px] overflow-x-auto p-[10px]'>
            {
                props.listStories.filter(story => !story.isViewed).map((obj, index: number) => {
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
                props.listStories.filter(story => story.isViewed).map((obj, index: number) => {
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