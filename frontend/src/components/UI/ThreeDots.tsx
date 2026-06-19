'use client'

import { cn } from "@/lib/utils"
import { EllipsisVertical } from "lucide-react"
import { useState } from "react"

type Props = {
    onClick: () => void
}

export default function ThreeDots(props: Props) {
    const [animateShow, setAnimateShow] = useState<boolean>(false)

    const clickTreeDots = () => {
        props.onClick()
        setAnimateShow(!animateShow)
    }

    return (
        <EllipsisVertical color='white' size={25} onClick={clickTreeDots}
            className={cn(
                'hover:scale-110 transition-transform duration-300 cursor-pointer',
                animateShow && 'rotate-90'
            )} />
    )
}