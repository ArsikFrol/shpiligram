import { TChat } from "@/store/chats/types"
import LittleUser from "./LittleUser"
import BigUser from "./BigUser"


type Props = {
    obj: TChat
}

export default function ElemChatForChatIdPage(props: Props) {
    return (
        <>
            <div className="min-xl:hidden relative">
                <LittleUser obj={props.obj} />
            </div>
            <div className="max-xl:hidden">
                <BigUser obj={props.obj} />
            </div>
        </>
    )
}