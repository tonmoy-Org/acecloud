import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy & Policy | AceCloud',
    description: "Learn about AceCloud's commitment to protecting your privacy. Our Privacy Policy outlines how we collect, use, and safeguard your personal information while using our services.",
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
