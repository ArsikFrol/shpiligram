import { TElemChat } from "@/app/page"
import { Dispatch, SetStateAction } from "react"
import TopContentChat from "./TopContentChat"
import ContantChat from "./ContantChat"

type Props = {
    obj: TElemChat,
    setShowChatId: Dispatch<SetStateAction<string>>
}

export default function Chat({ obj, setShowChatId }: Props) {

    return (
        <div className='w-full bg-bg mt-[10px] rounded-2xl  h-[calc(100vh-340px)]'>
            <TopContentChat setShowChatId={setShowChatId} obj={obj} />
            <ContantChat obj={obj} />
        </div>
    )
}