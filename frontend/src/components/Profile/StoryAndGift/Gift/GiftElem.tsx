import { Gift } from "lucide-react"

import { cn } from "@/lib/utils"
import { TGetGift } from "@/store/gifts/types"

type Props = {
    clickGift: (giftId: string) => void,

    obj: TGetGift
}

export default function GiftElem(props: Props) {
    return (
        <div className={cn(
            'hover:scale-105 transition-transform duration-300 cursor-pointer',
            'mx-auto rounded-2xl relative flex justify-center items-center',
            'min-lg:w-[210px] min-lg:h-[230px] max-lg:w-[180px] max-lg:h-[230px]'
        )} style={{ backgroundColor: props.obj.bgGift }} onClick={() => props.clickGift(props.obj.giftId)}>
            <Gift color="white" size={60} strokeWidth={1} />
        </div>
    )
}