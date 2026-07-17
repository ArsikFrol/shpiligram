'use client'

import { cn } from "@/lib/utils"
import { EllipsisVertical } from "lucide-react"
import { useEffect, useRef, useState } from "react"

type Props = {
    onClick: () => void,

    onClose: () => void,
}

export default function ThreeDots(props: Props) {
    const [animateShow, setAnimateShow] = useState<boolean>(false)
    const dotsRef = useRef<SVGSVGElement>(null)

    const clickTreeDots = () => {
        props.onClick()
        setAnimateShow(!animateShow)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dotsRef.current && !dotsRef.current.contains(event.target as Node)) {
                setAnimateShow(false)
                props.onClose()
            }
        }

        document.addEventListener('click', handleClickOutside)
        
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <EllipsisVertical color='white' size={25} onClick={clickTreeDots}
            ref={dotsRef}
            className={cn(
                'hover:scale-110 transition-transform duration-300 cursor-pointer z-0',
                animateShow && 'rotate-90'
            )} />
    )
}