import React from 'react'
import dynamic from 'next/dynamic';

// Dynamically import components
const Pricing = dynamic(() => import('../components/Pricing/Pricing'));
const FAQSection = dynamic(() => import('../components/FAQSection/FAQSection'));
import { Box } from '@mui/material'

export default function PricingPage() {
    return (
        <div>
            <Pricing />
            <Box sx={{ my: 2, mb: 10 }}>
                <FAQSection />
            </Box>
        </div>
    )
}
