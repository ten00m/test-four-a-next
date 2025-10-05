import React from 'react'
import PlanItem from '@/src/widgets/plan-item'
import Button from '@/src/shared/ui/button'

const Content = () => {
    return (
        <div className="flex w-full flex-col gap-4">
            <div className="flex w-full flex-row">
                <PlanItem
                    price={5990}
                    fullPrice={18990}
                    period="Навсегда"
                    id="1"
                    isBest={true}
                    text="Sometext"
                />
            </div>
            <Button>Button</Button>
        </div>
    )
}

export default Content
