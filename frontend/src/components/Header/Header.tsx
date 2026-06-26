'use client'

import { useEffect, useState } from "react"

import Stories from "./Stories"
import RowStories from "./RowStories"
import StoriesFullScreen from "./StoriesFullScreen"
import useProfile from "@/store/profile/profileStore"
import { cn } from "@/lib/utils"
import ThreeDots from "../UI/ThreeDots"
import useChats from "@/store/chats/chatsStore"
import useStories from "@/store/stories/storiesStore"
import SkeletonStories from "../Skeletons/SkeletonStories"
import SearchHeader from "../SearchHeader"

type Props = {
    hiddenSearch?: boolean,
    showGroupStories?: boolean

    userId?: string,
    userName?: string
}

export default function Header(props: Props) {
    const [showBurger, setShowBurger] = useState<boolean>(false)

    const [hiddenSearch, sethiddenSearch] = useState<boolean | undefined>(props.hiddenSearch || false)

    const [showBigStories, setShowBigStories] = useState<boolean>(false)
    const [idStoriesShow, setIdStoriesShow] = useState<string>('')

    const clickShowBurger = () => {
        setShowBurger(!showBurger)
    }

    const {
        listStoriesInterlocutors,
        fetchListStoriesInterlocutors,
        loading,
    } = useStories()

    const {
        showRowStories, setShowRowStories,
        userId
    } = useProfile()

    const {
        listChats,
        listInterlocutorsId
    } = useChats()

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
                    {loading
                        ? [...Array(3)].map((_, index) => <SkeletonStories index={index} key={index} />)
                        : !showRowStories
                        && <Stories setShowRowStories={setShowRowStories} listStories={listStoriesInterlocutors} />
                    }
                    <div className={cn(
                        'text-[25px] text-white font-semibold',
                        showRowStories ? '' : 'pl-[90px]'
                    )}>
                        Shpiligram
                    </div>
                </div>
                <div className='flex items-center gap-x-[30px] ml-auto'>
                    <SearchHeader hiddenSearch={hiddenSearch} lengthChat={listChats.length} />
                    <ThreeDots onClick={clickShowBurger} />
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