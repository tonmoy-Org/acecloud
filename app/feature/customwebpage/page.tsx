import dynamic from 'next/dynamic';
import React from 'react'

const DynamicComponent = dynamic(() => import('@/app/components/BuildWebsitesPage/BuildWebsitesPage'));

export default function CustomWebPage() {
    return (
        <div>
            <DynamicComponent />
        </div>
    )
}
