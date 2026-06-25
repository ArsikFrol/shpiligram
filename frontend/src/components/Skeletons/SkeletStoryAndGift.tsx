import ContentLoader from "react-content-loader"

export default function SkeletStoryAndGift() {
    return (
        <ContentLoader speed={2} width={180} height={200} viewBox="0 0 180 200"
            backgroundColor="#3f3f46" foregroundColor="#52525b" >
            <rect x="0" y="0" rx="12" ry="12" width="180" height="200" />
        </ContentLoader>
    )
}