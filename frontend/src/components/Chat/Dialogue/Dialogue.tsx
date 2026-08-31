'use client'

import { JSX, useEffect, useRef, useState } from "react"
import { StaticImageData } from "next/image"
import { Copy, Forward, Pin, Reply, Trash } from "lucide-react"

import { cn, scrollToBottom } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"
import Message from "./Message"

import smile from '../../../../public/smile.png'
import { useEscape } from "@/hooks/useEscape"
import { useTypedRouter } from "@/hooks/useTypedRouter"
import { useMessageActions } from "@/hooks/useMessageActions"
import useMessages from "@/store/messages/messagesStore"

export type TSettingForMessage = {
    id: number,
    text: string,
    elem: JSX.Element
}

const listSettings: TSettingForMessage[] = [
    { id: 1, elem: <Reply color="white" size={25} />, text: 'Reply' },
    { id: 2, elem: <Copy color="white" size={25} />, text: 'Copy' },
    { id: 3, elem: <Forward color="white" size={25} />, text: 'Forward' },
    { id: 4, elem: <Pin color="white" size={25} />, text: 'Pin' },
    { id: 5, elem: <Trash color="white" size={25} />, text: 'Delete' }
]

export type TSmile = {
    id: number,
    image: string | StaticImageData
}

const listSmile: TSmile[] = [
    { id: 1, image: smile },
    { id: 2, image: smile },
    { id: 3, image: smile },
    { id: 4, image: smile },
    { id: 5, image: smile },
    { id: 6, image: smile },
    { id: 7, image: smile },
    { id: 8, image: smile },
    { id: 9, image: smile },
    { id: 10, image: smile },
    { id: 11, image: smile },
    { id: 12, image: smile },
    { id: 13, image: smile },
    { id: 14, image: smile },
    { id: 15, image: smile },
    { id: 16, image: smile },
    { id: 17, image: smile },
    { id: 18, image: smile },
    { id: 19, image: smile },
]

export default function Dialogue() {
    const router = useTypedRouter()

    const [showSettingsElem, setShowSettingsElem] = useState<string>('')
    const [showAllSmile, setShowAllSmile] = useState<boolean>(false)
    const [showForward, setShowForward] = useState<boolean>(false)

    const { userId, showRowStories } = useProfile()
    const { listMessages } = useMessages()
    const { clickCopyMessage, clickDelete, clickForward, clickPin, clickReply } = useMessageActions({ setShowForward })
    const actions = { clickCopyMessage, clickDelete, clickForward, clickReply, clickPin }

    const messagesEndRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        scrollToBottom(containerRef)
    }, [listMessages.length])

    useEscape(() => {
        if (showAllSmile) setShowAllSmile(false)
        else if (showSettingsElem) setShowSettingsElem('')
        else router.push('/chats')
    })

    return (
        <div ref={containerRef} className={cn(
            'px-[10px] overflow-y-auto',
            'flex flex-col gap-y-[10px]',
        )} style={{
            height: showRowStories ? 'calc(100vh - 475px)' : 'calc(100vh - 395px)'
        }}>
            {
                listMessages.map((obj, index: number) => <Message objMessage={obj} userId={userId} key={index}
                    listSettings={listSettings} listSmile={listSmile} actionsSettings={actions}
                    setShowAllSmile={setShowAllSmile} setShowSettingsElem={setShowSettingsElem}
                    showAllSmile={showAllSmile} showSettingsElem={showSettingsElem} />)
            }
            <div ref={messagesEndRef} />
        </div>
    )
}