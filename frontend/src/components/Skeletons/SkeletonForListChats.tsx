import ContentLoader from "react-content-loader"

export default function SkeletonForListChats() {
    return (
        <div className="flex items-center justify-between py-2 px-[15px]">
            <ContentLoader speed={2} width={300} height={50} viewBox="0 0 300 50"
                backgroundColor="#3f3f46" foregroundColor="#52525b" >
                <circle cx="25" cy="25" r="25" />
                <rect x="55" y="0" rx="6" ry="6" width="140" height="20" />
                <rect x="55" y="25" rx="6" ry="6" width="200" height="20" />
            </ContentLoader>

            <ContentLoader speed={2} width={100} height={50} viewBox="0 0 100 50"
                backgroundColor="#3f3f46" foregroundColor="#52525b" className="ml-auto" >
                <rect x="20" y="5" rx="6" ry="6" width="70" height="15" />
                <circle cx="80" cy="38" r="12" />
            </ContentLoader>
        </div>
    )
}