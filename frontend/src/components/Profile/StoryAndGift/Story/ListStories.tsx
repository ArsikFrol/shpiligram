import StoryElem from "./StoryElem"
import { cn } from "@/lib/utils"
import { TGetStoryProfile } from "@/store/stories/types"

type Props = {
    recipientId: string,

    listStoriesProfile: TGetStoryProfile[]
}

export default function ListStories(props: Props) {
    return (
        <div className={cn(
            "bg-bg rounded-2xl mx-auto py-[10px] min-h-[250px]",
            'min-lg:w-[800px] max-lg:mx-[30px]',
            props.listStoriesProfile.length && 'grid grid-cols-3 grid-row-1 gap-y-[15px]'
        )}>
            {props.listStoriesProfile.length
                ? props.listStoriesProfile.map((obj, index) => <StoryElem clickStory={() => { }} obj={obj} key={index} />)
                : <div className='text-[22px] text-white text-center leading-[230px]'>
                    Историй нет
                </div>
            }
        </div>
    )
}