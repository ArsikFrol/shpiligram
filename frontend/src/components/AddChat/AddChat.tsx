'use client'

import { useEffect, useState } from "react";

import ListPossibleChats from "./ListPossibleChats";
import SearchAddChat from "./SearchAddChat";
import usePossibleChats from "@/store/possibleChats/possibleChatsStore";
import useProfile from "@/store/profile/profileStore";
import useChats from "@/store/chats/chatsStore";
import { cn } from "@/lib/utils";

export default function AddChat() {

    const [value, setValue] = useState<string>('')

    const {
        fetchPossibleChats,
    } = usePossibleChats()

    const {
        userId
    } = useProfile()

    const {
        listInterlocutorsId
    } = useChats()

    useEffect(() => {

        fetchPossibleChats(value, userId, listInterlocutorsId)

    }, [value])

    return (
        <div className={cn(
                "mx-auto",
                'min-lg:w-[800px] max-lg:mx-[30px]'
            )}>
            <SearchAddChat setValue={setValue} value={value} />
            <ListPossibleChats />
        </div>
    )
}