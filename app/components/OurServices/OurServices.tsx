"use client";

import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Container } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import CodeIcon from '@mui/icons-material/Code';
import WebhookIcon from '@mui/icons-material/Webhook';
import SecurityIcon from '@mui/icons-material/Security';
import ApiIcon from '@mui/icons-material/Api';
import { motion } from 'framer-motion';

export default function OurServices() {
    const services = [
        {
            title: 'Web Design',
            description: 'We craft visually engaging and responsive websites that align with your brand’s identity, ensuring a seamless user experience on all devices.',
            icon: <WebIcon style={{ fontSize: 50 }} sx={{ color: '#0DCCD7' }} />,
        },
        {
            title: 'Branding Design',
            description: 'We create powerful branding strategies and designs that resonate with your audience and differentiate your business in a competitive market.',
            icon: <BrandingWatermarkIcon style={{ fontSize: 50 }} sx={{ color: '#0DCCD7' }} />,
        },
        {
            title: 'Web Development',
            description: 'Our web development team builds robust, scalable websites and applications using the latest technologies to power your business.',
            icon: <CodeIcon style={{ fontSize: 50 }} sx={{ color: '#0DCCD7' }} />,
        },
        {
            title: 'DevOps',
            description: 'We streamline development and operational workflows to ensure faster, more efficient software delivery and scalability with a focus on automation.',
            icon: <WebhookIcon style={{ fontSize: 50 }} sx={{ color: '#0DCCD7' }} />,
        },
        {
            title: 'Security',
            description: 'Ensure the safety of your digital assets with top-notch security protocols, risk assessment, and vulnerability testing.',
            icon: <SecurityIcon style={{ fontSize: 50 }} sx={{ color: '#0DCCD7' }} />,
        },
        {
            title: 'SQA',
            description: 'Our software quality assurance team ensures that your applications are reliable, scalable, and free of defects before they reach your users.',
            icon: <ApiIcon style={{ fontSize: 50 }} sx={{ color: '#0DCCD7' }} />,
        },
    ];

    const staggerContainer = {
        hidden: { opacity: 0, y: 100 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.3, // Delay each card's animation
                duration: 0.5,
            },
        },
    };

    const staggerItem = {
        hidden: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <Box id="service">
            <Box sx={{ mb: 10 }}>
                <Container>
                    <Box sx={{ display: { xs: 'block', lg: 'flex' }, justifyContent: 'space-around', alignItems: 'center', gap: 6, py: 10 }}>
                        <Box sx={{ pb: { xs: 2 } }}>
                            <Typography color='#0DCCD7' gutterBottom sx={{ textTransform: 'uppercase', fontSize: '14px' }}>
                                Our Services
                            </Typography>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                <Typography
                                    variant='h4'
                                    component='h1'
                                    sx={{ color: 'white', fontWeight: 900 }}>
                                    What we do for your business?
                                </Typography>
                            </motion.div>
                        </Box>
                        <Box>
                            <Typography sx={{ color: '#BABABA', }}>
                                We provide comprehensive solutions that ensure your business thrives in the digital landscape. From design to development, we cater to all your digital needs with precision and creativity.
                            </Typography>
                        </Box>
                    </Box>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Grid container spacing={3}>
                            {services.map((service, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <motion.div variants={staggerItem}>
                                        <Card
                                            sx={{
                                                bgcolor: '#14151B',
                                                color: 'white',
                                                width: '100%',
                                                height: { xs: 240, md: 285 },
                                                mx: 'auto',
                                                p: { xs: 0, md: 2 },
                                                position: 'relative',
                                                overflow: 'hidden',
                                                transition: 'transform 0.3s ease-in-out, border-color 0.3s ease-in-out',
                                                '&:hover': {
                                                    transform: 'scale(1.03)', // Scale the card on hover
                                                    borderColor: '#0DCCD7',
                                                    boxShadow: 20, // Add shadow on hover
                                                },
                                                border: service.title === 'Branding Design' ? '2px solid #0DCCD7' : '1px solid transparent',
                                                boxShadow: 10,
                                            }}
                                        >
                                            <CardContent
                                                className="content"
                                                sx={{
                                                    textAlign: 'center',
                                                    position: 'relative',
                                                    transition: 'transform 0.3s ease',
                                                    transform: 'translateY(0)',
                                                }}
                                            >
                                                <Box sx={{ mb: 4 }}>
                                                    {service.icon}
                                                </Box>
                                                <Typography variant="h5" component="div" gutterBottom sx={{ mt: 2 }}>
                                                    {service.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: '#BABABA', mb: 2 }}>
                                                    {service.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Container>
            </Box>
        </Box>
    );
}
