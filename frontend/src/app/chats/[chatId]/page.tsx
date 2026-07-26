'use client'

import { useEffect } from "react"

import { cn } from "@/lib/utils"
import useChats from "@/store/chats/chatsStore"
import useProfile from "@/store/profile/profileStore"
import Chat from "@/components/Chat/ChatComponent/Chat"
import ListChatForChatIdPage from "@/components/Chat/ListChatForChatIdPage/ListChatForChatIdPage"

export default function page() {

    const {
        fetchListChats,
        listChats
    } = useChats()

    const {
        userId
    } = useProfile()

    useEffect(() => {
        fetchListChats(userId)
    }, [])

    return (
        <>
            <div className={cn(
                'grid grid-cols-[50px_auto] gap-x-[20px]',
                'min-xl:grid-cols-[250px_auto]'
            )}>
                <ListChatForChatIdPage />
                <Chat />
            </div>
        </>)
}