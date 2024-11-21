"use client";

import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BookMeeting: React.FC = () => {
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
                color: 'white',
                py: 15,
            }}
        >
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                >

                    <Box textAlign="center" sx={{ my: 2 }}>
                        <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
                            <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#6d28d9_0%,#d8b4fe_50%,#6d28d9_100%)]"></span>
                            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                <Link href='/contact-us' className="text-white">Start Building Now</Link>
                            </span>
                        </div>
                    </Box>

                    {/* Title and Subtitle */}
                    <Box sx={{ px: 2, mx: 'auto', mb: { xs: 4, md: 6 }, maxWidth: { xs: 330, sm: 500, md: 700 } }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '1.5rem', md: '2.5rem' },
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: 'white',
                                lineHeight: { xs: '1.5', md: '1.8' },
                            }}
                        >
                            Book Your Meeting with AceCloud
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontSize: { xs: '0.9rem', md: '1.125rem' },
                                textAlign: 'center',
                                color: '#BABABA',
                                mt: 2,
                            }}
                        >
                            Schedule a meeting with our expert team to discuss how we can help elevate your agency’s digital journey.
                        </Typography>
                    </Box>
                </motion.div>
            </Container>
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/socials-acecloud/30min?background_color=1E1E1E&text_color=ffffff"
                    sx={{
                        width: '100%',
                        height: '750px',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
                        overflow: 'hidden',
                    }}
                ></Box>
            </Container>
        </Box>
    );
};

export default BookMeeting;
