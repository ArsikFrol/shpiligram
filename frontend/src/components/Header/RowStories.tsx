import { UserCircleIcon } from "lucide-react"
import { TStories } from "./Header"

type Props = {
    listStories: TStories[]
}

export default function RowStories(props: Props) {
    return (
        <div className='flex gap-x-[20px] my-[10px]'>
            {
                props.listStories.slice(0, 5).map((obj, index: number) => {
                    return (
                        <UserCircleIcon size={60} color="white" strokeWidth={1} key={index}
                            className="hover:scale-105 transition-transform duration-300 cursor-pointer" />
                    )
                })
            }
        </div>
    )
}