import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms & Conditions | MangoFusion',
    description: "AceCloud | Elevating digital experiences through innovation and expertise.",
}

const layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div>{children}</div>
    )
}


export default layout;