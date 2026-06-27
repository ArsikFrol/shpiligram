import Navigation from "@/components/Navigation";
import Settings from "@/components/Settings/Settings";
import { cn } from "@/lib/utils";

export default function page() {
    return (
        <>
            <Settings />
            <div className={cn(
                'absolute bottom-[20px] left-1/2 -translate-x-1/2',
            )}>
                <Navigation activeElem={3} />
            </div> 
        </>
    )
}