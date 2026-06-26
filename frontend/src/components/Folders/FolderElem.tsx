'use client'

import { TFolder } from "@/store/profile/types"
import { TElemFolder } from "./Folders/Folders"
import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"
import useChats from "@/store/chats/chatsStore"

type Props = {
    obj: TElemFolder,

    activeFolder: TFolder,
    setShowBtnById: (value: string) => void
}

export default function FolderElem(props: Props) {

    const {
        setActiveFolder,
        setShowRowStories
    } = useProfile()

    const clickFolder = (obj: TElemFolder) => {
        setActiveFolder(obj.typeFolder)
        setShowRowStories(false)
        props.setShowBtnById('')
    }

    const isActive = props.activeFolder === props.obj.typeFolder

    return (
        <div className={cn(
            'text-white font-semibold text-[15px] w-[100px] py-[10px] text-center',
            'flex-1',
            !isActive && 'hover:scale-110 transition-transform duration-300 cursor-pointer',
            isActive && 'bg-active-bg rounded-4xl',
            isActive && 'text-blue-500/80'
        )} onClick={() => clickFolder(props.obj)}>{props.obj.titleFolder}</div>
    )
}