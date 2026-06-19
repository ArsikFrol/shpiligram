import Image from "next/image";

import user from '../../../public/user.jpg'
import { cn } from "@/lib/utils";
import { TGetStory } from "@/store/stories/types";

type Props = {
    setShowRowStories: (newValue: boolean) => void,

    listStories: TGetStory[]
}

export default function Stories(props: Props) {

    const clickStory = () => {
        props.setShowRowStories(true)
    }

    return (
        <div className='reltive hover:scale-102 transition-transform duration-300 cursor-pointer'
            onClick={clickStory} >
            {
                props.listStories.filter(story => !story.isViewed).slice(0, 3).map((obj, index) => {
                    return (
                        <Image key={index} src={user} alt='' width={40} height={40} draggable='false'
                            className={cn(
                                "border-2 border-green-300 rounded-[999px] absolute",
                                index === 0 && 'left-0',
                                index === 1 && 'left-5 z-10',
                                index === 2 && 'left-10 z-20'
                            )} />
                    )
                })
            }
        </div>
    )
}