'use client'

import { useState } from "react"

import { formatDateTime } from "@/lib/formatDate"
import { cn } from "@/lib/utils"
import { TGetMessage } from "@/store/messages/types"

type Props = {
    objMessage: TGetMessage,

    userId: string
}

export default function Message(props: Props) {

    const [showSettingsElem, setShowSettingsElem] = useState<string>('')

    return (
        <div className="relative">
            <div className={cn(
                'w-fit p-[10px] rounded-t-2xl',
                props.objMessage.senderId === props.userId
                    ? 'ml-auto bg-active-bg rounded-l-2xl'
                    : 'mr-auto bg-active-bg/50 rounded-r-2xl'
            )} onContextMenu={e => {
                e.preventDefault()
                setShowSettingsElem(props.objMessage.messageId)
            }}>
                <div className='text-white text-[16px] max-w-[500px] break-words'>{props.objMessage.content}</div>
                <div className={cn(
                    'text-[12px] font-medium text-gray-500',
                    props.objMessage.senderId === props.userId && 'text-right'
                )}>
                    {formatDateTime(new Date(props.objMessage.sendTime))}
                </div>
            </div>
            {showSettingsElem === props.objMessage.messageId &&
                <div className={cn(
                    'absolute top-[-25px] bg-container'
                )} style={props.userId === props.objMessage.senderId
                    ? { right: '0' }
                    : { left: '0' }
                }>
                    ds
                </div>
            }
        </div>
    )
}