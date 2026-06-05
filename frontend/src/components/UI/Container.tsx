import { cn } from "@/lib/utils"

import { JSX } from "react/jsx-runtime"

type TProps = {
    children: JSX.Element
}

export default function Container(props: TProps) {
    return (
        <div className={cn(
            "bg-container rounded-2xl shadow"
        )}>
            {props.children}
        </div>
    )
}