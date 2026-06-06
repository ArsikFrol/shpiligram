import { cn } from "@/lib/utils"

import { JSX } from "react/jsx-runtime"

type TProps = {
    children: JSX.Element,
    absolute?: boolean,
    relative?: boolean
}

export default function Container(props: TProps) {
    return (
        <div className={cn()}>
            {props.children}
        </div>
    )
}