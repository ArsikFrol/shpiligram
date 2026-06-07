import Navigation from "@/components/Navigation";
import Profile from "@/components/Profile/Profile";
import { cn } from "@/lib/utils";

export default function page() {
    return (
        <>
            <Profile />
            <div className={cn(
                'absolute bottom-[20px] left-1/2 -translate-x-1/2',
            )}>
                <Navigation activeElem={4} />
            </div>
        </>
    )
}