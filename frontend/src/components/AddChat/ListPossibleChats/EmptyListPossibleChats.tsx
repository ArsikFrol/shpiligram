import { cn } from "@/lib/utils";

export default function EmptyListPossibleChats() {
    return (
        <div className={cn(
            'text-center text-[25px] text-white',
            'flex items-center justify-center h-[calc(100vh-300px)]'
        )}>
            Список пуст, проверте введенный userName
        </div>
    )
}