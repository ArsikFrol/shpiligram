'use client'

import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import { useState } from "react";

type TPostBtn = {
    id: number,
    text: string
}

type TPost = {
    id: number,
    photo: string,
    coutViews: number
}

const listPostBtn: TPostBtn[] = [
    { id: 1, text: 'Posts' },
    { id: 2, text: 'Archined Posts' }
]

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

export default function Posts() {

    const [activeElem, setactiveElem] = useState<number>(1)

    return (
        <div className=''>
            <div className='flex gap-x-[10px] w-[310px] mx-auto bg-bg p-[5px] rounded-2xl my-[20px]'>
                {
                    listPostBtn.map((obj, index: number) => {
                        return (
                            <div key={index} className={cn(
                                'text-[15px] w-[150px] text-center font-bold text-gray-500 py-[5px]',
                                activeElem === obj.id
                                    ? 'bg-active-bg text-active-text rounded-2xl'
                                    : 'hover:scale-105 transition-transform duration-300 cursor-pointer'
                            )} onClick={() => setactiveElem(obj.id)}>{obj.text}</div>
                        )
                    })
                }
            </div>
            <div className='w-[600px] bg-bg rounded-2xl mx-auto grid grid-cols-3 gap-y-[15px] py-[10px]'>
                {
                    listPosts.map((obj, index: number) => {
                        return (
                            <div key={index} className={cn(
                                'hover:scale-105 transition-transform duration-300 cursor-pointer',
                                'w-[180px] h-[200px] mx-auto bg-container rounded-2xl relative',
                            )}>
                                <div className='absolute right-0 bottom-0 flex gap-x-[5px] items-center'>
                                    <div className='text-[12px] font-medium text-white'>{obj.coutViews}</div>
                                    <Eye color="white" size={20} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}