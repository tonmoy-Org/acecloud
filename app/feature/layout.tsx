import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Features | AceCloud',
    description: "Explore the powerful features of AceCloud that elevate digital experiences. From cutting-edge technology to seamless integration, discover how we help businesses thrive in the digital world.",
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
