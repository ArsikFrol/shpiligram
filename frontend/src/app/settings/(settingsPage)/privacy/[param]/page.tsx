'use client'

import * as Checkbox from '@radix-ui/react-checkbox'

import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"
import { useState } from "react"

type TypeSelectCanSee = 'EVERYBODY' | 'SELECT_LIST' | 'NOBODY'

type TElem = {
    id: number,
    text: string,
    type: TypeSelectCanSee
}

const listElem: TElem[] = [
    {id: 1, type: 'EVERYBODY', text: 'Everybody'},
    {id: 2, type: 'SELECT_LIST', text: 'Select a list of people'},
    {id: 3, type: 'NOBODY', text: 'Nobody'}
]

export default function page() {
    const [activeType, setActiveType] = useState<TypeSelectCanSee>('EVERYBODY')

    return(
        <>
            <div className={cn(
                "bg-bg rounded-2xl p-[20px] mx-auto mt-[30px]",
                'min-lg:w-[800px] max-lg:mx-[30px]'
            )}>
                <div className="text-blue-300 text-[18px] mb-[10px]">Who can see my phone number?</div>
                <div className="flex flex-col gap-y-[20px]">
                    {listElem.map((obj: TElem, index) => {
                        return(
                            <div className="flex items-center gap-x-[10px]" key={index}>
                                <Checkbox.Root id='checkdox'
                                    className={cn(
                                        'w-[22px] h-[22px] rounded-lg border-1 border-[#D8D8D8]',
                                        'flex items-center justify-center cursor-pointer',
                                        'hover:scale-105 transition-all duration-300',
                                        'data-[state=checked]:bg-blue data-[state=checked]:border-white'
                                    )} checked={obj.type === activeType} onClick={() => setActiveType(obj.type)}>
                                    <Checkbox.Indicator>
                                        <CheckIcon className="w-[15px] h-[15px] text-white" />
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                                <div className="text-white text-[15px]">{obj.text}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}