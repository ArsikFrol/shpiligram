import ContentLoader from "react-content-loader"

import SkeletonForLogoChats from "@/components/Skeletons/SkeletonForLogoChats"

export default function Loading() {
    return (
        <div className="flex flex-col gap-y-[30px] h-[calc(100vh-240px)] overflow-y-auto mt-[20px]">
            {
                [...Array(10)].map((_, index) => {
                    return (
                        <div key={index}>
                            <div className='min-xl:hidden'>
                                <SkeletonForLogoChats />
                            </div>
                            <div className='max-xl:hidden'>
                                <ContentLoader speed={2} width={300} height={50} viewBox="0 0 300 50"
                                    backgroundColor="#3f3f46" foregroundColor="#52525b" >
                                    <circle cx="25" cy="25" r="25" />
                                    <rect x="55" y="0" rx="6" ry="6" width="140" height="20" />
                                    <rect x="55" y="25" rx="6" ry="6" width="150" height="20" />
                                </ContentLoader>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}