'use client'

import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"
import { Star, StickerIcon } from "lucide-react"
import { useRef, useState } from "react"
import { useClickAway } from "react-use"

import sticker from '../../../../public/sticker.webp'

type Props = {

}

type TSticker = {
    id: string,
    image: string | StaticImageData,

    isFavorite: boolean
}

const listSticker: TSticker[] = [
    { id: '1', isFavorite: false, image: sticker },
    { id: '2', isFavorite: false, image: sticker },
    { id: '3', isFavorite: false, image: sticker },
    { id: '4', isFavorite: true, image: sticker },
    { id: '5', isFavorite: true, image: sticker },
    { id: '6', isFavorite: true, image: sticker },
    { id: '7', isFavorite: true, image: sticker },
    { id: '8', isFavorite: true, image: sticker },
    { id: '9', isFavorite: false, image: sticker },
    { id: '10', isFavorite: false, image: sticker },
    { id: '11', isFavorite: false, image: sticker },
    { id: '12', isFavorite: false, image: sticker },
    { id: '13', isFavorite: false, image: sticker },
    { id: '14', isFavorite: false, image: sticker },
    { id: '15', isFavorite: false, image: sticker },
    { id: '16', isFavorite: true, image: sticker },
    { id: '17', isFavorite: true, image: sticker },
    { id: '18', isFavorite: true, image: sticker },
    { id: '19', isFavorite: true, image: sticker },
]

export default function Sticker(props: Props) {

    const [showSticker, setShowSticker] = useState<boolean>(false)
    const ref = useRef(null)

    const clickSticker = () => {
        setShowSticker(true)
    }

    const clickStickerSent = () => {

    }

    const clickStar = (id: string) => {

    }

    useClickAway(ref, () => {
        setShowSticker(false)
    })

    return (
        <div className='relative' ref={ref}>
            <StickerIcon color="white" size={28} strokeWidth={1.5} className={cn(
                'hover:scale-105 transition-transform duration-300 cursor-pointer flex-shrink-0'
            )} onClick={clickSticker} />
            {showSticker &&
                <div className=''>
                    <div className={cn(
                        'absolute top-[-520px] left-[-10px]',
                        'w-[400px] h-[500px] bg-container rounded-2xl overflow-y-auto py-[10px] scrollbar'
                    )}>
                        <div className='mb-[20px]'>
                            <div className='pl-[20px] text-[15px] text-white'>Избранное</div>
                            <div className='grid grid-cols-3 gap-y-[10px] justify-items-center'>
                                {
                                    listSticker.filter(obj => obj.isFavorite).map((obj, index) => {
                                        return (
                                            <div key={index} className={cn(
                                                'py-[10px] hover:scale-103 transition-transform duration-300 cursor-pointer group relative'
                                            )} onClick={clickStickerSent}>
                                                <Image src={obj.image} alt='' width={80} height={80} draggable='false' />
                                                <Star color="yellow" fill="yellow" className={cn(
                                                    'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                                                    'absolute right-[-15px] top-[10px]'
                                                )} onClick={() => clickStar(obj.id)} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className=''>
                            <div className='pl-[20px] text-[15px] text-white'>Все стикеры</div>
                            <div className='grid grid-cols-3 gap-y-[10px] justify-items-center'>
                                {
                                    listSticker.map((obj, index) => {
                                        return (
                                            <div key={index} className={cn(
                                                'py-[10px] hover:scale-103 transition-transform duration-300 cursor-pointer group relative'
                                            )} onClick={clickStickerSent}>
                                                <Image src={obj.image} alt='' width={80} height={80} draggable='false' />
                                                {obj.isFavorite
                                                    ? <Star color="yellow" fill="yellow" className={cn(
                                                        'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                                                        'absolute right-[-15px] top-[10px]'
                                                    )} onClick={() => clickStar(obj.id)} />
                                                    : <Star color="white" size={20} className={cn(
                                                        'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                                                        'absolute right-[-15px] top-[10px]'
                                                    )} onClick={() => clickStar(obj.id)} />
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}