import Navigation from '@/components/Navigation'
import ReturnToSettings from '@/components/Settings/ReturnToSettings'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Settings',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <ReturnToSettings />
            {children}
            <Navigation activeElem={0} />
        </>
    )
}