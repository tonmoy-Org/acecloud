'use client';

import React from 'react';
import { Box, Typography, Button, Stack, Container, Card, CardContent, CardActions } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Pricing() {
    return (
        <Box className="min-h-screen">
            <Container>
                <Box sx={{ pt: { xs: 8, md: 17 }, pb: { xs: 8, md: 10 }, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <Box sx={{ textAlign: 'center', pb: 3 }}>
                            <Typography
                                color='#FFD700'
                                gutterBottom
                                sx={{
                                    textTransform: 'uppercase',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    animation: 'shadow-pulse 1.5s infinite'
                                }}
                            >
                                Pricing
                            </Typography>
                            <Typography variant='h4' component='h1' sx={{ color: '#FFFFFF', fontWeight: 800, mb: 2 }}>
                                Simple and transparent pricing
                            </Typography>
                            <Typography sx={{ color: 'hsl(220 10% 54.4%)', maxWidth: '600px', margin: '20px auto' }}>
                                Choose a plan that works for you. No hidden fees. No surprises.
                            </Typography>
                        </Box>
                    </motion.div>
                    <Stack
                        direction="row"
                        spacing={3}
                        justifyContent="center"
                        flexWrap="wrap"
                    >
                        <Card
                            sx={{
                                width: 320,
                                borderRadius: 3,
                                bgcolor: 'hsl(220, 65%, 3.52%)',
                                border: 'none',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '0px !important',
                            }}
                        >
                            <CardContent sx={{ textAlign: 'start', height: '100%', padding: '0px !important', }}>
                                <Box sx={{ bgcolor: "hsl(0, 0%, 8%)", p: 3 }}>
                                    <Typography sx={{ color: '#A3A3A3', mb: 1.5, fontSize: 17 }}>
                                        <span className='text-xl'>
                                            Starter
                                        </span> <br />
                                        Perfect for new businesses
                                    </Typography>
                                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
                                        $299/month
                                    </Typography>
                                </Box>
                                <Box component="ul" sx={{ listStyle: 'none', color: '#A3A3A3', flexGrow: 1, m: 0, p: 3 }}>

                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Custom Website Design
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Responsive Layouts
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Basic SEO Setup
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Up to 5 Pages
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Standard Support
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Hosting Assistance
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions sx={{ p: 1.5 }}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    component={Link}
                                    href="/"
                                    sx={{
                                        backgroundColor: '#1D4ED8',
                                        textTransform: 'none !important',
                                        '&:hover': { backgroundColor: '#2563eb' },
                                    }}
                                >
                                    Get Started
                                </Button>
                            </CardActions>
                        </Card>
                        <Card
                            sx={{
                                width: 320,
                                borderRadius: 3,
                                bgcolor: 'hsl(220, 65%, 3.52%)',
                                border: '2px solid #1D4ED8',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '0px !important',
                            }}
                        >
                            <CardContent sx={{ textAlign: 'start', height: '100%', padding: '0px !important', }}>
                                <Box sx={{ bgcolor: "hsl(0, 0%, 8%)", p: 3 }}>
                                    <Typography sx={{ color: '#A3A3A3', mb: 1.5, fontSize: 17 }}>
                                        <span className='text-xl text-white'>
                                            Pro
                                        </span> <br />
                                        Ideal for growing brands
                                    </Typography>
                                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
                                        $799/month
                                    </Typography>
                                </Box>
                                <Box component="ul" sx={{ listStyle: 'none', color: '#A3A3A3', flexGrow: 1, m: 0, p: 3 }}>

                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Advanced Website Design
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Performance Optimization
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        SEO Optimization
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Up to 15 Pages
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Standard DDoS protection
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Up to 15 Pro Emails
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Priority Support
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Hosting Setup & Maintenance
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions sx={{ p: 1.5 }}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    component={Link}
                                    href="/"
                                    sx={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        textTransform: 'none !important',
                                        '&:hover': { backgroundColor: '#2563eb' },
                                    }}
                                >
                                    Get Started
                                </Button>
                            </CardActions>
                        </Card>
                        <Card
                            sx={{
                                width: 320,
                                borderRadius: 3,
                                bgcolor: 'hsl(220, 65%, 3.52%)',
                                border: 'none',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '0px !important',
                            }}
                        >

                            <CardContent sx={{ textAlign: 'start', height: '100%', padding: '0px !important', }}>
                                <Box sx={{ bgcolor: "hsl(0, 0%, 8%)", p: 3 }}>
                                    <Typography sx={{ color: '#A3A3A3', mb: 1.5, fontSize: 17 }}>
                                        <span className='text-xl'>
                                            Enterprise
                                        </span> <br />
                                        For large organizations with custom needs
                                    </Typography>
                                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
                                        $1999/month
                                    </Typography>
                                </Box>
                                <Box component="ul" sx={{ listStyle: 'none', color: '#A3A3A3', flexGrow: 1, m: 0, p: 3 }}>

                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Custom Website Development
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Bespoke Design & Branding
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Custom Integrations
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Enhanced DDoS protection
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Unlimited Pages
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Dedicated Project Manager
                                    </Typography>
                                    <Typography component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                        <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                        Ongoing Maintenance & Support
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions sx={{ p: 1.5 }}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    component={Link}
                                    href="/contact-us"
                                    sx={{
                                        backgroundColor: '#1D4ED8',
                                        textTransform: 'none !important',
                                        '&:hover': { backgroundColor: '#2563eb' },
                                    }}
                                >
                                    Contact Us
                                </Button>
                            </CardActions>
                        </Card>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
