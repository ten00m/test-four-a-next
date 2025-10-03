export function getFormat(time: number) {
    const date = new Date(time)

    return [
        date.getMinutes().toString().padStart(2, '0'),
        date.getSeconds().toString().padStart(2, '0'),
    ]
}
