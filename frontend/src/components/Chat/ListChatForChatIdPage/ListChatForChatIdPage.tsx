'use client'

import { cn } from "@/lib/utils"
import ElemChatForChatIdPage from "../ElemChatForChatIdPage/ElemChatForChatIdPage"
import Loading from "./Loading"
import useChats from "@/store/chats/chatsStore"
import Error from "./Error"

export default function ListChatForChatIdPage() {

    const { listChats, loading, error } = useChats()

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <div className={cn(
            'flex flex-col gap-y-[30px] overflow-y-auto mt-[20px]'
        )}>
            {
                listChats.map((obj, index) => {
                    return (
                        <ElemChatForChatIdPage obj={obj} key={index} />
                    )
                })
            }
        </div>
    )
}