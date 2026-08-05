import { cn } from "@/lib/utils"
import { ArrowLeft, CircleUser, EllipsisVertical, Phone } from "lucide-react"
import ContentLoader from "react-content-loader"
import SearchUI from "../UI/SearchUI"

export default function SkeletonTopContentChat() {
    return (
        <div className={cn(
            'mx-[10px] bg-container my-[10px] py-[10px]',
            'flex justify-between items-center px-[40px] rounded-2xl'
        )}>
            <div className='w-[35px] h-[35px] flex justify-center items-center group  cursor-pointer'>
                <ArrowLeft color="#ffffff" size={20}
                    className="group-hover:scale-115 transition-transform duration-300" />
            </div>
            <div className={cn(
                'flex items-center gap-x-[10px] hover:scale-105 transition-transform duration-300 cursor-pointer'
            )}>
                <ContentLoader speed={2} width={40} height={40} viewBox='0 0 40 40'
                    backgroundColor="#3f3f46" foregroundColor="#52525b">
                    <circle cx={20} cy={20} r={20} />
                </ContentLoader>
                <div className='flex flex-col gap-y-[2px]'>
                    <ContentLoader speed={2} width='130' height={22} viewBox="0 0 130 22"
                        backgroundColor="#3f3f46" foregroundColor="#52525b">
                        <rect x="0" y="0" rx="6" ry="6" width="130" height="22" />
                    </ContentLoader>
                    <ContentLoader speed={2} width='130' height={21} viewBox="0 0 130 21"
                        backgroundColor="#3f3f46" foregroundColor="#52525b">
                        <rect x="0" y="0" rx="6" ry="6" width="130" height="21" />
                    </ContentLoader>
                </div>
            </div>
            <div className='flex gap-x-[20px] items-center'>
                <div className='w-[35px] h-[35px] flex justify-center items-center group cursor-pointer'>
                    <SearchUI width={200} placeholder="Message" />
                </div>
                <div className='w-[35px] h-[35px] flex justify-center items-center group cursor-pointer'>
                    <EllipsisVertical size={25} color="white" />
                </div>
            </div>
        </div>
    )
}