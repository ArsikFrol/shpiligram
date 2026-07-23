'use client'

import { useState } from "react";

import ListPossibleChats from "./ListPossibleChats";
import SearchAddChat from "./SearchAddChat";
import { cn } from "@/lib/utils";

export default function AddChat() {

    const [value, setValue] = useState<string>('')

    return (
        <div className={cn(
            "mx-auto",
            'min-lg:w-[800px] max-lg:mx-[30px]'
        )}>
            <SearchAddChat setValue={setValue} value={value} />
            <ListPossibleChats value={value} />
        </div>
    )
}