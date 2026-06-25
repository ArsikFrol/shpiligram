import ContentLoader from "react-content-loader"

export default function SkeletonForLogoChats() {
    return (
        <ContentLoader speed={2} width={50} height={50} viewBox="0 0 50 50"
            backgroundColor="#3f3f46" foregroundColor="#52525b">
            <circle cx="25" cy="25" r="25" />
        </ContentLoader>
    )
}