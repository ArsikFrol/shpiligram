'use client'

import { cn } from "@/lib/utils"
import { TGetMessage } from "@/store/messages/types"
import useProfile from "@/store/profile/profileStore"

type Props = {
    userId: string,

    addMessageInChat: (cahtId: string, message: TGetMessage) => Promise<void>
}

export default function EmptyDialogue(props: Props) {

    async function clickSentHello() {
        const messageId = `temp_${Date.now()}`
        const chatId = `temp_${Date.now()}`
        const obj: TGetMessage = {
            messageId,
            chatId,
            content: 'Привет!',
            senderId: props.userId,
            sendTime: new Date(),
            updatedAt: new Date(),
            createdAt: new Date(),
            isRead: false,
            isEdited: false,
        }

        await props.addMessageInChat(messageId, obj)
    }

    const {
        showRowStories
    } = useProfile()

    return (
        <div className={cn(
            'px-[10px] overflow-y-auto bg-bg rounded-2xl',
            'flex flex-col items-center justify-center mt-[10px]',
        )} style={{
            height: showRowStories ? 'calc(100vh - 475px)' : 'calc(100vh - 405px'
        }}>
            <span className="text-white text-[20px]" >Начните даилог!</span>
            <div className={cn(
                'hover:scale-101 transition-transform duration-300 cursor-pointer',
                'text-blue-400 text-[20px]'
            )} onClick={clickSentHello}>Отправить: Привет!</div>
        </div>
    )
}