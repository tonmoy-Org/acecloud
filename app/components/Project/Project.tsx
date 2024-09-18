"use client";

import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import p1 from '@/public/projects/p1.jpeg';
import p2 from '@/public/projects/p2.jpeg';
import p3 from '@/public/projects/p3.jpeg';
import p4 from '@/public/projects/p4.jpeg';
import p5 from '@/public/projects/p5.jpeg';
import p6 from '@/public/projects/p6.jpeg';

export default function Projects() {
    const projects = [
        {
            title: "Advanced Online Marketplace",
            description: "A robust and scalable online marketplace offering advanced features like multi-vendor support, real-time product tracking, and secure payment integration.",
            image: p1,
        },
        {
            title: "Serene Spaces - Home Decor",
            description: "An inspirational platform for modern home decor trends. Serene Spaces features an interactive gallery, virtual room designer, and a store for purchasing curated furniture and decor.",
            image: p2,
        },
        {
            title: "Task Management App",
            description: "A task management app with features like adding, updating, and deleting tasks, and a calendar view.",
            image: p3,
        },
        {
            title: "Weather Forecast App",
            description: "A weather forecasting application that provides real-time weather updates and forecasts.",
            image: p4,
        },
        {
            title: "Online Learning Platform",
            description: "An e-learning platform offering video courses, quizzes, and certificate generation.",
            image: p5,
        },
        {
            title: "Fitness Tracker",
            description: "A fitness app that tracks workout progress, sets goals, and monitors health metrics.",
            image: p6,
        }
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
        <Box id="project">
            <Box sx={{ pt: 15, mb: 8 }} >
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <Box sx={{ textAlign: 'center', pb: 3 }}>
                            <Typography color='#0DCCD7' gutterBottom sx={{ textTransform: 'uppercase', fontSize: '14px' }}>
                                Projects
                            </Typography>

                            <Typography variant="h4" component="h2" sx={{ color: '#E0E0E0', fontWeight: 900 }}>
                                Recent Work
                            </Typography>
                            <Typography sx={{ color: '#BABABA', maxWidth: '600px', margin: '20px auto' }}>
                                Explore some of the projects I have worked on, demonstrating my expertise in web development, API integration, and more.
                            </Typography>
                        </Box>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <Grid container spacing={3}>
                            {projects.map((project, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <motion.div variants={staggerItem}>
                                        <Card
                                            sx={{
                                                bgcolor: '#1E1E1E',
                                                color: 'white',
                                                padding: 2,
                                                position: 'relative',
                                                overflow: 'visible',
                                                height: { xs: '100%', md: 390 },
                                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-10px)',
                                                    boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.3)',
                                                },
                                            }}
                                        >
                                            <motion.div
                                                initial={{ scale: 1 }}
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <Box sx={{ width: '100%', height: 180, mb: 2, position: 'relative' }}>
                                                    <Image
                                                        alt={project.title}
                                                        src={project.image}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        style={{ borderRadius: '8px' }}
                                                    />
                                                </Box>
                                            </motion.div>
                                            <CardContent>
                                                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                                    {project.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: '#BABABA', mt: 1 }}>
                                                    {project.description}
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
