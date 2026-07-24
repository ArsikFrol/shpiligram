import Navigation from '@/components/Navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chat settings',
}

export default function layout({
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