import ContantChat from "../ContantChat";
import TopContant from "./TopContant";

export default function Chatseved() {
    return (
        <div className="bg-bg rounded-2xl">
            <TopContant />
            <ContantChat listMessages={ } loadingChat={loadingChat} loadingMessages={loadingMessages}
                objChat={objChat} />
        </div>
    )
}