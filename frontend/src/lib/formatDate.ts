export function formatDateTime(date: Date): string {
    const now = new Date()
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const timeStr = `${hours}:${minutes}`

    if (date.toDateString() === now.toDateString()) {
        return timeStr
    }

    return `${days[date.getDay()]} ${timeStr}`
}

export function formatMonthDay(date: Date): string {
    const dateObj = date instanceof Date ? date : date ? new Date(date) : null

    if (!dateObj || isNaN(dateObj.getTime())) {
        return ''
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December']
    const day = dateObj.getDate()

    return `${months[dateObj.getMonth()]} ${day}`
}

export function formatMonthDayTime(date: Date): string {
    const dateObj = date instanceof Date ? date : date ? new Date(date) : null

    if (!dateObj || isNaN(dateObj.getTime())) {
        return ''
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December']
    const day = dateObj.getDate()
    const hours = dateObj.getHours().toString().padStart(2, '0')
    const minutes = dateObj.getMinutes().toString().padStart(2, '0')

    return `${months[dateObj.getMonth()]} ${day} at ${hours}:${minutes}`
}

export function calculateAge(birthday: Date): number | null {
    const dateObj = birthday instanceof Date ? birthday : birthday ? new Date(birthday) : null

    if (!dateObj || isNaN(dateObj.getTime())) {
        return null
    }

    const today = new Date()
    let age = today.getFullYear() - dateObj.getFullYear()
    const monthDiff = today.getMonth() - dateObj.getMonth()
    const dayDiff = today.getDate() - dateObj.getDate()

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--
    }

    return age
}