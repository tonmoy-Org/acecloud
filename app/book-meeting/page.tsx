"use client";

import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import CustomHero from '../components/CustomHero/CustomHero';

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
            <Container>
                <CustomHero
                    title=" Book Your Meeting with AceCloud"
                    subtitle=" Schedule a meeting with our expert team to discuss how we can help elevate your agency’s digital journey."
                    linkHref="/contact-us"
                    linkText="Start Building Now"
                    imageSrc=""
                    imageAlt=""
                />
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
