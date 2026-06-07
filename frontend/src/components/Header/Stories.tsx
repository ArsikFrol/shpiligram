import { UserCircleIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type Props = {
    setShowRowStories: Dispatch<SetStateAction<boolean>>
}

export default function Stories(props: Props) {

    const clickStory = () => {
        props.setShowRowStories(true)
    }

    return (
        <div className='reltive hover:scale-102 transition-transform duration-300 cursor-pointer'
            onClick={clickStory} >
            <UserCircleIcon size={40} color="white" strokeWidth={1}
                className="absolute left-0" />
            <UserCircleIcon size={40} color="white" strokeWidth={1}
                className="absolute left-5 z-10" />
            <UserCircleIcon size={40} color="white" strokeWidth={1}
                className="absolute left-10 z-20" />
        </div>
    )
}