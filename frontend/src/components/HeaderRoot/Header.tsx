'use client'

import { JSX, useEffect, useState } from "react"
import { BookMarked, Moon, Sun } from "lucide-react"

import Stories from "./Stories"
import RowStories from "./RowStories"
import StoriesFullScreen from "./StoriesFullScreen"
import useProfile from "@/store/profile/profileStore"
import { cn } from "@/lib/utils"
import ThreeDots from "../UI/ThreeDots"
import useChats from "@/store/chats/chatsStore"
import useStories from "@/store/stories/storiesStore"
import SkeletonStories from "../Skeletons/SkeletonStories"
import { TypeRoutes, useTypedRouter } from "@/hooks/useTypedRouter"
import SearchUI from "../UI/SearchUI"

type TElemSettings = {
    id: number,
    text: string,
    link?: TypeRoutes,
    elem?: JSX.Element
}

const listSettings: TElemSettings[] = [
    { id: 1, text: 'Day mode' },
    { id: 2, elem: <BookMarked size={25} color="white" />, text: 'Seved messages', link: '/chats/savedMessages' }
]

type Props = {
    hiddenSearch?: boolean,
    showGroupStories?: boolean

    userId?: string,
    userName?: string
}

export default function Header(props: Props) {
    const router = useTypedRouter()

    const [showBigStories, setShowBigStories] = useState<boolean>(false)
    const [idStoriesShow, setIdStoriesShow] = useState<string>('')

    const [showSettings, setShowSettings] = useState<boolean>(false)


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


    const clickShowBurger = () => {
        setShowSettings(!showSettings)
    }

    const clickSettings = (link: TypeRoutes | undefined) => {
        router.push(link ? link : '/chats')
    }


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

    const dayMode = 'sun'

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
                    <SearchUI hiddenSearch={!Boolean(listChats.length)} width={400} />
                    <div className="relative">
                        <ThreeDots onClick={clickShowBurger} />
                        <div className={cn(
                            "absolute top-[30px] right-[0px] bg-bg rounded-2xl p-[20px] w-[250px]",
                            'flex flex-col gap-y-[10px]'
                        )} style={showSettings ? {} : { display: 'none' }}>
                            {showSettings &&
                                listSettings.map((obj, index) => {
                                    return (
                                        <div key={index} className={cn(
                                            'h-[30px] leading-[30px] text-[18px] text-white',
                                            'flex items-center justify-between',
                                            'hover:scale-101 transition-transform duration-300 cursor-pointer'
                                        )}
                                            onClick={() => clickSettings(obj.link)}>
                                            <div className="">{obj.text}</div>
                                            {obj.id === 1
                                                ? dayMode === 'sun'
                                                    ? <Sun size={25} color="white" />
                                                    : <Moon size={25} color="white" />
                                                : obj.elem
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
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