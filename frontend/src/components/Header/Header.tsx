'use client'

import { cn } from "@/lib/utils";
import { EllipsisVertical, Search } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Stories from "./Stories";
import RowStories from "./RowStories";
import QrCodeCom from "./QrCodeCom";
import StoriesFullScreen from "./StoriesFullScreen";

type Props = {
    hiddenSearch?: boolean,
    showQrCode?: boolean,
    showGroupStories?: boolean

    showRowStories?: boolean,
    setShowRowStories?: Dispatch<SetStateAction<boolean>>,

    userId?: string,
    userName?: string
}

export type TStories = {
    id: number,

    icon: string,
    storiesPhoto: string
    nameProfile: string,
    releaseDate: string, /*  day at HH:MM  */

    like: boolean,
}

const listStories: TStories[] = [
    { id: 1, icon: "https://i.pravatar.cc/150?img=1", nameProfile: "Анна Кузнецова", releaseDate: "Monday at 14:30", like: true, storiesPhoto: "https://picsum.photos/id/1/400/600" },
    { id: 2, icon: "https://i.pravatar.cc/150?img=2", nameProfile: "Петр Смирнов", releaseDate: "Monday at 09:15", like: false, storiesPhoto: "https://picsum.photos/id/2/400/600" },
    { id: 3, icon: "https://i.pravatar.cc/150?img=3", nameProfile: "Мария Иванова", releaseDate: "Tuesday at 21:45", like: true, storiesPhoto: "https://picsum.photos/id/3/400/600" },
    { id: 4, icon: "https://i.pravatar.cc/150?img=4", nameProfile: "Дмитрий Козлов", releaseDate: "Tuesday at 07:30", like: false, storiesPhoto: "https://picsum.photos/id/4/400/600" },
    { id: 5, icon: "https://i.pravatar.cc/150?img=5", nameProfile: "Елена Соколова", releaseDate: "Wednesday at 18:20", like: true, storiesPhoto: "https://picsum.photos/id/5/400/600" },
    { id: 6, icon: "https://i.pravatar.cc/150?img=6", nameProfile: "Алексей Воронов", releaseDate: "Wednesday at 11:00", like: false, storiesPhoto: "https://picsum.photos/id/6/400/600" },
    { id: 7, icon: "https://i.pravatar.cc/150?img=7", nameProfile: "Ольга Морозова", releaseDate: "Thursday at 23:15", like: true, storiesPhoto: "https://picsum.photos/id/7/400/600" },
    { id: 8, icon: "https://i.pravatar.cc/150?img=8", nameProfile: "Игорь Павлов", releaseDate: "Thursday at 05:40", like: false, storiesPhoto: "https://picsum.photos/id/8/400/600" },
    { id: 9, icon: "https://i.pravatar.cc/150?img=9", nameProfile: "Татьяна Громова", releaseDate: "Friday at 16:55", like: true, storiesPhoto: "https://picsum.photos/id/9/400/600" },
    { id: 10, icon: "https://i.pravatar.cc/150?img=10", nameProfile: "Максим Федоров", releaseDate: "Saturday at 12:10", like: false, storiesPhoto: "https://picsum.photos/id/10/400/600" },
    { id: 11, icon: "https://i.pravatar.cc/150?img=1", nameProfile: "Анна Кузнецова", releaseDate: "Monday at 14:30", like: true, storiesPhoto: "https://picsum.photos/id/1/400/600" },
    { id: 12, icon: "https://i.pravatar.cc/150?img=1", nameProfile: "Анна Кузнецова", releaseDate: "Monday at 14:30", like: true, storiesPhoto: "https://picsum.photos/id/1/400/600" },
    { id: 13, icon: "https://i.pravatar.cc/150?img=1", nameProfile: "Анна Кузнецова", releaseDate: "Monday at 14:30", like: true, storiesPhoto: "https://picsum.photos/id/1/400/600" },
    { id: 14, icon: "https://i.pravatar.cc/150?img=1", nameProfile: "Анна Кузнецова", releaseDate: "Monday at 14:30", like: true, storiesPhoto: "https://picsum.photos/id/1/400/600" },
    { id: 15, icon: "https://i.pravatar.cc/150?img=1", nameProfile: "Анна Кузнецова", releaseDate: "Monday at 14:30", like: true, storiesPhoto: "https://picsum.photos/id/1/400/600" },
    { id: 16, icon: "https://i.pravatar.cc/150?img=1", nameProfile: "Анна Кузнецова", releaseDate: "Monday at 14:30", like: true, storiesPhoto: "https://picsum.photos/id/1/400/600" },
    { id: 17, icon: "https://i.pravatar.cc/150?img=1", nameProfile: "Анна Кузнецова", releaseDate: "Monday at 14:30", like: true, storiesPhoto: "https://picsum.photos/id/1/400/600" },
    { id: 18, icon: "https://i.pravatar.cc/150?img=1", nameProfile: "Анна Кузнецова", releaseDate: "Monday at 14:30", like: true, storiesPhoto: "https://picsum.photos/id/1/400/600" },
    { id: 19, icon: "https://i.pravatar.cc/150?img=1", nameProfile: "Анна Кузнецова", releaseDate: "Monday at 14:30", like: true, storiesPhoto: "https://picsum.photos/id/1/400/600" },
    { id: 20, icon: "https://i.pravatar.cc/150?img=1", nameProfile: "Анна Кузнецова", releaseDate: "Monday at 14:30", like: true, storiesPhoto: "https://picsum.photos/id/1/400/600" },
    { id: 21, icon: "https://i.pravatar.cc/150?img=2", nameProfile: "Петр Смирнов", releaseDate: "Monday at 09:15", like: false, storiesPhoto: "https://picsum.photos/id/2/400/600" },
    { id: 22, icon: "https://i.pravatar.cc/150?img=2", nameProfile: "Петр Смирнов", releaseDate: "Monday at 09:15", like: false, storiesPhoto: "https://picsum.photos/id/2/400/600" },
    { id: 23, icon: "https://i.pravatar.cc/150?img=2", nameProfile: "Петр Смирнов", releaseDate: "Monday at 09:15", like: false, storiesPhoto: "https://picsum.photos/id/2/400/600" },
    { id: 24, icon: "https://i.pravatar.cc/150?img=2", nameProfile: "Петр Смирнов", releaseDate: "Monday at 09:15", like: false, storiesPhoto: "https://picsum.photos/id/2/400/600" },
    { id: 25, icon: "https://i.pravatar.cc/150?img=2", nameProfile: "Петр Смирнов", releaseDate: "Monday at 09:15", like: false, storiesPhoto: "https://picsum.photos/id/2/400/600" },
    { id: 26, icon: "https://i.pravatar.cc/150?img=2", nameProfile: "Петр Смирнов", releaseDate: "Monday at 09:15", like: false, storiesPhoto: "https://picsum.photos/id/2/400/600" },
    { id: 27, icon: "https://i.pravatar.cc/150?img=2", nameProfile: "Петр Смирнов", releaseDate: "Monday at 09:15", like: false, storiesPhoto: "https://picsum.photos/id/2/400/600" },
    { id: 28, icon: "https://i.pravatar.cc/150?img=2", nameProfile: "Петр Смирнов", releaseDate: "Monday at 09:15", like: false, storiesPhoto: "https://picsum.photos/id/2/400/600" },
    { id: 29, icon: "https://i.pravatar.cc/150?img=2", nameProfile: "Петр Смирнов", releaseDate: "Monday at 09:15", like: false, storiesPhoto: "https://picsum.photos/id/2/400/600" },
    { id: 30, icon: "https://i.pravatar.cc/150?img=2", nameProfile: "Петр Смирнов", releaseDate: "Monday at 09:15", like: false, storiesPhoto: "https://picsum.photos/id/2/400/600" },
]

export default function Header(props: Props) {
    const [showBurger, setShowBurger] = useState<boolean>(false)
    const [showQrCode, setshowQrCode] = useState<boolean>(props.showQrCode || false)

    const [hiddenSearch, sethiddenSearch] = useState<boolean | undefined>(props.hiddenSearch || false)

    const [showBigStories, setShowBigStories] = useState<boolean>(false)
    const [idStoriesShow, setIdStoriesShow] = useState<number>(0)

    const clickShowBurger = () => {
        setShowBurger(!showBurger)
    }

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY > 0 && props.setShowRowStories) props.setShowRowStories(false)
        }

        window.addEventListener('wheel', handleWheel)
        return () => window.removeEventListener('wheel', handleWheel)
    }, [])

    return (
        <>
            <div className='flex justify-between relative'>
                {showQrCode
                    ? <QrCodeCom userId={props.userId?.length ? props.userId : '1'}
                        userName={props.userName?.length ? props.userName : 'none_none  '} />
                    : <div className=''>
                        {(props.showRowStories === false && props.setShowRowStories) &&
                            <Stories setShowRowStories={props.setShowRowStories} />
                        }
                        <div className={cn(
                            'text-[25px] text-white font-semibold',
                            props.showRowStories ? '' : 'pl-[90px]'
                        )}>
                            Shpiligram
                        </div>
                    </div>
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
            {props.showRowStories &&
                <RowStories listStories={listStories}
                    setIdStoriesShow={setIdStoriesShow} setShowBigStories={setShowBigStories} />
            }
            {showBigStories &&
                <StoriesFullScreen obj={listStories[idStoriesShow]} idStoriesShow={idStoriesShow}
                    setShowBigStories={setShowBigStories} />
            }
        </>
    )
}