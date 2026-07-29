'use client'

import { usePathname } from "next/navigation"
import { useEffect } from "react"

import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"
import { useFetchChat } from "@/hooks/useFetchChat"
import { TypeRoutes } from "@/hooks/useTypedRouter"
import useMessages from "@/store/messages/messagesStore"
import TopContentChat from "../TopContantChat/TopContentChat"
import ContantChat from "../ContantChat"
import Empty from "./Empty"
import Loading from "./Loading"

export default function Chat() {
    const pathName: TypeRoutes = usePathname() as TypeRoutes

    const {
        showRowStories,
    } = useProfile()

    const {
        fetchListMessages
    } = useMessages()

    const { loadingChat, objChat } = useFetchChat(pathName.split('/')[2])

    useEffect(() => {
        fetchListMessages(objChat?.chatId || '')
    }, [objChat?.chatId])

    if (loadingChat) return <Loading />
    if (!objChat) return <Empty />

    return (
        <div className={cn(
            'w-full bg-bg mt-[10px] rounded-2xl flex flex-col'
        )} style={{
            height: showRowStories ? 'calc(100vh - 310px)' : 'calc(100vh-225px)',
        }}>
            <TopContentChat loadingChat={loadingChat} objChat={objChat} />
            <ContantChat objChat={objChat} />
        </div >
    )
}