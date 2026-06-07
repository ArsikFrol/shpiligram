import { UserCircleIcon } from "lucide-react"
import { TStories } from "./Header"
import { cn } from "@/lib/utils"
import { Dispatch, SetStateAction } from "react"

type Props = {
    listStories: TStories[]
    setIdStoriesShow: Dispatch<SetStateAction<number>>,
    setShowBigStories: Dispatch<SetStateAction<boolean>>
}

export default function RowStories(props: Props) {

    const clickStory = (id: number) => {
        props.setShowBigStories(true)
        props.setIdStoriesShow(id)
    }

    return (
        <div className='flex gap-x-[20px] my-[10px] w-[1140px] overflow-x-auto'>
            {
                props.listStories.map((obj, index: number) => {
                    return (
                        <UserCircleIcon size={60} color="white" strokeWidth={1} key={index}
                            className={cn(
                                "hover:scale-105 transition-transform duration-300 cursor-pointer w-[60px]",
                                'flex-shrink-0'
                            )} onClick={() => clickStory(obj.id)} />
                    )
                })
            }
        </div>
    )
}