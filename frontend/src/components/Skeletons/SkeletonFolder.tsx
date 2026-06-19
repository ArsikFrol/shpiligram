import ContentLoader from "react-content-loader"

export default function SkeletonFolder() {
    return (
        <ContentLoader speed={2} width={1140} height={50} viewBox="0 0 1140 50"
            backgroundColor="#3f3f46" foregroundColor="#52525b" >
            <rect x="0" y="0" rx="16" ry="16" width={1140} height={50} />
        </ContentLoader>
    )
}