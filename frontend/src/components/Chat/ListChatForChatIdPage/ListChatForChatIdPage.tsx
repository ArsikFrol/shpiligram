'use client'

import { cn } from "@/lib/utils"
import ElemChatForChatIdPage from "../ElemChatForChatIdPage/ElemChatForChatIdPage"
import Loading from "./Loading"
import useChats from "@/store/chats/chatsStore"
import useProfile from "@/store/profile/profileStore"
import Empty from "./Empty"

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
    if (error) return
    if (listChats.length) return <Empty />

    return (
        <div className={cn(
            'flex flex-col gap-y-[30px] h-[calc(100vh-240px)] overflow-y-auto mt-[20px]'
        )} style={showRowStories ? { height: 'calc(100vh - 320px)' } : { height: 'calc(100vh-320px)' }}>
            {
                listChats.filter(objChat => objChat.lastMessage).map((obj, index) => {
                    return (
                        <ElemChatForChatIdPage obj={obj} key={index} />
                    )
                })
            }
        </div>
    )
}