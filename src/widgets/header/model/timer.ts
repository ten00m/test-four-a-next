export class TimerClass {
    time: number

    constructor(startTime: number, callback: (newTime: number) => void, inter: number = 1000) {
        this.time = startTime
        const interval = setInterval(() => {
            this.time -= inter
            if (this.time < 0) {
                clearInterval(interval)
            } else {
                callback(this.time)
            }
        }, inter)
    }
}
