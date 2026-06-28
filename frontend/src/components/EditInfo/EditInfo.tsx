'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import YourInfoEdit from "./YourInfoEdit"

type Props = {
    valueInpoutName: string,
    setValueInpoutName: Dispatch<SetStateAction<string>>

    valueInpoutLastName: string,
    setValueInpoutLastName: Dispatch<SetStateAction<string>>,

    valueBio: string,
    setValueBio: Dispatch<SetStateAction<string>>,
}

export default function EditInfo(props: Props) {

    const [countValueBio, setCountValueBio] = useState<number>(80)

    useEffect(() => {
        setCountValueBio(80 - props.valueBio.length)
    }, [props.valueBio])

    return (
        <div className={cn(
            'mx-auto h-[calc(100vh-240px)] overflow-y-auto mt-[20px]',
            'min-lg:w-[800px] max-lg:mx-[30px]'
        )}>
            <div className='bg-bg rounded-2xl p-[20px] mb-[20px]'>
                <div className='text-blue-400 text-[20px] pb-[20px]'>Your name</div>
                <input type="text" value={props.valueInpoutName}
                    onChange={e => props.setValueInpoutName(e.target.value)}
                    placeholder="Name" className={cn(
                        "text-white text-[20px] w-[760px] focus:outline-0",
                        'hover:scale-101 transition-transform duration-300 cursor-pointer'
                    )} />
                <div className='w-[760px] h-[1px] bg-gray-500/50 my-[20px]'></div>
                <input type="text" value={props.valueInpoutLastName}
                    onChange={e => props.setValueInpoutLastName(e.target.value)}
                    placeholder="Last name" className={cn(
                        "text-white text-[20px] w-[760px] focus:outline-0",
                        'hover:scale-101 transition-transform duration-300 cursor-pointer'
                    )} />
            </div>
            <div className='bg-bg rounded-2xl p-[20px] relative'>
                <input type="text" value={props.valueBio} onChange={e => props.setValueBio(e.target.value)}
                    placeholder="Bio" className={cn(
                        "text-white text-[20px] w-[700px] focus:outline-0",
                        'hover:scale-101 transition-transform duration-300 cursor-pointer'
                    )} />
                <div className='absolute right-[40px] top-[20px] text-white text-[20px]'>{countValueBio}</div>
            </div>
            <div className='text-[16px] text-gray-500 my-[20px]'>A few words about you.</div>
            <YourInfoEdit />
        </div>
    )
}