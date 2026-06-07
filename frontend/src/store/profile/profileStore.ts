import { create } from "zustand";
import { TUseProfile } from "./types";



const useProfile = create<TUseProfile>((set, get) => ({
    userId: "user_0000000000001",

    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Анна",
    lastName: "Кузнецова",
    userName: "anna_k",
    bio: "",

    password: "$2b$10$hashed_password_1",
    email: "anna@example.com",

    mobile: "+7 999 111-22-33",
    birthday: "August 29",
}))

export default useProfile;
export const { getState, setState, subscribe } = useProfile;