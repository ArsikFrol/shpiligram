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
    } = useChats()

    const {
        userId
    } = useProfile()

    useEffect(() => {
        fetchListChats(userId)
    }, [userId])

    return (
        <div className={cn(
            'grid gap-x-[30px]',
            'min-xl:grid-cols-[250px_auto] max-xl:grid-cols-[50px_auto] '
        )}>
            <ListChatForChatIdPage />
            <Chat />
        </div>
    )
}