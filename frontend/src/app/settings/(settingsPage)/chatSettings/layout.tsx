import Navigation from '@/components/Navigation'
import { cn } from '@/lib/utils'
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
            <div className={cn(
                'absolute bottom-[20px] left-1/2 -translate-x-1/2',
            )}>
                <Navigation activeElem={0} />
            </div>
        </>
    )
}