import type { Metadata } from 'next'

import Navigation from '@/components/Navigation'
import Header from '@/components/Header/Header'

import { cn } from '@/lib/utils'

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
            <Header />
            {children}
            <div className={cn(
                'absolute bottom-[20px] left-1/2 -translate-x-1/2 z-0',
            )}
                style={{ zIndex: 0 }}>
                <Navigation activeElem={0} />
            </div>
        </>
    )
}