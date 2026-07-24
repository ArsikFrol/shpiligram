import type { Metadata } from 'next'

import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
    title: 'Chat with',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <Navigation activeElem={0} />
        </>
    )
}