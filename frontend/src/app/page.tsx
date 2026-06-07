'use client'

import { cn } from "@/lib/utils";
import { useState } from "react";

import Chat from "@/components/Chat/Chat";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header/Header";
import ChatElem from "../components/Chat/ChatElem";
import Groups from "../components/Groups";
import useChats from "@/store/chats/chatsStore";
import useUsers from "@/store/users/usersStore";

export default function Home() {
    const [showChatById, setShowChatById] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const [showBtn, setShowBtn] = useState<string>('')

    const [showRowStories, setShowRowStories] = useState<boolean>(false)

    const {
        listChats
    } = useChats()

    const {
        listUsers
    } = useUsers()

    return (
        <>
            <Header showRowStories={showRowStories} setShowRowStories={setShowRowStories} />
            {showChatById === '' &&
                <Groups setShowRowStories={setShowRowStories} setShowBtn={setShowBtn} />
            }
            <div className='flex gap-x-[10px]'>
                {!loading
                    ? <div className={cn(
                        "flex flex-col gap-y-[30px] overflow-y-auto px-[5px] py-[20px]",
                        showChatById ? 'w-[70px] h-[calc(100vh-220px)]' : 'w-full h-[calc(100vh-340px)]',
                        showRowStories && 'h-[calc(100vh-400px)]'
                    )}>
                        {
                            listChats.filter(obj => obj.pinned).map((obj, index: number) => {
                                return (
                                    <ChatElem key={index} obj={obj} setShowChatById={setShowChatById}
                                        showChatById={showChatById} setShowRowStories={setShowRowStories}
                                        showBtn={showBtn} setShowBtn={setShowBtn} listUsers={listUsers} />
                                )
                            })
                        }
                        {
                            listChats.filter(obj => !obj.pinned).map((obj, index: number) => {
                                return (
                                    <ChatElem key={index} obj={obj} setShowChatById={setShowChatById}
                                        showChatById={showChatById} setShowRowStories={setShowRowStories}
                                        showBtn={showBtn} setShowBtn={setShowBtn} listUsers={listUsers} />
                                )
                            })
                        }
                    </div> : <div className=''>Загрузка</div>
                }
                {showChatById
                    ? <Chat obj={listChats.find((obj) => obj.chatId === showChatById)!}
                        setShowChatById={setShowChatById} showRowStories={showRowStories} />
                    : undefined}
            </div>
            <div className={cn(
                'absolute bottom-[20px] left-1/2 -translate-x-1/2',
            )}>
                <Navigation activeElem={1} />
            </div>
        </>
    )
}
