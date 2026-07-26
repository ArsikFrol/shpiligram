import { TGetUser } from "@/store/profile/types"
import ContentLoader from "react-content-loader";

type Props = {
    objProfile: TGetUser,

    loading: boolean,
    error: boolean
}

export default function UserName(props: Props) {
    if (props.loading) {
        return (
            <div className="">
                <ContentLoader speed={2} width={300} height={30} viewBox="0 0 300 30"
                    backgroundColor="#3f3f46" foregroundColor="#52525b" >
                    <rect x="0" y="0" rx="6" ry="6" width="300" height="30" />
                </ContentLoader>
                <span className="text-[16px] text-gray-500">UserName</span>
            </div>
        );
    }

    if (props.error) {
        return (
            <div className="flex flex-col">
                <span className="text-[20px] text-white">Ошибка при загрузке</span>
                <span className="text-[16px] text-gray-500">UserName</span>
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            <span className="text-[20px] text-white">{props.objProfile.userName}</span>
            <span className="text-[16px] text-gray-500">UserName</span>
        </div>
    )
}