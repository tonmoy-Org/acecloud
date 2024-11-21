'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Box, Typography, Card, CardContent, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import t1 from '@/public/team/T1.jpg';
import t2 from '@/public/team/T2.png';
import t3 from '@/public/team/T3.png';
import t4 from '@/public/team/T4.png';
import t5 from '@/public/team/T5.png';
import ApproachSection from '../SectionTitle/SectionTitle';

// Team data
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
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [glowPosition, setGlowPosition] = useState<{ x: string; y: string }>({ x: '50%', y: '50%' });

    const handleMouseMove = useCallback((e: React.MouseEvent, index: number) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        setGlowPosition({ x: `${clientX - left}px`, y: `${clientY - top}px` });
        setHoveredCard(index);
    }, []);

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <Box sx={{ pb: { xs: 6, md: 10 } }}>
            <>
                <ApproachSection
                    header="Team"
                    title="Meet Our Team"
                    description="We are passionate about our work and dedicated to your success. Meet the professionals who are driving our company forward and are ready to take your business to the next level."
                />
                {/* Team Grid */}
                <Grid container spacing={3}>
                    {team.map((member, index) => {
                        const isHovered = hoveredCard === index;
                        const glowStyle = useMemo(
                            () => ({
                                background: `radial-gradient(300px at ${glowPosition.x} ${glowPosition.y}, ${isHovered ? 'rgba(168, 85, 247, 0.2)' : 'rgba(168, 85, 247, 0)'
                                    }, transparent 60%)`,
                                transition: 'background 0.3s ease-out',
                            }),
                            [glowPosition, isHovered]
                        );

                        return (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Card
                                        sx={{
                                            mx: 'auto',
                                            maxWidth: 380,
                                            overflow: 'hidden',
                                            position: 'relative',
                                            backgroundColor: '#222',
                                            color: '#1B1B1B',
                                            height: 'auto',
                                            padding: 1,
                                            ...glowStyle,
                                        }}
                                        style={{
                                            border: '1px solid rgba(225, 225, 225, 0.1)',
                                        }}
                                    >
                                        {/* Team Member Image */}
                                        <Box sx={{ position: 'relative' }}>
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                className="object-cover transition-opacity duration-300 ease-in-out w-96 lg:h-64 h-96"
                                            />
                                        </Box>

                                        {/* Team Member Info */}
                                        <CardContent
                                            sx={{
                                                color: '#fff',
                                                py: { xs: 1, md: 2 },
                                                textAlign: 'center',
                                                height: 100,
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: '1rem',
                                                    color: '#E0F7FA',
                                                }}
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
                        );
                    })}
                </Grid>
            </>
        </Box>
    );
}
