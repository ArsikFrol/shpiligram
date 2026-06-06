'use client'

import { cn } from "@/lib/utils";
import { EllipsisVertical, Search } from "lucide-react";
import { useState } from "react";

type Props = {
    hiddenSearch?: boolean,
    showQrCode?: boolean,
    showStories?: boolean
}

export default function Header(props: Props) {
    const [showBurger, setShowBurger] = useState<boolean>(false)
    const [showQrCode, setshowQrCode] = useState<boolean>(props.showQrCode || false)
    const [showStories, setshowStories] = useState<boolean>(props.showStories || false)

    const [hiddenSearch, sethiddenSearch] = useState<boolean | undefined>(props.hiddenSearch || false)

    const clickShowBurger = () => {
        setShowBurger(!showBurger)
    }

    return (
        <div className='flex justify-between'>
            <div className='text-[25px] text-white font-semibold'>
                Shpiligram
            </div>
            <div className='flex items-center gap-x-[30px]'>
                <Search color='white' size={25} className={cn(
                    'hover:scale-110 transition-transform duration-300 cursor-pointer',
                    hiddenSearch && 'hidden'
                )} />
                <EllipsisVertical color='white' size={25} onClick={() => clickShowBurger()}
                    className={cn(
                        'hover:scale-110 transition-transform duration-300 cursor-pointer'
                    )} />
            </div>
        </div>
    )
}