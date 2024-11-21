"use client";


import { Container, Box } from "@mui/material";
import TrustedPartners from '../IndustrySection/IndustrySection';
import GlowingSection from '../GlowingSection/GlowingSection';
import CommonLine from "../CommonLine/CommonLine";
import CustomHero from "../CustomHero/CustomHero";
import HeroInsights from "../HeroInsights/HeroInsights";



// Component
export default function SEOSection() {
    return (
        <Box sx={{ mt: { xs: 15, md: 15 } }}>
            <Container maxWidth='lg'>
                <CustomHero
                    title="Drive Traffic with Expert SEO Strategies"
                    subtitle="Maximize your online presence with our tailored SEO services. From keyword research to performance tracking, we ensure your website ranks high and drives organic traffic."
                    linkHref="/contact-us"
                    linkText="Start Building Now"
                    imageSrc="/service/s2.png"
                    imageAlt="Custom Web Design"
                />
            </Container>
            <Box>
                <TrustedPartners />
            </Box>
            <Container maxWidth="lg">
                <HeroInsights
                    title=" SEO Strategies."
                    subtitle="Maximize your online presence with our tailored SEO services."
                    services={[
                        "Comprehensive Keyword Research", "On-Page & Off-Page Optimization", "Technical SEO Audits", "SEO Optimization", "Local SEO for Targeted Visibility", "Regular Performance Tracking"
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
