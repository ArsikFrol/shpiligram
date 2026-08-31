'use client'

import { useEffect, useRef, useState } from "react"
import { useClickAway } from "react-use"

import { cn } from "@/lib/utils"
import { TChat } from "@/store/chats/types"
import Btn from "./Btn"
import UserName from "./UserName"
import LastMessage from "./LastMessage"

type Props = {
    objChat: TChat,

    setShowBtnById: (value: string) => void,
    showBtnById: string,
}

export default function ChatElem(props: Props) {
    const ref = useRef<HTMLDivElement>(null)

    const [showAbove, setShowAbove] = useState<boolean>(false)

    const clickPinOff = () => {

    }

    useEffect(() => {
        if (props.showBtnById === props.objChat.chatId && ref.current) {
            const rect = ref.current.getBoundingClientRect()
            const menuHeight = 150
            const spaceAbove = rect.top - 250
            const spaceBelow = window.innerHeight - rect.bottom

            if (spaceAbove < menuHeight && spaceBelow > menuHeight) {
                setShowAbove(false)
            } else if (spaceAbove > menuHeight) {
                setShowAbove(true)
            } else {
                setShowAbove(false)
            }
        }
    }, [props.showBtnById, props.objChat.chatId])

    useClickAway(ref, () => {
        props.setShowBtnById('')
    })

    return (
        <div ref={ref} className="relative w-full flex items-center justify-between">
            <UserName objChat={props.objChat} />
            <LastMessage objChat={props.objChat} clickPinOff={clickPinOff} />
            {props.showBtnById === props.objChat.chatId &&
                <div className={cn(
                    'absolute left-1/2 -translate-x-1/2 z-40',
                    'bg-bg rounded-2xl py-[10px] px-[20px]',
                    showAbove ? 'top-[-180px]' : 'top-[70px]'
                )}>
                    <Btn clickPinOff={clickPinOff} objChat={props.objChat} setShowBtnById={props.setShowBtnById} />
                </div>
            }
        </div>
    )
}