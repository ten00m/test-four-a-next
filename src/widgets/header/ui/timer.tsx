'use client'

import React, { FC, useEffect, useMemo, useState } from 'react'
import { TimerClass } from '@/src/widgets/header/model/timer'
import { getFormat } from '@/src/widgets/header/lib/getFormatedDate'
import { breakpoints, Color } from '@/src/widgets/header/lib/getTimerColor'
import Star from '@/src/shared/ui/star'


interface ITimerProps {
    startTime?: number
}

export const Timer: FC<ITimerProps> = ({ startTime = 0.55* 60 * 1000}) => {
    const [time, setTime] = useState(startTime)
    const [color, setColor] = useState<Color>(breakpoints.default)

    function callback(newTime: number) {
        setTime(newTime)
    }

    useEffect(() => {
        new TimerClass(startTime, callback)
    }, [])

    useEffect(() => {
        const timeIndex = (time / 1000).toString();
        if (Object.hasOwn(breakpoints, timeIndex)) {
            setColor(breakpoints[timeIndex as keyof typeof breakpoints])
        }
    }, [time])

    return (<div style={{color: color}} className="font-bold flex flex-row items-center gap-2">
        <Star fill={color}/>
        {getFormat(time).join(' : ')}
        <Star fill={color}/>
    </div>)
}

export default Timer
