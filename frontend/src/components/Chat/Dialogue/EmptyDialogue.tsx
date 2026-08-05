'use client'

import { useTypedRouter } from "@/hooks/useTypedRouter"
import { cn } from "@/lib/utils"
import useChats from "@/store/chats/chatsStore"
import { TGetMessage } from "@/store/messages/types"
import useProfile from "@/store/profile/profileStore"
import { useSearchParams } from "next/navigation"

type Props = {
    userId: string,

    addMessageInChat: (cahtId: string, message: TGetMessage) => Promise<void>
}

export default function EmptyDialogue(props: Props) {
    const router = useTypedRouter()

    const searchParams = useSearchParams()
    const interlocutor = searchParams.get('interlocutor')!

    const {
        createChat
    } = useChats()

    async function clickSentHello() {

        const result = await createChat(props.userId, interlocutor)

        const messageId = `temp_${Date.now()}`
        const obj: TGetMessage = {
            messageId,
            chatId: result.chat.chatId,
            content: 'Привет!',
            senderId: props.userId,
            sendTime: new Date(),
            updatedAt: new Date(),
            createdAt: new Date(),
            isRead: false,
            isEdited: false,
        }

        await props.addMessageInChat(result.chat.chatId, obj)

        router.push(`/chats/${result.chat.chatId}`)
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