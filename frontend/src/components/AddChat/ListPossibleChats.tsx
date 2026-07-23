'use client'

import { ClipLoader } from "react-spinners"

import { cn } from "@/lib/utils"
import PossibleElem from "./PossibleElem"
import useProfile from "@/store/profile/profileStore"
import useChats from "@/store/chats/chatsStore"
import { useFetchPossibleChats } from "@/hooks/useFetchPossibleChats"

type Props = {
    value: string
}

export default function ListPossibleChats(props: Props) {

    const {
        userId
    } = useProfile()

    const {
        listInterlocutorsId
    } = useChats()

    const { listPossibleChats, loading } = useFetchPossibleChats(props.value, userId, listInterlocutorsId)

    if (loading) return (
        <div className='bg-bg rounded-2xl mt-[20px] p-[20px] h-[calc(100vh-250px)] overflow-y-auto'>
            <ClipLoader color="#3B82F6" size={50} className={cn(
                'w-[50px] h-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            )} cssOverride={{
                borderWidth: '4px'
            }} />
        </div>
    )
    if (!listPossibleChats) return;

    return (
        <div className={cn(
            'flex flex-col gap-y-[20px] bg-bg rounded-2xl mt-[20px] p-[20px] h-[calc(100vh-250px)] overflow-y-auto',
            'scrollbar'
        )}>
            {listPossibleChats.length
                ? listPossibleChats.map((obj, index) => <PossibleElem profile={obj} key={index} />)
                : <div className={cn(
                    'text-center text-[25px] text-white h-[calc(100vh-320px)]',
                    'flex flex-col items-center justify-center w-[400px] mx-auto'
                )}>
                    Список пуст, проверте введенный userName
                </div>
            }
        </div>

    )
}