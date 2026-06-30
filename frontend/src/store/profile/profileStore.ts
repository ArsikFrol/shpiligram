import { create } from "zustand";
import { TFolder, TGetUser, TUseProfile } from "./types";
import { Api } from "@/services/api-client";
import { StoryModel } from "../../../../backand/src/generated/prisma/models";

const defaultObjProfile: TGetUser = {
    userId: '',
    avatar: '',
    firstName: '',
    lastName: '',
    userName: '',
    bio: '',

    lastSeen: new Date(),
    isOnline: false,

    role: 'USER',

    password: '',
    email: '',

    mobile: '',
    birthday: new Date(),

    createdAt: new Date(),
    updatedAt: new Date(),

    settings: {
        userSettingsId: '',

        howSeeMobilePhone: 'EVERYBODY',
        howSeeLastSeen: 'EVERYBODY',
        howSeeBirthday: 'EVERYBODY',
        howSeeGifts: 'EVERYBODY',
        howSeeBio: 'EVERYBODY',

        howCanCall: 'EVERYBODY',
        howCanSentVoice: 'EVERYBODY',
        howCanSentMessages: 'EVERYBODY',
        howCanForwardedMessages: 'EVERYBODY',
    }
}

const useProfile = create<TUseProfile>((set, get) => ({

    loading: true,
    error: false,

    userId: 'user_1',
    setUserId: (newValue) => set({ userId: newValue }),

    objProfile: defaultObjProfile,

    listStories: [],
    setListStories: (newValue: StoryModel[]) => set({ listStories: newValue }),

    fetchProfile: async (userId: string) => {
        try {
            set({ loading: true, error: false })
            const data = await Api.profile.getProfile(userId)
            set({ objProfile: data })
        } catch (error) {
            console.log(error)
            set({ error: true })
        } finally {
            set({ loading: false })
        }
    },

    setFirstName: (newValue: string) => set((state) => ({
        objProfile: { ...state.objProfile, firstName: newValue }
    })),
    setLastName: (newValue: string) => set((state) => ({
        objProfile: { ...state.objProfile, lastName: newValue }
    })),
    setUserName: (newValue: string) => set((state) => ({
        objProfile: { ...state.objProfile, userName: newValue }
    })),
    setBio: (newValue: string) => set((state) => ({
        objProfile: { ...state.objProfile, Bio: newValue }
    })),
    setMobile: (newValue: string) => set((state) => ({
        objProfile: { ...state.objProfile, mobile: newValue }
    })),
    setBirthday: (newValue: Date) => set((state) => ({
        objProfile: { ...state.objProfile, birthday: newValue }
    })),

    activeFolder: 'ALL_CHATS',
    setActiveFolder: (newValue: TFolder) => set({ activeFolder: newValue }),

    showRowStories: false,
    setShowRowStories: (newValue: boolean) => set({ showRowStories: newValue })
}))

export default useProfile;
export const { getState, setState, subscribe } = useProfile;