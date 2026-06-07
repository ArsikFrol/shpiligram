'use client'

import { cn } from "@/lib/utils";
import { EllipsisVertical, QrCode, Search, UserCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
    hiddenSearch?: boolean,
    showQrCode?: boolean,
    showStories?: boolean
}

type TStories = {
    id: string,

    icon: string,
    storiesPhoto: string
    nameProfile: string,
    releaseDate: string, /*  day at HH:MM  */

    like: boolean,
}

const listStories: TStories[] = [
    { id: "1", icon: "https://i.pravatar.cc/150?img=1", nameProfile: "Анна Кузнецова", releaseDate: "Monday at 14:30", like: true, storiesPhoto: "https://picsum.photos/id/1/400/600" },
    { id: "2", icon: "https://i.pravatar.cc/150?img=2", nameProfile: "Петр Смирнов", releaseDate: "Monday at 09:15", like: false, storiesPhoto: "https://picsum.photos/id/2/400/600" },
    { id: "3", icon: "https://i.pravatar.cc/150?img=3", nameProfile: "Мария Иванова", releaseDate: "Tuesday at 21:45", like: true, storiesPhoto: "https://picsum.photos/id/3/400/600" },
    { id: "4", icon: "https://i.pravatar.cc/150?img=4", nameProfile: "Дмитрий Козлов", releaseDate: "Tuesday at 07:30", like: false, storiesPhoto: "https://picsum.photos/id/4/400/600" },
    { id: "5", icon: "https://i.pravatar.cc/150?img=5", nameProfile: "Елена Соколова", releaseDate: "Wednesday at 18:20", like: true, storiesPhoto: "https://picsum.photos/id/5/400/600" },
    { id: "6", icon: "https://i.pravatar.cc/150?img=6", nameProfile: "Алексей Воронов", releaseDate: "Wednesday at 11:00", like: false, storiesPhoto: "https://picsum.photos/id/6/400/600" },
    { id: "7", icon: "https://i.pravatar.cc/150?img=7", nameProfile: "Ольга Морозова", releaseDate: "Thursday at 23:15", like: true, storiesPhoto: "https://picsum.photos/id/7/400/600" },
    { id: "8", icon: "https://i.pravatar.cc/150?img=8", nameProfile: "Игорь Павлов", releaseDate: "Thursday at 05:40", like: false, storiesPhoto: "https://picsum.photos/id/8/400/600" },
    { id: "9", icon: "https://i.pravatar.cc/150?img=9", nameProfile: "Татьяна Громова", releaseDate: "Friday at 16:55", like: true, storiesPhoto: "https://picsum.photos/id/9/400/600" },
    { id: "10", icon: "https://i.pravatar.cc/150?img=10", nameProfile: "Максим Федоров", releaseDate: "Saturday at 12:10", like: false, storiesPhoto: "https://picsum.photos/id/10/400/600" }
]

export default function Header(props: Props) {
    const [showBurger, setShowBurger] = useState<boolean>(false)
    const [showQrCode, setshowQrCode] = useState<boolean>(props.showQrCode || false)
    const [showStories, setShowStories] = useState<boolean>(props.showStories || false)

    const [hiddenSearch, sethiddenSearch] = useState<boolean | undefined>(props.hiddenSearch || false)

    const clickShowBurger = () => {
        setShowBurger(!showBurger)
    }

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY > 0) {
                setShowStories(false)
            }
        }

        window.addEventListener('wheel', handleWheel)
        return () => window.removeEventListener('wheel', handleWheel)
    }, [])

    return (
        <div className=''>
            <div className='flex justify-between relative'>
                {!showQrCode
                    ? <div className=''>
                        {!showStories &&
                            <div className='reltive hover:scale-102 transition-transform duration-300 cursor-pointer'
                                onClick={() => setShowStories(true)}>
                                <UserCircleIcon size={40} color="white" strokeWidth={1}
                                    className="absolute left-0" />
                                <UserCircleIcon size={40} color="white" strokeWidth={1}
                                    className="absolute left-5 z-10" />
                                <UserCircleIcon size={40} color="white" strokeWidth={1}
                                    className="absolute left-10 z-20" />
                            </div>
                        }
                        <div className={cn(
                            'text-[25px] text-white font-semibold',
                            showStories ? '' : 'pl-[90px]'
                        )}>
                            Shpiligram
                        </div>
                    </div> : <QrCode size={40} color="white" strokeWidth={1}
                        className="hover:scale-105 transition-transform duration-300 cursor-pointer" />
                }
                <div className='flex items-center gap-x-[30px]'>
                    {!showQrCode ?
                        <Search color='white' size={25} className={cn(
                            'hover:scale-110 transition-transform duration-300 cursor-pointer',
                            hiddenSearch && 'hidden'
                        )} /> : undefined
                    }
                    <EllipsisVertical color='white' size={25} onClick={() => clickShowBurger()}
                        className={cn(
                            'hover:scale-110 transition-transform duration-300 cursor-pointer'
                        )} />
                </div>
            </div>
            {showStories &&
                <div className='flex gap-x-[20px] my-[10px]'>
                    {
                        listStories.slice(0, 5).map((obj, index: number) => {
                            return (
                                <UserCircleIcon size={60} color="white" strokeWidth={1} key={index}
                                    className="hover:scale-105 transition-transform duration-300 cursor-pointer" />
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}