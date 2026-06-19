'use client'

import { cn } from "@/lib/utils"
import { Dispatch, SetStateAction, useState } from "react"
import toast from "react-hot-toast"

type Props = {
    textWarning: string,

    value: string,
    setValue: (newValue: string) => void,

    setShowWarning: Dispatch<SetStateAction<boolean>>
}

export default function WarningInput(props: Props) {
    const [value, setValue] = useState<string>('')

    const clickYes = () => {
        props.setShowWarning(false)
        if (value.length !== 0) {
            toast.success('Данные успешно сохранены!')
            props.setValue(value)
        }
    }

    return (
        <div className='fixed w-full h-screen top-0 left-0 bg-black/50 z-10'>
            <div className={cn(
                'w-[500px] bg-container rounded-2xl p-[20px]',
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            )}>
                <div className='text-white text-[20px] text-center mb-[40px]'>{props.textWarning}</div>
                <input autoFocus type="text" onChange={e => setValue(e.target.value)}
                    className={cn(
                        "text-white text-[20px] w-[460px] focus:outline-0 border-b border-gray-500/50",
                        'pb-[10px] px-[10px]'
                    )}
                    placeholder={props.value} value={value} />
                <div className='flex items-center gap-x-[50px] w-[350px] mx-auto mt-[50px]'>
                    <div className={cn(
                        'w-[150px] h-[50px] flex justify-center items-center bg-bg rounded-2xl',
                        'hover:scale-105 transition-transform duration-300 cursor-pointer',
                        'text-[18px] text-white'
                    )} onClick={clickYes}>Сохранить</div>
                    <div className={cn(
                        'w-[150px] h-[50px] flex justify-center items-center bg-bg rounded-2xl',
                        'hover:scale-105 transition-transform duration-300 cursor-pointer',
                        'text-[18px] text-white'
                    )} onClick={() => props.setShowWarning(false)}>Отменить</div>
                </div>
            </div>
        </div>
    )
}