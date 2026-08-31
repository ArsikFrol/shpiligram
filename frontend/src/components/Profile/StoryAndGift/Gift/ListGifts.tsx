'use client'

import { useCallback, useState } from "react"

import DescGift from "./DescGift"
import GiftElem from "./GiftElem"
import { cn } from "@/lib/utils"
import { TGetGift } from "@/store/gifts/types"

type Props = {
    listGifts: TGetGift[]
}

export default function ListGifts(props: Props) {
    const [showDescGift, setShowDescGift] = useState<boolean>(false)
    const [idGiftShowDesc, setIdGiftShowDesc] = useState<string>('')

    const clickGift = useCallback((id: string) => {
        setIdGiftShowDesc(id)
        setShowDescGift(true)
    }, [])

    return (
        <>
            <div className={cn(
                props.listGifts.length && 'grid grid-cols-3 grid-row-1 gap-y-[15px] gap-x-[15px]'
            )}>
                {props.listGifts.length
                    ? props.listGifts.map((obj, index: number) => {
                        return (
                            <GiftElem clickGift={clickGift} obj={obj} key={index} />
                        )
                    })
                    : <div className='text-[22px] text-white text-center leading-[230px]'>
                        Подарков нет
                    </div>
                }
            </div>
            {showDescGift &&
                <DescGift obj={props.listGifts.find(obj => obj.giftId === idGiftShowDesc)!} setShowDescGift={setShowDescGift} />
            }
        </>
    )
}