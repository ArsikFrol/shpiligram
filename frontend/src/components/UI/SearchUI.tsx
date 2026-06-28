'use client'

import { Search, X } from "lucide-react"
import { useState } from "react"

import { useEscape } from "@/hooks/useEscape"
import { cn } from "@/lib/utils"

type Props = {
    hiddenSearch?: boolean,
    width: number,
}

export default function SearchUI(props: Props) {
    const [valueSearch, setValueSearch] = useState<string>('')

    const [activeSearch, setActiveSearch] = useState<boolean>(false)

    useEscape(() => setActiveSearch(false))

    return (
        <>
            {activeSearch
                ? <div className={cn(
                        'relative transition-all duration-300',
                        activeSearch ? 'opacity-100' : 'opacity-0'
                    )} style={{width: `${props.width}px`}}>
                    <input type="text" placeholder="Иван Иванович" value={valueSearch} autoFocus
                        onChange={e => setValueSearch(e.target.value)} spellCheck="false"
                        className={cn(
                            'h-[37px] bg-bg rounded-2xl pl-[40px] focus:outline-0',
                            'text-[16px] text-white'
                        )} style={{width: `${props.width}px`}}/>
                    <X color='white' size={20} onClick={() => setActiveSearch(false)}
                        className={cn(
                            "absolute left-[10px] top-[9px] opacity-50",
                            'hover:scale-105 transition-transform duration-300 cursor-pointer'
                        )} />
                </div>
                : <Search color='white' size={25} className={cn(
                        'hover:scale-110 transition-all duration-300 cursor-pointer',
                        activeSearch ? 'opacity-0' : 'opacity-100',
                        props.hiddenSearch && 'hidden'
                    )} onClick={() => setActiveSearch(true)} />
            }
        </>
    )
}