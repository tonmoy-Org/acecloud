'use client';

import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import aboutImg1 from '@/public/about/programming-website-design.jpg';
import aboutImg2 from '@/public/about/s1.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';  // Import default styles

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1, // optional, defaults to 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1, // optional, defaults to 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, defaults to 1
    },
};

const AboutUs: React.FC = () => {
    return (
        <Box id="about" sx={{ pt: 5 }}>
            <Box
                sx={{
                    backgroundColor: '#202020',
                    color: 'white',
                    padding: '80px 0',
                }}
            >
                <Container maxWidth="lg">
                    {/* About Us Section Title */}
                    <Typography
                        color='#0DCCD7'
                        gutterBottom
                        sx={{
                            textTransform: 'uppercase',
                            fontSize: '14px',
                            letterSpacing: '1.5px',
                            mb: 2,
                        }}
                    >
                        About Us
                    </Typography>

                    <Grid container spacing={6} alignItems="center">
                        {/* Text Section */}
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h4"
                                component="h2"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 3,
                                    color: '#fff',
                                }}
                            >
                                Welcome to <span className='outlined-title'>Ace Cloud</span>
                            </Typography>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                <Box sx={{ color: '#BABABA' }}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            lineHeight: '1.8',
                                            mb: 3,
                                        }}
                                    >
                                        At Ace Cloud, we are passionate about turning your digital dreams into reality. With a dedicated team of experts, we specialize in creating stunning web designs, powerful branding, and seamless web development solutions. Our goal is to bring your vision to life with a harmonious blend of creativity and technical expertise.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            lineHeight: '1.8',
                                        }}
                                    >
                                        Our services extend beyond design and development, offering advanced solutions in DevOps, SEO, SQL, and cybersecurity. We ensure that your website is not only visually appealing but also optimized for performance, secure, and ready to scale as your business grows. At Ace Cloud, we believe in building lasting partnerships through trust, innovation, and a commitment to helping you achieve success in the digital world.
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>

                        {/* Image Carousel Section */}
                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                <Carousel
                                    responsive={responsive}  // Add this prop
                                    additionalTransfrom={0}
                                    arrows={false}
                                    autoPlaySpeed={3000}
                                    autoPlay={true}
                                    centerMode={false}
                                    containerClass="container-padding-bottom"
                                    dotListClass=""
                                    draggable
                                    focusOnSelect={false}
                                    infinite={true} // Enable infinite loop
                                    keyBoardControl
                                    minimumTouchDrag={80}
                                    pauseOnHover
                                    renderArrowsWhenDisabled={false}
                                    renderButtonGroupOutside={false}
                                    renderDotsOutside={false}
                                >
                                    {/* Add multiple images to the carousel */}
                                    {[aboutImg1, aboutImg2].map((img, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                width: '100%',
                                                height: { xs: '250px', md: '400px' },
                                                position: 'relative',
                                                borderRadius: '1px',
                                                overflow: 'hidden',
                                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.4)',
                                            }}
                                        >
                                            <Image
                                                src={img}
                                                alt={`Carousel Image ${index + 1}`}
                                                layout="fill"
                                                objectFit="cover"
                                                placeholder="blur"
                                            />
                                        </Box>
                                    ))}
                                </Carousel>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default AboutUs;
