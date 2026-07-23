import ContentLoader from "react-content-loader"

export default function SkeletonTopContentChat() {
    return (
        <div className="p-[10px]">
            <ContentLoader speed={2} width='100%' height={65} viewBox="0 0 100% 65"
                backgroundColor="#3f3f46" foregroundColor="#52525b" className="mx-[0px]">
                <rect x="0" y="0" rx="12" ry="12" width="100%" height="65" />
            </ContentLoader>
        </div>
    )
}