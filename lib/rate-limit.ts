const requests = new Map<string, { count: number; lastRequest: number }>()

export function rateLimit(ip: string) {
    const now = Date.now()
    const windowTime = 60 * 1000
    const maxRequests = 3

    const record = requests.get(ip)

    if (!record) {
        requests.set(ip, { count: 1, lastRequest: now })
        return true
    }

    if (now - record.lastRequest > windowTime) {
        requests.set(ip, { count: 1, lastRequest: now })
        return true
    }

    if (record.count >= maxRequests) {
        return false
    }

    record.count++
    return true
}