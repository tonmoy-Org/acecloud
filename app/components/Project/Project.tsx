"use client";

import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import p1 from '@/public/projects/p1.jpeg';
import p2 from '@/public/projects/p2.jpeg';
import p3 from '@/public/projects/p3.jpeg';
import p4 from '@/public/projects/p4.jpeg';
import Link from 'next/link';

export default function Projects() {
    const projects = [
        {
            title: "Advanced Online Marketplace",
            description: "A scalable marketplace featuring multi-vendor support, real-time tracking, and secure payments, built for robust e-commerce functionality.",
            image: p1,
            date: "20 July 2021",
            buttonText: "Learn More",
            link: "#"
        },
        {
            title: "Serene Spaces - Home Decor",
            description: "A modern decor platform with an interactive gallery, virtual room designer, and curated furniture store for an inspiring shopping experience.",
            image: p2,
            date: "15 June 2022",
            buttonText: "Learn More",
            link: "#"
        },
        {
            title: "Task Management App",
            description: "Efficient task management with add, update, delete features, and calendar view, designed for productivity.",
            image: p3,
            date: "10 September 2022",
            buttonText: "Learn More",
            link: "#"
        },
        {
            title: "Weather Forecast App",
            description: "Provides real-time weather updates and forecasts, designed for accurate daily insights.",
            image: p4,
            date: "5 January 2023",
            buttonText: "Learn More",
            link: "#"
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
        <Container id="project" sx={{ pt: 10, pb: 8 }}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <Box sx={{ textAlign: 'center', pb: 3 }}>
                    <Typography color='#FFD700' gutterBottom sx={{ textTransform: 'uppercase', fontSize: '14px', fontWeight: 'bold' }}>
                        Projects
                    </Typography>
                    <Typography variant='h4' component='h1' sx={{ color: '#FFFFFF', fontWeight: 800, mb: 2 }}>
                        Recent Work.
                    </Typography>
                    <Typography sx={{ color: 'hsl(220 10% 54.4%)', maxWidth: '600px', margin: '20px auto' }}>
                        Explore some of the projects I have worked on, demonstrating my expertise in web development, API integration, and more.
                    </Typography>
                </Box>
            </motion.div>
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <Box
                    className="bg-blue-950"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.1,
                        zIndex: 0,
                        backgroundSize: '50px 50px',
                        backgroundImage: `
                        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(180deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `
                    }}
                />

                <Box sx={{ zIndex: 1 }}>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Grid container spacing={3} justifyContent="center">
                            {projects.map((project, index) => (
                                <Grid item xs={12} sm={6} md={6} key={index}>
                                    <motion.div variants={staggerItem}>
                                        <Card
                                            sx={{
                                                backgroundColor: 'hsl(220, 10%, 10%)', // Dark background
                                                color: '#FFFFFF',
                                                borderRadius: 2,
                                                boxShadow: 3,
                                                overflow: 'visible',
                                                height: { xs: '100%', md: 580 }
                                            }}
                                        >
                                            <Box sx={{ position: 'relative', height: 280, mb: 2, p: 2 }}>
                                                <Image alt={project.title} src={project.image} layout="fill" objectFit="cover" />
                                            </Box>
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '1.2rem', md: '2rem' } }}>
                                                    {project.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'hsl(220, 10%, 60%)', mb: 3 }}>
                                                    {project.description}
                                                </Typography>
                                                <Button
                                                    sx={{ textTransform: 'none !important' }}
                                                    variant="outlined"
                                                    component={Link}
                                                    href={project.link}
                                                    className="relative inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium text-slate-200 border-[1.7px] border-[#1D4ED8] rounded-lg animated-border"
                                                >
                                                    <span className="absolute inset-0 transition-all duration-200 transform -translate-x-full rounded-lg group-hover:translate-x-0"></span>
                                                    <span className="relative z-10">{project.buttonText}</span>
                                                </Button>
                                            </CardContent>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3, color: 'hsl(220, 10%, 60%)', p: 2 }}>
                                                <Typography variant="body2">{project.date}</Typography>
                                                <Button href="#" sx={{ color: '#1D4ED8', textTransform: 'none' }}>Visit Website</Button>
                                            </Box>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Box>
            </Box>
        </Container>
    );
}
