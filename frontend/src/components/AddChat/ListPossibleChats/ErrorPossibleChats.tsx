import { cn } from "@/lib/utils";
import { RotateCcw } from "lucide-react";

export default function ErrorPossibleChats() {
    const clickReload = () => {
        window.location.reload()
    }
    
    return(
        <div className={cn(
                'text-center text-[25px] text-white',
                'flex flex-col items-center justify-center h-full'
            )}>
            <div className="">Ошибка! Перезагрузите страницу</div>
            <div className={cn(
                    "flex items-center justify-center gap-x-[10px] bg-[#20364D] text-white p-[10px] rounded-2xl w-[250px] mx-auto mt-[20px]",
                    'group hover:scale-101 transition-transform duration-300 cursor-pointer'
                )} onClick={clickReload}>
                    <RotateCcw color="white" size={25} className={cn(
                        "group-hover:rotate-[-360deg] transition-transform duration-1000"
                    )} />
                    <div className="">Перезагрузить</div>
                </div>
        </div>
    )
}