"use client";

import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Container, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce web application allowing users to browse products, add to cart, and make purchases.",
            image: "/path/to/ecommerce.jpg", // Replace with actual image URL or import
        },
        {
            title: "Personal Blog",
            description: "A personal blog platform where users can post articles, comment, and like content.",
            image: "/path/to/blog.jpg",
        },
        {
            title: "Task Management App",
            description: "A task management app with features like adding, updating, and deleting tasks, and a calendar view.",
            image: "/path/to/task-app.jpg",
        },
        {
            title: "Weather Forecast App",
            description: "A weather forecasting application that provides real-time weather updates and forecasts.",
            image: "/path/to/weather-app.jpg",
        }
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
        <Box sx={{ mt: 15, mb: 8 }} id="project">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Box sx={{ textAlign: 'center', pb: 10 }}>
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
                                            height: { xs: '100%', md: 350 },
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-10px)',
                                                boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.3)',
                                            }
                                        }}
                                    >
                                        <motion.div
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <Avatar
                                                alt={project.title}
                                                src={project.image}
                                                variant="square"
                                                sx={{
                                                    width: '100%',
                                                    height: 180,
                                                    mb: 2,
                                                    borderRadius: '8px',
                                                    objectFit: 'cover',
                                                }}
                                            />
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
    );
}
