import { TElemChat } from "@/app/page"
import { Dispatch, SetStateAction } from "react"
import TopContentChat from "./TopContentChat"
import ContantChat from "./ContantChat"

type Props = {
    obj: TElemChat,
    setShowChatById: Dispatch<SetStateAction<string>>
}

export default function Chat({ obj, setShowChatById }: Props) {

    return (
        <div className='w-full bg-bg mt-[10px] rounded-2xl h-[calc(100vh-230px)]'>
            <TopContentChat setShowChatById={setShowChatById} obj={obj} />
            <ContantChat obj={obj} />
        </div>
    )
}