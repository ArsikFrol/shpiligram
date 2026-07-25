'use client'

import { useRef } from "react"
import { useClickAway } from "react-use"

import { cn } from "@/lib/utils"
import { TSettingForMessage, TSmile } from "./Dialogue"
import SmileElem from "./SmileElem"

type Props = {
    listSettings: TSettingForMessage[],
    listSmile: TSmile[],

    sender: boolean,
    showAbove: boolean

    showAllSmile: boolean
    setShowAllSmile: (value: boolean) => void,

    setShowSettingsElem: (value: string) => void
}

export default function Settings(props: Props) {
    const ref = useRef(null)

    useClickAway(ref, () => {
        props.setShowSettingsElem('')
    })

    return (
        <div ref={ref} className={cn(
            'absolute left-[-240px] bottom-[20px] w-[220px] z-50',
            'flex items-center justify-between'
        )} style={{
            height: props.sender ? '250px' : '200px',
            [props.showAbove ? 'bottom' : 'top']: '20px',
            flexDirection: props.showAbove ? 'column' : 'column-reverse'
        }}>
            {props.sender &&
                <SmileElem listSmile={props.listSmile} setShowAllSmile={props.setShowAllSmile}
                    showAllSmile={props.showAllSmile} showAbove={props.showAbove} />
            }
            <div className={cn(
                'flex-col gap-y-[10px] w-[220px] p-[15px] bg-container rounded-t-2xl rounded-l-2xl'
            )} style={{
                display: props.showAllSmile ? 'none' : 'flex',
                borderRadius: props.showAbove ? '16px 16px 0 16px' : '16px 0 16px 16px'
            }}>
                {
                    props.listSettings.map((obj, index) => {
                        return (
                            <div key={index} className={cn(
                                "flex items-center gap-x-[15px]",
                                'hover:scale-101 transition-transform duration-300 cursor-pointer'
                            )}>
                                {obj.elem}
                                <div className="text-[15px] text-white">{obj.text}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}