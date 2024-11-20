import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About | AceCloud',
    description: "Learn more about AceCloud, our mission to elevate digital experiences, our innovative approach, and the expertise driving success for businesses worldwide.",
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
