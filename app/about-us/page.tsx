"use client";

import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

const TeamSection = dynamic(() => import("../components/MeetOurTeam/MeetOurTeam"));
const GlowingSection = dynamic(() => import("../components/GlowingSection/GlowingSection"));
const FAQSection = dynamic(() => import("../components/FAQSection/FAQSection"));
const OurApproach = dynamic(() => import("../components/OurApproach/OurApproach"));

// Variants for text animations
const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.8,
            ease: "easeOut",
        },
    }),
};

const AboutUs: React.FC = () => {
    return (
        <Box>
            {/* About Us Content */}
            <Box
                sx={{
                    color: "white",
                    textAlign: "center",
                    py: { xs: 4, md: 8 },
                    px: { xs: 2, md: 4 },
                    backgroundColor: "transparent",
                }}
            >
                <motion.div className="flex flex-col justify-center items-center lg:h-screen pb-10 pt-10 px-4">
                    <Box sx={{ my: 2 }}>
                        <Box className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] select-none focus:outline-none">
                            <Box
                                component="span"
                                className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1D4ED8_0%,#d8b4fe_50%,#1D4ED8_100%)]"
                            ></Box>
                            <Button
                                component="span"
                                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl"
                                sx={{ position: "relative", zIndex: 1, textTransform: "none" }}
                            >
                                About Us
                            </Button>
                        </Box>
                    </Box>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={8}>
                            <motion.div initial="hidden" animate="visible">
                                <motion.h1 variants={textAnimation} custom={0}>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "1.8rem", md: "2.5rem", lg: "3rem" },
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Tailored Web Solutions for Your Business
                                    </Typography>
                                </motion.h1>
                                <motion.p
                                    className="text-sm md:text-[17px] mb-8 tracking-wide leading-relaxed lg:max-w-2xl mx-auto text-[#BABABA]"
                                    variants={textAnimation}
                                    custom={1}
                                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                                >
                                    AceCould helps businesses build and manage custom websites with ease, offering scalable solutions for a seamless web presence.
                                </motion.p>
                                <motion.div variants={textAnimation} custom={2}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: "bold",
                                            mt: { xs: 2, md: 3 },
                                        }}
                                    >
                                        The Evolution of AceCould: From Idea to Innovation
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mt: 2,
                                            color: "#BABABA",
                                            maxWidth: "550px",
                                            mx: "auto",
                                            fontSize: { xs: "0.9rem", md: "1rem" },
                                        }}
                                    >
                                        We’ve been working on AceCould for the past 2 years, empowering businesses with customizable, scalable solutions for their web presence. Join us on this journey to bring innovation to your business.
                                    </Typography>
                                </motion.div>
                                <Box mt={4} display="flex" justifyContent="center" gap={2} flexWrap="wrap">
                                    <Button
                                        type="submit"
                                        sx={{
                                            textTransform: "none",
                                            px: { xs: 3, md: 4 },
                                            py: { xs: 1, md: 1.5 },
                                        }}
                                        variant="outlined"
                                        className="relative inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium text-slate-200 border-[1.7px] bg-[#1D4ED8] border-[#1D4ED8] rounded-lg animated-border"
                                    >
                                        <span className="relative z-10">Learn More</span>
                                    </Button>
                                    <Button
                                        sx={{
                                            textTransform: "none !important",
                                            px: { xs: 3, md: 4 },
                                            py: { xs: 1, md: 1.5 },
                                        }}
                                        variant="outlined"
                                        component={Link}
                                        href="/contact-us"
                                        className="relative inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium text-slate-200 border-[1.7px] border-[#1D4ED8] rounded-lg animated-border"
                                    >
                                        <span className="relative z-10">Get in Touch</span>
                                    </Button>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </Box>
            {/* Other Sections */}
            <Box sx={{ my: 2, px: { xs: 2, md: 4 } }}>
                <TeamSection />
            </Box>
            <Box sx={{ my: 2, px: { xs: 2, md: 4 } }}>
                <OurApproach />
            </Box>
            <Box sx={{ my: 2, px: { xs: 2, md: 4 } }}>
                <FAQSection />
            </Box>
            <Box sx={{ my: 2, px: { xs: 2, md: 4 } }}>
                <GlowingSection />
            </Box>
        </Box>
    );
};

export default AboutUs;
