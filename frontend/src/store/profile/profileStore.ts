import { create } from "zustand";
import { TUseProfile } from "./types";

const useProfile = create<TUseProfile>((set, get) => ({
    userId: "user_0000000000001",

    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Анна Кузнецова",
    userName: "anna_k",

    password: "$2b$10$hashed_password_1",
    email: "anna@example.com",

    mobile: "+7 999 111-22-33",
    birthday: "15.03.1995",
}))

export default useProfile;
export const { getState, setState, subscribe } = useProfile;