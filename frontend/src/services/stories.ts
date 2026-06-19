import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { TGetStory, TGetStoryProfile } from "@/store/stories/types";

export const getStoriesProfile = async (userId: string): Promise<TGetStoryProfile[]> => {
    const { data } = await axiosInstance.get<TGetStoryProfile[]>(ApiRoutes.STORYS, { params: { userId } })

    return data
}

export const getStoriesInterlocutors = async (userId: string, interlocutorsId: string[]): Promise<TGetStory[]> => {
    const { data } = await axiosInstance.get<TGetStory[]>(ApiRoutes.STORYS + '/interlocutors', {
        params: {
            userId,
            interlocutorsId: interlocutorsId.join(',')
        }
    })

    return data
}