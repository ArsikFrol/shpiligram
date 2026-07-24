'use client'

import useFetchStories from "@/hooks/useFetchStories"
import { TActiveBtn } from "./StoryAndGift"

type Props = {
    activeBtn: TActiveBtn,

    userId: string
}

export default function Sort(props: Props) {
    const {listStories, loadingHookFetchStories, errorHookFetchStories} = useFetchStories(props.userId)

    
    return(
        <div className="">
            {props.activeBtn === 'stories' &&
                <div className=""></div>      
            }
        </div>
    )
}