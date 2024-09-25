"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TeamSection from "../components/MeetOurTeam/MeetOurTeam";
import banner from "@/public/banner/03.png";

// Animation variants for the text and content
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const AboutUs: React.FC = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    position: "relative",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundImage: `url(${banner.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "60px 20px",
                    color: "#fff",
                }}
            >
                {/* Dark overlay for better text contrast */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        zIndex: 1,
                    }}
                />

                {/* Main Content */}
                <Box sx={{
                    pt: 5,
                    maxWidth: "800px",
                    margin: "0 auto",
                    zIndex: 2,
                    position: "relative",
                    textAlign: "center",
                }}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}

                    >
                        <motion.div variants={fadeInUp}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    marginBottom: 2,
                                    color: '#E0E0E0',
                                }}
                            >
                                About Us
                            </Typography>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    fontWeight: 400,
                                    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
                                    color: "#f0f0f0",
                                    lineHeight: 1.8,
                                }}
                            >
                                We are a dynamic team of developers committed to crafting world-class web and mobile applications...
                            </Typography>
                        </motion.div>

                        {/* Add more text animation blocks as needed */}

                        <motion.div variants={fadeInUp}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#e0e0e0",
                                    mt: 3,
                                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.8)",
                                }}
                            >
                                Let's Achieve Excellence, Together.
                            </Typography>
                        </motion.div>
                    </motion.div>
                </Box>
            </Box>

            {/* Team Section */}
            <Box>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <TeamSection />
                </motion.div>
            </Box>
        </Box>
    );
};

export default AboutUs;
