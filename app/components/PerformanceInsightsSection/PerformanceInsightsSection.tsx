"use client";

import { Container, Box } from "@mui/material";
import TrustedPartners from '../IndustrySection/IndustrySection';
import GlowingSection from '../GlowingSection/GlowingSection';
import CommonLine from "../CommonLine/CommonLine";
import CustomHero from "../CustomHero/CustomHero";
import HeroInsights from "../HeroInsights/HeroInsights";



export default function PerformanceInsightsSection() {

    return (
        <Box sx={{ mt: { xs: 15, md: 15 } }}>
            <Container maxWidth='lg'>
                <CustomHero
                    title="Performance Insights for Your Website"
                    subtitle="Monitor your website's speed, user engagement, and key metrics with real-time insights. Make data-driven decisions to boost performance."
                    linkHref="/contact-us"
                    linkText="Start Building Now"
                    imageSrc="/FP/f3.png"
                    imageAlt="Custom Web Design"
                />

            </Container>
            <Box>
                <TrustedPartners />
            </Box>
            <Container maxWidth='lg'>
                <HeroInsights
                    title="Performance Insights."
                    subtitle="Optimize your website's performance and gain valuable insights to improve user experience."
                    services={[
                        "Page Load Speed Optimization",
                        "Real-Time Analytics",
                        "Core Web Vitals Monitoring",
                        "Performance Scoring & Insights",
                        "Content Delivery Network (CDN) Integration",
                    ]}
                />
            </Container>
            <Box sx={{ mt: 2 }}>
                <CommonLine />
            </Box>
            <Container maxWidth='lg'>
                <Box sx={{ mt: 2 }}>
                    <GlowingSection />
                </Box>
            </Container>
        </Box>
    );
}
