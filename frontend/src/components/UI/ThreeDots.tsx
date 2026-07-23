'use client'

import { EllipsisVertical } from "lucide-react"
import { JSX, useRef, useState } from "react"
import { useClickAway } from 'react-use'

import { cn } from "@/lib/utils"
import { TypeRoutes } from "@/hooks/useTypedRouter"

export type TSetting = {
    id: number,
    text: string,
    elem?: JSX.Element,
    link?: TypeRoutes

    onClick: () => void,
}

type Props = {
    onClick: () => void,
    onClose: () => void,

    listSettings: TSetting[],
    classForElem: string
    classForContainer: string
}

export default function ThreeDots(props: Props) {
    const [animateShow, setAnimateShow] = useState<boolean>(false)
    const [showSettimgs, setShowSettimgs] = useState<boolean>(false)

    const ref = useRef(null)

    useClickAway(ref, () => {
        props.onClose()
        setAnimateShow(false)
        setShowSettimgs(false)
    })

    const clickTreeDots = () => {
        props.onClick()
        setAnimateShow(!animateShow)
        setShowSettimgs(!showSettimgs)
    }

    return (
        <div className='relative' ref={ref}>
            <EllipsisVertical color='white' size={25} onClick={clickTreeDots}
                className={cn(
                    'hover:scale-110 transition-transform duration-300 cursor-pointer z-0',
                    animateShow && 'rotate-90'
                )} />
            {showSettimgs &&
                <div className={cn(
                    "absolute right-[-5px] top-[30px] flex flex-col rounded-2xl p-[10px] shadow",
                    props.classForContainer
                )}>
                    {
                        props.listSettings.map((obj, index) => {
                            return (
                                <div key={index} className={cn(
                                    'flex items-center gap-x-[10px]',
                                    'hover:scale-101 transition-transform duration-300 cursor-pointer',
                                    props.classForElem
                                )} onClick={() => {
                                    obj.onClick()
                                    setShowSettimgs(false)
                                    setAnimateShow(false)
                                }}>
                                    {obj.elem}
                                    <span>{obj.text}</span>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}