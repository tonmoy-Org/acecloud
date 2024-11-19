"use client";


import { Container, Box } from "@mui/material";
import TrustedPartners from '../IndustrySection/IndustrySection';
import GlowingSection from '../GlowingSection/GlowingSection';
import CommonLine from "../CommonLine/CommonLine";
import HeroInsights from "../HeroInsights/HeroInsights";
import CustomHero from "../CustomHero/CustomHero";



export default function ResponsiveWebsite() {

    return (
        <Box sx={{ mt: { xs: 15, md: 15 } }}>
            <Container maxWidth='lg'>
                <CustomHero
                    title="Design websites for any device"
                    subtitle="Ensure a seamless user experience across all screen sizes. Create responsive layouts that adapt perfectly to any device."
                    linkHref="/contact-us"
                    linkText="Start Building Now"
                    imageSrc="/feature/Custom_Websites.svg"
                    imageAlt="Custom Web Design"
                />
            </Container>
            <Box>
                <TrustedPartners />
            </Box>
            <Container maxWidth='lg'>
                <HeroInsights
                    title="Responsive layouts."
                    subtitle="Optimize your website's performance and gain valuable insights to improve user experience."
                    services={[
                        "Improved User Experience",
                        "Increased Mobile Traffic",
                        "Faster Loading Times",
                        "Cost-Effective Solution",
                        "SEO Benefits"
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
