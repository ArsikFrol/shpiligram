import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { TGetMessage } from "@/store/messages/types";

export const messages = async (chatId: string): Promise<TGetMessage[]> => {
    const { data } = await axiosInstance.get<TGetMessage[]>(ApiRoutes.MESSAGES, {
        params: { chatId }
    })

    return data
}

export const createMessage = async (content: string, chatId: string, senderId: string): Promise<TGetMessage> => {
    const { data } = await axiosInstance.post<TGetMessage>(ApiRoutes.MESSAGES, {
        content,
        chatId,
        senderId
    })

    return data
}