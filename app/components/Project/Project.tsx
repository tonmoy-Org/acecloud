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
        title: "Nova Ukraine is a nonprofit organization",
        description: "We are a nonprofit organization that provides support and resources to Ukrainian refugees and immigrants. Our mission is to help these individuals integrate into their new communities and contribute to society.",
        image: p1,
        link: "#"
    },
    {
        title: "Skintonia - Beauty and Wellness",
        description: "A modern decor platform with an interactive gallery, virtual room designer, and curated furniture store for an inspiring shopping experience.",
        image: p2,
        link: "#"
    },
    {
        title: "Nutrimerchant - Baby and Kid Food",
        description: "Efficient task management with add, update, delete features, and calendar view, designed for productivity.",
        image: p3,
        link: "https://nutrimerchantint.com/"
    },
    {
        title: "MilanoStore strives to provide a unique shopping experience",
        description: "Our goal is to combine style, authenticity, and affordability, ensuring that everyone can enjoy the luxury of exclusive footwear without compromise",
        image: p4,
        link: "https://milanostore.be/"
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
                                            height: { xs: '100%', md: 'auto' },
                                        }}
                                    >
                                        <Box sx={{ position: 'relative' }}>
                                            <Image alt={card.title} src={card.image} />
                                        </Box>
                                        <CardContent>
                                            <Typography sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.2rem', md: '1.8rem' } }}>
                                                {card.title}
                                            </Typography>
                                            <Typography sx={{ color: 'hsl(220, 10%, 60%)', mb: 3, fontSize: '.875rem' }}>
                                                <span className='line-clamp-2'>{card.description}</span>
                                            </Typography>
                                        </CardContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'hsl(220, 10%, 60%)', p: 2 }}>
                                            <Button href={card.link} sx={{ color: '#1D4ED8', textTransform: 'none' }}>Visit Website</Button>
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
