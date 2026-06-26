import Navigation from '@/components/Navigation'
import ReturnToSettings from '@/components/Settings/ReturnToSettings'
import { cn } from '@/lib/utils'
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
            <div className={cn(
                'absolute bottom-[20px] left-1/2 -translate-x-1/2',
            )}>
                <Navigation activeElem={0} />
            </div>
        </>
    )
}