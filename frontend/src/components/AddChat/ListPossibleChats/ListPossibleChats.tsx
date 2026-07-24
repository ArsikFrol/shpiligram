'use client'

import { ClipLoader } from "react-spinners"

import { cn } from "@/lib/utils"
import PossibleElem from "./PossibleElem"
import EmptyListPossibleChats from "./EmptyListPossibleChats"
import { TGetUser } from "@/store/profile/types"
import LoadingPossibleChats from "./LoadingPossibleChats"

type Props = {
    loading: boolean

    listPossibleChats: TGetUser[]
}

export default function ListPossibleChats(props: Props) {

    if (props.loading) return <LoadingPossibleChats />
    if (!props.listPossibleChats.length) return <EmptyListPossibleChats />;

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