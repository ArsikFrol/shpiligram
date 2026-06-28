import { ClipLoader } from "react-spinners"

import { MessageModel } from "@/generated/prisma/models"
import { formatDateTime } from "@/lib/formatDate"
import { cn } from "@/lib/utils"


type Props = {
    listMessages: MessageModel[],

    userId: string,
    loading: boolean,

    clickSentHello: () => void,
}

export default function Dialogue(props: Props) {
    return (
        <>
            {props.loading
                ? <ClipLoader color="#3B82F6" size={50} className={cn(
                    'w-[50px] h-[50px] mx-auto my-auto'
                )} cssOverride={{
                    borderWidth: '4px'
                }} />
                : props.listMessages.length
                    ? props.listMessages.map((obj, index: number) => (
                        <div key={index} className={cn(
                            'w-fit p-[10px] rounded-t-2xl',
                            obj.senderId === props.userId
                                ? 'ml-auto bg-active-bg rounded-l-2xl'
                                : 'mr-auto bg-active-bg/50 rounded-r-2xl'
                        )} >
                            <div className='text-white text-[16px] max-w-[500px] break-words'>{obj.content}</div>
                            <div className={cn(
                                'text-[12px] font-medium text-gray-500',
                                obj.senderId === props.userId && 'text-right'
                            )}>
                                {formatDateTime(new Date(obj.sendTime))}
                            </div>
                        </div>
                    ))
                    : <div className={cn(
                        'text-center text-[25px] text-white h-[calc(100vh-320px)]',
                        'flex flex-col items-center justify-center w-[500px] mx-auto'
                    )}>
                        <div className=''>Диалог пуст, вы можете его начать)</div>
                        <div className='text-blue-300 hover:scale-101 transition-transform duration-300 cursor-pointer'
                            onClick={props.clickSentHello}>
                            Отправить: Привет!
                        </div>
                    </div>

            }
        </>
    )
}