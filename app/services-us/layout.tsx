import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Services | AceCloud',
    description: "Discover the wide range of innovative services offered by AceCloud to elevate your digital experience. From cloud solutions to custom development, we empower businesses to thrive in the digital age.",
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
