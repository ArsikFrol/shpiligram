'use client'

import { formatMonthDay } from "@/lib/formatDate";
import { cn } from "@/lib/utils";
import { AtSign, Cake, Phone } from "lucide-react";
import { useState } from "react";
import WarningInput from "../UI/WarningInput";
import useProfile from "@/store/profile/profileStore";

export default function YourInfoEdit() {

    const {
        setUserName,
        setBirthday,
        setMobile,
        objProfile
    } = useProfile()

    const [showWarningInputMobile, setShowWarningInputMobile] = useState<boolean>(false)
    const [showWarningInputUserName, setShowWarningInputUserName] = useState<boolean>(false)
    const [showWarningInputBirthday, setShowWarningInputBirthday] = useState<boolean>(false)

    return(
        <>
            <div className='bg-bg rounded-2xl p-[20px]'>
                <div className='text-blue-400 text-[20px] pb-[20px]'>Your Info</div>
                <div className='flex flex-col gap-y-[20px]'>
                    <div className={cn(
                        'flex gap-x-[20px]',
                        'hover:scale-101 transition-transform duration-300 cursor-pointer'
                    )} onClick={() => setShowWarningInputMobile(true)}>
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
                    )} onClick={() => setShowWarningInputUserName(true)}>
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
                    )} onClick={() => setShowWarningInputBirthday(true)}>
                        <div className='w-[50px] h-[50px] flex justify-center items-center rounded-2xl bg-blue-400'>
                            <Cake color="white" size={25} />
                        </div>
                        <div className=''>
                            <div className='text-[20px] text-white'>
                                {formatMonthDay(new Date(objProfile.birthday))}
                            </div>
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
            {/* {showWarningInputBirthday &&
                <WarningInput setShowWarning={setShowWarningInputBirthday}
                    setValue={setBirthday} value={objProfile.birthday}
                    textWarning="Введите новую дату рождения" />
            } */}
        </>
    )
}