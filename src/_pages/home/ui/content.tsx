'use client'

import PlanItem from '@/src/widgets/plan-item'
import Button from '@/src/shared/ui/button'
import ManImage from '@/src/shared/assets/images/man.png'
import { useGetPlansQuery } from '@/src/features/plans/api/plans-api'
import { useEffect, useState } from 'react'
import { IPlan } from '@/src/shared/types/plan'
import Checkbox from '@/src/shared/ui/checkbox'

const Content = () => {
    const { data, error, isLoading } = useGetPlansQuery()
    const [plans, setPlans] = useState<IPlan[]>([])
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        if (!data) {
            if (error) {
                console.error(error)
            }
        } else {
            setPlans(data)
        }
    }, [isLoading])

    return (
        <div className="flex w-full flex-col gap-4">
            <h2 className="text-[22px] leading-6 font-bold sm:text-[24px]">
                Выбери подходящий для себя{' '}
                <span className="text-primary">тариф</span>
            </h2>
            <div className="flex w-full flex-col justify-center">
                <img
                    src={ManImage.src}
                    alt="man"
                    className="h-[200px] w-auto object-contain object-center"
                />
                <div className="flex w-full flex-row flex-wrap-reverse gap-1.5">
                    {plans ? (
                        plans.map((plan, index) => (
                            <PlanItem
                                key={`${plan.id}-${index}`}
                                price={plan.price}
                                fullPrice={plan.full_price}
                                period={plan.period}
                                id={plan.id}
                                isBest={plan.is_best}
                                text={plan.text}
                                basis={
                                    plan.is_best
                                        ? '100%'
                                        : 'calc(1/3 - 4px)'
                                }
                            />
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
            <div className="flex flex-row gap-1.5 rounded-2xl bg-[#2D3233] px-5 py-3.5 text-[0.75rem] font-thin">
                <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                >
                    <path
                        d="M10.0438 15.3633C10.0524 15.9301 10.5154 16.3845 11.0823 16.3845C11.6491 16.3845 12.1121 15.9258 12.1207 15.3633L12.4669 6.03447C12.4885 5.67966 12.3587 5.3335 12.1077 5.06523C11.8395 4.77966 11.4674 4.61523 11.0823 4.61523C10.6972 4.61523 10.325 4.77966 10.0568 5.06523C9.80581 5.3335 9.67601 5.67966 9.69764 6.03447L10.0438 15.3633Z"
                        fill="#FDB056"
                    />
                    <path
                        d="M11.0799 21.2302C11.8446 21.2302 12.4645 20.6103 12.4645 19.8456C12.4645 19.0809 11.8446 18.4609 11.0799 18.4609C10.3152 18.4609 9.69531 19.0809 9.69531 19.8456C9.69531 20.6103 10.3152 21.2302 11.0799 21.2302Z"
                        fill="#FDB056"
                    />
                </svg>
                <div>
                    Следуя плану на 3 месяца и более, люди получают
                    в 2 раза лучший результат, чем за 1 месяц
                </div>
            </div>
            <Button className="h-[56px] font-bold">Button</Button>
            <Checkbox
                checked={isChecked}
                onChange={() => {
                    setIsChecked(!isChecked)
                }}
                label={
                    <div>
                        Я согласен с{' '}
                        <a
                            className="border-b border-b-[#CDCDCD]"
                            href="#"
                            onClick={(e) => e.stopPropagation()}
                        >
                            офертой рекуррентных платежей
                        </a>{' '}
                        и{' '}
                        <a
                            className="border-b border-b-[#CDCDCD]"
                            href="#"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Политикой конфиденциальности
                        </a>{' '}
                    </div>
                }
            />
            <div className="w-full text-[10px] text-[#9B9B9B]">
                Нажимая кнопку «Купить», Пользователь соглашается на
                разовое списание денежных средств для получения
                пожизненного доступа к приложению. Пользователь
                соглашается, что данные кредитной/дебетовой карты
                будут сохранены для осуществления покупок
                дополнительных услуг сервиса в случае желания
                пользователя.
            </div>
            <div className="rounded-[20px] border-2 border-[#484D4E] p-3 text-sm font-medium text-[#DCDCDC]">
                <div className="mb-[10px] flex items-center justify-center rounded-[30px] border-2 border-[#81FE95] px-5 py-3 text-[16px] text-[#81FE95] sm:text-lg">
                    гарантия возврата 30 дней
                </div>
                Мы уверены, что наш план сработает для тебя и ты
                увидишь видимые результаты уже через 4 недели! Мы даже
                готовы полностью вернуть твои деньги в течение 30 дней
                с момента покупки, если ты не получишь видимых
                результатов.
            </div>
        </div>
    )
}

export default Content
