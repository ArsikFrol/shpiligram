import { UserModel } from "@/generated/prisma/models"
import { calculateAge, formatMonthDay } from "@/lib/formatDate"
import { cn } from "@/lib/utils"

type Props = {
    objProfile: UserModel
}

export default function DescriptionProfile(props: Props) {
    return (
        <div className={cn(
            'w-[600px] mx-auto bg-bg rounded-2xl p-[20px]',
            'flex flex-col gap-y-[30px] my-[50px]'
        )}>
            <div className=''>
                <div className='text-[20px] text-white'>{props.objProfile.mobile}</div>
                <div className='text-[16px] text-gray-500'>Mobile</div>
            </div>
            {props.objProfile.bio &&
                <div className=''>
                    <div className='text-[20px] text-white'>{props.objProfile.bio}</div>
                    <div className='text-[16px] text-gray-500'>Bio</div>
                </div>
            }
            <div className=''>
                <div className='text-[20px] text-white'>@{props.objProfile.userName}</div>
                <div className='text-[16px] text-gray-500'>Username</div>
            </div>
            <div className=''>
                <div className='flex items-center gap-x-[10px]'>
                    <div className='text-[20px] text-white'>
                        {formatMonthDay(new Date(props.objProfile.birthday))}
                    </div>
                    <div className='text-[18px] text-gray-500'>
                        ({calculateAge(new Date(props.objProfile.birthday))} years old)
                    </div>
                </div>
                <div className='text-[16px] text-gray-500'>Birthday</div>
            </div>
        </div>
    )
}