'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import signUp from '../../../public/signUp.png'
import { cn } from "@/lib/utils";
import AgreeingCondition from "@/components/AgreeingCondition";
import { Password, UserName, Email, Birthday } from '@/components/Fields';
import { FormProvider, useForm } from "react-hook-form";
import { SignInFormData, signInSchema, SignUpFormData, signUpSchema } from "@/lib/validation/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export default function page() {
    const router = useRouter()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [userName, setUserName] = useState<string>('')
    const [checked, setChecked] = useState<boolean>(false)

    const [birthday, setBirthday] = useState<string>('')
    const [mobile, setMobile] = useState<string>('')

    const [showAnimate, setShowAnimate] = useState<boolean>(false)

    const [isVisible, setIsVisible] = useState(false)

    const methods = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const clickRoterSingUp = () => {
        setTimeout(() => {
            router.push('/signIn')
        }, 1650)
        setShowAnimate(true)
    }

    const clickSingUp = () => {

    }

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="h-screen flex gap-x-[50px] w-[950px] mx-auto">
            <Image src={signUp} alt='' width={400} height={400} draggable='false'
                className={cn(
                    "object-contain transition-all duration-1000",
                    isVisible ? 'visible opacity-100' : 'opacity-0',
                    showAnimate && 'opacity-0'
                )} />
            <div className={cn(
                'bg-bg rounded-b-2xl mb-[200px] w-[500px] p-[30px]',
                'transition-all duration-[1500ms] origin-bottom',
                showAnimate && 'rotate-180 mb-[755px]'
            )}>
                <FormProvider   {...methods}>
                    <form className={cn(
                        'transition-all duration-[500ms]',
                        showAnimate && 'opacity-0'
                    )}>
                        <div className='text-[25px] text-white text-center mb-[20px]'>Sign Up</div>
                        <Email email={email} setEmail={setEmail} />
                        <UserName userName={userName} setUserName={setUserName} />
                        <Password password={password} setPassword={setPassword} />
                        <div className='w-full h-[1px] bg-container my-[30px]'></div>
                        <Birthday birthday={birthday} setBirthday={setBirthday} />
                        <div className='relative hover:scale-101 transition-transform duration-300 cursor-pointer mb-[40px]'>
                            <label className={cn(
                                'absolute text-[14px] text-gray-500 top-[-10px] left-[20px]',
                                'w-[110px] h-[20px] bg-bg rounded-b-2xl text-center'
                            )} htmlFor='mobile'>Mobile</label>
                            <input value={mobile} onChange={e => setMobile(e.target.value)}
                                spellCheck='false'
                                className={cn(
                                    'w-full h-[50px] bg-container rounded-2xl pl-[20px] focus:outline-0',
                                    'text-[16px] text-white border border-gray-700 select-none',
                                )} placeholder='+1 (555) 333-44-55' id='mobile' />
                        </div>
                        <AgreeingCondition text='By selecting Continue, you agree to our Terms of Service and acknowledge our Privacy Policy.'
                            checked={checked} setChecked={setChecked} />
                        <div className={cn(
                            'w-full h-[50px] rounded-2xl bg-container mx-auto text-white text-[20px]',
                            'flex items-center justify-center mt-[40px]',
                            'hover:scale-101 hover:bg-gray-800 transition-transform duration-300 cursor-pointer'
                        )} onClick={clickSingUp}>Sign Up</div>
                        <div className='flex items-center justify-center mt-[20px]'>
                            <div className={cn(
                                'text-gray-500 text-[15px] flex justify-center text-center'
                            )}>
                                Already have an account?
                            </div>
                            <div className={cn(
                                'text-blue-400 ml-[10px]',
                                'hover:scale-103 hover:bg-gray-800 transition-transform duration-300 cursor-pointer'
                            )} onClick={clickRoterSingUp}>Login</div>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}