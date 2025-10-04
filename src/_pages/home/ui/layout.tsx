import React, { FC } from 'react'

interface ILayoutProps {
    header?: React.ReactNode
    content?: React.ReactNode
}

const Layout: FC<ILayoutProps> = ({ header, content }) => {
    return (
        <div>
            {header}
            <div className="flex flex-row flex-wrap items-center px-4 pt-5">{content}</div>
        </div>
    )
}

export default Layout
