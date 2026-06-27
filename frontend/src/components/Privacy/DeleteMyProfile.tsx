'use client'

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

type TValue = 'day' | 'days' | 'month' | 'months' | 'year'

export default function DeleteMyProfile() {
    const [count, setCount] = useState<number>(1)
    const [value,setValue] = useState<TValue>('year')
    const [error, setError] = useState<boolean>(false)

    const clickIncrease = () => {

    }

    const clickDecrease= () => {

    }

    return(
        <div className="bg-container rounded-2xl p-[20px] mt-[50px]">
            <div className="text-blue-300 text-[18px] mb-[10px]">Delete my account</div>
            <div className="flex items-center justify-between">
                <div className="text-white text-[18px]">If away for</div>
                <div className="flex flex-col items-center gap-y-[5px]">
                    <ChevronUp  size={25} color="white"/>
                    <div className="text-[15px] font-medium text-gray-500">{count} {value}</div>
                    <ChevronDown size={25} color="white" />
                </div>
            </div>
        </div>
    )
}