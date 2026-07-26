'use client'

import { useState } from "react";

import ListPossibleChats from "./ListPossibleChats/ListPossibleChats";
import SearchAddChat from "./SearchAddChat";
import { cn } from "@/lib/utils";
import useChats from "@/store/chats/chatsStore";
import useProfile from "@/store/profile/profileStore";
import { useFetchPossibleChats } from "@/hooks/useFetchPossibleChats";

export default function AddChat() {

    const [value, setValue] = useState<string>('')

    const {
        userId
    } = useProfile()

    const {
        listInterlocutorsId
    } = useChats()

    const { listPossibleChats, loading, error } = useFetchPossibleChats(value, userId, listInterlocutorsId)

    return (
        <div className={cn(
            "mx-auto h-[calc(100vh-190px)] flex flex-col",
            'min-lg:w-[800px] max-lg:mx-[30px]'
        )}>
            {!error &&
                <SearchAddChat setValue={setValue} value={value} />
            }
            <div className={cn(
                'bg-bg rounded-2xl mt-[20px] p-[20px] flex-1',
            )}>
                <ListPossibleChats value={value} error={Boolean(error)} 
                    listPossibleChats={listPossibleChats ? listPossibleChats : []} loading={loading}/>
            </div>
        </div>
    )
}