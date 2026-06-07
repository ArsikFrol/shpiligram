import { cn } from "@/lib/utils"
import { Eye } from "lucide-react"
import { TPost } from "./PostsGifts"

type Props = {
    listPosts: TPost[]
}

export default function ListPosts(props: Props) {
    return (
        <div className='w-[600px] bg-bg rounded-2xl mx-auto grid grid-cols-3 gap-y-[15px] py-[10px]'>
            {
                props.listPosts.map((obj, index: number) => {
                    return (
                        <div key={index} className={cn(
                            'hover:scale-105 transition-transform duration-300 cursor-pointer',
                            'w-[180px] h-[200px] mx-auto bg-container rounded-2xl relative',
                        )}>
                            <div className='absolute right-0 bottom-0 flex gap-x-[5px] items-center'>
                                <div className='text-[12px] font-medium text-white'>{obj.coutViews}</div>
                                <Eye color="white" size={20} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}