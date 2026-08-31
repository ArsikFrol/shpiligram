'use client'

import { ClipLoader } from "react-spinners"
import { RotateCcw } from "lucide-react"

import { TActiveBtn } from "./Tabs"
import { cn } from "@/lib/utils"
import useGifts from "@/store/gifts/giftsStore"
import useStories from "@/store/stories/storiesStore"
import ListStories from "./Story/ListStories"
import ListGifts from "./Gift/ListGifts"
type Props = {
    activeBtn: TActiveBtn,

    userId: string
}

export default function Sort(props: Props) {
    const { listStoriesProfile, loadingStories, errorStories } = useStories()
    const { listGifts, loadingGifts, errorGifts } = useGifts()

    const clickReload = () => {
        window.location.reload()
    }

    if (loadingStories || loadingGifts) return (
        <div className={cn(
            'bg-bg rounded-2xl mx-auto p-[15px] h-[250px] flex items-center justify-center',
            'min-lg:w-[800px] max-lg:mx-[30px]'
        )}>
            <ClipLoader color="#3B82F6" size={50} cssOverride={{
                borderWidth: '4px'
            }} />
        </div>
    )

    if (errorStories && props.activeBtn !== 'gifts') return (
        <div className={cn(
            'bg-bg rounded-2xl mx-auto p-[15px] h-[250px] flex flex-col items-center justify-center',
            'min-lg:w-[800px] max-lg:mx-[30px]'
        )}>
            <div className='text-[20px] text-white'>Произошла ошибка при загрузке историй!</div>
            <div className={cn(
                "flex items-center justify-center gap-x-[10px] bg-[#20364D] text-white",
                'group hover:scale-101 transition-transform duration-300 cursor-pointer',
                'p-[10px] rounded-2xl w-[250px] mx-auto mt-[20px]'
            )} onClick={clickReload}>
                <RotateCcw color="white" size={25} className={cn(
                    "group-hover:rotate-[-360deg] transition-transform duration-1000"
                )} />
                <div className="">Перезагрузить</div>
            </div>
        </div>
    )

    if (errorStories && props.activeBtn === 'gifts') return (
        <div className={cn(
            'bg-bg rounded-2xl mx-auto p-[15px] h-[250px] flex flex-col items-center justify-center',
            'min-lg:w-[800px] max-lg:mx-[30px]'
        )}>
            <div className='text-[20px] text-white'>Произошла ошибка при загрузке подарков!</div>
            <div className={cn(
                "flex items-center justify-center gap-x-[10px] bg-[#20364D] text-white",
                'group hover:scale-101 transition-transform duration-300 cursor-pointer',
                'p-[10px] rounded-2xl w-[250px] mx-auto mt-[20px]'
            )} onClick={clickReload}>
                <RotateCcw color="white" size={25} className={cn(
                    "group-hover:rotate-[-360deg] transition-transform duration-1000"
                )} />
                <div className="">Перезагрузить</div>
            </div>
        </div>
    )

    return (
        <div className={cn(
            'bg-bg rounded-2xl mx-auto p-[15px] min-h-[250px]',
            'min-lg:w-[800px] max-lg:mx-[30px]'
        )}>
            {props.activeBtn === 'stories' &&
                <ListStories listStoriesProfile={listStoriesProfile} />
            }
            {props.activeBtn === 'arshinedStories' &&
                <ListStories listStoriesProfile={listStoriesProfile.filter(obj => obj.isArchined)} arshinedStories />
            }
            {props.activeBtn === 'gifts' &&
                <ListGifts listGifts={listGifts} />
            }
        </div>
    )
}