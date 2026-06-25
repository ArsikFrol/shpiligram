import { StoryModel } from "@/generated/prisma/models"

export type TGetStoryProfile = StoryModel & {
    _countViewed: number,
    _countLikes: number
}

export type TGetStory = StoryModel & {
    owner: {
        userId: string;
        firstName: string;
        lastName: string;
        lastSeen: Date;
        avatar: string;
    };
    isLiked: boolean;
    isViewed: boolean;

    viewedAt: Date | null;
    likedAt: Date | null;

    likesCount: number;
    viewsCount: number;
}

export type TUseStories = {
    loading: boolean,
    setLoadingStories: (value: boolean) => void,

    error: boolean,

    listStoriesProfile: TGetStoryProfile[]

    listStoriesInterlocutors: TGetStory[]
    deleteFromStoreAllStoriesInterlocutors: () => void,

    fetchListStoriesProfile: (userId: string) => Promise<void>,
    fetchListStoriesInterlocutors: (userId: string, InterlocutorsId: string[]) => Promise<void>
}