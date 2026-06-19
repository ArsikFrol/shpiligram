import { GiftModel } from "@/generated/prisma/models"
import { cn } from "@/lib/utils"
import { Gift } from "lucide-react"

type Props = {
    clickGift: (giftId: string) => void,

    obj: GiftModel
}

export default function GiftElem(props: Props) {
    return (
        <div className={cn(
            'hover:scale-105 transition-transform duration-300 cursor-pointer',
            'w-[180px] h-[200px] mx-auto rounded-2xl relative',
            'flex justify-center items-center'
        )} style={{ backgroundColor: props.obj.bgGift }} onClick={() => props.clickGift(props.obj.giftId)}>
            <Gift color="white" size={60} strokeWidth={1} />
        </div>
    )
}