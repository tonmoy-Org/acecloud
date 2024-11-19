'use client';

import React from 'react';
import { Box, Typography, Button, Stack, Container, Card, CardContent, CardActions } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ApproachSection from '../SectionTitle/SectionTitle';


const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeInOut',
        },
    },
};

export default function Pricing() {
    return (
        <Box className="min-h-screen">
            <Container>
                <Box sx={{ pt: { xs: 8, md: 17 }, pb: { xs: 8, md: 10 }, textAlign: 'center' }}>
                    <ApproachSection
                        header="Pricing"
                        title="Simple and transparent pricing."
                        description="Choose a plan that works for you. No hidden fees. No surprises."
                    />
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Stack
                            component={motion.div}
                            direction="row"
                            justifyContent="center"
                            flexWrap="wrap"
                            sx={{ gap: 3 }}
                        >
                            <Card
                                component={motion.div}
                                variants={cardVariants}
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
                                                Besic
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
                                        href='https://buy.stripe.com/bIY7tw1Sj0dx7zabIK'
                                        passHref
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
                                component={motion.div}
                                variants={cardVariants}
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
                                                Standard
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
                                        href='https://buy.stripe.com/9AQeVYfJ9e4naLm003'
                                        passHref
                                        sx={{
                                            backgroundColor: 'white',
                                            color: 'black',
                                            textTransform: 'none !important',
                                        }}
                                    >
                                        Get Started
                                    </Button>
                                </CardActions>
                            </Card>
                            <Card
                                component={motion.div}
                                variants={cardVariants}
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
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}
