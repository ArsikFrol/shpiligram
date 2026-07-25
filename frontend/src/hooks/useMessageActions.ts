import { RefObject, useCallback } from "react"
import toast from "react-hot-toast"

import { TGetMessage } from "@/store/messages/types"

type Props = {
    userId: string,
    chatId: string,
    textareaRef: RefObject<HTMLTextAreaElement | null>

    addMessageInChat: (chatId: string, message: TGetMessage) => void,
    setShowForward: (value: boolean) => void
}

type Return = {
    clickSentHello: () => Promise<void>,
    clickCopyMessage: (textMessage: string, messageId: string) => void,
    clickDelete: (textMessage: string, messageId: string) => void,
    clickForward: (textMessage: string, messageId: string) => void,
    clickPin: (textMessage: string, messageId: string) => void,
    clickReply: (textMessage: string, messageId: string) => void
}

export const useMessageActions = ({
    userId,
    chatId,
    textareaRef,

    addMessageInChat,
    setShowForward
}: Props): Return => {

    const clickSentHello = useCallback(async () => {
        const tempId = `temp_${Date.now()}`
        const obj: TGetMessage = {
            messageId: tempId,
            content: 'Привет!',
            senderId: userId,
            sendTime: new Date(),
            chatId: chatId,
            updatedAt: new Date(),
            createdAt: new Date(),
            isRead: false,
            isEdited: false,
        }

        await addMessageInChat(chatId, obj)

        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
        }
    }, [userId, chatId, addMessageInChat, textareaRef])

    const clickCopyMessage = useCallback((textMessage: string, messageId: string) => {
        navigator.clipboard.writeText(textMessage);

        toast.success(`Сообщение: ${textMessage}. Успешно скопировано!`)
    }, [])


    const clickDelete = useCallback((textMessage: string, messageId: string) => {


        toast.success(`Сообщение: ${textMessage}. Успешно удалено!`)
    }, [])

    const clickForward = useCallback((textMessage: string, messageId: string) => {


        setShowForward(true)
    }, [])

    const clickPin = useCallback((textMessage: string, messageId: string) => {


        toast.success(`Сообщение: ${textMessage}. Закреплено!`)
    }, [])

    const clickReply = useCallback((textMessage: string, messageId: string) => {

    }, [])

    return {
        clickSentHello,
        clickCopyMessage,
        clickDelete,
        clickForward,
        clickPin,
        clickReply
    }
}