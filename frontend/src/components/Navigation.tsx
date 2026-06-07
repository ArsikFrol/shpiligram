'use client'

import { JSX } from 'react/jsx-runtime'
import { TRout } from '@/types/router'
import { CircleUser, MessageSquare, Settings, UserRoundPen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { cloneElement, useState } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
    activeElem: number
}

type TElem = {
    id: number,
    text: string,
    elem: JSX.Element,
    link: TRout
}

const listNav: TElem[] = [
    { id: 1, text: 'Chats', elem: <MessageSquare color='white' size={25} />, link: '/' },
    { id: 2, text: 'Contacts', elem: < CircleUser color='white' size={25} />, link: '/contacts' },
    { id: 3, text: 'Settings', elem: <Settings color='white' size={25} />, link: '/settings' },
    { id: 4, text: 'Profile', elem: <UserRoundPen color='white' size={25} />, link: '/profile' }
]

export default function Navigation(props: Props) {
    const router = useRouter()

    const [activeElem, setActiveElem] = useState<number>(props.activeElem)

    const clickNav = (obj: TElem) => {
        setActiveElem(obj.id)
        router.push(obj.link)
    }

    return (
        <div className='bg-[#202D3D] rounded-4xl flex items-center gap-x-[10px] px-[10px] py-[10px] shadow'>
            {
                listNav.map((obj, index: number) => {
                    const isActive = activeElem === obj.id
                    const activeColor = 'oklch(62.3% 0.214 259.815)'

                    return (
                        <div className={cn(
                            "flex flex-col items-center gap-y-[5px] w-[150px] py-[10px]",
                            'hover:scale-105 transition-transform duration-300 cursor-pointer',
                            isActive && 'bg-active-bg rounded-4xl'
                        )} key={index} onClick={() => clickNav(obj)}>
                            {isActive
                                ? cloneElement(obj.elem, { color: activeColor })
                                : obj.elem
                            }
                            <div className={cn(
                                'text-white font-semibold text-[15px]',
                                isActive && 'text-blue-500'
                            )}>{obj.text}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}