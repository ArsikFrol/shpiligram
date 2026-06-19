import { UserModel } from "@/generated/prisma/models"
import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"

export const profile = async (userId: string): Promise<UserModel> => {
    const { data } = await axiosInstance.get<UserModel>(ApiRoutes.PROFILE, { params: { userId } })

    return data
}