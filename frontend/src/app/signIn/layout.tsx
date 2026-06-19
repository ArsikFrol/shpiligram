import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sign In',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='bg-container rounded-2xl fixed top-0 left-0 w-full h-screen'>
            {children}
        </div>
    )
}