'use client'

import { useEscape } from "@/hooks/useEscape"
import { useTypedRouter } from "@/hooks/useTypedRouter"

type Props = {
    title: string
}

export default function TitleSettings(props: Props) {
    const router = useTypedRouter()
    
    useEscape(() => router.push('/settings'))

    return(
        <div className="text-[20px] text-white">
            {props.title}
        </div>
    )
}