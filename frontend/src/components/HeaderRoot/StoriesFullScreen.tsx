'use client'

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Heart, SendHorizontal, Share2, UserCircleIcon, X } from "lucide-react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { TGetStory } from "@/store/stories/types"
import { formatDateTime } from "@/lib/formatDate"

type Props = {
    obj: TGetStory,

    setShowBigStories: (value: boolean) => void
}

export default function StoriesFullScreen(props: Props) {

    const router = useRouter()

    const [valueInput, setValueInput] = useState<string>('')

    const clickSent = () => {
        props.setShowBigStories(false)
    }

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                props.setShowBigStories(false)
            }
        }

        window.addEventListener('keydown', handleEsc)
        return () => {
            window.removeEventListener('keydown', handleEsc)
        }
    }, [])

    return (
        <div className='fixed top-0 left-0 w-full h-screen bg-bg z-50'>
            <div className={cn(
                'flex justify-between items-center w-[600px]',
                'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            )}>
                <div className={cn(
                    'bg-container flex justify-center items-center rounded-2xl',
                    'w-[50px] h-[50px] hover:scale-105 hover:translate-x-[-5px] duration-300',
                    'bg-container flex justify-center items-center cursor-pointer'
                )}>
                    <ChevronLeft color="white" size={40} strokeWidth={1} />
                </div>
                <div className='bg-container rounded-2xl h-[670px] w-[450px] relative'>
                    <div className={cn(
                        'pt-[10px] pl-[10px] flex items-center gap-x-[10px] w-[400px]',
                        'hover:scale-101 transition-transform duration-300 cursor-pointer'
                    )}
                        onClick={() => router.push(`/profile/${props.obj.userId}`)}>
                        <UserCircleIcon color="white" strokeWidth={1} size={50} />
                        <div className=''>
                            <div className='flex items-center gap-x-[5px]'>
                                <div className='text-[18px] text-white'>
                                    {props.obj.owner.firstName}
                                </div>
                                <div className='text-[18px] text-white'>
                                    {props.obj.owner.lastName}
                                </div>
                            </div>
                            <div className='text-[15px] text-gray-500'>
                                {formatDateTime(new Date(props.obj.releaseDate))}
                            </div>
                        </div>
                    </div>
                    <div className='bg-bg h-[540px] w-[430px] mx-auto mt-[10px] rounded-2xl text-center'>
                        Тут будет история
                    </div>
                    <div className='flex justify-between items-center p-[10px]'>
                        <div className='relative w-[300px] h-[40px]'>
                            <input value={valueInput} onChange={e => setValueInput(e.target.value)}
                                spellCheck='false'
                                className={cn(
                                    'bg-bg rounded-2xl w-[300px] h-[40px] pl-[15px] pr-[45px] focus:outline-0',
                                    'text-white text-[15px]',
                                )} placeholder='Message' />
                            <SendHorizontal color="white" size={25} strokeWidth={1} className={cn(
                                'absolute top-[7px] right-[10px]',
                                'hover:scale-105 transition-transform duration-300 cursor-pointer'
                            )} onClick={clickSent} />
                        </div>
                        <div className='flex items-center gap-x-[20px]'>
                            <Share2 color="white" size={30} strokeWidth={1} className={cn(
                                "rotate-180 hover:scale-105 transition-transform duration-300 cursor-pointer"
                            )} />
                            <Heart color="white" size={30} strokeWidth={1.5} className={cn(
                                'hover:scale-105 transition-transform duration-300 cursor-pointer'
                            )} />
                        </div>
                    </div>
                </div>
                <div className={cn(
                    'bg-container flex justify-center items-center rounded-2xl',
                    'w-[50px] h-[50px] hover:scale-105 hover:translate-x-[5px] duration-300',
                    'bg-container flex justify-center items-center cursor-pointer'
                )}>
                    <ChevronRight color="white" size={40} strokeWidth={1} />
                </div>
                <div className={cn(
                    'w-[50px] h-[50px] rounded-2xl bg-container flex justify-center items-center',
                    'hover:scale-105 transition-transform duration-300 cursor-pointer',
                    'absolute right-0 top-0',
                )}
                    onClick={() => props.setShowBigStories(false)}>
                    <X size={30} color="white" />
                </div>
            </div>
        </div>
    )
}