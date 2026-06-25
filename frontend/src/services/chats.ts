import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"
import { TChat } from "@/store/chats/types"

export const getChats = async (ownerId: string): Promise<TChat[]> => {
    const { data } = await axiosInstance.get<TChat[]>(ApiRoutes.CHATS, {
        params: {
            ownerId
        }
    })

    return data
}

export const getChat = async (chatId: string): Promise<TChat> => {
    const { data } = await axiosInstance.get<TChat>(`${ApiRoutes.CHATS}/${chatId}`)

    return data
}

export const createChat = async (ownerId: string, interlocutorId: string): Promise<{ chat: TChat, message: string }> => {
    const { data } = await axiosInstance.post<{ chat: TChat, message: string }>(ApiRoutes.CHATS, {
        ownerId,
        interlocutorId
    })

    return data
}

export const deleteChat = async (chatId: string): Promise<TChat> => {
    const { data } = await axiosInstance.delete<TChat>(`${ApiRoutes.CHATS}/${chatId}`)

    return data
}