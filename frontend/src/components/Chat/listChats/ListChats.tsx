'use client'

import useProfile from "@/store/profile/profileStore"
import useChats from "@/store/chats/chatsStore"
import SortingChatsByFolder from "../SortingChatsByFolder"
import Loading from "./Loading"
import Empty from "./Empty"
import Error from "./Error"

type Props = {
    showBtnById: string,
    setShowBtnById: (value: string) => void,
}

export default function ListChats(props: Props) {

    const { activeFolder } = useProfile()
    const { listChats, loading, error } = useChats()

    if (loading) return <Loading />
    if (error) return <Error />
    if (!listChats.length) return <Empty />

    return (
        <>
            {activeFolder === 'ALL_CHATS'
                && <SortingChatsByFolder showBtnById={props.showBtnById} setShowBtnById={props.setShowBtnById}
                    listChats={listChats} />
            }
            {activeFolder === 'STUDY'
                && <SortingChatsByFolder showBtnById={props.showBtnById} setShowBtnById={props.setShowBtnById}
                    listChats={listChats.filter(objChat => objChat.folder === 'STUDY')} />
            }
        </>
    )
}