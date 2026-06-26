import { cn } from "@/lib/utils"

type Props = {
    value: string,
    setValue: (newValue: string) => void
}

export default function SearchAddChat(props: Props) {

    return (
        <div className='relative'>
            <input type="text" placeholder="Введите UserName пользователя" value={props.value}
                onChange={e => props.setValue(e.target.value)} spellCheck="false"
                className={cn(
                    'w-[600px] h-[37px] bg-bg rounded-2xl pl-[20px] focus:outline-0',
                    'text-[16px] text-white'
                )} />
        </div>
    )
}