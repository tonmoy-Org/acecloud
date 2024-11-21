"use client";


import { Container, Box } from "@mui/material";
import TrustedPartners from '../IndustrySection/IndustrySection';
import GlowingSection from '../GlowingSection/GlowingSection';
import CommonLine from "../CommonLine/CommonLine";
import CustomHero from "../CustomHero/CustomHero";
import HeroInsights from "../HeroInsights/HeroInsights";



export default function WebDesignSection() {

    return (
        <Box sx={{ mt: { xs: 15, md: 15 } }}>
            <Container maxWidth='lg'>
                <CustomHero
                    title="Crafted Web Design for Exceptional Experiences"
                    subtitle="Transform your ideas into stunning digital experiences. Our expert design services focus on user-centric interfaces, responsive layouts, and seamless functionality to elevate your online presence."
                    linkHref="/contact-us"
                    linkText="Start Building Now"
                    imageSrc="/service/s1.png"
                    imageAlt="Custom Web Design"
                />
            </Container>
            <Box>
                <TrustedPartners />
            </Box>
            <Container maxWidth='lg'>
                <HeroInsights
                    title="Web Design."
                    subtitle="Transform your ideas into stunning digital experiences with our expert web design services."
                    services={[
                        "Custom Design", "User-Centric UI/UX", "Responsive Layouts", "SEO Optimization", "Brand Identity"
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
