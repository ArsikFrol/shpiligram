'use client'

import { useEffect, useRef, useState } from "react"

import { formatDateTime } from "@/lib/formatDate"
import { cn } from "@/lib/utils"
import { TGetMessage } from "@/store/messages/types"
import { TSettingForMessage, TSmile } from "./Dialogue"
import Settings from "./Settings"

type Props = {
    objMessage: TGetMessage,

    userId: string,

    listSettings: TSettingForMessage[],
    listSmile: TSmile[]

    showSettingsElem: string,
    setShowSettingsElem: (value: string) => void

    showAllSmile: boolean
    setShowAllSmile: (value: boolean) => void

    actionsSettings: {
        clickCopyMessage: (textMessage: string, messageId: string) => void,
        clickDelete: (textMessage: string, messageId: string) => void,
        clickForward: (textMessage: string, messageId: string) => void,
        clickReply: (textMessage: string, messageId: string) => void,
        clickPin: (textMessage: string, messageId: string) => void
    }
}

export default function Message(props: Props) {
    const messageRef = useRef<HTMLDivElement>(null)
    const [showAbove, setShowAbove] = useState(false)

    const sender = props.objMessage.senderId === props.userId

    const clickElemSetting = (messageId: string) => {
        props.setShowSettingsElem(messageId)
    }

    useEffect(() => {
        if (props.showSettingsElem === props.objMessage.messageId && messageRef.current) {
            const rect = messageRef.current.getBoundingClientRect()
            const menuHeight = sender ? 250 : 200
            const spaceAbove = rect.top - 150
            const spaceBelow = window.innerHeight - rect.bottom

            if (spaceAbove < menuHeight && spaceBelow > menuHeight) {
                setShowAbove(false)
            } else if (spaceAbove > menuHeight) {
                setShowAbove(true)
            } else {
                setShowAbove(false)
            }
        }
    }, [props.showSettingsElem, props.objMessage.messageId, sender])

    return (
        <div ref={messageRef} className={cn(
            'w-fit p-[10px] rounded-t-2xl relative',
            props.objMessage.senderId === props.userId
                ? 'ml-auto bg-active-bg rounded-l-2xl'
                : 'mr-auto bg-active-bg/50 rounded-r-2xl',
            props.showSettingsElem === props.objMessage.messageId && 'border-1 border-gray-600 p-[9px]'
        )} onContextMenu={e => {
            e.preventDefault()
            if (props.showSettingsElem === props.objMessage.messageId) props.setShowSettingsElem('')
            else clickElemSetting(props.objMessage.messageId)
        }}>
            <div className='text-white text-[16px] max-w-[500px] break-words'>{props.objMessage.content}</div>
            <div className={cn(
                'text-[12px] font-medium text-gray-500',
                props.objMessage.senderId === props.userId && 'text-right'
            )}>
                {formatDateTime(new Date(props.objMessage.sendTime))}
            </div>
            {props.showSettingsElem === props.objMessage.messageId &&
                <Settings listSettings={props.listSettings} listSmile={props.listSmile}
                    showAllSmile={props.showAllSmile} setShowAllSmile={props.setShowAllSmile}
                    sender={sender} setShowSettingsElem={props.setShowSettingsElem}
                    showAbove={showAbove} />
            }
        </div>
    )
}