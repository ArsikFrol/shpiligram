'use client'

import useProfile from "@/store/profile/profileStore"
import SortingChatsByFolder from "./SortingChatsByFolder"
import useChats from "@/store/chats/chatsStore"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

type Props = {
    showBtnById: string,
    setShowBtnById: (value: string) => void,
}

export default function ListChats(props: Props) {

    const router = useRouter()

    const {
        activeFolder,
    } = useProfile()

    const {
        listChats
    } = useChats()

    /* TODO: сделать отображение если чатов нет */

    return (
        <>
            {/* {!listChats.length &&
                <div className='text-center text-[25px] text-white'>
                    <div className=''>Список чатов пуст :(</div>
                    <div className={cn(
                        'hover:scale-101 transition-transform duration-300 cursor-pointer',
                        'text-blue-400'
                    )} onClick={() => router.push('/addFriend')}>Нашите кому-нибудь</div>
                </div>
            } */}
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