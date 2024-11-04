'use client';

import React from 'react';
import { Box, Typography, Button, Stack, Container, Card, CardContent, CardActions } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { motion } from 'framer-motion';

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
                        {/* Card Base Styles */}
                        {[
                            {
                                title: "Starter",
                                price: "$299/month",
                                description: "Perfect for new businesses",
                                features: [
                                    "Custom Website Design",
                                    "Responsive Layouts",
                                    "Basic SEO Setup",
                                    "Up to 5 Pages",
                                    "Standard Support",
                                    "Hosting Assistance"
                                ],
                                buttonText: "Get Started"
                            },
                            {
                                title: "Pro",
                                price: "$799/month",
                                description: "Ideal for growing brands",
                                features: [
                                    "Advanced Website Design",
                                    "Performance Optimization",
                                    "SEO Optimization",
                                    "Up to 15 Pages",
                                    "Standard DDoS protection",
                                    "Up to 15 Pro Emails",
                                    "Priority Support",
                                    "Hosting Setup & Maintenance"
                                ],
                                buttonText: "Get Started",
                                highlighted: true
                            },
                            {
                                title: "Enterprise",
                                price: "$1999/month",
                                description: "For large organizations with custom needs",
                                features: [
                                    "Custom Website Development",
                                    "Bespoke Design & Branding",
                                    "Custom Integrations",
                                    "Enhanced DDoS protection",
                                    "Unlimited Pages",
                                    "Dedicated Project Manager",
                                    "Ongoing Maintenance & Support"
                                ],
                                buttonText: "Contact Us"
                            }
                        ].map((plan, index) => (
                            <Card
                                key={index}
                                sx={{
                                    width: 320,
                                    borderRadius: 3,
                                    bgcolor: 'hsl(220, 65%, 3.52%)',
                                    border: plan.highlighted ? '2px solid #1D4ED8' : 'none',
                                    boxShadow: plan.highlighted ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '0px !important',
                                }}
                            >
                                <CardContent sx={{ textAlign: 'start', height: '100%', padding: '0px !important', }}>
                                    <Box sx={{ bgcolor: "hsl(0, 0%, 8%)", p: 3 }}>
                                        <Typography sx={{ color: '#A3A3A3', mb: 1, fontSize: 17 }}>
                                            {plan.title} <br />
                                            {plan.description}
                                        </Typography>
                                        <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
                                            {plan.price}
                                        </Typography>
                                    </Box>
                                    <Box component="ul" sx={{ listStyle: 'none', color: '#A3A3A3', flexGrow: 1, m: 0, p: 3 }}>
                                        {plan.features.map((feature, idx) => (
                                            <Typography component="li" key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                <TaskAltIcon sx={{ color: '#1D4ED8', mr: 1 }} />
                                                {feature}
                                            </Typography>
                                        ))}
                                    </Box>
                                </CardContent>
                                <CardActions sx={{ p: 1.5 }}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            backgroundColor: '#1D4ED8',
                                            textTransform: 'none !important',
                                            '&:hover': { backgroundColor: '#2563eb' },
                                        }}
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
