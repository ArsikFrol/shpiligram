'use client'

import { cn } from "@/lib/utils";
import ChatElem from "../components/Chat/ChatElem";
import Groups from "../components/Groups";
import { useEffect, useState } from "react";
import Chat from "@/components/Chat/Chat";

export type TElemChat = {
    id: string,

    nameProfil: string,
    logoProfil: string,
    recentlyOnline: string,

    lastMessage: string,
    timeSend: string,
    pinned: boolean,
    countUnreadMessages: number,
}

const listChats: TElemChat[] = [
    { id: '1', nameProfil: "Alice Johnson", logoProfil: "https://i.pravatar.cc/150?img=1", lastMessage: "Hey, how are you doing today?", timeSend: "09:42", pinned: true, countUnreadMessages: 2, recentlyOnline: "Online" },
    { id: '2', nameProfil: "Bob Smith", logoProfil: "https://i.pravatar.cc/150?img=2", lastMessage: "The meeting is at 3 PM tomorrow", timeSend: "Tue", pinned: false, countUnreadMessages: 0, recentlyOnline: "5 min ago" },
    { id: '3', nameProfil: "Charlie Brown", logoProfil: "https://i.pravatar.cc/150?img=3", lastMessage: "Did you see the game last night?", timeSend: "Mon", pinned: false, countUnreadMessages: 5, recentlyOnline: "1 hour ago" },
    { id: '4', nameProfil: "Diana Prince", logoProfil: "https://i.pravatar.cc/150?img=4", lastMessage: "Thanks for your help!", timeSend: "14:30", pinned: true, countUnreadMessages: 0, recentlyOnline: "Online" },
    { id: '5', nameProfil: "Ethan Hunt", logoProfil: "https://i.pravatar.cc/150?img=5", lastMessage: "Mission accomplished", timeSend: "20:15", pinned: false, countUnreadMessages: 1, recentlyOnline: "10 min ago" },
    { id: '6', nameProfil: "Fiona Gallagher", logoProfil: "https://i.pravatar.cc/150?img=6", lastMessage: "Are we still on for dinner?", timeSend: "Wed", pinned: false, countUnreadMessages: 3, recentlyOnline: "Yesterday" },
    { id: '7', nameProfil: "George Clooney", logoProfil: "https://i.pravatar.cc/150?img=7", lastMessage: "Great idea! Let's do it", timeSend: "18:45", pinned: false, countUnreadMessages: 0, recentlyOnline: "30 min ago" },
    { id: '8', nameProfil: "Hannah Montana", logoProfil: "https://i.pravatar.cc/150?img=8", lastMessage: "Best of both worlds!", timeSend: "Thu", pinned: true, countUnreadMessages: 8, recentlyOnline: "2 hours ago" },
    { id: '9', nameProfil: "Ian Malcolm", logoProfil: "https://i.pravatar.cc/150?img=9", lastMessage: "Life finds a way", timeSend: "16:10", pinned: false, countUnreadMessages: 0, recentlyOnline: "Online" },
    { id: '10', nameProfil: "Julia Roberts", logoProfil: "https://i.pravatar.cc/150?img=10", lastMessage: "See you at the premiere", timeSend: "15:00", pinned: false, countUnreadMessages: 2, recentlyOnline: "15 min ago" },
    { id: '11', nameProfil: "Kevin Hart", logoProfil: "https://i.pravatar.cc/150?img=11", lastMessage: "That's hilarious! 😂", timeSend: "Fri", pinned: false, countUnreadMessages: 4, recentlyOnline: "Yesterday" },
    { id: '12', nameProfil: "Laura Palmer", logoProfil: "https://i.pravatar.cc/150?img=12", lastMessage: "I'll be there in 10 minutes", timeSend: "13:45", pinned: true, countUnreadMessages: 0, recentlyOnline: "Online" },
    { id: '13', nameProfil: "Michael Scott", logoProfil: "https://i.pravatar.cc/150?img=13", lastMessage: "That's what she said", timeSend: "Sat", pinned: false, countUnreadMessages: 12, recentlyOnline: "3 hours ago" },
    { id: '14', nameProfil: "Nancy Drew", logoProfil: "https://i.pravatar.cc/150?img=14", lastMessage: "I found a clue!", timeSend: "11:15", pinned: false, countUnreadMessages: 1, recentlyOnline: "45 min ago" },
    { id: '15', nameProfil: "Oscar Wilde", logoProfil: "https://i.pravatar.cc/150?img=15", lastMessage: "Be yourself; everyone else is taken", timeSend: "Sun", pinned: false, countUnreadMessages: 0, recentlyOnline: "Yesterday" },
    { id: '16', nameProfil: "Peter Parker", logoProfil: "https://i.pravatar.cc/150?img=16", lastMessage: "With great power comes great responsibility", timeSend: "Mon", pinned: true, countUnreadMessages: 3, recentlyOnline: "Online" },
    { id: '17', nameProfil: "Quinn Fabray", logoProfil: "https://i.pravatar.cc/150?img=17", lastMessage: "Glee club practice at 5", timeSend: "Tue", pinned: false, countUnreadMessages: 0, recentlyOnline: "1 day ago" },
    { id: '18', nameProfil: "Rick Sanchez", logoProfil: "https://i.pravatar.cc/150?img=18", lastMessage: "Wubba lubba dub dub!", timeSend: "22:30", pinned: false, countUnreadMessages: 7, recentlyOnline: "20 min ago" },
    { id: '19', nameProfil: "Sarah Connor", logoProfil: "https://i.pravatar.cc/150?img=19", lastMessage: "Come with me if you want to live", timeSend: "Wed", pinned: true, countUnreadMessages: 0, recentlyOnline: "Online" },
    { id: '20', nameProfil: "Tony Stark", logoProfil: "https://i.pravatar.cc/150?img=20", lastMessage: "I am Iron Man", timeSend: "Thu", pinned: false, countUnreadMessages: 2, recentlyOnline: "1 hour ago" },
    { id: '21', nameProfil: "Uma Thurman", logoProfil: "https://i.pravatar.cc/150?img=21", lastMessage: "Revenge is never a straight line", timeSend: "08:00", pinned: false, countUnreadMessages: 1, recentlyOnline: "Online" },
    { id: '22', nameProfil: "Violet Baudelaire", logoProfil: "https://i.pravatar.cc/150?img=22", lastMessage: "The world is quiet here", timeSend: "Fri", pinned: false, countUnreadMessages: 0, recentlyOnline: "5 hours ago" },
    { id: '23', nameProfil: "Walter White", logoProfil: "https://i.pravatar.cc/150?img=23", lastMessage: "I am the one who knocks", timeSend: "Sat", pinned: true, countUnreadMessages: 9, recentlyOnline: "2 days ago" },
    { id: '24', nameProfil: "Xena Warrior", logoProfil: "https://i.pravatar.cc/150?img=24", lastMessage: "Warrior princess never gives up", timeSend: "Sun", pinned: false, countUnreadMessages: 0, recentlyOnline: "Yesterday" },
    { id: '25', nameProfil: "Yoda Master", logoProfil: "https://i.pravatar.cc/150?img=25", lastMessage: "Do or do not, there is no try", timeSend: "17:20", pinned: false, countUnreadMessages: 3, recentlyOnline: "Online" }
]

export default function Home() {
    const [showChatId, setShowChatId] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <>
            <Groups />
            <div className='flex gap-x-[10px]'>
                {!loading
                    ? <div className={cn(
                        "flex flex-col gap-y-[30px] h-[calc(100vh-340px)] overflow-y-auto px-[5px] py-[20px]",
                        showChatId ? 'w-[70px]' : 'w-full'
                    )}>
                        {
                            listChats.map((obj, index: number) => {
                                return (
                                    <ChatElem key={index} obj={obj} setShowChatId={setShowChatId}
                                        showChatId={showChatId} />
                                )
                            })
                        }
                    </div> : <div className=''>Загрузка</div>
                }
                {showChatId
                    ? <Chat obj={listChats.find((obj) => obj.id === showChatId)!} setShowChatId={setShowChatId} />
                    : undefined}
            </div>
        </>
    )
}
