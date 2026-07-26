'use client'

import { useEffect, useState } from "react"

import Navigation from "@/components/Navigation"
import Folders from "../../components/Folders/Folders"
import useChats from "@/store/chats/chatsStore"
import useProfile from "@/store/profile/profileStore"
import ListChats from "@/components/Chat/listChats/ListChats"

export default function Home() {
    const [showBtnById, setShowBtnById] = useState<string>('')

    const {
        userId
    } = useProfile()

    const {
        fetchListChats
    } = useChats()

    useEffect(() => {

        fetchListChats(userId)

    }, [userId])

    return (
        <>
            <Folders setShowBtnById={setShowBtnById} />
            <ListChats setShowBtnById={setShowBtnById} showBtnById={showBtnById} />
            <Navigation activeElem={1} />
        </>
    )
}
