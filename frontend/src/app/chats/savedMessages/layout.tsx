import Navigation from '@/components/Navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Seved chat',
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