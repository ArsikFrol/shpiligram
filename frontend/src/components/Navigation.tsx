import { JSX } from 'react/jsx-runtime'
import { TRout } from '@/types/router'
import { CircleUser, MessageSquare, Settings, UserRoundPen } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type TElem = {
    id: number,
    text: string,
    elem: JSX.Element,
    link: TRout
}

const listNav: TElem[] = [
    { id: 1, text: 'Chats', elem: <MessageSquare strokeWidth={1.25} color='white' size={25} />, link: '/' },
    { id: 2, text: 'Contacts', elem: < CircleUser strokeWidth={1.25} color='white' size={25} />, link: '/contacts' },
    { id: 3, text: 'Settings', elem: <Settings strokeWidth={1.25} color='white' size={25} />, link: '/settings' },
    { id: 4, text: 'Profile', elem: <UserRoundPen strokeWidth={1.25} color='white' size={25} />, link: '/profile' }
]

export default function Navigation() {
    return (
        <div className='bg-[#202D3D] rounded-2xl flex items-center gap-x-[50px] px-[50px] py-[20px] shadow'>
            {
                listNav.map((obj, index: number) => {
                    return (
                        <Link href={obj.link} className={cn(
                            "flex flex-col items-center gap-y-[10px]",
                            'hover:scale-105 transition-transform duration-300 cursor-pointer'
                        )} key={index}>
                            {obj.elem}
                            <div className='text-white font-medium text-[15px]'>{obj.text}</div>
                        </Link>
                    )
                })
            }
        </div>
    )
}