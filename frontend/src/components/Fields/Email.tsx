import { useFormContext } from "react-hook-form"

import { cn } from "@/lib/utils"

type Props = {
    email: string,
    setEmail: (value: string) => void
}

export default function Email(props: Props) {
    const {
        register,
        formState: { errors, touchedFields },
        watch,
    } = useFormContext()

    const name = 'email'

    const value = watch(name)
    const error = errors[name]?.message as string | undefined
    const isTouched = touchedFields[name]

    return (
        <div className='relative hover:scale-101 transition-transform duration-300 cursor-pointer mb-[40px]'>
            <label className={cn(
                'absolute text-[14px] top-[-10px] left-[20px]',
                'w-[110px] h-[20px] bg-bg rounded-b-2xl text-center transition-colors duration-200',
                error && isTouched ? 'text-red-500' : 'text-gray-500'
            )} htmlFor={name}  >
                Email
            </label>

            <input
                {...register(name)} id={name} type="email" placeholder='email@email.email' autoComplete="email"
                spellCheck='false' className={cn(
                    'w-full h-[50px] bg-container rounded-2xl pl-[20px] focus:outline-0',
                    'text-[16px] text-white border transition-colors duration-200',
                    error && isTouched
                        ? 'border-red-500 focus:border-red-500'
                        : value && !error && isTouched
                            ? 'border-green-500'
                            : 'border-gray-700 focus:border-gray-500'
                )}
            />

            {error && isTouched && (
                <p className="absolute -bottom-8 left-4 text-red-500 text-xs animate-fadeIn">
                    {error}
                </p>
            )}
        </div>
    )
}