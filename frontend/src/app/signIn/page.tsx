'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import signIn from '../../../public/signIn.png'

import { cn } from '@/lib/utils'
import useProfile from '@/store/profile/profileStore'
import AgreeingCondition from '@/components/AgreeingCondition'
import { Password, Email } from '@/components/Fields';
import { SignInFormData, signInSchema } from '@/lib/validation/schemas'

export default function page() {
    const router = useRouter()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [checked, setChecked] = useState<boolean>(false)

    const [showAnimateSingUp, setShowAnimateSingUp] = useState<boolean>(false)
    const [showAnimateFogotPas, setShowAnimateFogotPas] = useState<boolean>(false)

    const [isVisible, setIsVisible] = useState(false)

    const methods = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const {
        handleSubmit,
        formState: { isValid, isSubmitting },
        reset
    } = methods

    const onSubmit = (data: SignInFormData) => {
        console.log('✅ Данные формы:', data)
    }

    const {
        setUserId
    } = useProfile()

    const clickRoterSingUp = () => {
        setTimeout(() => {
            router.push('/signUp')
        }, 1650)
        setShowAnimateSingUp(true)
    }

    const clickSingIn = () => {
        router.push('/')
        setUserId('user_2')
    }

    const clickFogotPassowrd = () => {
        setTimeout(() => {
            router.push('/fogotPassword')
        }, 1650)
        setShowAnimateFogotPas(true)
    }

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="h-screen flex gap-x-[50px] w-[950px] mx-auto">
            <Image src={signIn} alt='' width={400} height={400} draggable='false'
                className={cn(
                    "object-contain transition-all duration-1000",
                    isVisible ? 'visible opacity-100' : 'opacity-0',
                    (showAnimateSingUp || showAnimateFogotPas) && 'opacity-0'
                )} />
            <div className={cn(
                'mt-[200px] w-[500px] h-[1400px] p-[30px] bg-bg rounded-t-2xl',
                'transition-all duration-[1500ms] origin-top',
                showAnimateSingUp && '-rotate-180 mt-[755px]',
                showAnimateFogotPas && '-rotate-90 mt-[450px] translate-x-[-357px]'
            )}>
                <FormProvider  {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className={cn(
                        'transition-all duration-[1500ms]',
                        (showAnimateSingUp || showAnimateFogotPas) && 'opacity-0'
                    )}>
                        <div className={cn(
                            'text-[25px] text-white text-center mb-[20px] transition-all duration-[1500ms]'
                        )}>Sign in</div>
                        <Email email={email} setEmail={setEmail} />
                        <Password password={password} setPassword={setPassword} />
                        <div className={cn(
                            'text-[14px] text-gray-500 text-right mt-[10px]',
                            'hover:scale-101 transition-transform duration-300 cursor-pointer'
                        )} onClick={clickFogotPassowrd}>Forgot password?</div>
                        <AgreeingCondition text='By selecting Continue, you agree to our Terms of Service and acknowledge our Privacy Policy.'
                            checked={checked} setChecked={setChecked} />
                        <div className={cn(
                            'w-full h-[50px] rounded-2xl bg-container mx-auto text-white text-[20px]',
                            'flex items-center justify-center mt-[40px]',
                            'hover:scale-101 hover:bg-gray-800 transition-transform duration-300 cursor-pointer'
                        )} onClick={clickSingIn}>Sign in</div>
                        <div className='flex justify-between items-center my-[40px]'>
                            <div className='w-[210px] h-[1px] bg-container'></div>
                            <div className='w-[40px] text-[19px] text-white text-center'>or</div>
                            <div className='w-[210px] h-[1px] bg-container'></div>
                        </div>
                        <div className=''>
                            <div className='text-gray-500 text-[15px] flex justify-center text-center'>New to Shpiligram?
                                <span className={cn(
                                    'text-blue-400 ml-[10px] block',
                                    'hover:scale-101 transition-transform duration-300 cursor-pointer'
                                )}
                                    onClick={clickRoterSingUp}>Sign up</span>
                            </div>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}