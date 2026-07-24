import { Api } from "@/services/api-client"
import { create } from "zustand"
import { TUseGifts } from "./types"

const useGifts = create<TUseGifts>((set) => ({
    loadingGifts: true,
    errorGifts: false,

    listGifts: [],

    fetchListGifts: async (recipientId: string) => {
        try {
            set({ loadingGifts: true, errorGifts: false })
            const data = await Api.gifts.gifts(recipientId)
            set({ listGifts: data })
        } catch (error) {
            console.log(error)
            set({ errorGifts: true })
        } finally {
            set({ loadingGifts: false })
        }
    },
}))

export default useGifts;
export const { getState, setState, subscribe } = useGifts;