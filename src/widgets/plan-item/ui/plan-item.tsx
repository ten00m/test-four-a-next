import React, { FC } from 'react'

interface IPlanItemProps {
    price: number
    fullPrice: number
    period: string
    id: string
    isBest: boolean
    text: string
}

export const PlanItem: FC<IPlanItemProps> = ({ price, fullPrice, period, isBest, text, id }) => {
    const sell = Math.round(((fullPrice - price) / fullPrice) * 10) * 10

    return (
        <div
            style={{ borderColor: isBest ? '#FDB056' : '#484D4E' }}
            className="relative flex basis-[100%] flex-row justify-between rounded-[1.25rem] border-[0.125rem] bg-[#313637] p-5"
        >
            <div className="flex flex-col items-start gap-3">
                {period}
                <div className="flex flex-col items-end">
                    <span
                        style={{ color: isBest ? '#FDB056' : '#fff' }}
                        className="h-[30px] text-[30px] leading-[30px] font-semibold"
                    >
                        {price}
                    </span>
                    <span className="relative text-[#919191]">
                        {fullPrice}
                        <div className="absolute top-[calc(50%-1.14px)] w-[100%] rounded-[1px] border-[0.5px] border-[#919191]"></div>
                    </span>
                </div>
            </div>
            <div>{text}</div>
            <div className="absolute top-[-2px] flex flex-row rounded-b-[12px]">
                <div className="rounded-b-[12px] bg-[#FD5656] px-1.5 py-[3px]">{-sell}%</div>
                {isBest && <span className="mx-[14px] text-[#FDB056]">хит!</span>}
            </div>
        </div>
    )
}
