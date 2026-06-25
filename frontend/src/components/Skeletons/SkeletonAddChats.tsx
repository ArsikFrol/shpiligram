import ContentLoader from "react-content-loader"

export default function SkeletonAddChats() {
    return (
        <ContentLoader speed={2} width={540} height={50} viewBox="0 0 540 50"
            backgroundColor="#3f3f46" foregroundColor="#52525b" >
            <circle cx="25" cy="25" r="25" />
            <rect x="55" y="0" rx="6" ry="6" width="140" height="20" />
            <rect x="55" y="25" rx="6" ry="6" width="200" height="20" />
        </ContentLoader>
    )
}