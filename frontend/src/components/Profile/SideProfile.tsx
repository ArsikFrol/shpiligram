import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

type Props = {
    setProfileSide: (value: boolean) => void 
    profileSide: boolean
}

export default function SideProfile(props: Props) {
    return(
        <div className="relative inline-block group" onClick={() => props.setProfileSide(!props.profileSide)}>
            {props.profileSide
                ? <EyeOff size={25} color="white"/>
                : <Eye size={25} color="white" />
            }
            <div className={cn(
                    "absolute top-[-5px] right-[100px] w-[100px]",
                    "px-3 py-1.5 rounded-lg bg-gray-800 text-white text-sm whitespace-nowrap",
                    "opacity-0 pointer-events-none transition-opacity duration-200",
                    "group-hover:opacity-100"
                )}>
               {props.profileSide
                    ? <span>Вернуться в профиль</span>
                    : <div className="flex flex-col items-center">
                        <div className="">Посмотреть, как пользователи</div>
                        <div className="">видят ваш профиль</div>
                    </div>
               }
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
            </div>
        </div>
    )
}