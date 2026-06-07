'use client'

import { cn } from "@/lib/utils"
import { Gift } from "lucide-react"
import { TGift } from "./PostsGifts"
import { useState } from "react"
import DescGift from "./DescGift"

type Props = {
    listGifts: TGift[]
}

export default function ListGifts(props: Props) {
    const [showDescGift, setShowDescGift] = useState<boolean>(false)
    const [idGiftShowDesc, setIdGiftShowDesc] = useState<number>(0)

    const clickGift = (id: number) => {
        setIdGiftShowDesc(id)
        setShowDescGift(true)
    }

    return (
        <div className=''>
            <div className='w-[600px] bg-bg rounded-2xl mx-auto grid grid-cols-3 gap-y-[15px] py-[10px]'>
                {
                    props.listGifts.map((obj, index: number) => {
                        return (
                            <div key={index} className={cn(
                                'hover:scale-105 transition-transform duration-300 cursor-pointer',
                                'w-[180px] h-[200px] mx-auto rounded-2xl relative',
                                'flex justify-center items-center'
                            )} style={{ backgroundColor: obj.colorBg }} onClick={() => clickGift(obj.id)}>
                                <Gift color="white" size={60} strokeWidth={1} />
                            </div>
                        )
                    })
                }
            </div>
            {showDescGift &&
                <DescGift obj={props.listGifts[idGiftShowDesc]} setShowDescGift={setShowDescGift} />
            }
        </div>
    )
}