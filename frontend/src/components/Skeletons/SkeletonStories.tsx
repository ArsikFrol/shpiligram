import { cn } from "@/lib/utils"
import ContentLoader from "react-content-loader"

type Props = {
    index: number
}

export default function SkeletonStories(props: Props) {
    return (
        <ContentLoader speed={2} width={50} height={50} viewBox="0 0 50 50"
            backgroundColor="#3f3f46" foregroundColor="#52525b" className={cn(
                "absolute",
                props.index === 0 && 'left-0',
                props.index === 1 && 'left-5 z-10',
                props.index === 2 && 'left-10 z-20'
            )}>
            <circle cx="20" cy="20" r="20" />
        </ContentLoader>
    )
}