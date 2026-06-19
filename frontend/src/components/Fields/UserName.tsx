import { cn } from "@/lib/utils"

type Props = {
    userName: string,
    setUserName: (value: string) => void
}

export default function UserName(props: Props) {
    return (
        <div className='relative hover:scale-101 transition-transform duration-300 cursor-pointer mb-[40px]'>
            <label className={cn(
                'absolute text-[14px] text-gray-500 top-[-10px] left-[20px]',
                'w-[110px] h-[20px] bg-bg rounded-b-2xl text-center'
            )} htmlFor='userName'>UserName</label>
            <input value={props.userName} onChange={e => props.setUserName(e.target.value)}
                spellCheck='false'
                className={cn(
                    'w-full h-[50px] bg-container rounded-2xl pl-[20px] focus:outline-0',
                    'text-[16px] text-white border border-gray-700 select-none',
                )} placeholder='user_name' id='userName' />
        </div>
    )
}