import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact | AceCloud',
    description: "Get in touch with AceCloud, where we specialize in elevating digital experiences and providing innovative solutions to help businesses succeed in the digital age.",
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
