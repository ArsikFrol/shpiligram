'use client'

import TopContentChat from "./TopContentChat"
import ContantChat from "./ContantChat"
import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"

export default function Chat() {

    const {
        showRowStories,
    } = useProfile()

    return (
        <div className={cn(
            'w-full bg-bg mt-[10px] rounded-2xl h-[calc(100vh-225px)]',
            showRowStories && 'h-[calc(100vh-330px)]'
        )}>
            <TopContentChat />
            <ContantChat />
        </div>
    )
}