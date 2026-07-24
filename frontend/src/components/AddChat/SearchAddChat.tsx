import { cn } from "@/lib/utils"

type Props = {
    value: string,
    setValue: (newValue: string) => void
}

export default function SearchAddChat(props: Props) {

    return (
        <input type="text" placeholder="Введите UserName пользователя" value={props.value}
            onChange={e => props.setValue(e.target.value)} spellCheck="false"
            className={cn(
                'h-[50px] bg-bg rounded-2xl pl-[20px] focus:outline-0',
                'text-[16px] text-white',
                'hover:shadow-lg transition-all duration-300',
                'focus:border-1 focus:pl-[19px] focus:border-gray-600',
                'min-lg:w-[800px] max-lg:w-full'
            )} />
    )
}