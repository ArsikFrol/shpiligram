'use client'

import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

type Props = {
    password: string,
    setPassword: (value: string) => void
}

export default function Password(props: Props) {

    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
        <div className='relative hover:scale-101 transition-transform duration-300 cursor-pointer'>
            <label className={cn(
                'absolute text-[14px] text-gray-500 top-[-10px] left-[20px]',
                'w-[110px] h-[20px] bg-bg rounded-b-2xl text-center'
            )}>Password</label>
            <input value={props.password} onChange={e => props.setPassword(e.target.value)}
                spellCheck='false' type={showPassword ? 'text' : 'password'}
                className={cn(
                    'w-full h-[50px] bg-container rounded-2xl pl-[20px] pr-[40px] focus:outline-0',
                    'text-[16px] text-white border border-gray-700 select-none',
                )} placeholder='password' />
            {showPassword
                ? <EyeOff className={cn(
                    'absolute top-[12px] right-[10px]'
                )} onClick={() => setShowPassword(false)} color='white' />
                : <Eye className={cn(
                    'absolute top-[12px] right-[10px]',
                    !props.password && 'hidden'
                )} onClick={() => setShowPassword(true)} color='white' />
            }
        </div>
    )
}