'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Header from "@/components/Header/Header";
import DescriptionProfile from "@/components/Profile/DescriptionProfile";
import PhotoProfile from "@/components/Profile/PhotoProfile";
import PostsGifts from "@/components/Profile/PostsGifts";
import { TRout } from "@/types/router";
import useUsers from "@/store/users/usersStore";
import useChats from "@/store/chats/chatsStore";
import { TElemUser } from "@/store/users/types";
import notfound from "@/app/not-found";

export default function page() {
    const pathName: TRout = usePathname() as TRout

    const {
        listUsers
    } = useUsers()

    const [obj, setObj] = useState<TElemUser | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const foundUser = listUsers.find(user => user.userId === pathName.split('/')[2])

        if (foundUser) {
            setObj(foundUser)
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [pathName.split('/')[2], listUsers])

    if (!loading) return <div className=''>Загрузка...</div>
    if (!obj) return notfound()

    return (
        <div className='h-[calc(100vh-200px)] overflow-y-auto'>
            <Header showQrCode userId={obj.userId} userName={obj.userName} />
            <PhotoProfile imageProfile="" lastName={obj.lastName} name={obj.name} />
            <DescriptionProfile bio={obj.bio ? obj.bio : ''} birthday={obj.birthday} mobile={obj.mobile} userName={obj.userName} />
            <PostsGifts obj={obj} />
        </div>
    )
}