'use client'

import { JSX, RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { StaticImageData } from "next/image"

import { TGetMessage } from "@/store/messages/types"
import { cn, scrollToBottom } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"
import { TChat } from "@/store/chats/types"
import Message from "./Message"
import { Copy, Forward, Pin, Reply, Trash } from "lucide-react"

import smile from '../../../../public/smile.png'
import { useEscape } from "@/hooks/useEscape"
import { useTypedRouter } from "@/hooks/useTypedRouter"
import { useMessageActions } from "@/hooks/useMessageActions"

type Props = {
    listMessages: TGetMessage[],

    objChat: TChat,
    textareaRef: RefObject<HTMLTextAreaElement | null>

    addMessageInChat: (chatId: string, message: TGetMessage) => void
}

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

export default function Dialogue(props: Props) {
    const router = useTypedRouter()

    const [showSettingsElem, setShowSettingsElem] = useState<string>('')
    const [showAllSmile, setShowAllSmile] = useState<boolean>(false)
    const [showForward, setShowForward] = useState<boolean>(false)

    const stateMessage = useMemo(() => ({
        showAllSmile,
        showSettingsElem
    }), [])

    const setStateMessage = {
        setShowAllSmile,
        setShowSettingsElem
    }

    const {
        userId,
        showRowStories
    } = useProfile()

    const {
        clickCopyMessage,
        clickDelete,
        clickForward,
        clickPin,
        clickSentHello,
        clickReply
    } = useMessageActions({
        userId,
        chatId: props.objChat.chatId,
        textareaRef: props.textareaRef,

        addMessageInChat: props.addMessageInChat,
        setShowForward
    })

    const actions = {
        clickCopyMessage,
        clickDelete,
        clickForward,
        clickReply,
        clickPin
    }

    const messagesEndRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        scrollToBottom(containerRef)
    }, [props.listMessages.length])

    useEscape(() => {
        if (showAllSmile) setShowAllSmile(false)
        else if (showSettingsElem) setShowSettingsElem('')
        else router.push('/chats')
    })

    return (
        <div ref={containerRef} className={cn(
            'px-[10px] overflow-y-auto',
            'flex flex-col gap-y-[10px] scrollbar',
        )} style={showRowStories ? { height: 'calc(100vh - 475px)' } : { height: 'calc(100vh - 395px' }} >
            {
                props.listMessages.map((obj, index: number) => <Message objMessage={obj} userId={userId} key={index}
                    listSettings={listSettings} listSmile={listSmile} actionsSettings={actions}
                    setState={setStateMessage} state={stateMessage} />)
            }
            <div ref={messagesEndRef} />
        </div>
    )
}