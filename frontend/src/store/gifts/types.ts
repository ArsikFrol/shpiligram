import { GiftModel } from "../../../../backand/src/generated/prisma/models"


type TSender = {
    userId: string,
    avatar: string,
    firstName: string,
    lastName: string,
}

export type TGetGift = GiftModel & {
    sender: TSender
}

export type TUseGifts = {
    loading: boolean,
    error: boolean,

    listGifts: TGetGift[],

    fetchListGifts: (recipientId: string) => Promise<void>
}