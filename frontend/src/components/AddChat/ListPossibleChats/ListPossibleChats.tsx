'use client'

import { ClipLoader } from "react-spinners"

import { cn } from "@/lib/utils"
import PossibleElem from "./PossibleElem"
import EmptyListPossibleChats from "./EmptyListPossibleChats"
import { TGetUser } from "@/store/profile/types"
import LoadingPossibleChats from "./LoadingPossibleChats"
import ErrorPossibleChats from "./ErrorPossibleChats"

type Props = {
    loading: boolean,
    value: string,
    error: boolean

    listPossibleChats: TGetUser[]
}

export default function ListPossibleChats(props: Props) {

    if (props.loading) return <LoadingPossibleChats />
    if (props.error) return <ErrorPossibleChats />
    if (!props.listPossibleChats.length && props.value !== '') return <EmptyListPossibleChats />;

    return (
        <div className={cn(
            'flex flex-col gap-y-[20px] overflow-y-auto scrollbar',
        )}>
            {
                props.listPossibleChats.map((obj, index) => <PossibleElem profile={obj} key={index} />)   
            }
        </div>

    )
}