import { ChevronsLeftRight, Repeat2, Trash } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { TElemFolder } from "./SettingsChatsFolder";
import ThreeDots from "../UI/ThreeDots";

type Props = {
    obj: TElemFolder
}

export default function FolderElem(props: Props) {
        
    const [showSettingsElem, setShowSettingsElem] = useState<string>('')


    const clickShowsettings = (typeFolder: string) => {
        if (typeFolder === showSettingsElem) setShowSettingsElem('')
        else setShowSettingsElem(typeFolder)
    }

    const clickDelete = () => {

    }

    const clickRename = () => {

    }

    return(
        <div className={cn(
            "flex-1 bg-container rounded-2xl h-[40px] text-white text-[16px] p-[20px]",
            'flex items-center justify-between relative'
        )}>
            <div className="flex items-center gap-x-[20px]">
                <ChevronsLeftRight size={20} color="white" className="rotate-90" />
                <span>{props.obj.nameFolder}</span>
            </div>
            {props.obj.typeFolder !== 'ALL_CHATS' &&
                <ThreeDots onClick={() => clickShowsettings(props.obj.typeFolder)}/>
            }
            {props.obj.typeFolder === showSettingsElem &&
                <div className={cn(
                    "bg-bg rounded-2xl p-[15px] w-[150px] absolute right-[10px] top-[50px] z-50 shadow",
                    'flex flex-col gap-y-[10px]'
                )}>
                    <div className="text-white text-[17px] flex items-center justify-between"
                        onClick={clickRename}>
                        Rename
                        <Repeat2 size={20} color='white' />
                    </div>
                    <div className="text-white text-[17px] flex items-center justify-between"
                        onClick={clickDelete}>
                        Delete
                        <Trash size={20} color="red" />
                    </div>
                </div>
            }
        </div>
    )
}