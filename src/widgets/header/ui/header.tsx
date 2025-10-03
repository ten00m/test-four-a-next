import React from 'react'
import Timer from '@/src/widgets/header/ui/timer'

export function Header() {
    return (
        <header className="flex flex-col items-center gap-1 bg-[#1D5B43] px-[29.5px] py-2">
            <h1 className="text-center text-sm leading-tight font-semibold">
                Успейте открыть пробную неделю
            </h1>
            <Timer />
        </header>
    )
}
