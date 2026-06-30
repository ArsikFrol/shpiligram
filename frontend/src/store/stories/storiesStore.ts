import { create } from "zustand";

import { TUseStories } from "./types";
import { Api } from "@/services/api-client";

const useStories = create<TUseStories>((set) => ({
    loading: true,
    setLoadingStories: (value: boolean) => set({ loading: value }),

    error: false,

    listStoriesProfile: [],

    listStoriesInterlocutors: [],
    deleteFromStoreAllStoriesInterlocutors: () => set({ listStoriesInterlocutors: [] }),

    fetchListStoriesProfile: async (userId: string) => {
        try {
            set({ loading: true, error: false })
            const data = await Api.stories.getStoriesProfile(userId)
            set({ listStoriesProfile: data })
        } catch (error) {
            console.log(error)
            set({ error: true })
        } finally {
            set({ loading: false })
        }
    },
    fetchListStoriesInterlocutors: async (userId: string, InterlocutorsId: string[]) => {
        try {
            set({ loading: true, error: false })
            const data = await Api.stories.getStoriesInterlocutors(userId, InterlocutorsId)
            set({ listStoriesInterlocutors: data })
        } catch (error) {
            console.log(error)
            set({ error: true })
        } finally {
            set({ loading: false })
        }
    }
}))

export default useStories;
export const { getState, setState, subscribe } = useStories;