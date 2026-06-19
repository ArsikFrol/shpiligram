import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"
import { TGetChat } from "@/store/chats/types"

export const getChats = async (ownerId: string): Promise<TGetChat[]> => {
    const { data } = await axiosInstance.get<TGetChat[]>(ApiRoutes.CHATS, { params: { ownerId } })

    return data
}

export const deleteChat = async (chatId: string): Promise<TGetChat> => {
    const { data } = await axiosInstance.delete<TGetChat>(`${ApiRoutes.CHATS}/${chatId}`)

    return data
}