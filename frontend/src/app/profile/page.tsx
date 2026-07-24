import Navigation from "@/components/Navigation"
import ProfilePage from "@/components/Profile/ProfilePage"

export default function page() {
    return (
        <>
            <ProfilePage />
            <Navigation activeElem={4} />
        </>
    )
}