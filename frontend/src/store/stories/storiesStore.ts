import { create } from "zustand";

import { TUseStories } from "./types";
import { Api } from "@/services/api-client";

const useStories = create<TUseStories>((set) => ({
    loadingStories: true,
    setLoadingStories: (value: boolean) => set({ loadingStories: value }),

    errorStories: false,

    listStoriesProfile: [],

    listStoriesInterlocutors: [],
    deleteFromStoreAllStoriesInterlocutors: () => set({ listStoriesInterlocutors: [] }),

    fetchListStoriesProfile: async (userId: string) => {
        try {
            set({ loadingStories: true, errorStories: false })
            const data = await Api.stories.getStoriesProfile(userId)
            set({ listStoriesProfile: data })
        } catch (error) {
            console.log(error)
            set({ errorStories: true })
        } finally {
            set({ loadingStories: false })
        }
    },
    fetchListStoriesInterlocutors: async (userId: string, InterlocutorsId: string[]) => {
        try {
            set({ loadingStories: true, errorStories: false })
            const data = await Api.stories.getStoriesInterlocutors(userId, InterlocutorsId)
            set({ listStoriesInterlocutors: data })
        } catch (error) {
            console.log(error)
            set({ errorStories: true })
        } finally {
            set({ loadingStories: false })
        }
    }
}))

export default useStories;
export const { getState, setState, subscribe } = useStories;