'use client'

import useProfile from "@/store/profile/profileStore"
import SortingChatsByFolder from "./SortingChatsByFolder"
import useChats from "@/store/chats/chatsStore"

type Props = {
    showBtnById: string,
    setShowBtnById: (value: string) => void,
}

export default function ListChats(props: Props) {

    const {
        activeFolder,
    } = useProfile()

    const {
        listChats
    } = useChats()

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