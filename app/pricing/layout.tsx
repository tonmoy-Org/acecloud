import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pricing | AceCloud',
    description: "Explore AceCloud's flexible pricing plans designed to fit businesses of all sizes. Find the perfect solution to elevate your digital experience and drive success at an affordable rate.",
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
