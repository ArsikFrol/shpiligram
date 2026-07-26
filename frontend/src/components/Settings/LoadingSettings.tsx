import { cn } from "@/lib/utils";
import { ClipLoader } from "react-spinners";

export default function LoadingSettings() {
    return(
        <div className={cn(
                "w-full h-full bg-bg rounded-2xl mx-auto",
                'flex items-center justify-center',
                'min-lg:w-[800px] max-lg:mx-[30px]'
            )}>
            <ClipLoader color="#3B82F6" size={50} className={cn(
                    'w-[50px] h-[50px] mx-auto my-auto'
                )} cssOverride={{
                    borderWidth: '2px'
                }} />
        </div>
    )
}