'use client'

import { TypeRoutes, useTypedRouter } from "@/hooks/useTypedRouter"
import { cn } from "@/lib/utils"
import { Pencil, Settings, SwitchCamera } from "lucide-react"
import { JSX } from "react/jsx-runtime"

type TElem = {
    id: number,
    text: string,
    elem: JSX.Element,
    link: TypeRoutes
}

const listElem: TElem[] = [
    { id: 1, link: '/profile', text: 'Set Photo', elem: <SwitchCamera color="white" strokeWidth={1.5} size={30} /> },
    { id: 2, link: '/editInfo', text: 'Edit info', elem: <Pencil color="white" strokeWidth={1.5} size={30} /> },
    { id: 3, link: '/settings', text: 'Settings', elem: <Settings color="white" strokeWidth={1.5} size={30} /> }
]

export default function SettingsProfile() {
    const router = useTypedRouter()

    return (
        <div className="flex justify-between w-[600px] mx-auto mt-[50px]">
            {
                listElem.map((obj, index: number) => {
                    return (
                        <div className={cn(
                            'bg-bg w-[150px] py-[10px] rounded-2xl flex flex-col gap-y-[10px]',
                            'hover:scale-105 transition-transform duration-300 cursor-pointer'
                        )} key={index} onClick={() => router.push(obj.link)}>
                            <div className='mx-auto w-[30px]'>{obj.elem}</div>
                            <div className='text-[15px] text-white font-semibold text-center'>{obj.text}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}