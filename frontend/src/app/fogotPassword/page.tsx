'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import fogotPassword from '../../../public/fogotPassword.png'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Email } from '@/components/Fields'
import { FormProvider, useForm } from 'react-hook-form'
import { SignInFormData, signInSchema } from '@/lib/validation/schemas'
import { zodResolver } from '@hookform/resolvers/zod'

export default function page() {
    const router = useRouter()

    const [email, setEmail] = useState<string>('')

    const [showAnimate, setShowAnimate] = useState<boolean>(false)

    const [isVisible, setIsVisible] = useState(false)

    const clickSubmit = () => {
        setTimeout(() => {
            router.push('/signIn')
        }, 1650)
        setShowAnimate(true)
    }

    const methods = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        },
    })

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="h-screen flex gap-x-[50px]">
            <Image src={fogotPassword} alt='' width={500} height={500} draggable='false' className={cn(
                "object-contain transition-all duration-1000 ml-[calc(50vh-200px)]",
                isVisible ? 'visible opacity-100' : 'opacity-0',
                showAnimate && 'opacity-0',
            )} />
            <div className={cn(
                'mt-[200px] w-[1500px] h-[500px] p-[30px] bg-bg rounded-l-2xl',
                'transition-all duration-[1500ms] origin-top',
                showAnimate && 'rotate-90 translate-y-[545px] translate-x-[60px]'
            )}>
                <div className={cn(
                    'transition-all duration-[1500ms]',
                    showAnimate && 'opacity-0',
                )}>
                    <div className={cn(
                        'text-[25px] text-white text-center transition-all duration-[1500ms]'
                    )}>Forgot your password?</div>
                    <div className='text-[18px] text-gray-500 text-center w-[600px] mx-auto'>
                        Don't worry, it happens to all of us. Enter your email address below to restore your
                        password or log in to your account through your provider.
                    </div>
                    <div className={cn(
                        "flex items-center justify-between h-[350px]"
                    )}>
                        <FormProvider  {...methods}>
                            <form className=''>
                                <Email email={email} setEmail={setEmail} />
                                <div className={cn(
                                    'w-[350px] h-[50px] rounded-2xl bg-container text-white text-[20px]',
                                    'flex items-center justify-center mt-[40px]',
                                    'hover:scale-101 hover:bg-gray-800 transition-transform duration-300 cursor-pointer'
                                )} onClick={clickSubmit}>Submit</div>
                            </form>
                        </FormProvider>
                        <div className='flex flex-col gap-y-[20px] items-center'>
                            <div className='w-[2px] h-[110px] bg-container'></div>
                            <div className='text-[19px] text-white text-center'>or</div>
                            <div className='w-[2px] h-[110px] bg-container'></div>
                        </div>
                        <div className='w-[350px] flex flex-col gap-y-[20px]'>
                            <div className='bg-container rounded-2xl h-[50px] flex items-center justify-center'>
                                Google Provider
                            </div>
                            <div className='bg-container rounded-2xl h-[50px] flex items-center justify-center'>
                                Google Provider
                            </div>
                            <div className='bg-container rounded-2xl h-[50px] flex items-center justify-center'>
                                Google Provider
                            </div>
                            <div className='bg-container rounded-2xl h-[50px] flex items-center justify-center'>
                                Google Provider
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}