const PRESSURE_UNITS = 0.750062;

export const capitalizeFirstLetter = (str: string): string => {
    if(!str) return '';

    return `${str[0].toUpperCase()}${str.slice(1)}`
}

export const getPressureMm = (hpa: number): number => {
    return Math.round(hpa * PRESSURE_UNITS);
}

export const getTime = (seconds: number): string => {
    return new Date(seconds * 1000).toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik' })
}