import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import GlowingSection from "../components/GlowingSection/GlowingSection";
import { Brush, Code, Cloud, Analytics, MobileFriendly, Security } from "@mui/icons-material";

const Services: React.FC = () => {
    return (
        <Container>
            <div className="pt-20 pb-10 lg:pt-32 lg:pb-16">
                <div className="mb-10">
                    <div className="flex flex-wrap justify-between mb-3 md:mb-5 lg:mb-0">
                        <div className="px-2 relative">
                            <div className="inline-flex items-center space-x-2 w-auto mb-3 lg:absolute lg:top-3 lg:left-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                <div className="font-light text-sm lg:text-base text-[#FFD700] dark:text-grayDark-100">
                                    Services
                                </div>
                            </div>
                            <h1
                                className="
                            text-2xl md:text-5xl
                            font-sans-primary tracking-tight
                            text-white dark:text-grayDark-100
                            leading-none lg:leading-snug text-balance
                            lg:indent-32
                        "
                            >
                                Unlocking <br />
                                Digital Potential <br />
                                with Innovative <br />
                                Solutions
                            </h1>
                        </div>
                    </div>
                    <div className="w-full flex md:justify-end">
                        <div className="px-2">
                            <div className="w-full relative max-w-xl pr-10 lg:pr-0 lg:max-w-2xl lg:pl-32">
                                <h2 className="mb-3 text-lg md:text-2xl xl:text-2xl 4xl:text-4xl tracking-tight text-white dark:text-grayDark-100 leading-tight">
                                    We deliver cutting-edge digital services to help brands grow, engage, and thrive in a fast-paced world. 
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Box py={6} sx={{ color: "white" }}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: { xs: 20, md: 45 },
                                fontWeight: "bold",
                                mb: 4,
                                maxWidth: { md: 900 },
                            }}
                        >
                            Why choose us for your
                            <span style={{ color: "#1D4ED8" }}> digital transformation </span> journey?
                        </Typography>

                        <Grid container spacing={4} justifyContent="center" sx={{ mt: { xs: 0, md: 8 } }}>
                            {/* Item 1: Creative Design */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <Brush sx={{ fontSize: 32, color: "#1D4ED8" }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                        Creative <span style={{ color: "#1D4ED8" }}>Design</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#BABABA" }}>
                                        Our design team crafts visually stunning and functional interfaces that resonate with your audience and elevate your brand presence.   
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Item 2: Web Development */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <Code sx={{ fontSize: 32, color: "#1D4ED8" }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                        Scalable <span style={{ color: "#1D4ED8" }}>Web Development</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#BABABA" }}>
                                        Build robust and scalable websites tailored to your needs with the latest technology and frameworks.
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Item 3: Cloud Solutions */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <Cloud sx={{ fontSize: 32, color: "#1D4ED8" }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                        Cloud <span style={{ color: "#1D4ED8" }}>Solutions</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#BABABA" }}>
                                        Leverage the power of cloud computing for seamless scalability, enhanced security, and improved operational efficiency. 
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Item 4: Data Analytics */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <Analytics sx={{ fontSize: 32, color: "#1D4ED8" }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                        Advanced <span style={{ color: "#1D4ED8" }}>Analytics</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#BABABA" }}>
                                        Transform data into actionable insights to drive smarter decision-making and enhance business outcomes.
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Item 5: Mobile Development */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <MobileFriendly sx={{ fontSize: 32, color: "#1D4ED8" }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                        Mobile <span style={{ color: "#1D4ED8" }}>Development</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#BABABA" }}>
                                        Design and develop mobile applications that provide seamless user experiences across all devices.
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Item 6: Cybersecurity */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <Security sx={{ fontSize: 32, color: "#1D4ED8" }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                        Robust <span style={{ color: "#1D4ED8" }}>Cybersecurity</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#BABABA" }}>
                                        Protect your digital assets with our advanced security solutions, ensuring your business stays safe and resilient.
                                    </Typography>
                                </Box>
                            </Grid>
                            {/* Item 7: Custom Software Development */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <Code sx={{ fontSize: 32, color: "#1D4ED8" }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        Custom <span style={{ color: '#1D4ED8' }}>Software Development</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#BABABA' }}>
                                        Tailored software solutions to meet your specific business needs. From web applications to mobile platforms, we deliver scalable and robust systems.
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Item 8: Cybersecurity Solutions */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <Security sx={{ fontSize: 32, color: "#1D4ED8" }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        Cybersecurity <span style={{ color: '#1D4ED8' }}>Solutions</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#BABABA' }}>
                                        Protect your digital assets with our cutting-edge cybersecurity services, including threat analysis, data encryption, and risk assessment.
                                    </Typography>
                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
            </div>
            <Box sx={{ my: 2 }}>
                <GlowingSection />
            </Box>
        </Container>
    );
};

export default Services;
