import { cn } from "@/lib/utils"
import { RotateCcw } from "lucide-react"

type Props = {

}

export default function Error(props: Props) {
    const clickReload = () => {
        window.location.reload()
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <span className="text-[20px] text-white">Ошибка при загрузке настроек, перезагрузите страницу</span>
            <div className={cn(
                "flex items-center gap-x-[10px] bg-[#20364D] text-white p-[10px] rounded-2xl w-[200px] mx-auto mt-[20px]",
                'group hover:scale-101 transition-transform duration-300 cursor-pointer',
                'flex justify-center'
            )} onClick={clickReload}>
                <RotateCcw color="white" size={25} className={cn(
                    "group-hover:rotate-[-360deg] transition-transform duration-1000"
                )} />
                <div className="">Перезагрузить</div>
            </div>
        </div>
    )
}