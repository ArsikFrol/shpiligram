import { MessageModel } from "../../../../backand/src/generated/prisma/models/Message"

export type TGetMessage = MessageModel

export type TUseMessage = {
    loading: boolean,
    error: boolean,

    listMessages: TGetMessage[],

    fetchListMessages: (chatId: string) => Promise<void>,
    addMessageInChat: (chatId: string, message: MessageModel) => Promise<void>,
}