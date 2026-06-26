import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chats Folder',
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