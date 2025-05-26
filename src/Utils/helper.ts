type Month = { long: string, short: string }
const MONTHS: Month[] = [
    { long: 'January', short: 'Jan' },
    { long: 'February', short: 'Feb' },
    { long: 'March', short: 'Mar' },
    { long: 'April', short: 'Apr' },
    { long: 'May', short: 'May' },
    { long: 'June', short: 'Jun' },
    { long: 'July', short: 'Jul' },
    { long: 'August', short: 'Aug' },
    { long: 'September', short: 'Sep' },
    { long: 'October', short: 'Oct' },
    { long: 'November', short: 'Nov' },
    { long: 'December', short: 'Dec' },
]
export function getMonthAndYear(value: string | number | Date) {
    const date = new Date(value);
    const month = MONTHS[date.getMonth()].long
    const year = date.getFullYear();
    return `${month}, ${year}`
}