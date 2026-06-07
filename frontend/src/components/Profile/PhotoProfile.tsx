import { UserCircle2Icon } from "lucide-react";

type Props = {
    imageProfile: string,
    name: string,
    lastName: string
}

export default function PhotoProfile(props: Props) {
    return (
        <div className='w-[200px] mx-auto'>
            <UserCircle2Icon size={100} color="white" strokeWidth={1} className="mx-auto" />
            <div className='text-white text-[25px] text-center'>
                {props.name} {props.lastName}</div>
        </div>
    )
}