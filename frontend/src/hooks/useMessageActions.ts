import { useCallback } from "react"
import toast from "react-hot-toast"

type Props = {
    setShowForward: (value: boolean) => void
}

type Return = {
    clickCopyMessage: (textMessage: string, messageId: string) => void,
    clickDelete: (textMessage: string, messageId: string) => void,
    clickForward: (textMessage: string, messageId: string) => void,
    clickPin: (textMessage: string, messageId: string) => void,
    clickReply: (textMessage: string, messageId: string) => void
}

export const useMessageActions = ({
    setShowForward
}: Props): Return => {

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
        clickCopyMessage,
        clickDelete,
        clickForward,
        clickPin,
        clickReply
    }
}