'use client'

import { cn } from "@/lib/utils"
import { ChevronsLeftRight, Plus, Repeat2, Trash } from "lucide-react"
import { useState } from "react"
import ThreeDots from "../UI/ThreeDots"
import TitleSettings from "../UI/TitleSettings"

type TElem = {
    id: number,
    nameFolder: string,
    typeFolder: string 
}

const listFolder: TElem[] = [
    {id: 1, nameFolder: 'All Chats', typeFolder: 'ALL_CHATS'},
    {id: 2, nameFolder: 'Study', typeFolder: 'STUDY'},
]

export default function SettingsChatsFolder() {
    
    const [showNewFolder, setShowNewFolder] = useState<boolean>(false)
    const [valueFolder, setValueFolder] = useState<string>('')

    const [showSettingsElem, setShowSettingsElem] = useState<string>('')

    const clickNewFolder = () => {
        setShowNewFolder(true)
    }

    const clickShowsettings = (typeFolder: string) => {
        if (typeFolder === showSettingsElem) setShowSettingsElem('')
        else setShowSettingsElem(typeFolder)
    }

    const clickDelete = () => {

    }

    const clickRename = () => {

    }

    return(
        <>
            <div className={cn(
                "bg-bg rounded-2xl p-[20px] mx-auto mt-[30px]",
                'min-lg:w-[800px] max-lg:mx-[30px]'
            )}>
                <TitleSettings title="Chat Folders" />
                <div className="flex flex-col gap-y-[10px] my-[20px]">
                    {
                        listFolder.map((obj: TElem, index) => {
                            return(
                                <div className={cn(
                                    "flex-1 bg-container rounded-2xl h-[40px] text-white text-[16px] p-[20px]",
                                    'flex items-center justify-between relative'
                                )} key={index}>
                                    <div className="flex items-center gap-x-[20px]">
                                        <ChevronsLeftRight size={20} color="white" className="rotate-90" />
                                        <span>{obj.nameFolder}</span>
                                    </div>
                                    {obj.typeFolder !== 'ALL_CHATS' &&
                                        <ThreeDots onClick={() => clickShowsettings(obj.typeFolder)}/>
                                    }
                                    {obj.typeFolder === showSettingsElem &&
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
                        })
                    }
                </div>
                <div className="h-[1px] flex-1 bg-container mb-[20px]"></div>
                {showNewFolder
                    ?<div className={cn(
                        "flex-1 bg-container rounded-2xl text-white text-[16px] p-[10px] relative",
                        'flex items-center'
                    )}>
                        <input type="text" className="border-0 rounded-2xl h-[40px] w-full px-[20px] focus:outline-0" autoFocus
                            placeholder="Name folder..." value={valueFolder} onChange={e => setValueFolder(e.target.value)}/>
                        <Trash size={25} color="red" className="mr-[20px]" onClick={() => setShowNewFolder(false)} />
                    </div>
                    :<div className="flex items-center gap-x-[10px]" onClick={clickNewFolder}>
                    <div className="w-[25px] h-[25px] bg-blue-300 rounded-[9999px] flex items-center justify-center">
                        <Plus color="white" size={20}/>
                    </div>
                    <div className="text-blue-300">Create new folder</div>
                </div>
                }
            </div>
        </>
    )
}