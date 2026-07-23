import ContentLoader from "react-content-loader"
import { ClipLoader } from "react-spinners"

import { cn } from "@/lib/utils"

export default function SkeletonProfilePageUser() {
    return (
        <div className="h-[calc(100vh-200px)] overflow-y-hidden">
            <div className='h-[calc(100vh-200px)] overflow-y-auto scrollbar'>
                <div className="flex justify-between w-full items-center h-[50px] rounded-2xl">
                    <ContentLoader speed={2} width={60} height={50} viewBox="0 0 60 50" backgroundColor="#3f3f46"
                        foregroundColor="#52525b" >
                        <circle cx="15" cy="25" r="15" />
                    </ContentLoader>
                    <div className='flex items-center gap-x-[15px]'>
                        <ContentLoader speed={2} width={40} height={40} viewBox="0 0 40 40" backgroundColor="#3f3f46"
                            foregroundColor="#52525b" >
                            <rect x="0" y="0" rx="6" ry="6" width="40" height="40" />
                        </ContentLoader>
                        <ContentLoader speed={2} width={30} height={30} viewBox="0 0 10 30" backgroundColor="#3f3f46"
                            foregroundColor="#52525b" >
                            <circle cx="10" cy="12" r="20" />
                        </ContentLoader>
                    </div>
                </div>
                <div className='h-[calc(100vh-250px)] overflow-y-auto scrollbar'>
                    <ContentLoader speed={2} width={100} height={100} viewBox="0 0 100 100"
                        backgroundColor="#3f3f46" foregroundColor="#52525b" className="mx-auto" >
                        <circle cx="50" cy="50" r="45" />
                    </ContentLoader>
                    <ContentLoader speed={2} width={300} height={38} viewBox="0 0 300 38"
                        backgroundColor="#3f3f46" foregroundColor="#52525b" className="mx-auto">
                        <rect x="0" y="0" rx="6" ry="6" width="300" height="38" />
                    </ContentLoader>
                    <ContentLoader speed={2} width={800} height={45} viewBox="0 0 800 45"
                        backgroundColor="#3f3f46" foregroundColor="#52525b" className="mx-auto mt-[20px]">
                        <rect x="0" y="0" rx="6" ry="6" width="800" height="350" />
                    </ContentLoader>
                    <ContentLoader speed={2} width={800} height={350} viewBox="0 0 800 350"
                        backgroundColor="#3f3f46" foregroundColor="#52525b" className="mx-auto mt-[10px]">
                        <rect x="0" y="0" rx="6" ry="6" width="800" height="350" />
                    </ContentLoader>
                    <div className={cn(
                        'flex gap-x-[10px] w-[310px] mx-auto bg-bg p-[5px] rounded-2xl my-[20px]',
                        'text-[15px] text-gray-500'
                    )}>
                        <div className={cn(
                            'w-[150px] py-[5px] font-bold text-center',
                            'bg-active-bg text-blue-400 rounded-2xl'
                        )}>
                            Stories
                        </div>
                        <div className={cn(
                            'w-[150px] py-[5px] font-bold text-center',
                            'hover:scale-105 transition-transform duration-300 cursor-pointer'
                        )}>
                            Gifts
                        </div>
                    </div>
                    <div className='bg-bg rounded-2xl mx-auto min-h-[250px] relative'>
                        <ClipLoader color="#3B82F6" size={50} className={cn(
                            'w-[50px] h-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        )} cssOverride={{
                            borderWidth: '2px'
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}