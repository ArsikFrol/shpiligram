'use client'

import { cn } from "@/lib/utils";
import { TGift } from "./PostsGifts";
import { Gift, Star, UserCircle2, X } from "lucide-react";
import { Dispatch, SetStateAction, useEffect } from "react";

type Props = {
    obj: TGift,
    setShowDescGift: Dispatch<SetStateAction<boolean>>
}

export default function DescGift(props: Props) {

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') props.setShowDescGift(false)
        }

        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [])

    return (
        <div className='fixed left-0 top-0 w-full h-screen bg-bg z-50'>
            <div className={cn(
                'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                'w-[600px] bg-container rounded-2xl p-[20px]'
            )}>
                <div className='w-[300px] h-[200px] rounded-2xl mx-auto flex justify-center items-center mb-[30px]'
                    style={{ background: props.obj.colorBg }}>
                    <Gift size={60} color="white" />
                </div>
                <div className='border border-gray-400 rounded-2xl p-[20px]'>
                    <div className='flex items-center border-b border-gray-400'>
                        <div className={cn(
                            'w-[100px] text-[18px] text-white flex text-left h-[70px] leading-[70px]',
                            'border-r border-r-gray-400 mr-[30px]'
                        )}>From</div>
                        <div className='flex items-center gap-x-[10px]'>
                            <UserCircle2 strokeWidth={1} color="white" size={30} />
                            <div className='text-[20px] text-white'>{props.obj.senderName}</div>
                        </div>
                    </div>
                    <div className='flex items-center border-b border-gray-400'>
                        <div className={cn(
                            'w-[100px] text-[18px] text-white flex text-left h-[70px] leading-[70px]',
                            'border-r border-r-gray-400 mr-[30px]'
                        )}>Date</div>
                        <div className='text-[18px] text-white'>{props.obj.date}</div>
                    </div>
                    <div className='flex items-center border-b border-gray-400'>
                        <div className={cn(
                            'w-[100px] text-[18px] text-white flex text-left h-[70px] leading-[70px]',
                            'border-r border-r-gray-400 mr-[30px]'
                        )}>Value</div>
                        <div className='flex items-center gap-x-[10px]'>
                            <Star fill="yellow" color="yellow" size={25} />
                            <div className='text-[20px] text-white'>{props.obj.priceGift}</div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className={cn(
                            'w-[99px] text-[18px] text-white flex text-left h-[70px] leading-[70px]',
                        )}>Comment</div>
                        <div className='flex items-center gap-x-[10px]'>
                            <div className={cn(
                                'text-[18px] text-white w-[350px] border-l border-l-gray-400 pl-[30px]',
                                'min-h-[70px] flex items-center pt-[10px]'
                            )}>{props.obj.commentGift}</div>
                        </div>
                    </div>
                </div>
                <div className={cn(
                    'w-[50px] h-[50px] rounded-2xl bg-bg flex justify-center items-center',
                    'absolute right-[10px] top-[10px]',
                    'hover:scale-105 transition-transform duration-300 cursor-pointer'
                )} onClick={() => props.setShowDescGift(false)}>
                    <X size={30} color="white" />
                </div>
            </div>
        </div>
    )
}