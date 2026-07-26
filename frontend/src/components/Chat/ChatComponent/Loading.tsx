'use client'

import { ClipLoader } from "react-spinners"
import { Mic, Paperclip, Sticker } from "lucide-react"

import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"
import SkeletonTopContentChat from "@/components/Skeletons/SkeletonTopContentChat"

export default function Loading() {
    const {
        showRowStories
    } = useProfile()

    return (
        <div className={cn(
            'w-full bg-bg mt-[10px] rounded-2xl flex flex-col'
        )} style={showRowStories ? { height: 'calc(100vh-400px)' } : { height: 'calc(100vh-225px)' }}>
            <SkeletonTopContentChat />
            <div className={cn(
                'px-[10px] overflow-y-auto flex flex-col gap-y-[10px] scrollbar',
            )} style={showRowStories ? { height: 'calc(100vh - 475px)' } : { height: 'calc(100vh - 395px' }} >
                <ClipLoader color="#3B82F6" size={50} className={cn(
                    'w-[50px] h-[50px] mx-auto my-auto'
                )} cssOverride={{
                    borderWidth: '4px'
                }} />
            </div>
            <div className='relative w-full mt-[10px]'>
                <div className='w-[98%] min-w-[300px] mx-auto'>
                    <div className={cn(
                        'flex items-center gap-x-[20px] shadow-xl rounded-2xl',
                        'bg-[#202D3D] p-[10px] w-full'
                    )}>
                        <Sticker color="white" size={28} strokeWidth={1.5} className={cn(
                            'hover:scale-105 transition-transform duration-300 cursor-pointer flex-shrink-0'
                        )} />
                        <textarea placeholder="Message" className={cn(
                            'flex-1 text-white px-[10px] py-[7px] border border-white/30 rounded-xl',
                            'resize-none overflow-y-auto bg-transparent overflow-hidden',
                            'focus:outline-none focus:border-white/50 transition-colors',
                            'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20'
                        )} rows={1}
                            style={{ minHeight: '40px', maxHeight: '100px' }} />
                        <div className='flex items-center gap-x-[15px]'>
                            <Paperclip color="white" strokeWidth={1.5} size={20} className={cn(
                                'hover:scale-105 transition-transform duration-300 cursor-pointer flex-shrink-0'
                            )} />
                            <div className={cn(
                                'bg-blue-500/40 w-[40px] h-[40px] flex justify-center',
                                'items-center rounded-xl cursor-pointer hover:bg-blue-500/60 transition'
                            )}>
                                <Mic color="white" size={22} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}