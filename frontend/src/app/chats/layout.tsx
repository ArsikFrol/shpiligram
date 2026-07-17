import Header from '@/components/HeaderRoot/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chats',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}