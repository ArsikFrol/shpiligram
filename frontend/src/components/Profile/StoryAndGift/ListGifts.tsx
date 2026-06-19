'use client'

import { cn } from "@/lib/utils"
import { Gift } from "lucide-react"
import { useEffect, useState } from "react"
import DescGift from "./DescGift"
import { GiftModel } from "@/generated/prisma/models"
import { Api } from "@/services/api-client"
import { useFetchGifts } from "@/hooks/useFetchGifts"
import GiftElem from "./GiftElem"

type Props = {
    recipientId: string
}

export default function ListGifts(props: Props) {
    const [showDescGift, setShowDescGift] = useState<boolean>(false)
    const [idGiftShowDesc, setIdGiftShowDesc] = useState<string>('')

    const { gifts, loading } = useFetchGifts(props.recipientId)

    const clickGift = (id: string) => {
        setIdGiftShowDesc(id)
        setShowDescGift(true)
    }

    if (loading) return <div className=''>Загрузка....</div>
    if (!gifts) return <div className=''>Нет данных</div>

    return (
        <div className=''>
            <div className='w-[600px] bg-bg rounded-2xl mx-auto grid grid-cols-3 grid-row-1 gap-y-[15px] py-[10px]'>
                {
                    gifts.map((obj, index: number) => {
                        return (
                            <GiftElem clickGift={clickGift} obj={obj} key={index} />
                        )
                    })
                }
            </div>
            {showDescGift &&
                <DescGift obj={gifts.find(obj => obj.giftId === idGiftShowDesc)!} setShowDescGift={setShowDescGift} />
            }
        </div>
    )
}