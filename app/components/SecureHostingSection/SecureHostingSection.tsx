"use client";

import { Container, Box } from "@mui/material";
import TrustedPartners from '../IndustrySection/IndustrySection';
import GlowingSection from '../GlowingSection/GlowingSection';
import CommonLine from "../CommonLine/CommonLine";
import CustomHero from "../CustomHero/CustomHero";
import HeroInsights from "../HeroInsights/HeroInsights";


export default function SecureHostingSection() {

    return (
        <Box sx={{ mt: { xs: 15, md: 15 } }}>
            <Container maxWidth='lg'>
                <CustomHero
                    title="Secure Hosting for Ultimate Protection"
                    subtitle="Keep your website and data safe with advanced encryption and reliable hosting solutions. Experience peace of mind with top-tier security."
                    linkHref="/contact-us"
                    linkText="Start Building Now"
                    imageSrc="/FP/f2.png"
                    imageAlt="Custom Web Design"
                />
            </Container>
            <Box>
                <TrustedPartners />
            </Box>
            <Container maxWidth='lg'>
                <HeroInsights
                    title="Secure Hosting."
                    subtitle="Ensure your website's security with our reliable and secure hosting services."
                    services={[
                        "SSL Encryption", "Regular Backups", "DDoS Protection", "Firewall Security", "24/7 Monitoring"
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
