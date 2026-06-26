import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Notifications',
}

export default function layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}