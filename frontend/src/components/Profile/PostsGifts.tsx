'use client'

import { cn } from "@/lib/utils"
import { useState } from "react"
import ListPosts from "./ListPosts"
import ListGifts from "./ListGifts"

type TPostBtn = {
    id: number,
    text: string
}


const listPostBtn: TPostBtn[] = [
    { id: 1, text: 'Posts' },
    { id: 2, text: 'Gifts' }
]


export type TPost = {
    id: number,
    photo: string,
    coutViews: number
}

export type TGift = {
    id: number,
    imageGift: string,
    senderPhotoProfil: string,
    senderName: string,
    date: string,        /* 30 Mar 2026 at HH:MM */
    priceGift: number,
    commentGift: string,
    colorBg: string,   /* #ffffff */
}

const listPosts: TPost[] = [
    { id: 1, photo: "https://picsum.photos/id/10/400/500", coutViews: 1234 },
    { id: 2, photo: "https://picsum.photos/id/11/400/500", coutViews: 567 },
    { id: 3, photo: "https://picsum.photos/id/12/400/500", coutViews: 8920 },
    { id: 4, photo: "https://picsum.photos/id/13/400/500", coutViews: 341 },
    { id: 5, photo: "https://picsum.photos/id/14/400/500", coutViews: 7523 },
    { id: 6, photo: "https://picsum.photos/id/15/400/500", coutViews: 12890 },
    { id: 7, photo: "https://picsum.photos/id/16/400/500", coutViews: 456 },
    { id: 8, photo: "https://picsum.photos/id/17/400/500", coutViews: 6789 },
    { id: 9, photo: "https://picsum.photos/id/18/400/500", coutViews: 2345 },
    { id: 10, photo: "https://picsum.photos/id/19/400/500", coutViews: 987 },
    { id: 11, photo: "https://picsum.photos/id/20/400/500", coutViews: 54321 },
    { id: 12, photo: "https://picsum.photos/id/21/400/500", coutViews: 1111 },
    { id: 13, photo: "https://picsum.photos/id/22/400/500", coutViews: 8765 },
    { id: 14, photo: "https://picsum.photos/id/23/400/500", coutViews: 432 },
    { id: 15, photo: "https://picsum.photos/id/24/400/500", coutViews: 9999 }
]

const listGifts: TGift[] = [
    { id: 1, imageGift: "🎂", senderPhotoProfil: "https://i.pravatar.cc/150?img=1", senderName: "Анна Кузнецова", date: "30 Mar 2026 at 10:15", priceGift: 25, commentGift: "С днём рождения! 🎉", colorBg: "#FFD1D1" },
    { id: 2, imageGift: "💐", senderPhotoProfil: "https://i.pravatar.cc/150?img=2", senderName: "Петр Смирнов", date: "28 Mar 2026 at 14:30", priceGift: 15, commentGift: "Ты лучшая! ❤️", colorBg: "#D1FFD1" },
    { id: 3, imageGift: "🍕", senderPhotoProfil: "https://i.pravatar.cc/150?img=3", senderName: "Мария Иванова", date: "25 Mar 2026 at 19:45", priceGift: 10, commentGift: "Приятного аппетита!", colorBg: "#FFE4B5" },
    { id: 4, imageGift: "🎁", senderPhotoProfil: "https://i.pravatar.cc/150?img=4", senderName: "Дмитрий Козлов", date: "22 Mar 2026 at 09:00", priceGift: 50, commentGift: "Сюрприз! 🎊", colorBg: "#D1D1FF" },
    { id: 5, imageGift: "📚", senderPhotoProfil: "https://i.pravatar.cc/150?img=5", senderName: "Елена Соколова", date: "20 Mar 2026 at 16:20", priceGift: 30, commentGift: "Для вдохновения", colorBg: "#FADADD" },
    { id: 6, imageGift: "☕", senderPhotoProfil: "https://i.pravatar.cc/150?img=6", senderName: "Алексей Воронов", date: "18 Mar 2026 at 08:30", priceGift: 5, commentGift: "Хорошего дня!", colorBg: "#D4E6F1" },
    { id: 7, imageGift: "🧸", senderPhotoProfil: "https://i.pravatar.cc/150?img=7", senderName: "Ольга Морозова", date: "15 Mar 2026 at 21:10", priceGift: 20, commentGift: "Мягкий подарок 😊", colorBg: "#F9E79F" },
    { id: 8, imageGift: "💎", senderPhotoProfil: "https://i.pravatar.cc/150?img=8", senderName: "Игорь Павлов", date: "12 Mar 2026 at 12:00", priceGift: 100, commentGift: "Шикарный подарок! 👑", colorBg: "#E0BBE4" },
    { id: 9, imageGift: "🎮", senderPhotoProfil: "https://i.pravatar.cc/150?img=9", senderName: "Татьяна Громова", date: "10 Mar 2026 at 18:45", priceGift: 60, commentGift: "Для геймера 🎯", colorBg: "#A9CCE3" },
    { id: 10, imageGift: "💄", senderPhotoProfil: "https://i.pravatar.cc/150?img=10", senderName: "Максим Федоров", date: "08 Mar 2026 at 11:30", priceGift: 35, commentGift: "С 8 марта! 🌸", colorBg: "#FAD1E6" },
    { id: 11, imageGift: "🏀", senderPhotoProfil: "https://i.pravatar.cc/150?img=11", senderName: "Виктория Лебедева", date: "05 Mar 2026 at 17:15", priceGift: 45, commentGift: "Спортивный подарок", colorBg: "#FFDAB9" },
    { id: 12, imageGift: "🎸", senderPhotoProfil: "https://i.pravatar.cc/150?img=12", senderName: "Сергей Новиков", date: "01 Mar 2026 at 20:00", priceGift: 80, commentGift: "Рок-н-ролл! 🤘", colorBg: "#C3B1E1" },
    { id: 13, imageGift: "🍷", senderPhotoProfil: "https://i.pravatar.cc/150?img=13", senderName: "Наталья Крылова", date: "25 Feb 2026 at 22:30", priceGift: 40, commentGift: "За встречу!", colorBg: "#B5EAD7" },
    { id: 14, imageGift: "📸", senderPhotoProfil: "https://i.pravatar.cc/150?img=14", senderName: "Андрей Соловьев", date: "20 Feb 2026 at 14:00", priceGift: 55, commentGift: "Для ярких моментов", colorBg: "#FFCC99" },
    { id: 15, imageGift: "✈️", senderPhotoProfil: "https://i.pravatar.cc/150?img=15", senderName: "Екатерина Волкова", date: "14 Feb 2026 at 09:45", priceGift: 120, commentGift: "Счастливого пути! 🌍", colorBg: "#99CCFF" }
]

export default function PostsGifts() {
    const [activeBtn, setactiveBtn] = useState<number>(1)

    return (
        <div className=''>
            <div className='flex gap-x-[10px] w-[310px] mx-auto bg-bg p-[5px] rounded-2xl my-[20px]'>
                {
                    listPostBtn.map((obj, index: number) => {
                        return (
                            <div key={index} className={cn(
                                'text-[15px] w-[150px] text-center font-bold text-gray-500 py-[5px]',
                                activeBtn === obj.id
                                    ? 'bg-active-bg text-blue-400 rounded-2xl'
                                    : 'hover:scale-105 transition-transform duration-300 cursor-pointer'
                            )} onClick={() => setactiveBtn(obj.id)}>{obj.text}</div>
                        )
                    })
                }
            </div>
            {activeBtn === 1
                ? <ListPosts listPosts={listPosts} />
                : <ListGifts listGifts={listGifts} />
            }
        </div>
    )
}