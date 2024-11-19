'use client';

import { Container, Card, CardContent, Typography, Box, Button, Grid } from '@mui/material';
import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import ApproachSection from '../SectionTitle/SectionTitle';
import p1 from '@/public/projects/p1.jpg';
import p2 from '@/public/projects/p2.jpg';
import p3 from '@/public/projects/p3.jpg';
import p4 from '@/public/projects/p4.jpg';
import Image from 'next/image';
import Link from 'next/link';

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

const cardData = [
    {
        title: "Stroykal - Online Toolkit marketplace",
        description: "A scalable marketplace featuring multi-vendor support, real-time tracking, and secure payments, built for robust e-commerce functionality.",
        image: p1,
        date: "20 July 2021",
        buttonText: "Learn More",
        link: "#"
    },
    {
        title: "Skintonia - Beauty and Wellness",
        description: "A modern decor platform with an interactive gallery, virtual room designer, and curated furniture store for an inspiring shopping experience.",
        image: p2,
        date: "15 June 2022",
        buttonText: "Learn More",
        link: "#"
    },
    {
        title: "Nutrimerchant - Baby and Kid Food",
        description: "Efficient task management with add, update, delete features, and calendar view, designed for productivity.",
        image: p3,
        date: "10 September 2022",
        buttonText: "Learn More",
        link: "#"
    },
    {
        title: "Panda Commerce - Online Shopping",
        description: "Provides real-time weather updates and forecasts, designed for accurate daily insights.",
        image: p4,
        date: "5 January 2023",
        buttonText: "Learn More",
        link: "#"
    },
];

const staggerItem = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const BlogSection: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [glowPosition, setGlowPosition] = useState<{ x: string; y: string }>({ x: '50%', y: '50%' });

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            const { clientX, clientY, currentTarget } = e;
            const { left, top } = currentTarget.getBoundingClientRect();
            setGlowPosition({ x: `${clientX - left}px`, y: `${clientY - top}px` });
        },
        []
    );

    const handleMouseEnter = (index: number) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <Container sx={{ py: 8 }} id='project'>
            <ApproachSection
                header="Projects"
                title="Recent Work."
                description="Explore some of the projects I have worked on, demonstrating my expertise in web development, API integration, and more."
            />
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}
            >
                <Grid container spacing={3} justifyContent="center">
                    {cardData.map((card, index) => {
                        const isHovered = hoveredCard === index;
                        const glowStyle = useMemo(
                            () => ({
                                background: `radial-gradient(500px at ${glowPosition.x} ${glowPosition.y}, ${isHovered ? 'rgba(168, 85, 247, 0.2)' : 'rgba(168, 85, 247, 0)'}, transparent 60%)`,
                                transition: 'background 0.3s ease-out',
                            }),
                            [glowPosition, isHovered]
                        );

                        return (
                            <Grid item xs={12} sm={6} md={5} key={index}>
                                <motion.div
                                    variants={staggerItem}
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <Card
                                        sx={{
                                            width: '100%',
                                            position: 'relative',
                                            color: 'white',
                                            ...glowStyle,
                                            backgroundColor: 'hsl(0, 0%, 3.9%)',
                                            border: '1px solid rgba(225, 225, 225, 0.1)',
                                            height: { xs: '100%', md: 520 }
                                        }}
                                    >
                                        <Box sx={{ position: 'relative', height: 280 }}>
                                            <Image alt={card.title} src={card.image} />
                                        </Box>
                                        <CardContent>
                                            <Typography sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.2rem', md: '1.8rem' } }}>
                                                {card.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'hsl(220, 10%, 60%)', mb: 3 }}>
                                                <span className='line-clamp-2'>{card.description}</span>
                                            </Typography>
                                            <Button
                                                sx={{ textTransform: 'none !important' }}
                                                variant="outlined"
                                                component={Link}
                                                href={card.link}
                                                className="relative inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium text-slate-200 border-[1.7px] border-[#1D4ED8] rounded-lg animated-border"
                                            >
                                                <span className="absolute inset-0 transition-all duration-200 transform -translate-x-full rounded-lg group-hover:translate-x-0"></span>
                                                <span className="relative z-10">{card.buttonText}</span>
                                            </Button>
                                        </CardContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'hsl(220, 10%, 60%)', p: 2 }}>
                                            <Typography variant="body2">{card.date}</Typography>
                                            <Button href="#" sx={{ color: '#1D4ED8', textTransform: 'none' }}>Visit Website</Button>
                                        </Box>
                                    </Card>
                                </motion.div>
                            </Grid>
                        );
                    })}
                </Grid>
            </motion.div>
        </Container>
    );
};

export default BlogSection;
