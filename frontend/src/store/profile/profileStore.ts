import { create } from "zustand";
import { TFolder, TUseProfile } from "./types";
import { StoryModel, UserModel } from "@/generated/prisma/models";

const defaultObjProfile: UserModel = {
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
}

const useProfile = create<TUseProfile>((set, get) => ({

    userId: 'user_1',
    setUserId: (newValue) => set({ userId: newValue }),

    objProfile: defaultObjProfile,
    setObjProfile: (newValue: UserModel) => set({ objProfile: newValue }),

    listStories: [],
    setListStories: (newValue: StoryModel[]) => set({ listStories: newValue }),

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