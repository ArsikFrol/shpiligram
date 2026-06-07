import { UserCircleIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type Props = {
    setShowStories: Dispatch<SetStateAction<boolean>>
}

export default function Stories(props: Props) {
    return (
        <div className='reltive hover:scale-102 transition-transform duration-300 cursor-pointer'
            onClick={() => props.setShowStories(true)}>
            <UserCircleIcon size={40} color="white" strokeWidth={1}
                className="absolute left-0" />
            <UserCircleIcon size={40} color="white" strokeWidth={1}
                className="absolute left-5 z-10" />
            <UserCircleIcon size={40} color="white" strokeWidth={1}
                className="absolute left-10 z-20" />
        </div>
    )
}