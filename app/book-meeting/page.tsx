"use client";

import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import banner from '@/public/banner/03.png';
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

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                flexDirection: 'column',
                background: `url(${banner.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '40px 20px',
                color: '#fff',
            }}
        >

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

            <Container>
                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            textAlign: 'center',
                            mt: 6
                        }}
                    >

                        <Box>
                            <Box sx={{ display: { xs: 'block', lg: 'flex' }, justifyContent: 'space-around', alignItems: 'center', gap: 6, }}>
                                <Box sx={{ pb: { xs: 2 } }}>

                                    <Typography
                                        variant="h4"
                                        component="h2"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#fff',
                                        }}
                                    >
                                        Schedule a Meeting with <span className='outlined-title'>ProspectWith</span>
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ color: '#BABABA', }}>
                                        Book a personalized session to discover how we can help you take your digital experiences to the next level.
                                        Meet with our team and start your journey towards success!
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                        <Box
                            sx={{
                                position: 'relative',
                                zIndex: 2,
                            }}
                        >
                            <div
                                className="calendly-inline-widget"
                                data-url="https://calendly.com/info-tonmoyorg/acecloud?background_color=1a1a1a&text_color=ffffff"
                                style={{ minWidth: '100%', height: '700px' }}
                            ></div>
                        </Box>
                    </Box>
                </motion.div>
            </Container >
        </Box >
    );
};

export default BookMeeting;
