import { MessageModel } from "@/generated/prisma/models"

export type TUseMessage = {
    loading: boolean,
    error: boolean,

    listMessages: MessageModel[],

    fetchListMessages: (chatId: string) => Promise<void>,
    addMessageInChat: (chatId: string, message: MessageModel) => Promise<void>,
}