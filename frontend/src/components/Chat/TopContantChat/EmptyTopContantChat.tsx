'use client'

import { ArrowLeft, CircleUser, Copy, EllipsisVertical, Forward, Phone, Pin, Reply, Trash } from "lucide-react"

import { cn } from "@/lib/utils"
import ThreeDots from "@/components/UI/ThreeDots"
import { JSX, useState } from "react"

type TSetting = {
    id: number,
    text: string,
    elem: JSX.Element

    onClick: () => void
}

const listSettings: TSetting[] = [
    {id: 1, elem: <Reply color="white" size={25} />, text: 'Reply', onClick: () => {}},
    {id: 2, elem: <Copy color="white" size={25} />, text: 'Copy', onClick: () => {}},
    {id: 3, elem: <Forward color="white" size={25} />, text: 'Forward', onClick: () => {}},
    {id: 4, elem: <Pin color="white" size={25} />, text: 'Pin', onClick: () => {}},
    {id: 5, elem: <Trash color="white" size={25} />, text: 'Delete', onClick: () => {}}
]

export default function EmptyTopContantChat() {
    const [showSettings, setShowSettings] = useState<boolean>(false)
    
    return (
        <div className={cn(
            'mx-[10px] bg-container my-[10px] py-[10px]',
            'flex justify-between items-center px-[40px] rounded-2xl'
        )}>
            <div className='w-[35px] h-[35px] flex justify-center items-center group  cursor-pointer'>
                <ArrowLeft color="#ffffff" size={20}
                    className="group-hover:scale-115 transition-transform duration-300" />
            </div>
            <div className={cn(
                'flex gap-x-[10px] hover:scale-105 transition-transform duration-300 cursor-pointer'
            )}>
                <CircleUser size={40} strokeWidth={1} color="#ffffff" />
                <div className=''>
                    <div className='flex items-center gap-x-[5px]'>
                        <div className='text-[16px] font-semibold text-white'>
                            Пользователь
                        </div>
                        <div className='text-[16px] font-semibold text-white'>
                            не найден
                        </div>
                    </div>
                    <div className='text-[14px] font-medium text-gray-500'>
                        Неизвестно
                    </div>
                </div>
            </div>
            <div className='flex gap-x-[20px] items-center'>
                <div className='w-[35px] h-[35px] flex justify-center items-center group cursor-pointer'>
                    <Phone color="#ffffff" size={25}
                        className="group-hover:scale-115 transition-transform duration-300" />
                </div>
                <div className='w-[35px] h-[35px] flex justify-center items-center group cursor-pointer'>
                    <EllipsisVertical size={25} color="white" onClick={() => setShowSettings(true)} />
                    {showSettings &&
                        <div className={cn(
                            ''
                        )}>
                            {
                                listSettings.map((obj: TSetting, index) => {
                                    return(
                                        <div key={index} className={cn(
                                            "flex items-center gap-x-[10px]"
                                        )}>
                                            {obj.elem}
                                            <div className="">{obj.text}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}