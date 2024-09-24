"use client";

import React from 'react';
import { Card, Typography, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StarIcon from '@mui/icons-material/Star';
import c1 from '@/public/client/c1.jpg';
import c2 from '@/public/client/c2.jpg';
import c3 from '@/public/client/c3.jpg';
import c4 from '@/public/client/c4.jpg';
import c5 from '@/public/client/c5.jpg';
import cm from '@/public/client/Cm.jpg'
import Image from 'next/image';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const staggerItem = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const starVariants = {
    hover: {
        scale: 1.2,
        transition: {
            duration: 0.2,
        },
    },
};

export default function Testimonials() {
    const testimonials = [
        {
            company: 'NUTRIMERCHANT',
            feedback: "Working with Ace Cloud was a game-changer for our business. Our website went from outdated to modern and user-friendly. They really listened to our needs, and the final result was exactly what we wanted.",
            avatar: cm.src,
            rating: 5,
        },
        {
            company: 'ECOBUILD',
            feedback: "Working with Ace Cloud was a game-changer for our business. Our website went from outdated to modern and user-friendly. They really listened to our needs, and the final result was exactly what we wanted.",
            avatar: c1.src,
            rating: 5,
        },
        {
            company: 'LiquidWave',
            feedback: "The team at Ace Cloud was fantastic to work with. They were able to take our vague ideas and turn them into something polished and professional.",
            avatar: c2.src,
            rating: 4,
        },
        {
            company: 'GlobeConnect',
            feedback: "The team was professional, but we had a few delays. In the end, the site is great, but it took longer than expected.",
            avatar: c3.src,
            rating: 3,
        },
        {
            company: 'QuickBooks',
            feedback: "I had a positive experience working with Ace Cloud. Their cybersecurity services were invaluable. I'd recommend them!",
            avatar: c4.src,
            rating: 4,
        },
        {
            company: 'JAVAHAVEN',
            feedback: "Ace Cloud made our site fast and easy to navigate. Their design and SEO expertise have started driving more traffic.",
            avatar: c5.src,
            rating: 5,
        },
    ];

    return (
        <Box sx={{ mt: 15, mb: 8 }} id="testimonials">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Box sx={{ textAlign: 'center', pb: 3 }}>
                        <Typography color='#0DCCD7' gutterBottom sx={{ textTransform: 'uppercase', fontSize: '14px' }}>
                            Testimonials
                        </Typography>

                        <Typography variant="h4" component="h2" sx={{ color: 'white', fontWeight: 900 }}>
                            Voices of Success
                        </Typography>
                        <Typography sx={{ color: '#BABABA', maxWidth: '600px', margin: '20px auto' }}>
                            Hear what our clients have to say about our work and their experiences with Ace Cloud.
                        </Typography>
                    </Box>
                </motion.div>
                <motion.div
                    variants={staggerItem}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Carousel
                        responsive={responsive}
                        infinite
                        autoPlay
                        autoPlaySpeed={3000}
                        transitionDuration={500}
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
                                    bgcolor: '#14151B',
                                    color: 'white',
                                    padding: 2,
                                    height: '360px',
                                    margin: '0 10px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                <Image
                                    alt={testimonial.company}
                                    src={testimonial.avatar}
                                    width={80}
                                    height={10}
                                />
                                <Typography variant="h6" sx={{ color: '#0DCCD7', mt: 2, fontWeight: 700 }}>
                                    {testimonial.company}
                                </Typography>

                                {/* Rating stars */}
                                <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            variants={starVariants}
                                            whileHover="hover"
                                        >
                                            <StarIcon
                                                sx={{
                                                    color: i < testimonial.rating ? '#ffd700' : '#444',
                                                    fontSize: 20,
                                                }}
                                            />
                                        </motion.div>
                                    ))}
                                </Box>

                                {/* Feedback description */}
                                <Typography variant="body2" sx={{ color: '#BABABA', mt: 2 }}>
                                    "{testimonial.feedback}"
                                </Typography>
                            </Card>
                        ))}
                    </Carousel>
                </motion.div>
            </Container>
        </Box>
    );
}
