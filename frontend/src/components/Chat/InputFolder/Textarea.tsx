import { cn } from "@/lib/utils"
import { TChat } from "@/store/chats/types"
import { TGetMessage } from "@/store/messages/types"
import { RefObject } from "react"

type Props = {
    textareaRef: RefObject<HTMLTextAreaElement | null>,

    valueInput: string,
    setValueInput: (value: string) => void

    addMessageInChat: (chatId: string, message: TGetMessage) => void,

    userId: string,
    objChat: TChat
}

export default function Textarea(props: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setValueInput(e.target.value)
        adjustTextareaHeight(e.target)
    }

    const adjustTextareaHeight = (element: HTMLTextAreaElement) => {
        element.style.height = 'auto'
        const newHeight = Math.min(element.scrollHeight, 100)
        element.style.height = `${newHeight}px`
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    const handleSend = async () => {
        if (!props.valueInput.trim()) return

        if (props.valueInput.trim()) {
            const tempId = `temp_${Date.now()}`
            const obj: TGetMessage = {
                messageId: tempId,
                content: props.valueInput,
                senderId: props.userId,
                sendTime: new Date(),
                chatId: props.objChat?.chatId || '',
                updatedAt: new Date(),
                createdAt: new Date(),
                isRead: false,
                isEdited: false,
            }

            await props.addMessageInChat(props.objChat?.chatId || '', obj)
            props.setValueInput('')

            if (props.textareaRef.current) {
                props.textareaRef.current.style.height = 'auto'
            }
        }
    }

    return (
        <textarea ref={props.textareaRef} placeholder="Message" value={props.valueInput} autoFocus
            className={cn(
                'flex-1 text-white px-[10px] py-[7px] border border-white/30 rounded-xl',
                'resize-none overflow-y-auto bg-transparent overflow-hidden',
                'focus:outline-none focus:border-white/50 transition-colors',
                'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20'
            )} onChange={handleChange} onKeyDown={handleKeyDown} rows={1}
            style={{ minHeight: '40px', maxHeight: '100px' }} />
    )
}