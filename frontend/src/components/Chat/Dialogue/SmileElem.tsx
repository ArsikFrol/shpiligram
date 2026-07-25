'use client'

import { ChevronDown } from "lucide-react"
import { useRef } from "react"
import { useClickAway } from "react-use"

import { cn } from "@/lib/utils"
import { TSmile } from "./Dialogue"
import { useEscape } from "@/hooks/useEscape"

type Props = {
    showAllSmile: boolean,
    setShowAllSmile: (value: boolean) => void

    listSmile: TSmile[],
    showAbove: boolean
}

export default function SmileElem(props: Props) {

    const ref = useRef(null)

    useClickAway(ref, () => {
        props.setShowAllSmile(false)
    })

    useEscape(() => props.setShowAllSmile(false))

    return (
        <>
            {props.showAllSmile
                ? <div className='bg-container p-[10px] w-[220px]' ref={ref} style={{
                    borderRadius: props.showAbove ? '16px 16px 0 16px' : '16px 0 16px 16px'
                }}>
                    <div className={cn(
                        'h-[230px] overflow-y-auto no-scrollbar',
                        'grid grid-cols-6 gap-x-[10px] gap-y-[10px]'
                    )}>
                        {
                            [...(Array(55))].map((obj, index) => {
                                return (
                                    <div key={index} className={cn(
                                        'w-[25px] h-[25px] bg-white rounded-2xl',
                                    )}></div>
                                )
                            })
                        }
                    </div>
                </div>
                : <div className={cn(
                    'flex items-center gap-x-[10px] bg-container p-[10px] rounded-2xl w-[220px]'
                )} ref={ref}>
                    {
                        props.listSmile.slice(0, 5).map((obj, index) => {
                            return (
                                <div key={index} className={cn(
                                    'w-[25px] h-[25px] bg-white rounded-2xl',
                                )}></div>
                            )
                        })
                    }
                    <div className={cn(
                        'bg-bg rounded-2xl p-[2px]',
                        'hover:scale-105 transition-transform duration-300 cursor-pointer'
                    )} onClick={() => props.setShowAllSmile(true)}
                        style={{
                            rotate: props.showAbove ? '' : '180deg'
                        }}>
                        <ChevronDown color="white" size={23} />
                    </div>
                </div>
            }
        </>
    )
}