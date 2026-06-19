'use client'

import { AtSign, Cake, Phone } from "lucide-react"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import WarningInput from "./UI/WarningInput"
import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"
import { useFetchProfile } from "@/hooks/useFetchProfile"

type Props = {
    valueInpoutName: string,
    setValueInpoutName: Dispatch<SetStateAction<string>>

    valueInpoutLastName: string,
    setValueInpoutLastName: Dispatch<SetStateAction<string>>,

    valueBio: string,
    setValueBio: Dispatch<SetStateAction<string>>,
}

export default function EditInfo(props: Props) {

    const {
        setUserName,
        setBirthday,
        setMobile,
        objProfile
    } = useProfile()

    const [showWarningInputMobile, setShowWarningInputMobile] = useState<boolean>(false)
    const [showWarningInputUserName, setShowWarningInputUserName] = useState<boolean>(false)
    const [showWarningInputBirthday, setShowWarningInputBirthday] = useState<boolean>(false)

    const [countValueBio, setCountValueBio] = useState<number>(80)

    useEffect(() => {
        setCountValueBio(80 - props.valueBio.length)
    }, [props.valueBio])

    if (!objProfile) return <div className=''>Данных нет</div>

    return (
        <div className='w-[800px] mx-auto'>
            <div className='bg-bg rounded-2xl p-[20px] mb-[20px]'>
                <div className='text-blue-400 text-[20px] pb-[20px]'>Your name</div>
                <input type="text" value={props.valueInpoutName}
                    onChange={e => props.setValueInpoutName(e.target.value)}
                    placeholder="Name" className={cn(
                        "text-white text-[20px] w-[760px] focus:outline-0",
                        'hover:scale-101 transition-transform duration-300 cursor-pointer'
                    )} />
                <div className='w-[760px] h-[1px] bg-gray-500/50 my-[20px]'></div>
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
            <div className='bg-bg rounded-2xl p-[20px]'>
                <div className='text-blue-400 text-[20px] pb-[20px]'>Your Info</div>
                <div className='flex flex-col gap-y-[20px]'>
                    <div className={cn(
                        'flex gap-x-[20px]',
                        'hover:scale-101 transition-transform duration-300 cursor-pointer'
                    )}
                        onClick={() => setShowWarningInputMobile(true)}>
                        <div className='w-[50px] h-[50px] flex justify-center items-center rounded-2xl bg-green-400'>
                            <Phone color="white" size={25} />
                        </div>
                        <div className=''>
                            <div className='text-[20px] text-white'>{objProfile.mobile}</div>
                            <div className='text-[16px] text-gray-500'>Tap to change phone number</div>
                        </div>
                    </div>
                    <div className={cn(
                        'flex gap-x-[20px]',
                        'hover:scale-101 transition-transform duration-300 cursor-pointer'
                    )}
                        onClick={() => setShowWarningInputUserName(true)}>
                        <div className='w-[50px] h-[50px] flex justify-center items-center rounded-2xl bg-orange-400'>
                            <AtSign color="white" size={25} />
                        </div>
                        <div className=''>
                            <div className='text-[20px] text-white'>@{objProfile.userName}</div>
                            <div className='text-[16px] text-gray-500'>Tap to change username</div>
                        </div>
                    </div>
                    <div className={cn(
                        'flex gap-x-[20px]',
                        'hover:scale-101 transition-transform duration-300 cursor-pointer'
                    )}
                        onClick={() => setShowWarningInputBirthday(true)}>
                        <div className='w-[50px] h-[50px] flex justify-center items-center rounded-2xl bg-blue-400'>
                            <Cake color="white" size={25} />
                        </div>
                        <div className=''>
                            <div className='text-[20px] text-white'>{objProfile.birthday}</div>
                            <div className='text-[16px] text-gray-500'>Tap to change bithday</div>
                        </div>
                    </div>
                </div>
            </div>
            {showWarningInputMobile &&
                <WarningInput setShowWarning={setShowWarningInputMobile}
                    setValue={setMobile} value={objProfile.mobile}
                    textWarning="Введите новый номер телефона" />
            }
            {showWarningInputUserName &&
                <WarningInput setShowWarning={setShowWarningInputUserName}
                    setValue={setUserName} value={objProfile.userName}
                    textWarning="Введите новый userName" />
            }
            {showWarningInputBirthday &&
                <WarningInput setShowWarning={setShowWarningInputBirthday}
                    setValue={setBirthday} value={objProfile.birthday}
                    textWarning="Введите новую дату рождения" />
            }
        </div>
    )
}