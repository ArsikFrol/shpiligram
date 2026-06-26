'use client'

import { useEffect, useState } from "react";

import ListPossibleChats from "./ListPossibleChats";
import SearchAddChat from "./SearchAddChat";
import usePossibleChats from "@/store/possibleChats/possibleChatsStore";
import useProfile from "@/store/profile/profileStore";
import useChats from "@/store/chats/chatsStore";

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
        <div className="w-[600px] mx-auto">
            <SearchAddChat setValue={setValue} value={value} />
            <ListPossibleChats />
        </div>
    )
}