import StoryElem from "./StoryElem"
import { cn } from "@/lib/utils"
import { TGetStoryProfile } from "@/store/stories/types"

type Props = {
    listStoriesProfile: TGetStoryProfile[],

    arshinedStories?: boolean
}

export default function ListStories(props: Props) {
    return (
        <div className={cn(
            props.listStoriesProfile.length && 'grid grid-cols-3 grid-row-1 gap-y-[15px] gap-x-[15px]'
        )}>
            {props.listStoriesProfile.length
                ? props.listStoriesProfile.map((obj, index) => <StoryElem clickStory={() => { }} obj={obj} key={index} />)
                : props.arshinedStories
                    ? <div className='text-[22px] text-white text-center leading-[230px]'>
                        Архивных историй нет
                    </div>
                    : <div className='text-[22px] text-white text-center leading-[230px]'>
                        Историй нет
                    </div>
            }
        </div>
    )
}