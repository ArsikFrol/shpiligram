'use client'

import { cn } from "@/lib/utils"
import { Search, X } from "lucide-react"
import { useState } from "react"

type Props = {
    hiddenSearch: boolean | undefined

    lengthChat: number,
}

export default function SearchHeader(props: Props) {
    const [valueSearch, setValueSearch] = useState<string>('')

    const [activeSearch, setActiveSearch] = useState<boolean>(false)

    return (
        <>
            {activeSearch
                ? <div className='relative'>
                    <input type="text" placeholder="Иван Иванович" value={valueSearch}
                        onChange={e => setValueSearch(e.target.value)} spellCheck="false"
                        className={cn(
                            'w-[400px] h-[37px] bg-bg rounded-2xl pl-[40px] focus:outline-0',
                            'text-[16px] text-white'
                        )} />
                    <X color='white' size={20} onClick={() => setActiveSearch(false)}
                        className={cn(
                            "absolute left-[10px] top-[9px] opacity-50",
                            'hover:scale-105 transition-transform duration-300 cursor-pointer'
                        )} />
                </div>
                : props.lengthChat
                    ? <Search color='white' size={25} className={cn(
                        'hover:scale-110 transition-transform duration-300 cursor-pointer',
                        props.hiddenSearch && 'hidden'
                    )} onClick={() => setActiveSearch(true)} />
                    : undefined
            }
        </>
    )
}