'use client'

import { cn } from "@/lib/utils"
import ElemChatForChatIdPage from "../ElemChatForChatIdPage/ElemChatForChatIdPage"
import Loading from "./Loading"
import useChats from "@/store/chats/chatsStore"
import useProfile from "@/store/profile/profileStore"
import Error from "./Error"

export default function ListChatForChatIdPage() {

    const {
        showRowStories
    } = useProfile()

    const {
        listChats,
        loading,
        error
    } = useChats()

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <div className={cn(
            'flex flex-col gap-y-[30px] h-[calc(100vh-240px)] overflow-y-auto mt-[20px]'
        )} style={{
            height: showRowStories ? 'calc(100vh - 320px)' : 'calc(100vh-320px)',
        }}>
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