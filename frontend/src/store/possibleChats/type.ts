import { UserModel } from "@/generated/prisma/models"


export type TUsePossibleChats = {
    loading: boolean,
    error: boolean,

    listPossibleChats: UserModel[],

    fetchPossibleChats: (name: string, userId: string, listInterlocutorsId: string[]) => Promise<void>
}