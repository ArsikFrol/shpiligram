'use client'

import { Eye, Heart, X } from "lucide-react"
import { useState } from "react"

import ThreeDots from "@/components/UI/ThreeDots"
import { formatMonthDayTime } from "@/lib/formatDate"
import { cn } from "@/lib/utils"
import { TGetStoryProfile } from "@/store/stories/types"

type Props = {
    listStoriesProfile: TGetStoryProfile[],

    showIdSroty: string,

    setShowStory: (value: boolean) => void
}

type TSetting = {
    id: number,
    text: string,
    onClick: () => void
}

const listSettings: TSetting[] = [
    { id: 1, onClick: () => { console.log('sdf') }, text: 'Удалить историю' },
    { id: 2, onClick: () => { }, text: 'Посмотреть статистику' },
    { id: 3, onClick: () => { }, text: 'Переместить в архив' }
]

export default function ShowStoryFromProfile(props: Props) {
    const [showSettings, setShowSettings] = useState<boolean>(false)

    const chat = props.listStoriesProfile.find(story => story.storyId === props.showIdSroty)

    if (!chat) return <div className=''>Данных нет</div>

    return (
        <div className='fixed top-0 left-0 w-full h-screen bg-black/50 z-10'>
            <div className={cn(
                'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
            )}>
                <div className='flex flex-col bg-bg w-[450px] h-[670px] rounded-2xl p-[10px]'>
                    <div className='relative flex justify-between items-center mb-[10px]'>
                        <div className='flex items-center gap-x-[10px] text-[16px] text-white'>
                            <div className=''>Published:</div>
                            <div className=''>
                                {formatMonthDayTime(chat.releaseDate)}
                            </div>
                        </div>
                        <ThreeDots onClick={() => setShowSettings(!showSettings)} onClose={() => setShowSettings(false)}
                            classForElem="text-left text-[14px] text-white" listSettings={listSettings} classForContainer={cn(
                                'bg-bg w-[180px]'
                            )} />
                    </div>
                    <div className={cn(
                        'bg-gray-400 w-full rounded-2xl flex-1'
                    )}>
                        Тут будет исотрия
                    </div>
                    <div className='flex gap-x-[20px] items-center pt-[10px] pl-[10px]'>
                        <div className='flex items-center gap-x-[10px]'>
                            <div className='text-[20px] text-white'>
                                {chat._countLikes}
                            </div>
                            <Heart color="white" size={25} />
                        </div>
                        <div className='flex items-center gap-x-[10px]'>
                            <div className='text-[20px] text-white'>
                                {chat._countViewed}
                            </div>
                            <Eye color="white" size={25} />
                        </div>
                    </div>
                </div>
                <div className={cn(
                    'w-[50px] h-[50px] rounded-2xl bg-container flex justify-center items-center',
                    'hover:scale-105 transition-transform duration-300 cursor-pointer',
                    'absolute right-[-70px] top-0',
                )}
                    onClick={() => props.setShowStory(false)}>
                    <X size={30} color="white" />
                </div>
            </div>
        </div>
    )
}