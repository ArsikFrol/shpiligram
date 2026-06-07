'use client'

import { Eye } from "lucide-react"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { TElemPost } from "@/store/users/types"

type Props = {
    listPosts: TElemPost[]
}

export default function ListPosts(props: Props) {
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (props.listPosts.length > 0) setLoading(true)
    }, [])

    if (!loading) return <div className=''>Загрузка</div>

    return (
        <div className='w-[600px] bg-bg rounded-2xl mx-auto grid grid-cols-3 gap-y-[15px] py-[10px]'>
            {
                props.listPosts.map((obj, index: number) => {
                    return (
                        <div key={index} className={cn(
                            'hover:scale-105 transition-transform duration-300 cursor-pointer',
                            'w-[180px] h-[200px] mx-auto bg-container rounded-2xl relative',
                        )}>
                            <div className='absolute right-[10px] bottom-[5px] flex gap-x-[5px] items-center'>
                                <div className='text-[12px] font-medium text-white'>{obj.coutViews}</div>
                                <Eye color="white" size={20} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}