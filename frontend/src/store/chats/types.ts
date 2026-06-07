export type TElemChat = {
    chatId: string,

    recentlyOnline: string,
    userId: string,

    lastMessage: string,
    timeSend: string,
    pinned: boolean,
    countUnreadMessages: number,
}

export type TUseChat = {
    listChats: TElemChat[]
}