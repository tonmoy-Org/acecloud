"use client";

import React from 'react';
import { Card, Typography, Box, Container, CardActions } from '@mui/material';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StarIcon from '@mui/icons-material/Star';
import c1 from '@/public/client/c1.png';
import c2 from '@/public/client/c2.png';
import c3 from '@/public/client/c3.png';
import c4 from '@/public/client/c4.png';
import c5 from '@/public/client/c5.png';
import cm from '@/public/client/Cm.png';

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 }, // 4 cards for desktop
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
};

const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const starVariants = {
    hover: { scale: 1.2, transition: { duration: 0.3 } },
};

export default function Testimonials() {
    const testimonials = [
        {
            company: 'NUTRIMERCHANT',
            feedback:
                'Working with Ace Cloud transformed our outdated website into a modern, user-friendly platform that met our exact needs.',
            avatar: cm.src,
            rating: 5,
        },
        {
            company: 'ECOBUILD',
            feedback:
                'Collaborating with Ace Cloud revamped our outdated website into a modern, user-friendly platform that fulfilled our requirements.',
            avatar: c1.src,
            rating: 5,
        },
        {
            company: 'LiquidWave',
            feedback:
                'Ace Cloud transformed our vague ideas into a polished, professional website that exceeded our expectations.',
            avatar: c2.src,
            rating: 4,
        },
        {
            company: 'GlobeConnect',
            feedback:
                'Although there were delays, Ace Cloud ultimately delivered a great website that met our expectations and needs.',
            avatar: c3.src,
            rating: 3,
        },
        {
            company: 'QuickBooks',
            feedback:
                'My experience with Ace Cloud was positive; their cybersecurity services greatly enhanced our site’s security.',
            avatar: c4.src,
            rating: 4,
        },
        {
            company: 'JAVAHAVEN',
            feedback:
                'Ace Cloud improved our site’s speed and navigation, significantly increasing our traffic with their design expertise.',
            avatar: c5.src,
            rating: 5,
        },
    ];

    return (
        <Box sx={{ mt: 15, mb: 8 }} id="testimonials">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Box sx={{ textAlign: 'center', pb: 5 }}>
                        <Typography
                            color='#00E0E0'
                            gutterBottom
                            sx={{ textTransform: 'uppercase', fontSize: '16px', letterSpacing: '0.15em' }}
                        >
                            Testimonials
                        </Typography>

                        <Typography variant="h4" component="h2" sx={{ color: 'white', fontWeight: 800 }}>
                            Client Stories
                        </Typography>
                        <Typography sx={{ color: '#A0A0A0', maxWidth: '650px', margin: '20px auto', fontSize: '1rem' }}>
                            Discover the success stories and feedback from our valued clients at Ace Cloud.
                        </Typography>
                    </Box>
                </motion.div>

                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Carousel
                        responsive={responsive}
                        infinite
                        autoPlay
                        autoPlaySpeed={4000}
                        transitionDuration={700}
                        additionalTransfrom={0}
                        arrows={false}
                        centerMode={false}
                        draggable
                        keyBoardControl
                        pauseOnHover
                        containerClass="carousel-container"
                        itemClass="carousel-item-padding"
                    >
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                sx={{
                                    background: 'linear-gradient(135deg, #1C1D24, #3A3B41)',
                                    color: 'white',
                                    padding: 3,
                                    height: '460px',
                                    margin: '0 14px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    position: 'relative',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
                                }}
                            >
                                {/* Company-specific avatar */}
                                <Box
                                    component="img"
                                    src={testimonial.avatar} // Use company-specific avatar
                                    alt={`${testimonial.company} logo`}
                                    sx={{
                                        width: '100px', // Adjust size as needed
                                        height: 'auto',
                                        mb: 2,
                                    }}
                                />

                                <CardActions disableSpacing sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant="h6" sx={{ color: '#00E0E0', fontWeight: 700 }}>
                                        {testimonial.company}
                                    </Typography>

                                    <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <motion.div key={i} variants={starVariants} whileHover="hover">
                                                <StarIcon
                                                    sx={{
                                                        color: i < testimonial.rating ? '#ffd700' : '#444',
                                                        fontSize: 24,
                                                    }}
                                                />
                                            </motion.div>
                                        ))}
                                    </Box>

                                    <Typography variant="body2" sx={{ color: '#CCCCCC', mt: 3, fontSize: '1rem', maxWidth: '85%' }}>
                                        "{testimonial.feedback}"
                                    </Typography>
                                </CardActions>
                            </Card>
                        ))}
                    </Carousel>
                </motion.div>
            </Container>
        </Box>
    );
}
