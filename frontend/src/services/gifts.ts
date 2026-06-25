import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { TGetGift } from "@/store/gifts/types";

export const gifts = async (recipientId: string): Promise<TGetGift[]> => {
    const { data } = await axiosInstance.get<TGetGift[]>(ApiRoutes.GIFTS, { params: { recipientId } })

    return data
}