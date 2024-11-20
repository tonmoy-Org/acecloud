import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms & Conditions | AceCloud',
    description: "Read the Terms & Conditions for using AceCloud's services. Understand the legal agreements and policies that govern your use of our platform and services.",
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
