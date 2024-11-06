"use client";

import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';

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
                color: 'white',
                py: 15,
            }}
        >
            <Container sx={{ textAlign: 'center', maxWidth: '800px' }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '2.5rem', lg: '3rem' },
                        mb: 2,
                        // textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    Book Your Meeting <br /> with AceCloud
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: '1rem', lg: '1.2rem' },
                        color: '#E0E7FF',
                        mb: 4,
                    }}
                >
                    Schedule a meeting with our expert team to discuss <br /> how we can help elevate your agency’s digital journey.
                </Typography>
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
