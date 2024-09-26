"use client";

import React from 'react';
import { Card, Typography, Box, Container, CardActions } from '@mui/material';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StarIcon from '@mui/icons-material/Star';
import c1 from '@/public/client/c1.jpg';
import c2 from '@/public/client/c2.jpg';
import c3 from '@/public/client/c3.jpg';
import c4 from '@/public/client/c4.jpg';
import c5 from '@/public/client/c5.jpg';
import cm from '@/public/client/Cm.jpg';


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
            feedback: "Working with Ace Cloud transformed our outdated website into a modern, user-friendly platform that met our exact needs.",
            avatar: cm.src,
            rating: 5,
        },
        {
            company: 'ECOBUILD',
            feedback: "Collaborating with Ace Cloud revamped our outdated website into a modern, user-friendly platform that fulfilled our requirements.",
            avatar: c1.src,
            rating: 5,
        },
        {
            company: 'LiquidWave',
            feedback: "Ace Cloud transformed our vague ideas into a polished, professional website that exceeded our expectations.",
            avatar: c2.src,
            rating: 4,
        },
        {
            company: 'GlobeConnect',
            feedback: "Although there were delays, Ace Cloud ultimately delivered a great website that met our expectations and needs.",
            avatar: c3.src,
            rating: 3,
        },
        {
            company: 'QuickBooks',
            feedback: "My experience with Ace Cloud was positive; their cybersecurity services greatly enhanced our site's security.",
            avatar: c4.src,
            rating: 4,
        },
        {
            company: 'JAVAHAVEN',
            feedback: "Ace Cloud improved our site's speed and navigation, significantly increasing our traffic with their design expertise.",
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
                                    height: '400px',
                                    margin: '0 10px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                                    borderRadius: '12px',
                                }}
                            >
                                {/* Image as background */}
                                <Box
                                    component="div"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundImage: `url(${testimonial.avatar})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        opacity: 0.2,
                                    }}
                                />
                                
                                <CardActions disableSpacing sx={{ zIndex: 1 }}>
                                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography variant="h6" sx={{ color: '#0DCCD7', fontWeight: 700 }}>
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
                                        <Typography variant="body2" sx={{ color: '#BABABA', mt: 2, textAlign: 'center', zIndex: 1 }}>
                                            "{testimonial.feedback}"
                                        </Typography>
                                    </Box>
                                </CardActions>
                            </Card>
                        ))}
                    </Carousel>
                </motion.div>
            </Container>
        </Box>
    );
}
