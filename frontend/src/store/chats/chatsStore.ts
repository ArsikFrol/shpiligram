import { create } from "zustand";
import { TElemChat, TUseChat } from "./types";

const listChats: TElemChat[] = [
    { chatId: 'chat_0000000000001', userId: 'user_0000000000001', lastMessage: "Hey, how are you doing today?", timeSend: "09:42", pinned: false, countUnreadMessages: 2, recentlyOnline: "Online" },
    { chatId: 'chat_0000000000002', userId: 'user_0000000000002', lastMessage: "The meeting is at 3 PM tomorrow", timeSend: "Tue", pinned: false, countUnreadMessages: 0, recentlyOnline: "5 min ago" },
    { chatId: 'chat_0000000000003', userId: 'user_0000000000003', lastMessage: "Did you see the game last night?", timeSend: "Mon", pinned: false, countUnreadMessages: 5, recentlyOnline: "1 hour ago" },
    { chatId: 'chat_0000000000004', userId: 'user_0000000000004', lastMessage: "Thanks for your help!", timeSend: "14:30", pinned: false, countUnreadMessages: 0, recentlyOnline: "Online" },
    { chatId: 'chat_0000000000005', userId: 'user_0000000000005', lastMessage: "Mission accomplished", timeSend: "20:15", pinned: false, countUnreadMessages: 1, recentlyOnline: "10 min ago" },
    { chatId: 'chat_0000000000006', userId: 'user_0000000000006', lastMessage: "Are we still on for dinner?", timeSend: "Wed", pinned: false, countUnreadMessages: 3, recentlyOnline: "Yesterday" },
    { chatId: 'chat_0000000000007', userId: 'user_0000000000007', lastMessage: "Great idea! Let's do it", timeSend: "18:45", pinned: false, countUnreadMessages: 0, recentlyOnline: "30 min ago" },
    { chatId: 'chat_0000000000008', userId: 'user_0000000000008', lastMessage: "Best of both worlds!", timeSend: "Thu", pinned: false, countUnreadMessages: 8, recentlyOnline: "2 hours ago" },
    { chatId: 'chat_0000000000009', userId: 'user_0000000000009', lastMessage: "Life finds a way", timeSend: "16:10", pinned: false, countUnreadMessages: 0, recentlyOnline: "Online" },
    { chatId: 'chat_0000000000010', userId: 'user_0000000000010', lastMessage: "See you at the premiere", timeSend: "15:00", pinned: false, countUnreadMessages: 2, recentlyOnline: "15 min ago" }
]

const useChats = create<TUseChat>((set, get) => ({
    listChats: listChats
}))

export default useChats;
export const { getState, setState, subscribe } = useChats;