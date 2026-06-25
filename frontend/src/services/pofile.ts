import { UserModel } from "@/generated/prisma/models"
import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"

export const getProfile = async (userId: string): Promise<UserModel> => {
    const { data } = await axiosInstance.get<UserModel>(ApiRoutes.PROFILE, {
        params: {
            userId
        }
    })

    return data
}

export const getBySearch = async (userName: string, userId: string): Promise<UserModel[]> => {
    const { data } = await axiosInstance.get<UserModel[]>(ApiRoutes.PROFILE + '/search', {
        params: {
            userName,
            userId
        }
    })

    return data
}