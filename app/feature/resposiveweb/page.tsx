import dynamic from 'next/dynamic';
import React from 'react'

const DynamicComponent = dynamic(() => import('@/app/components/ResponsiveWebsite/ResponsiveWebsite'));

export default function ResposiveWebPage() {
  return (
    <div>
        <DynamicComponent/>
    </div>
  )
}
