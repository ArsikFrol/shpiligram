import { MoveRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { TGetUser } from "@/store/profile/types"

type Props = {
    objProfile: TGetUser,

    valueInpoutName: string,
    valueInpoutLastName: string,
    valueBio: string,
}

export default function TextChange(props: Props) {
    return (
        <>
            <div className="flex flex-col gap-y-[10px] mt-[30px]">
                {props.objProfile.firstName !== props.valueInpoutName &&
                    <div className="flex items-cecnter justify-between">
                        <div className="flex items-center gap-x-[10px] min-w-[200px]">
                            <div className="text-[18px]">UserName:</div>
                            <div className={cn(
                                'text-medium',
                                props.objProfile.firstName !== props.valueInpoutName && 'text-gray-400'
                            )}>{props.objProfile.firstName}</div>
                        </div>
                        <MoveRight color="white" size={35} />
                        <div className="min-w-[200px] text-[22px]">{props.valueInpoutName}</div>
                    </div>
                }
                {props.objProfile.lastName !== props.valueInpoutLastName &&
                    <div className="flex items-cecnter justify-between">
                        <div className="flex items-center gap-x-[10px] min-w-[200px]">
                            <div className="text-[18px]">LastName:</div>
                            <div className={cn(
                                'text-medium',
                                props.objProfile.firstName !== props.valueInpoutName && 'text-gray-400'
                            )}>{props.objProfile.lastName}</div>
                        </div>
                        <MoveRight color="white" size={35} />
                        <div className="min-w-[200px] text-[22px]">{props.valueInpoutLastName}</div>
                    </div>
                }
                {props.objProfile.bio !== props.valueBio &&
                    <div className="flex flex-col gap-y-[30px] text-left mt-[20px]">
                        <div className=''>
                            <div className='text-blue-400 text-[20px]'>Bio было:</div>
                            <div className='text-gray-400'>{props.objProfile.bio}</div>
                        </div>
                        <div className=''>
                            <div className='text-blue-400 text-[20px]'>Bio стало:</div>
                            <div className='text-[22px] text-left break-words'>{props.valueBio}</div>
                        </div>
                    </div>
                }
            </div >
        </>
    )
}