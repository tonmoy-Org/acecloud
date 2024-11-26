import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Book a call with us | AceCloud',
    description: "Schedule a call with AceCloud's expert team to discuss tailored solutions that elevate your digital experiences and transform your business.",
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
