import React from 'react'
import Pricing from '../components/Pricing/Pricing'
import FAQSection from '../components/FAQSection/FAQSection'
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
