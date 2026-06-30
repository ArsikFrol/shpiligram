import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"
import { TGetUser } from "@/store/profile/types"

export const getProfile = async (userId: string): Promise<TGetUser> => {
    const { data } = await axiosInstance.get<TGetUser>(ApiRoutes.PROFILE, {
        params: {
            userId
        }
    })

    return data
}

export const getBySearch = async (userName: string, userId: string): Promise<TGetUser[]> => {
    const { data } = await axiosInstance.get<TGetUser[]>(ApiRoutes.PROFILE + '/search', {
        params: {
            userName,
            userId
        }
    })

    return data
}