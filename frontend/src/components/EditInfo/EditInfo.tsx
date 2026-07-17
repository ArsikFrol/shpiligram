'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import YourInfoEdit from "./YourInfoEdit"
import { useEscape } from "@/hooks/useEscape"
import { useTypedRouter } from "@/hooks/useTypedRouter"
import useProfile from "@/store/profile/profileStore"
import { TGetUser } from "@/store/profile/types"
import WarningText from "../UI/WarningText"
import { ChevronDown, MoveRight } from "lucide-react"
import TextChange from "./TextChange"

type Props = {
    valueInpoutName: string,
    setValueInpoutName: Dispatch<SetStateAction<string>>

    valueInpoutLastName: string,
    setValueInpoutLastName: Dispatch<SetStateAction<string>>,

    valueBio: string,
    setValueBio: Dispatch<SetStateAction<string>>,

    objProfile: TGetUser,
}

export default function EditInfo(props: Props) {
    const router = useTypedRouter()

    const [countValueBio, setCountValueBio] = useState<number>(80)
    const [showWarning, setShowWarning] = useState<boolean>(false)
    const [showChange, setShowChange] = useState<boolean>(false)

    const getChangedFields = () => {
        const changes: { [key: string]: string } = {}
        
        if (props.objProfile.firstName !== props.valueInpoutName) {
            changes.firstName = props.valueInpoutName
        }
        if (props.objProfile.lastName !== props.valueInpoutLastName) {
            changes.lastName = props.valueInpoutLastName
        }
        if (props.objProfile.bio !== props.valueBio) {
            changes.bio = props.valueBio
        }
        
        return changes
    }

    const changedFields = getChangedFields()
    const hasChanges = Object.keys(changedFields).length > 0

    const clickSaveChange = () => {
        setShowWarning(true)
    }

    const clickDontSave = () => {
        setShowWarning(false)

        props.setValueBio('')
        props.setValueInpoutLastName('')
        props.setValueInpoutName('')

        setShowChange(false)
    }

    const escapeFunction = () => {
        if (props.objProfile.firstName !== props.valueInpoutName ||
            props.objProfile.lastName !== props.valueInpoutLastName || 
            props.objProfile.bio !== props.valueBio
        ) setShowWarning(true)
        else router.push('/profile')
    }

    useEscape(escapeFunction)

    useEffect(() => {
        setCountValueBio(80 - props.valueBio.length)
    }, [props.valueBio])

    return (
        <div className="scrollbar">
            <div className={cn(
                'mx-auto h-[calc(100vh-250px)] overflow-y-auto mt-[30px] pr-[10px]',
                'min-lg:w-[800px] max-lg:mx-[30px]'
            )}>
                <div className='bg-bg rounded-2xl p-[20px] mb-[20px]'>
                    <div className='text-blue-400 text-[20px] pb-[20px]'>Your name</div>
                    <input type="text" value={props.valueInpoutName}
                        onChange={e => props.setValueInpoutName(e.target.value)}
                        placeholder="Name" className={cn(
                            "text-white text-[20px] w-[760px] focus:outline-0",
                            'hover:scale-101 transition-transform duration-300 cursor-pointer'
                        )} />
                    <div className='w-[740px] h-[1px] bg-gray-500/50 my-[20px]'></div>
                    <input type="text" value={props.valueInpoutLastName}
                        onChange={e => props.setValueInpoutLastName(e.target.value)}
                        placeholder="Last name" className={cn(
                            "text-white text-[20px] w-[760px] focus:outline-0",
                            'hover:scale-101 transition-transform duration-300 cursor-pointer'
                        )} />
                </div>
                <div className='bg-bg rounded-2xl p-[20px] relative'>
                    <input type="text" value={props.valueBio} onChange={e => props.setValueBio(e.target.value)}
                        placeholder="Bio" className={cn(
                            "text-white text-[20px] w-[700px] focus:outline-0",
                            'hover:scale-101 transition-transform duration-300 cursor-pointer'
                        )} />
                    <div className='absolute right-[40px] top-[20px] text-white text-[20px]'>{countValueBio}</div>
                </div>
                <div className='text-[16px] text-gray-500 my-[20px]'>A few words about you.</div>
                <YourInfoEdit />
            </div>
            {showWarning &&
                <WarningText functionNo={clickDontSave} functionYes={clickSaveChange}
                    textWarning={
                        <>
                            <div className="">Сохранить изменения?</div>
                            <div className={cn(
                                "flex items-center justify-between text-[18px] text-gray-400 text-center w-[210px] mx-auto my-[10px]",
                                "hover:scale-101 transition-transform duration-300 cursor-pointer"
                            )} onClick={() => setShowChange(!showChange)}>
                                <span>{showChange ? 'Скрыть' : 'Показать'} изменения</span>
                                <ChevronDown color="white" size={25} />
                            </div>
                            {showChange &&
                                <TextChange objProfile={props.objProfile} valueBio={props.valueBio}
                                    valueInpoutLastName={props.valueInpoutLastName} valueInpoutName={props.valueInpoutName} />
                            }
                        </>
                    }/>
            }
        </div>
    )
}