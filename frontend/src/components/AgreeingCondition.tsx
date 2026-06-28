import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

import { cn } from "@/lib/utils"

type Props = {
    checked: boolean,
    setChecked: (value: boolean) => void,

    text: string
}

export default function AgreeingCondition(props: Props) {
    return (
        <div className={cn(
            'flex gap-x-[10px] items-center mt-[30px]',
            'hover:scale-101 transition-transform duration-300 cursor-pointer'
        )}>
            <Checkbox.Root id='checkdox'
                className={cn(
                    'w-[20px] h-[20px] rounded-lg border-1 border-[#D8D8D8]',
                    'flex items-center justify-center cursor-pointer',
                    'hover:scale-105 transition-all duration-300',
                    'data-[state=checked]:bg-blue data-[state=checked]:border-white'
                )} checked={props.checked} onClick={() => props.setChecked(!props.checked)}>
                <Checkbox.Indicator>
                    <CheckIcon className="w-[13px] h-[13px] text-white" />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <label className={cn(
                'text-[14px] text-gray-500 w-[400px] cursor-pointer'
            )} htmlFor="checkdox">{props.text}</label>
        </div>
    )
}