'use client'

import * as Checkbox from '@radix-ui/react-checkbox'

import { cn } from "@/lib/utils";
import TitleSettings from "../UI/TitleSettings";
import { useState } from "react";
import { CheckIcon } from 'lucide-react';

type TElem = {
    id: number,
    language: string
}

const listLanguage: TElem[] = [
    {id: 1, language: 'English'},
    {id: 2, language: 'Russian'}
]

export default function Language() {
    const [checkedLang, setCheckedLang] = useState<string>('')

    const clickChecked = (language: string) => {
        if (checkedLang === language) setCheckedLang('')
        else setCheckedLang(language)
    }

    return(
        <div className={cn(
            "bg-bg rounded-2xl p-[20px] mx-auto mt-[30px]",
            'min-lg:w-[800px] max-lg:mx-[30px]'
        )}>
            <TitleSettings title="Language"/>
            <div className="flex flex-col gap-y-[15px] mt-[20px]">
                {
                    listLanguage.map((obj: TElem, index) => {
                        return(
                            <div className="flex items-center gap-x-[20px]" key={index}>
                                <div className="">
                                     <Checkbox.Root id='checkdox'
                                        className={cn(
                                            'w-[20px] h-[20px] rounded-lg border-1 border-[#D8D8D8]',
                                            'flex items-center justify-center cursor-pointer',
                                            'hover:scale-105 transition-all duration-300',
                                            'data-[state=checked]:bg-blue data-[state=checked]:border-white'
                                        )} checked={checkedLang === obj.language} onClick={() => clickChecked(obj.language)}>
                                        <Checkbox.Indicator>
                                            <CheckIcon className="w-[13px] h-[13px] text-white" />
                                        </Checkbox.Indicator>
                                    </Checkbox.Root>
                                    <label htmlFor="checkbox"></label>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-white text-[18px]">{obj.language}</div>
                                    <div className="text-[15px] font-medium text-gray-500">Translate</div>    
                                </div>    
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}