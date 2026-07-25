import { clsx } from 'clsx'
import { RefObject } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: Parameters<typeof clsx>) {
    return twMerge(clsx(inputs))
}

export const scrollToBottom = (containerRef: RefObject<HTMLElement | null>) => {
    if (!containerRef) return;

    if (containerRef.current) {
        requestAnimationFrame(() => {
            containerRef.current?.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: 'smooth'
            })
        })
    }
}