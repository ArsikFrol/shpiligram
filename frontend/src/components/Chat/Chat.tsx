'use client'

import { usePathname } from "next/navigation"
import { useEffect } from "react"

import TopContentChat from "./TopContentChat"
import ContantChat from "./ContantChat"
import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"
import { useFetchChat } from "@/hooks/useFetchChat"
import { TypeRoutes } from "@/hooks/useTypedRouter"
import EmptyChat from "./EmptyChat"
import LoadingChat from "./LoadingChat"
import useMessages from "@/store/messages/messagesStore"

export default function Chat() {
    const pathName: TypeRoutes = usePathname() as TypeRoutes

    const {
        showRowStories,
    } = useProfile()

    const {
        listMessages,
        fetchListMessages,
        loadingMessages,
    } = useMessages()

    const { loadingChat, objChat } = useFetchChat(pathName.split('/')[2])

    useEffect(() => {
        fetchListMessages(objChat?.chatId || '')
    }, [objChat?.chatId])

    if (loadingChat) return <LoadingChat />
    if (!objChat) return <EmptyChat />

    return (
        <div className={cn(
            'w-full bg-bg mt-[10px] rounded-2xl flex flex-col'
        )} style={showRowStories ? { height: 'calc(100vh-400px)' } : { height: 'calc(100vh-225px)' }}>
            <TopContentChat loadingChat={loadingChat} objChat={objChat} />
            <ContantChat loadingChat={loadingChat} objChat={objChat}
                listMessages={listMessages} loadingMessages={loadingMessages} />
        </div>
    )
}