'use client'

import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import { useState } from "react";
import ListPosts from "./ListPosts";
import useUsers from "@/store/users/usersStore";
import useProfile from "@/store/profile/profileStore";

type TPostBtn = {
    id: number,
    text: string
}

const listPostBtn: TPostBtn[] = [
    { id: 1, text: 'Posts' },
    { id: 2, text: 'Archined Posts' }
]

export default function Posts() {

    const [activeElem, setactiveElem] = useState<number>(1)

    const {
        listUsers
    } = useUsers()

    const {
        userId
    } = useProfile()

    return (
        <div className=''>
            <div className='flex gap-x-[10px] w-[310px] mx-auto bg-bg p-[5px] rounded-2xl my-[20px]'>
                {
                    listPostBtn.map((obj, index: number) => {
                        return (
                            <div key={index} className={cn(
                                'text-[15px] w-[150px] text-center font-bold text-gray-500 py-[5px]',
                                activeElem === obj.id
                                    ? 'bg-active-bg text-blue-400 rounded-2xl'
                                    : 'hover:scale-105 transition-transform duration-300 cursor-pointer'
                            )} onClick={() => setactiveElem(obj.id)}>{obj.text}</div>
                        )
                    })
                }
            </div>
            <ListPosts listPosts={listUsers.find(obj => obj.userId === userId)!.posts} />
        </div>
    )
}