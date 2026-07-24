import Navigation from "@/components/Navigation"
import Settings from "@/components/Settings/Settings"

export default function page() {
    return (
        <>
            <Settings />
            <Navigation activeElem={3} />
        </>
    )
}