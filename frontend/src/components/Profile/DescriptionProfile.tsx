import { cn } from "@/lib/utils"

type Props = {
    mobile: string,
    userName: string,
    birthday: string,
    bio: string
}

export default function DescriptionProfile(props: Props) {
    return (
        <div className={cn(
            'w-[600px] mx-auto bg-bg rounded-2xl p-[20px]',
            'flex flex-col gap-y-[30px] my-[50px]'
        )}>
            <div className=''>
                <div className='text-[20px] text-white'>{props.mobile}</div>
                <div className='text-[16px] text-gray-500'>Mobile</div>
            </div>
            {props.bio &&
                <div className=''>
                    <div className='text-[20px] text-white'>{props.bio}</div>
                    <div className='text-[16px] text-gray-500'>Bio</div>
                </div>
            }
            <div className=''>
                <div className='text-[20px] text-white'>@{props.userName}</div>
                <div className='text-[16px] text-gray-500'>Username</div>
            </div>
            <div className=''>
                <div className='text-[20px] text-white'>{props.birthday}</div>
                <div className='text-[16px] text-gray-500'>Birthday</div>
            </div>
        </div>
    )
}