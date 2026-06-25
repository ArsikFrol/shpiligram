import { UserCircle2Icon } from "lucide-react";
import ContentLoader from "react-content-loader"

import { UserModel } from "@/generated/prisma/models";

type Props = {
    objProfile: UserModel

    loading: boolean
}

export default function PhotoProfile(props: Props) {
    return (
        <div className='w-[300px] mx-auto'>
            <UserCircle2Icon size={100} color="white" strokeWidth={1} className="mx-auto" />
            <div className='text-white text-[25px] text-center'>
                {props.loading
                    ? <ContentLoader speed={2} width={300} height={38} viewBox="0 0 300 38"
                        backgroundColor="#3f3f46" foregroundColor="#52525b" >
                        <rect x="0" y="0" rx="6" ry="6" width="300" height="38" />
                    </ContentLoader>
                    : <div className=''>{props.objProfile.firstName} {props.objProfile.lastName}</div>
                }
            </div>
        </div>
    )
}