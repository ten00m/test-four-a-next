import Header from '@/src/widgets/header'
import PlanItem from '@/src/widgets/plan-item'
import Layout from '@/src/_pages/home/ui/layout'

export function Home() {
    return (
        <div className="">
            <Layout
                header={<Header />}
                content={
                    <PlanItem
                        price={5990}
                        fullPrice={18990}
                        period="Навсегда"
                        id="1"
                        isBest={true}
                        text="Sometext"
                    />
                }
            />
        </div>
    )
}
