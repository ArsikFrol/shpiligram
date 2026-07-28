import ContentLoader from "react-content-loader"

import { calculateAge, formatMonthDay } from "@/lib/formatDate"
import { cn } from "@/lib/utils"
import { TGetUser } from "@/store/profile/types"
import Mobile from "./Mobile"
import Bio from "./Bio"
import UserName from "./UserName"
import Birthday from "./Birthday"

type Props = {
    objProfile: TGetUser,

    loading: boolean,
    error: boolean,

    moreMT?: boolean
}

export default function Description(props: Props) {
    return (
        <div className={cn(
            'mx-auto bg-bg rounded-2xl p-[20px]',
            'flex flex-col gap-y-[30px] mt-[10px]',
            'min-lg:w-[800px] max-lg:mx-[30px]'
        )} style={{
            marginTop: props.moreMT ? '40px' : '10px'
        }}>
            <Mobile error={props.error} loading={props.loading} objProfile={props.objProfile} />
            <Bio error={props.error} loading={props.loading} objProfile={props.objProfile} />
            <UserName error={props.error} loading={props.loading} objProfile={props.objProfile} />
            <Birthday error={props.error} loading={props.loading} objProfile={props.objProfile} />
        </div>
    )
}