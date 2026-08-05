'use client'

import { useTypedRouter } from "@/hooks/useTypedRouter"
import { cn } from "@/lib/utils"
import { TGetUser } from "@/store/profile/types"

type Props = {
    objProfile: TGetUser
}

export default function WriteMessage(props: Props) {
    const router = useTypedRouter()

    const clickWriteMessage = async () => {
        router.push(`/chats/newChat?userId=${props.objProfile.userId}&interlocutor=${props.objProfile.userId}`)
    }

    return (
        <div className={cn(
            'mx-auto text-center bg-bg rounded-2xl text-white text-[20px] mt-[20px] py-[10px]',
            'hover:scale-101 transition-transform duration-300 cursor-pointer',
            'min-lg:w-[800px] max-lg:mx-[30px]'
        )} onClick={clickWriteMessage}>
            Написать сообщенение
        </div>
    )

}