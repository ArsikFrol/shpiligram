import { ChatModel } from "@/generated/prisma/models"

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

export type TGetChat = ChatModel & {
    interlocutor: Tinterlocutor
    lastMessage: TLastMessage
}

export type TUseChat = {
    loading: boolean,
    error: boolean,

    listChats: TGetChat[],
    listInterlocutorsId: string[]

    fetchListChats: (userId: string) => Promise<void>,
    deleteChat: (chatId: string) => Promise<void>,

    showChatById: string,
    setShowChatById: (activeId: string) => void
}