"use client";

import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StarIcon from '@mui/icons-material/Star';
import c1 from '@/public/client/c1.jpg';
import c2 from '@/public/client/c2.jpg';
import c3 from '@/public/client/c3.jpg';
import c4 from '@/public/client/c4.jpg';
import c5 from '@/public/client/c5.jpg';

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

export default function Testimonials() {
    const testimonials = [
        {
            feedback: "Working with Ace Cloud was a game-changer for our business. Our website went from outdated to modern and user-friendly. They really listened to our needs, and the final result was exactly what we wanted.",
            avatar: c1.src,
            rating: 5,
        },
        {
            feedback: "The team at Ace Cloud was fantastic to work with. They were able to take our vague ideas and turn them into something polished and professional. The branding and web design they created perfectly reflect our company, and we’ve received so many compliments!",
            avatar: c2.src,
            rating: 4,
        },
        {
            feedback: "The team at Ace Cloud was professional and knowledgeable, and they delivered on most of what we asked for. However, there were a few delays, and we had to go back and forth on some design elements. In the end, the site is great, but it felt like it took longer to get there than it should have.",
            avatar: c3.src,
            rating: 3,
        },
        {
            feedback: "I had a very positive experience working with Ace Cloud. Their cybersecurity and SQL services have been invaluable to our business. There were a few technical challenges along the way, but they worked hard to resolve them. I’d recommend them without hesitation!",
            avatar: c4.src,
            rating: 4,
        },
        {
            feedback: "Ace Cloud is the real deal. They took our outdated site and made it modern, fast, and easy to navigate. Their web design and SEO expertise has already started driving more traffic. We’ll definitely be partnering with them again in the future!",
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
                    <Box sx={{ textAlign: 'center', pb: 10 }}>
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

                <Carousel
                    responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={3000}
                    transitionDuration={500}
                    additionalTransfrom={0}
                    arrows={false}
                    centerMode={false}
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <Card
                                sx={{
                                    bgcolor: '#14151B',
                                    color: 'white',
                                    padding: 1,
                                    height: '380px', // Same height for all cards
                                    margin: '0 10px', // Gap between cards
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                <CardContent>
                                    <Avatar
                                        alt={testimonial.feedback}
                                        src={testimonial.avatar}
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            margin: '0 auto',
                                            border: '2px solid #0DCCD7',
                                        }}
                                    />
                                    <Typography variant="body2" sx={{ color: '#BABABA', mt: 2 }}>
                                        "{testimonial.feedback}"
                                    </Typography>
                                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                sx={{
                                                    color: i < testimonial.rating ? '#ffd700' : '#444',
                                                    fontSize: 20,
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </Carousel>
            </Container>
        </Box>
    );
}
