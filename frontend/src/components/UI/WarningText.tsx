import { cn } from "@/lib/utils"

type Props = {
    functionYes: () => void,
    functionNo: () => void,
    textWarning: string
}

export default function WarningText(props: Props) {
    return (
        <div className='fixed w-full h-screen top-0 left-0 bg-black/50 z-10'>
            <div className={cn(
                'w-[500px] bg-container rounded-2xl p-[20px]',
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            )}>
                <div className='text-white text-[20px] text-center'>{props.textWarning}</div>
                <div className='flex items-center gap-x-[50px] w-[350px] mx-auto mt-[30px]'>
                    <div className={cn(
                        'w-[150px] h-[50px] flex justify-center items-center bg-bg rounded-2xl',
                        'hover:scale-105 transition-transform duration-300 cursor-pointer',
                        'text-[18px] text-white'
                    )} onClick={() => props.functionYes()}>Да</div>
                    <div className={cn(
                        'w-[150px] h-[50px] flex justify-center items-center bg-bg rounded-2xl',
                        'hover:scale-105 transition-transform duration-300 cursor-pointer',
                        'text-[18px] text-white'
                    )} onClick={() => props.functionNo()}>Нет</div>
                </div>
            </div>
        </div>
    )
}