"use client";


import { Container, Box } from "@mui/material";
import dynamic from "next/dynamic";

const TrustedPartners = dynamic(() => import("../IndustrySection/IndustrySection"));
const GlowingSection = dynamic(() => import("../GlowingSection/GlowingSection"));
const CommonLine = dynamic(() => import("../CommonLine/CommonLine"));
const CustomHero = dynamic(() => import("../CustomHero/CustomHero"));
const HeroInsights = dynamic(() => import("../HeroInsights/HeroInsights"));





export default function BuildWebsitesPage() {

    return (
        <Box sx={{ mt: { xs: 15, md: 15 } }}>
            <Container maxWidth='lg'>
                <CustomHero
                    title="Build Websites And Customize Every Detail"
                    subtitle="Simplify your process with professional web design tools. Create websites, track progress, and achieve your goals with precision."
                    linkHref="/contact-us"
                    linkText="Start Building Now"
                    imageSrc="/FP/f1.png"
                    imageAlt="Custom Web Design"
                />
            </Container>
            <Box>
                <TrustedPartners />
            </Box>
            <Container maxWidth='lg'>
                <HeroInsights
                    title="Customize Design."
                    subtitle="Brand designers and web designers in-house crafting visuals to match your brand values."
                    services={[
                        "Brand Identity", "UI/UX Design", "Web Development", "Graphic Design", "Motion Graphics"
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
