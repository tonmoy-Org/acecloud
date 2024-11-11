import dynamic from 'next/dynamic';
import React from 'react'

const DynamicComponent = dynamic(() => import('@/app/components/SecureHostingSection/SecureHostingSection'));

export default function SecureHostingPage() {
    return (
        <div>
            <DynamicComponent />
        </div>
    )
}
