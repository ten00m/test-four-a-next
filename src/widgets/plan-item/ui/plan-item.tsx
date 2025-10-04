import React, {FC} from 'react';

interface IPlanItemProps {
    price: number;
    fullPrice: number;
    period: string;
    id: string;
    isBest: boolean;
    text: string;
}

export const PlanItem: FC<IPlanItemProps> = ({
        price,
        fullPrice,
        period,
        isBest,
        text,
        id
    }) => {
    const sell = Math.round((fullPrice - price) / fullPrice * 10) * 10;

    return (
        <div style={{borderColor: isBest ? '#FDB056' : '#484D4E'}} className="relative flex basis-[100%] flex-row justify-between border-[0.125rem] bg-[#313637] p-5 rounded-[1.25rem]">
            <div className="flex flex-col gap-3 items-start">
                {period}
                <div className="flex flex-col items-end">
                    <span style={{color: isBest ? '#FDB056' : '#fff'}} className="font-semibold text-[30px] h-[30px] leading-[30px]">
                        {price}
                    </span>
                    <span className="text-[#919191] relative">
                        {fullPrice}
                        <div className="absolute border-[0.5px] w-[100%] border-[#919191] rounded-[1px] top-[calc(50%-1.14px)]">

                        </div>
                    </span>
                </div>
            </div>
            <div>
                {text}
            </div>
            <div className="absolute flex flex-row top-[-2px] rounded-b-[12px] right-0">
                <div className="bg-[#FD5656] rounded-b-[12px] px-1.5 py-[3px]">
                    {-sell}%
                </div>
                {
                    isBest 
                    && <span
                        className="text-[#FDB056] mx-[14px]">
                        хит!
                    </span>
                }
            </div>
        </div>
    );
}

