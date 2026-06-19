'use client'

import { Dispatch, SetStateAction } from "react"

import { cn } from "@/lib/utils"
import useChats from "@/store/chats/chatsStore"
import useProfile from "@/store/profile/profileStore"
import { TFolder } from "@/store/profile/types"
import FolderElem from "./FolderElem"

type Props = {
    setShowBtnById: Dispatch<SetStateAction<string>>
}

export type TElemFolder = {
    id: number,
    typeFolder: TFolder,
    titleFolder: string
}

const listFolder: TElemFolder[] = [
    { id: 1, typeFolder: 'ALL_CHATS', titleFolder: 'All Chats' },
    { id: 2, typeFolder: 'STUDY', titleFolder: 'Study' }
]

export default function Folders(props: Props) {

    const {
        listChats,
        showChatById
    } = useChats()

    const {
        activeFolder
    } = useProfile()

    return (
        <div className={cn(
            'bg-[#202D3D] rounded-4xl flex items-center gap-x-[10px] shadow'
        )} style={(!showChatById && listChats.length)
            ? { height: '52px', padding: '7px', marginTop: '20px', marginBottom: '20px' }
            : { display: 'none' }}>
            {
                listFolder.map((obj, index) =>
                    <FolderElem activeFolder={activeFolder} obj={obj} setShowBtnById={props.setShowBtnById}
                        key={index} />)
            }
        </div>
    )
}