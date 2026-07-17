import { cn } from "@/lib/utils"
import { TGetUser } from "@/store/profile/types"
import { MoveRight } from "lucide-react"

type Props = {
    objProfile: TGetUser,

    valueInpoutName: string,
    valueInpoutLastName: string,
    valueBio: string,    
}

export default function TextChange (props: Props) {
    return(
        <>
            <div className="flex items-center justify-between my-[10px]">
                <div className="text-blue-400 text-[20px] w-[200px] text-left">Было</div>
                <div className="text-blue-400 text-[20px] w-[200px] text-center">Стало</div>
            </div>
            <div className="flex flex-col gap-y-[10px]">
                {props.objProfile.firstName !== props.valueInpoutName && 
                    <div className="flex items-cecnter justify-between">
                        <div className="flex items-center gap-x-[10px] min-w-[350px]">
                            <div className="text-[18px]">UserName:</div>
                            <div className={cn(
                                'text-medium',
                                props.objProfile.firstName !== props.valueInpoutName && 'text-gray-400'
                            )}>props.objProfile.firstName</div>
                        </div>
                        <MoveRight color="white" size={35} />
                        <div className="min-w-[200px] text-[22px]">{props.valueInpoutName}</div>
                    </div>
                }
                {props.objProfile.lastName !== props.valueInpoutLastName &&
                    <div className="flex items-cecnter justify-between">
                        <div className="flex items-center gap-x-[10px] min-w-[350px]">
                            <div className="text-[18px]">LastName:</div>
                            <div className={cn(
                                'text-medium',
                                props.objProfile.firstName !== props.valueInpoutName && 'text-gray-400'
                            )}>props.objProfile.lastName</div>
                        </div>
                        <MoveRight color="white" size={35} />
                        <div className="min-w-[200px] text-[22px]">{props.valueInpoutLastName}</div>
                    </div>
                }
                {props.objProfile.bio !== props.valueBio &&
                    <div className="flex items-cecnter justify-between">
                        <div className="flex items-center gap-x-[10px] min-w-[350px]">
                            <div className="text-[18px]">Bio:</div>
                            <div className={cn(
                                'text-medium',
                                props.objProfile.firstName !== props.valueInpoutName && 'text-gray-400'
                            )}>props.objProfile.bio</div>
                        </div>
                        <MoveRight color="white" size={35} />
                        <div className="min-w-[200px] text-[22px]">{props.valueBio}</div>
                    </div>
                }
            </div>
        </>
    )
}