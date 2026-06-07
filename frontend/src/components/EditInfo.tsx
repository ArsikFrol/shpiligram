'use client'

import useProfile from "@/store/profile/profileStore"
import { AtSign, Cake, Phone } from "lucide-react"
import { useEffect, useState } from "react"

export default function EditInfo() {

    const {
        name, lastName, bio,
        mobile,
        userName,
        birthday
    } = useProfile()

    const [valueInpoutName, setValueInpoutName] = useState<string>(name)
    const [valueInpoutLastName, setValueInpoutLastName] = useState<string>(lastName)
    const [valueBio, setValueBio] = useState<string>(bio)

    const [countValueBio, setCountValueBio] = useState<number>(80)


    useEffect(() => {
        setCountValueBio(80 - valueBio.length)
    }, [valueBio])

    return (
        <div className='w-[800px] mx-auto'>
            <div className='bg-bg rounded-2xl p-[20px] mb-[20px]'>
                <div className='text-blue-400 text-[20px] pb-[20px]'>Your name</div>
                <input type="text" value={valueInpoutName}
                    onChange={e => setValueInpoutName(e.target.value)}
                    placeholder="Name" className="text-white text-[20px] w-[500px] focus:outline-0" />
                <div className='w-[760px] h-[1px] bg-gray-500/50 my-[20px]'></div>
                <input type="text" value={valueInpoutLastName}
                    onChange={e => setValueInpoutLastName(e.target.value)}
                    placeholder="Last name" className="text-white text-[20px] w-[500px] focus:outline-0" />
            </div>
            <div className='bg-bg rounded-2xl p-[20px] relative'>
                <input type="text" value={valueBio} onChange={e => setValueBio(e.target.value)}
                    placeholder="Bio" className="text-white text-[20px] w-[500px] focus:outline-0" />
                <div className='absolute right-[40px] top-[20px] text-white text-[20px]'>{countValueBio}</div>
            </div>
            <div className='text-[16px] text-gray-500 my-[20px]'>A few words about you.</div>
            <div className='bg-bg rounded-2xl p-[20px]'>
                <div className='text-blue-400 text-[20px] pb-[20px]'>Your Info</div>
                <div className='flex flex-col gap-y-[20px]'>
                    <div className='flex gap-x-[20px]'>
                        <div className='w-[50px] h-[50px] flex justify-center items-center rounded-2xl bg-green-400'>
                            <Phone color="white" size={25} />
                        </div>
                        <div className=''>
                            <div className='text-[20px] text-white'>{mobile}</div>
                            <div className='text-[16px] text-gray-500'>Tap to change phone number</div>
                        </div>
                    </div>
                    <div className='flex gap-x-[20px]'>
                        <div className='w-[50px] h-[50px] flex justify-center items-center rounded-2xl bg-orange-400'>
                            <AtSign color="white" size={25} />
                        </div>
                        <div className=''>
                            <div className='text-[20px] text-white'>@{userName}</div>
                            <div className='text-[16px] text-gray-500'>Username</div>
                        </div>
                    </div>
                    <div className='flex gap-x-[20px]'>
                        <div className='w-[50px] h-[50px] flex justify-center items-center rounded-2xl bg-blue-400'>
                            <Cake color="white" size={25} />
                        </div>
                        <div className=''>
                            <div className='text-[20px] text-white'>{birthday}</div>
                            <div className='text-[16px] text-gray-500'>Bithday</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}