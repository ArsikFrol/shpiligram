'use client'

import { cn } from "@/lib/utils"
import ListChatForChatIdPage from "../Chat/ListChatForChatIdPage/ListChatForChatIdPage"
import useProfile from "@/store/profile/profileStore"
import useMessages from "@/store/messages/messagesStore"
import EmptyDialogue from "../Chat/Dialogue/EmptyDialogue"
import InputFolder from "../Chat/InputFolder/InputFolder"
import TopContant from "./TopContant"

export default function NewChat() {

    const {
        userId
    } = useProfile()

    const {
        addMessageInChat
    } = useMessages()

    return (
        <div className={cn(
            'grid gap-x-[30px] ',
            'min-xl:grid-cols-[270px_auto] max-xl:grid-cols-[50px_auto] '
        )}>
            <ListChatForChatIdPage />
            <div className='w-full bg-bg mt-[10px] rounded-2xl flex flex-col'>
                <TopContant />
                <EmptyDialogue addMessageInChat={addMessageInChat}
                    userId={userId} />{/* 
                <InputFolder objChat={ } addMessageInChat={addMessageInChat} textareaRef={} 
                    userId={userId}/> */}
            </div>
        </div>
    )
}