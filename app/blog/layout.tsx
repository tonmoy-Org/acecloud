import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog | AceCloud',
    description: "Explore the AceCloud blog for insights, trends, and expert advice on digital innovation, technology, and strategies to elevate your business.",
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
