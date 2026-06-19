import { GiftModel } from "@/generated/prisma/models";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const gifts = async (recipientId: string): Promise<GiftModel[]> => {
    const { data } = await axiosInstance.get<GiftModel[]>(ApiRoutes.GIFTS, { params: { recipientId } })

    return data
}