const timerColors = {
    yellow: '#FFBB00',
    red: '#FF4E4E',
    white: '#fff',
}

export const breakpoints = {
    '0': timerColors.white,
    '29': timerColors.red,
    default: timerColors.yellow,
}

export type Color = (typeof timerColors)[keyof typeof timerColors]
