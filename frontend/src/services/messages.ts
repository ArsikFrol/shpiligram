import { MessageModel } from "@/generated/prisma/models";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const messages = async (chatId: string): Promise<MessageModel[]> => {
    const { data } = await axiosInstance.get<MessageModel[]>(ApiRoutes.MESSAGES, {
        params: { chatId }
    })

    return data
}

export const createMessage = async (content: string, chatId: string, senderId: string): Promise<MessageModel> => {
    const { data } = await axiosInstance.post<MessageModel>(ApiRoutes.MESSAGES, {
        content,
        chatId,
        senderId
    })

    return data
}