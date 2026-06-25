import { cn } from "@/lib/utils"
import SkeletonAddChats from "../Skeletons/SkeletonAddChats"
import { ArrowLeft, Phone } from "lucide-react"
import ThreeDots from "../UI/ThreeDots"

type Props = {

}

export default function LoadingTopContent(props: Props) {
    return (
        <div className={cn(
            'w-[1050px] bg-container my-[10px] mx-auto py-[10px]',
            'flex justify-between items-center px-[40px] rounded-2xl'
        )}>
            <div className='w-[35px] h-[35px] flex justify-center items-center group  cursor-pointer'>
                <ArrowLeft className="group-hover:scale-115 transition-transform duration-300"
                    color="#ffffff" size={20} />
            </div>
            <div className='w-[200px]'>
                <SkeletonAddChats />
            </div>
            <div className='flex gap-x-[20px] items-center'>
                <div className='w-[35px] h-[35px] flex justify-center items-center group cursor-pointer'>
                    <Phone color="#ffffff" size={25}
                        className="group-hover:scale-115 transition-transform duration-300" />
                </div>
                <div className='w-[35px] h-[35px] flex justify-center items-center group cursor-pointer'>
                    <ThreeDots onClick={() => { }} />
                </div>

            </div>
        </div>
    )
}