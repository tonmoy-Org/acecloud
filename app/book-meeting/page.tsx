"use client";

import React, { useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import banner from '@/public/banner/04.png';
import { motion } from 'framer-motion';

const BookMeeting: React.FC = () => {
    // Load the Calendly widget script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

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
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        zIndex: 1,
                    }}
                />
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
                                            Book Your Meeting
                                        </Typography>
                                    </motion.h1>
                                    <motion.p
                                        className="text-sm md:text-[17px] mb-8 tracking-wide leading-relaxed max-w-2xl mx-auto text-[#BABABA]"
                                        variants={textAnimation}
                                        custom={1}
                                    >
                                        Schedule a meeting with our expert team to discuss how we can help bring your digital ideas to life.
                                        We are here to provide personalized solutions tailored to your business needs.
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
                                            Let's schedule a meeting and get started on your next big project.
                                        </Typography>
                                    </motion.div>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>
                </Box>
            </Box>

            <Container>
                <Grid item xs={12} md={8}>
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                color: '#0DCCD7',
                                mb: 2,
                                textAlign: 'center',
                            }}
                        >
                            Need Assistance? We’re Here to Help!
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#BABABA',
                                mb: 2,
                                textAlign: 'center',
                            }}
                        >
                            Our dedicated team is ready to assist you with any inquiries or guidance you may need
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#BABABA',
                                textAlign: 'center',
                            }}
                        >
                            Your journey towards achieving your digital goals starts here. Schedule a meeting today!
                        </Typography>
                    </Box>
                    <div
                        className="calendly-inline-widget lg:mt-0 mt-5"
                        data-url="https://calendly.com/socials-acecloud/30min?background_color=1E1E1E&text_color=ffffff"
                        style={{ minWidth: '100%', height: '900px' }}
                    ></div>
                </Grid>
            </Container>
        </Box>
    );
};

export default BookMeeting;
