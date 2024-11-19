"use client";

import { Container, Box } from "@mui/material";
import dynamic from "next/dynamic";

// Dynamic imports for components
const TrustedPartners = dynamic(() => import("../IndustrySection/IndustrySection"), {
    loading: () => <div>Loading Trusted Partners...</div>,
});
const GlowingSection = dynamic(() => import("../GlowingSection/GlowingSection"), {
    loading: () => <div>Loading Glowing Section...</div>,
});
const CommonLine = dynamic(() => import("../CommonLine/CommonLine"), {
    loading: () => <div>Loading Common Line...</div>,
});
const CustomHero = dynamic(() => import("../CustomHero/CustomHero"), {
    loading: () => <div>Loading Hero Section...</div>,
});
const HeroInsights = dynamic(() => import("../HeroInsights/HeroInsights"), {
    loading: () => <div>Loading Hero Insights...</div>,
});




export default function BrandingSection() {
    return (
        <Box sx={{ mt: { xs: 15, md: 15 } }}>
            <Container maxWidth="lg">
                <CustomHero
                    title="Elevate Your Brand with Strategic Branding Solutions"
                    subtitle="Build a strong and memorable brand identity. From logo design to brand strategy, our services ensure your business stands out in a competitive market."
                    linkHref="/contact-us"
                    linkText="Start Building Now"
                    imageSrc="/feature/Custom_Websites.svg"
                    imageAlt="Custom Web Design"
                />
            </Container>
            <Box>
                <TrustedPartners />
            </Box>
            <Container maxWidth="lg">
                <HeroInsights
                    title="Branding."
                    subtitle="Develop a captivating brand identity with our comprehensive branding services, tailored to reflect your values and vision."
                    services={[
                        "Logo Design",
                        "Brand Strategy",
                        "Visual Identity",
                        "Market Positioning",
                        "Brand Guidelines",
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
