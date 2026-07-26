import { TypeRoutes } from "@/hooks/useTypedRouter"
import { cn } from "@/lib/utils"
import { TElemSetting } from "./Settings"

type Props = {
    obj: TElemSetting,
    clickElem: (link: TypeRoutes) => void
}

export default function SettingsELem(props: Props) {
    return(
        <div className={cn(
            "flex items-center gap-x-[20px]",
            'hover:scale-101 transition-transform duration-300 cursor-pointer'
        )} onClick={() => props.clickElem(props.obj.link)}>
            <div className="w-[50px] h-[50px] rounded-2xl flex items-center justify-center"
                style={{ background: `${props.obj.bgColor}` }}>
                {props.obj.elem}
            </div>
            <div className="flex flex-col gap-x-[10px]">
                <div className="text-[18px] font-semibold text-white">{props.obj.title}</div>
                <div className="text-[16px] font-medium text-gray-500">{props.obj.desc}</div>
            </div>
        </div>
    )
}