'use client';

import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import t1 from '@/public/team/T1.jpg';
import t2 from '@/public/team/T2.png';
import t3 from '@/public/team/T3.png';
import t4 from '@/public/team/T4.png';
import t5 from '@/public/team/T5.png';

// Team data without social links
const team = [
    {
        name: 'Razib Khan',
        position: 'DevOps & Automation Engineer',
        image: t1,
    },
    {
        name: 'Md. Tanvir Hasan Tonmoy',
        position: 'Full Stack Developer | MERN | Redux | Next.js',
        image: t2,
    },
    {
        name: 'Kazi Khalid Hasan Tamim',
        position: 'Software Quality Assurance Engineer',
        image: t3,
    },
    {
        name: 'Badrul Alam',
        position: 'DevSecops',
        image: t4,
    },
    {
        name: 'Naim Hossen',
        position: 'Front-End Developer',
        image: t5,
    },
];

export default function TeamSection() {
    return (
        <Box sx={{ pb: 15 }}>
            <Container>
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
                            Team
                        </Typography>
                        <Typography variant='h4' component='h1' sx={{ color: '#FFFFFF', fontWeight: 800, mb: 2 }}>
                            Meet Our Team
                        </Typography>
                        <Typography sx={{ color: 'hsl(220 10% 54.4%)', maxWidth: '600px', margin: '20px auto' }}>
                            We are passionate about our work and dedicated to your success. Meet the professionals
                            who are driving our company forward and are ready to take your business to the next level.
                        </Typography>
                    </Box>
                </motion.div>
                {/* Team Grid */}
                <Grid container spacing={5}>
                    {team.map((member, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.4 }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 0,
                                    boxShadow: '0px 20px 50px #1D4ED8',
                                    transition: {
                                        duration: 0.3,
                                        ease: 'easeInOut',
                                    },
                                }}
                                whileTap={{
                                    scale: 0.95,
                                    rotateY: -5,
                                    transition: {
                                        duration: 0.1,
                                    },
                                }}
                            >
                                <Card
                                    sx={{
                                        mx: "auto",
                                        maxWidth: 360,
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
                                        backgroundColor: '#222',
                                        color: '#fff',
                                        position: 'relative',
                                    }}
                                >
                                    {/* Team Member Image with Glow Effect */}
                                    <Box sx={{ position: 'relative' }}>
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            className="object-cover transition-opacity duration-300 ease-in-out w-96 lg:h-64 h-96"
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))',
                                            }}
                                        />
                                    </Box>

                                    {/* Team Member Info */}
                                    <CardContent
                                        sx={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            color: '#fff',
                                            backdropFilter: 'blur(9.8px)',
                                            py: { xs: 1, md: 2 },
                                            textAlign: 'center',
                                            height: 100,
                                            position: 'relative',
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 700, fontSize: '1rem', color: '#E0F7FA' }}
                                        >
                                            {member.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#1D4ED8',
                                                marginTop: '4px',
                                            }}
                                        >
                                            {member.position}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
