import { create } from "zustand";

import { TUseChat } from "./types";
import { Api } from "@/services/api-client";

const useChats = create<TUseChat>((set) => ({
    loading: true,
    setLoadingChats: (value: boolean) => set({ loading: value }),

    error: false,

    listChats: [],
    listInterlocutorsId: [],

    deleteFromStoreAllChats: () => set({
        listChats: []
    }),

    fetchListChats: async (userId: string) => {
        try {
            set({ loading: true, error: false })
            const data = await Api.chats.getChats(userId)
            set({
                listChats: data,
                listInterlocutorsId: data.map(chat => chat.interlocutorId)
            })
        } catch (error) {
            console.log(error)
            set({ error: true })
        } finally {
            set({ loading: false })
        }
    },

    createChat: async (ownerId: string, interlocutorId: string) => {
        try {
            set({ loading: true, error: false })
            const data = await Api.chats.createChat(ownerId, interlocutorId)
            set((state) => ({
                listChats: [data.chat, ...state.listChats]
            }))

            console.log(data)

            return data
        } catch (error) {
            console.log(error)
            set({ error: true })
            throw error
        } finally {
            set({ loading: false })
        }
    },

    deleteChat: async (chatId: string) => {
        try {
            set({ loading: true, error: false })
            await Api.chats.deleteChat(chatId)
            set((state) => ({
                listChats: state.listChats.filter(chat => chat.chatId !== chatId)
            }))
        } catch (error) {
            console.log(error)
            set({ error: true })
        } finally {
            set({ loading: false })
        }
    }
}))

export default useChats;
export const { getState, setState, subscribe } = useChats;