import { ChatModel } from "../../../../backand/src/generated/prisma/models/Chat"

export type Tinterlocutor = {
    userId: string,
    avatar: string,
    lastName: string,
    firstName: string,
    lastSeen: Date,
}

type TLastMessage = {
    content: string,
    sendTime: Date
}

export type TChat = ChatModel & {
    interlocutor: Tinterlocutor
    lastMessage: TLastMessage
}

export type TUseChat = {
    loading: boolean,
    setLoadingChats: (value: boolean) => void,

    error: boolean,

    listChats: TChat[],
    listInterlocutorsId: string[]

    deleteFromStoreAllChats: () => void,

    fetchListChats: (userId: string) => Promise<void>,
    createChat: (ownerId: string, interlocutorId: string) => Promise<{ chat: TChat, message: string }>,
    deleteChat: (chatId: string) => Promise<void>,
}