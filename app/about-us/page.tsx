"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
const TeamSection = dynamic(() => import("../components/MeetOurTeam/MeetOurTeam"));
const GlowingSection = dynamic(() => import("../components/GlowingSection/GlowingSection"));
const FAQSection = dynamic(() => import("../components/FAQSection/FAQSection"));
const OurApproach = dynamic(() => import("../components/OurApproach/OurApproach"));



const AboutUs: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    py: { xs: 4, md: 8 },
                    mt: { xs: 6, md: 10 },
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-center"
                >
                    <Box textAlign="center" sx={{ my: 2 }}>
                        <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
                            <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#6d28d9_0%,#d8b4fe_50%,#6d28d9_100%)]"></span>
                            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                <Link href='' className="text-white">About</Link>
                            </span>
                        </div>
                    </Box>
                    <Box sx={{ width: { xs: 330, md: 700 }, mx: 'auto', mb: { xs: 4, md: 0 } }}>
                        <p
                            className="text-[2rem] md:text-[2.5rem] lg:!leading-snug font-semibold lg:mt-3 text-white text-center"
                        >
                            Tailored Web Solutions for Your Business
                        </p>
                        <p className="text-[1rem] lg:text-[1.125rem] lg:!leading-snug lg:mt-3 text-[#BABABA] text-center">
                            AceCould helps businesses build and manage custom websites with ease, offering scalable solutions for a seamless web presence.
                        </p>
                    </Box>
                    <Button
                        sx={{ textTransform: 'none !important', my: 4 }}
                        variant="outlined"
                        component={Link}
                        href="/book-meeting"
                        className="relative inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium text-slate-200 border-[1.7px] border-[#1D4ED8] rounded-lg animated-border"
                    >
                        <span className="absolute inset-0 transition-all duration-200 transform -translate-x-full rounded-lg group-hover:translate-x-0"></span>
                        <span className="relative z-10">
                            Start Transforming Your Agency
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4 ml-2"
                        >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </Button>
                </motion.div>
                <Box sx={{ py: { xs: 5, md: 10 } }}>
                    .                 <Box>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <Typography
                                className="text-3xl md:text-[4.5rem] font-bold text-white leading-snug"
                            >
                                The Evolution of AceCloud: From Idea to Innovation
                            </Typography>
                        </motion.div>
                    </Box>
                    <Box>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: 500, fontSize: { xs: '.875rem', md: '1.125rem' } }}>
                            We've been working on AceCloud for the past 2 years, helping businesses create customizable, scalable solutions for their web presence
                        </Typography>
                    </Box>
                </Box>

            </Box>
            {/* Other Sections */}
            <Box sx={{ my: 2 }}>
                <TeamSection />
            </Box>
            <Box sx={{ my: 2 }}>
                <OurApproach />
            </Box>
            <Box sx={{ my: 2 }}>
                <FAQSection />
            </Box>
            <Box sx={{ my: 2 }}>
                <GlowingSection />
            </Box>
        </Container>
    );
};

export default AboutUs;
