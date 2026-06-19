import { StoryModel, UserModel } from "@/generated/prisma/models"

export type TFolder = 'ALL_CHATS' | 'STUDY'

export type TRole = 'USER' | 'ADMIN'

export type TUseProfile = {

    userId: string,
    setUserId: (newValue: string) => void,

    objProfile: UserModel
    setObjProfile: (newValue: UserModel) => void,

    listStories: StoryModel[],
    setListStories: (newValue: StoryModel[]) => void,

    setFirstName: (newValue: string) => void,
    setLastName: (newValue: string) => void,
    setUserName: (newValue: string) => void,
    setBio: (newValue: string) => void,
    setMobile: (newValue: string) => void,
    setBirthday: (newValue: Date) => void,

    activeFolder: TFolder,
    setActiveFolder: (newValue: TFolder) => void,

    showRowStories: boolean,
    setShowRowStories: (newValue: boolean) => void,
}