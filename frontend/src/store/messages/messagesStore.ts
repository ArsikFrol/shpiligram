import { create } from "zustand";
import { Api } from "@/services/api-client";
import { TGetMessage, TUseMessage } from "./types";

const useMessages = create<TUseMessage>((set) => ({
    loading: true,
    error: false,

    listMessages: [],

    fetchListMessages: async (chatId: string) => {
        try {
            set({ loading: true, error: false })
            const data = await Api.messages.messages(chatId)
            set({ listMessages: data })
        } catch (error) {
            console.log(error)
            set({ error: true })
        } finally {
            set({ loading: false })
        }
    },

    addMessageInChat: async (chatId: string, message: TGetMessage) => {
        try {
            set({ loading: true, error: false })

            const data = await Api.messages.createMessage(
                message.content,
                chatId,
                message.senderId
            )

            set((state) => ({
                listMessages: [...state.listMessages, data]
            }))
        } catch (error) {
            console.log(error)
            set({ error: true })
        } finally {
            set({ loading: false })
        }
    }
}))

export default useMessages;
export const { getState, setState, subscribe } = useMessages;