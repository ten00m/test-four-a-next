import Header from '@/src/widgets/header'
import PlanItem from '@/src/widgets/plan-item'
import Layout from '@/src/_pages/home/ui/layout'
import Content from '@/src/_pages/home/ui/content'

export function Home() {
    return (
        <div className="">
            <Layout header={<Header />} content={<Content />} />
        </div>
    )
}
