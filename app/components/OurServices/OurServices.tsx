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
            description: 'Craft visually engaging and responsive websites, ensuring a seamless user experience on all devices.',
            icon: <WebIcon sx={{ fontSize: 40, color: '#fff' }} />,
        },
        {
            title: 'Branding Design',
            description: 'Develop powerful branding strategies that resonate with your audience and stand out in the market.',
            icon: <BrandingWatermarkIcon sx={{ fontSize: 40, color: '#fff' }} />,
        },
        {
            title: 'Web Development',
            description: 'Build robust, scalable websites and applications using the latest technologies to drive your business.',
            icon: <CodeIcon sx={{ fontSize: 40, color: '#fff' }} />,
        },
        {
            title: 'DevOps',
            description: 'Streamline development and operational workflows for efficient software delivery with a focus on automation.',
            icon: <WebhookIcon sx={{ fontSize: 40, color: '#fff' }} />,
        },
        {
            title: 'Security',
            description: 'Protect digital assets with advanced security protocols, risk assessments, and vulnerability testing.',
            icon: <SecurityIcon sx={{ fontSize: 40, color: '#fff' }} />,
        },
        {
            title: 'SQA',
            description: 'Ensure applications are reliable, scalable, and defect-free with expert quality assurance.',
            icon: <ApiIcon sx={{ fontSize: 40, color: '#fff' }} />,
        },
    ];

    const staggerContainer = {
        hidden: { opacity: 0, y: 100 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.3,
                duration: 0.5,
            },
        },
    };

    const staggerItem = {
        hidden: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <Box
            id="service"
            sx={{
                py: 10,
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, hsl(220, 65%, 3.52%), rgba(0, 55, 255, 0.1), hsl(220, 65%, 3.52%))',
            }}
        >
            <Container>
                <Box sx={{ display: { xs: 'block', lg: 'flex' }, justifyContent: 'space-between', alignItems: 'center', pb: 8, zIndex: 1, position: 'relative' }}>
                    <Box>
                        <Typography color='#FFD700' gutterBottom sx={{ textTransform: 'uppercase', fontSize: '14px', fontWeight: 'bold' }}>
                            Our Services
                        </Typography>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <Typography
                                className="text-3xl md:text-[2.5rem] font-bold text-white leading-normal"
                            >
                                Driving Innovation for Your Business.
                            </Typography>
                        </motion.div>
                    </Box>
                    <Box>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: 500, fontSize: { xs: '.875rem', md: '1.125rem' } }}>
                            Empowering brands through tailor-made solutions from design to development. Let us elevate your digital journey with precision and creativity.
                        </Typography>
                    </Box>
                </Box>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <motion.div variants={staggerItem}>
                                    <Card
                                        sx={{
                                            backgroundColor: '#1a1a1a',
                                            color: 'white',
                                            borderRadius: 1,
                                            p: 3,
                                            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)',
                                            border: '1px solid #333',
                                            '&:hover': {
                                                borderColor: '#FFD700',
                                                transform: 'scale(1.05)',
                                                boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.25)',
                                                filter: 'brightness(1.1)',
                                            },
                                            transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease',
                                            position: 'relative',
                                            width: { xs: '98%', md: '100%' },
                                            mx: 'auto',
                                        }}
                                    >
                                        <CardContent sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <Box
                                                sx={{
                                                    width: 70,
                                                    height: 70,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #00CFFD, #007BFF)', // Blue gradient
                                                    mb: 3,
                                                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                                                }}
                                            >
                                                {service.icon}
                                            </Box>
                                            <Typography sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                                                {service.title}
                                            </Typography>
                                            <Typography  sx={{ color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', fontSize: '.875rem' }}>
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
    );
}
