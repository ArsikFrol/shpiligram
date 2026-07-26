import { cn } from "@/lib/utils";
import { ClipLoader } from "react-spinners";

export default function LoadingPossibleChats() {
    return (
        <div className='h-[calc(100vh-300px)]'>
            <ClipLoader color="#3B82F6" size={50} className={cn(
                'w-[50px] h-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            )} cssOverride={{
                borderWidth: '4px'
            }} />
        </div>
    )
}