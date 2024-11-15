"use client";

import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";

import Link from 'next/link';
import TrustedPartners from '../IndustrySection/IndustrySection';
import GlowingSection from '../GlowingSection/GlowingSection';
import CommonLine from "../CommonLine/CommonLine";

// Styles
const SectionContainer = styled(Box)({
    backgroundImage: "",
    color: "hsl(0, 0%, 98%)",
    paddingTop: "150px",
    alignItems: "center",
});

const HeroText = styled(Typography)({
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1rem",
    color: "hsl(0, 0%, 100%)",
    letterSpacing: "1px",
});

const SubText = styled(Typography)({
    fontSize: "1.2rem",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 2.5rem auto",
    color: "#BABABA",
});

const HeroImage = styled("img")({
    width: "100%",
    maxWidth: "850px",
    margin: "2rem auto",
    display: "block",
    borderRadius: "5px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
});

export default function BrandingSection() {
    return (
        <SectionContainer>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <Box textAlign="center" sx={{ my: 2 }}>
                        <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
                            <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#6d28d9_0%,#d8b4fe_50%,#6d28d9_100%)]"></span>
                            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                <Link href="/contact-us" className="text-white">Start Your Branding Journey</Link>
                            </span>
                        </div>
                    </Box>
                    <HeroText>Elevate Your Brand with <br /> Strategic Branding Solutions</HeroText>
                    <SubText>
                        Build a strong and memorable brand identity. From logo design to brand strategy, our services ensure your business stands out in a competitive market.
                    </SubText>
                    {/* Hero Image */}
                    <HeroImage src="/feature/Custom_Websites.svg" alt="Custom Web Design" />
                </motion.div>
            </Container>
            <Box>
                <TrustedPartners />
            </Box>
            <Container maxWidth="lg">
                <Box sx={{ mt: 10 }}>
                    <div className="px-2">
                        <div className="w-full">
                            <div
                                className="pt-10 lg:pt-16"
                                style={{ borderTop: '2px solid rgba(225, 225, 225, 0.1)' }}
                            ></div>
                        </div>
                        <div className="mb-5 lg:mb-20">
                            <div className="w-full">
                                <h2 className="lg:text-[8rem] font-sans-primary tracking-tight text-gray-600 dark:text-grayDark-100 leading-none text-balance">
                                    Branding.
                                </h2>
                            </div>
                        </div>
                        <div className="w-full flex justify-between">
                            <div className="px-2 w-full mb-5 lg:mb-0 lg:w-7/16">
                                <h2 className="text-xl md:text-2.5xl xl:text-3xl 4xl:text-4xl font-sans-primary tracking-tight text-[#BABABA] dark:text-grayDark-100 leading-tight text-balance pr-10 lg:pr-0">
                                    Develop a captivating brand identity with our comprehensive branding services, tailored to reflect your values and vision.
                                </h2>
                            </div>
                            <div className="px-2 lg:px-3 xl:px-4 w-full mb-5 lg:w-8/16 4xl:w-7/16 text-[#BABABA]">
                                {[
                                    "Logo Design",
                                    "Brand Strategy",
                                    "Visual Identity",
                                    "Market Positioning",
                                    "Brand Guidelines",
                                ].map((feature, index) => (
                                    <a
                                        key={index}
                                        className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                                    >
                                        <div className="inline-flex items-center space-x-6">
                                            <div className="font-light relative z-10">{`0${index + 1}`}</div>
                                            <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                                {feature}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                            <svg
                                                className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512"
                                            >
                                                <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                            </svg>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Box>
            </Container>
            <Box sx={{ mt: 2 }}>
                <CommonLine />
            </Box>
            <Container maxWidth='lg'>
                <Box sx={{ mt: 2 }}>
                    <GlowingSection />
                </Box>
            </Container>
        </SectionContainer>
    );
}
