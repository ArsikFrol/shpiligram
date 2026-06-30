import { StoryModel, UserModel } from "../../../../backand/src/generated/prisma/models"

export type TFolder = 'ALL_CHATS' | 'STUDY'

export type TRole = 'USER' | 'ADMIN'

type TypeHowSee = 'EVERYBODY' | 'SELECT_LIST' | 'NOBODY'

type TSettings = {
    userSettingsId: string,

    howSeeMobilePhone: TypeHowSee
    howSeeLastSeen: TypeHowSee
    howSeeBirthday: TypeHowSee
    howSeeGifts: TypeHowSee
    howSeeBio: TypeHowSee

    howCanCall: TypeHowSee
    howCanSentVoice: TypeHowSee
    howCanSentMessages: TypeHowSee
    howCanForwardedMessages: TypeHowSee
}

export type TGetUser = UserModel & {
    settings: TSettings
}

export type TUseProfile = {

    loading: boolean,
    error: boolean,

    userId: string,
    setUserId: (newValue: string) => void,

    objProfile: TGetUser

    listStories: StoryModel[],
    setListStories: (newValue: StoryModel[]) => void,

    fetchProfile: (userId: string) => Promise<void>,

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