'use client'

import { useCallback, useEffect, useMemo, useState } from "react"
import { BookMarked, Moon, Sun } from "lucide-react"

import Stories from "./Stories"
import RowStories from "./RowStories"
import StoriesFullScreen from "./StoriesFullScreen"
import useProfile from "@/store/profile/profileStore"
import { cn } from "@/lib/utils"
import ThreeDots, { TSetting } from "../UI/ThreeDots"
import useChats from "@/store/chats/chatsStore"
import useStories from "@/store/stories/storiesStore"
import SkeletonStories from "../Skeletons/SkeletonStories"
import { useTypedRouter } from "@/hooks/useTypedRouter"
import SearchUI from "../UI/SearchUI"

export default function Header() {
    const router = useTypedRouter()
    const dayMode = 'sun'

    const listSettings: TSetting[] = useMemo(() => [
        {
            id: 1, onClick: () => { }, elem: dayMode === 'sun' ? <Sun size={25} color="white" /> : <Moon size={25} color="white" />, text: 'Day mode'
        },
        { id: 2, onClick: () => router.push('/chats/savedMessages'), elem: <BookMarked size={25} color="white" />, text: 'Seved messages', link: '/chats/savedMessages' }
    ], [dayMode])

    const [showBigStories, setShowBigStories] = useState<boolean>(false)
    const [idStoriesShow, setIdStoriesShow] = useState<string>('')

    const [showSettings, setShowSettings] = useState<boolean>(false)


    const {
        listStoriesInterlocutors,
        fetchListStoriesInterlocutors,
        loadingStories,
    } = useStories()

    const {
        showRowStories, setShowRowStories,
        userId
    } = useProfile()

    const {
        listChats,
        listInterlocutorsId
    } = useChats()


    const clickBurger = useCallback(() => {
        setShowSettings(!showSettings)
    }, [showSettings])

    const closeBurger = useCallback(() => {
        setShowSettings(false)
    }, [])


    useEffect(() => {
        if (listInterlocutorsId.length > 0) {
            fetchListStoriesInterlocutors(userId, listInterlocutorsId)
        }

        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY > 0 && setShowRowStories) setShowRowStories(false)
        }

        window.addEventListener('wheel', handleWheel)
        return () => window.removeEventListener('wheel', handleWheel)
    }, [userId, listInterlocutorsId])

    return (
        <>
            <div className='flex relative'>
                <div className=''>
                    {!showRowStories &&
                        <Stories loadingStories={loadingStories} setShowRowStories={setShowRowStories}
                            listStories={listStoriesInterlocutors} />
                    }
                    <div className={cn(
                        'text-[25px] text-white font-semibold',
                        showRowStories ? '' : 'pl-[90px]'
                    )}>
                        Shpiligram
                    </div>
                </div>
                <div className='flex items-center gap-x-[30px] ml-auto z-50'>
                    <SearchUI hiddenSearch={!Boolean(listChats.length)} width={400} placeholder="Chat" />
                    <ThreeDots onClick={clickBurger} onClose={closeBurger} classForElem={cn(
                        'h-[30px] leading-[30px] text-[18px] text-white',
                    )} classForContainer={cn(
                        'w-[250px] bg-bg gap-y-[15px]'
                    )} listSettings={listSettings} />
                </div>
            </div>
            {showRowStories &&
                <RowStories listStories={listStoriesInterlocutors}
                    setIdStoriesShow={setIdStoriesShow} setShowBigStories={setShowBigStories} />
            }
            {showBigStories &&
                <StoriesFullScreen obj={listStoriesInterlocutors.find(storyObj => storyObj.storyId === idStoriesShow)!}
                    setShowBigStories={setShowBigStories} />
            }
        </>
    )
}