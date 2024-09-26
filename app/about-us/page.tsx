"use client";

import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CountUp from "react-countup"; // Import CountUp component
import TeamSection from "../components/MeetOurTeam/MeetOurTeam";
import banner from "@/public/banner/03.png";


// Variants for text animations
const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.8,
            ease: 'easeOut',
        },
    }),
};


const AboutUs: React.FC = () => {
    return (
        <Box>
            <Box
                sx={{
                    position: 'relative',
                    background: `url(${banner.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                {/* Overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        zIndex: 1,
                    }}
                />

                {/* About Us Text */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    <motion.div className="relative flex flex-col justify-center items-center lg:h-screen pb-10 lg:pt-8 pt-24 px-8 overflow-hidden">
                        <Grid container spacing={4} justifyContent="center" alignItems="center">
                            <Grid item xs={12} md={8}>
                                <motion.div initial="hidden" animate="visible">
                                    <motion.h1 className="outlined-text" variants={textAnimation} custom={0}>
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    xs: '2.4rem',
                                                    lg: '3rem',
                                                },
                                                fontWeight: 'bold',
                                                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
                                            }}
                                        >
                                            About Us
                                        </Typography>
                                    </motion.h1>
                                    <motion.p
                                        className="text-sm md:text-[17px] mb-8 tracking-wide leading-relaxed max-w-2xl mx-auto text-[#BABABA]"
                                        variants={textAnimation}
                                        custom={1}
                                    >
                                        We are a dynamic team of developers committed to crafting
                                        world-class web and mobile applications, focusing on quality,
                                        innovation, and sustainability. Our mission is to help our
                                        clients succeed by creating digital solutions that drive
                                        business growth and streamline operations.
                                    </motion.p>
                                    <motion.div variants={textAnimation} custom={2}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: "bold",
                                                color: "#0DCCD7",
                                                mt: 3,
                                                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
                                            }}
                                        >
                                            Let's Achieve Excellence, Together.
                                        </Typography>
                                    </motion.div>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>
                </Box>
            </Box>

            {/* Statistics Section */}
            <Box
                sx={{
                    backgroundColor: "#121212",
                    color: "#fff",
                    textAlign: "center",
                    padding: "60px 20px",
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 4 }}>
                    Our team of experts is dedicated to helping you achieve your digital goals.
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                            Professional talent
                        </Typography>
                        <Typography variant="body2" color="grey.500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                            mollis aliquam ut porttitor.
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 700, color: "#0DCCD7", mt: 2 }}
                        >
                            <CountUp end={209} duration={2} />+
                        </Typography>
                        <Typography variant="subtitle1">Projects Completed</Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                            Driven by passion
                        </Typography>
                        <Typography variant="body2" color="grey.500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                            mollis aliquam ut porttitor.
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 700, color: "#0DCCD7", mt: 2 }}
                        >
                            <CountUp end={286} duration={2} />+
                        </Typography>
                        <Typography variant="subtitle1">Satisfied Customers</Typography>
                    </Grid>

                    <Grid item xs={6} md={3}>
                        <Typography variant="h3" sx={{ fontWeight: 700, color: "#fff" }}>
                            <CountUp end={467} duration={2} />
                        </Typography>
                        <Typography variant="subtitle1" color="grey.500">
                            Projects Completed
                        </Typography>
                    </Grid>

                    <Grid item xs={6} md={3}>
                        <Typography variant="h3" sx={{ fontWeight: 700, color: "#fff" }}>
                            <CountUp end={5} duration={2} />+
                        </Typography>
                        <Typography variant="subtitle1" color="grey.500">
                            Years Experience
                        </Typography>
                    </Grid>

                    <Grid item xs={6} md={3}>
                        <Typography variant="h3" sx={{ fontWeight: 700, color: "#fff" }}>
                            <CountUp end={95} duration={2} />%
                        </Typography>
                        <Typography variant="subtitle1" color="grey.500">
                            Client Satisfaction
                        </Typography>
                    </Grid>

                    <Grid item xs={6} md={3}>
                        <Typography variant="h3" sx={{ fontWeight: 700, color: "#fff" }}>
                            <CountUp end={50} duration={2} />+
                        </Typography>
                        <Typography variant="subtitle1" color="grey.500">
                            Budget Spent
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* Team Section */}
            <Box sx={{ mt: 5 }}>
                <TeamSection />
            </Box>
        </Box>
    );
};

export default AboutUs;
