import { Api } from "@/services/api-client"
import { create } from "zustand"
import { TUseGifts } from "./types"

const useGifts = create<TUseGifts>((set) => ({
    loading: true,
    error: false,

    listGifts: [],

    fetchListGifts: async (recipientId: string) => {
        try {
            set({ loading: true, error: false })
            const data = await Api.gifts.gifts(recipientId)
            set({ listGifts: data })
        } catch (error) {
            console.log(error)
            set({ error: true })
        } finally {
            set({ loading: false })
        }
    },
}))

export default useGifts;
export const { getState, setState, subscribe } = useGifts;