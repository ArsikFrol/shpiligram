import ContentLoader from "react-content-loader"

import { UserModel } from "@/generated/prisma/models"
import { calculateAge, formatMonthDay } from "@/lib/formatDate"
import { cn } from "@/lib/utils"

type Props = {
    objProfile: UserModel,

    loading: boolean
}

export default function DescriptionProfile(props: Props) {
    return (
        <div className={cn(
            'mx-auto bg-bg rounded-2xl p-[20px]',
            'flex flex-col gap-y-[30px] mt-[10px]',
            'min-lg:w-[800px] max-lg:mx-[30px]'
        )}>
            <div className=''>
                <div className='text-[20px] text-white'>
                    {props.loading
                        ? <ContentLoader speed={2} width={300} height={30} viewBox="0 0 300 30"
                            backgroundColor="#3f3f46" foregroundColor="#52525b" >
                            <rect x="0" y="0" rx="6" ry="6" width="300" height="30" />
                        </ContentLoader>
                        : <span>{props.objProfile.mobile}</span>
                    }
                </div>
                <div className='text-[16px] text-gray-500'>Mobile</div>
            </div>
            {props.objProfile.bio &&
                <div className=''>
                    <div className='text-[20px] text-white'>
                        {props.loading
                            ? <ContentLoader speed={2} width={300} height={30} viewBox="0 0 300 30"
                                backgroundColor="#3f3f46" foregroundColor="#52525b" >
                                <rect x="0" y="0" rx="6" ry="6" width="300" height="30" />
                            </ContentLoader>
                            : <span>{props.objProfile.bio}</span>
                        }
                    </div>
                    <div className='text-[16px] text-gray-500'>Bio</div>
                </div>
            }
            <div className=''>
                <div className='text-[20px] text-white'>
                    {props.loading
                        ? <ContentLoader speed={2} width={300} height={30} viewBox="0 0 300 30"
                            backgroundColor="#3f3f46" foregroundColor="#52525b" >
                            <rect x="0" y="0" rx="6" ry="6" width="300" height="30" />
                        </ContentLoader>
                        : <span>@{props.objProfile.userName}</span>
                    }
                </div>
                <div className='text-[16px] text-gray-500'>Username</div>
            </div>
            <div className=''>
                {props.loading
                    ? <ContentLoader speed={2} width={300} height={30} viewBox="0 0 300 30"
                        backgroundColor="#3f3f46" foregroundColor="#52525b" >
                        <rect x="0" y="0" rx="6" ry="6" width="300" height="30" />
                    </ContentLoader>
                    : <div className='flex items-center gap-x-[10px]'>
                        <div className='text-[20px] text-white'>
                            {formatMonthDay(new Date(props.objProfile.birthday))}
                        </div>
                        <div className='text-[18px] text-gray-500'>
                            ({calculateAge(new Date(props.objProfile.birthday))} years old)
                        </div>
                    </div>
                }
                <div className='text-[16px] text-gray-500'>Birthday</div>
            </div>
        </div>
    )
}