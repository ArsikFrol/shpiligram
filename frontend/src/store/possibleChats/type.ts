import { TGetUser } from "../profile/types"


export type TUsePossibleChats = {
    loading: boolean,
    error: boolean,

    listPossibleChats: TGetUser[],

    fetchPossibleChats: (name: string, userId: string, listInterlocutorsId: string[]) => Promise<void>
}