'use client'

import { useEffect, useState } from "react"

import DescGift from "./DescGift"
import GiftElem from "./GiftElem"
import useGifts from "@/store/gifts/giftsStore"

type Props = {
    recipientId: string
}

export default function ListGifts(props: Props) {
    const [showDescGift, setShowDescGift] = useState<boolean>(false)
    const [idGiftShowDesc, setIdGiftShowDesc] = useState<string>('')

    const {
        loading,
        listGifts,
        fetchListGifts
    } = useGifts()

    const clickGift = (id: string) => {
        setIdGiftShowDesc(id)
        setShowDescGift(true)
    }

    useEffect(() => {
        fetchListGifts(props.recipientId)
    }, [props.recipientId])

    if (loading) return <div className=''>Загрузка....</div>
    if (!listGifts) return <div className=''>Нет данных</div>

    return (
        <div className=''>
            <div className='w-[600px] bg-bg rounded-2xl mx-auto grid grid-cols-3 grid-row-1 gap-y-[15px] py-[10px]'>
                {
                    listGifts.map((obj, index: number) => {
                        return (
                            <GiftElem clickGift={clickGift} obj={obj} key={index} />
                        )
                    })
                }
            </div>
            {showDescGift &&
                <DescGift obj={listGifts.find(obj => obj.giftId === idGiftShowDesc)!} setShowDescGift={setShowDescGift} />
            }
        </div>
    )
}