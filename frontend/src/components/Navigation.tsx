'use client'

import { JSX } from 'react/jsx-runtime'
import { CircleUser, MessageSquare, Settings, UserRoundPen } from 'lucide-react'
import { cloneElement, useState } from 'react'

import { cn } from '@/lib/utils'
import useProfile from '@/store/profile/profileStore'
import useChats from '@/store/chats/chatsStore'
import useStories from '@/store/stories/storiesStore'
import { TypeRoutes, useTypedRouter } from '@/hooks/useTypedRouter'

type Props = {
    activeElem: number
}

type TElem = {
    id: number,
    text: string,
    elem: JSX.Element,
    link: TypeRoutes
}

const listNav: TElem[] = [
    { id: 1, text: 'Chats', elem: <MessageSquare color='white' />, link: '/chats' },
    { id: 2, text: 'Add Chat', elem: < CircleUser color='white' />, link: '/addChat' },
    { id: 3, text: 'Settings', elem: <Settings color='white' />, link: '/settings' },
    { id: 4, text: 'Profile', elem: <UserRoundPen color='white' />, link: '/profile' }
]

export default function Navigation(props: Props) {
    const router = useTypedRouter()

    const [activeElem, setActiveElem] = useState<number>(props.activeElem)

    const {
        setShowRowStories
    } = useProfile()

    const {
        setLoadingChats,
        deleteFromStoreAllChats
    } = useChats()

    const {
        deleteFromStoreAllStoriesInterlocutors,
        setLoadingStories
    } = useStories()

    const clickNav = (obj: TElem) => {
        router.push(obj.link)
        setActiveElem(obj.id)
        setShowRowStories(false)

        if (obj.link === '/chats') {
            deleteFromStoreAllChats()
            setLoadingChats(true)

            deleteFromStoreAllStoriesInterlocutors()
            setLoadingStories(true)
        }
    }

    return (
        <div className={cn(
            'bg-[#202D3D] rounded-4xl flex items-center gap-x-[10px] shadow',
            'min-md:p-[10px] max-md:p-[5px]',
        )}>
            {
                listNav.map((obj, index: number) => {
                    const isActive = activeElem === obj.id
                    const activeColor = 'oklch(62.3% 0.214 259.815)'

                    return (
                        <div className={cn(
                            "flex flex-col items-center gap-y-[5px] py-[10px]",
                            'hover:scale-105 transition-transform duration-300 cursor-pointer',
                            'min-md:w-[150px] max-md:w-[120px]',
                            isActive && 'bg-active-bg rounded-4xl'
                        )} key={index} onClick={() => clickNav(obj)}>
                            {isActive
                                ? cloneElement(obj.elem, { color: activeColor })
                                : obj.elem
                            }
                            <div className={cn(
                                'text-white font-semibold text-[15px]',
                                isActive && 'text-blue-400'
                            )}>{obj.text}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}