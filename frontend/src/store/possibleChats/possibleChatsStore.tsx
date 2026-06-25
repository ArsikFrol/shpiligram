import { create } from "zustand";

import { Api } from "@/services/api-client";
import { TUsePossibleChats } from "./type";

const usePossibleChats = create<TUsePossibleChats>((set) => ({
    loading: true,
    error: false,

    listPossibleChats: [],

    fetchPossibleChats: async (userName: string, userId: string, listInterlocutorsId: string[]) => {
        try {
            set({ loading: true, error: false })

            const data = await Api.profile.getBySearch(userName, userId)

            const filtered = data.filter(user => !listInterlocutorsId.includes(user.userId))
            set({ listPossibleChats: filtered })

        } catch (error) {
            console.log(error)
            set({ error: true })
        } finally {
            set({ loading: false })
        }
    },
}))

export default usePossibleChats;
export const { getState, setState, subscribe } = usePossibleChats;