import { cn } from "@/lib/utils"
import { TGetStoryProfile } from "@/store/stories/types"
import { Eye } from "lucide-react"

type Props = {
    obj: TGetStoryProfile,

    clickStory: (storyId: string) => void
}

export default function PostElem(props: Props) {
    return (
        <div className={cn(
            'hover:scale-105 transition-transform duration-300 cursor-pointer',
            'w-[180px] h-[200px] mx-auto bg-container rounded-2xl relative',
        )} onClick={() => props.clickStory(props.obj.storyId)}>
            <div className='absolute right-[10px] bottom-[5px] flex gap-x-[5px] items-center'>
                <div className='text-[12px] font-medium text-white'>{props.obj._countViewed}</div>
                <Eye color="white" size={20} />
            </div>
        </div>
    )
}