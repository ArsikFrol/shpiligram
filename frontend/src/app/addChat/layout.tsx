import Navigation from '@/components/Navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Add friend',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <Navigation activeElem={2} />
        </>
    )
}