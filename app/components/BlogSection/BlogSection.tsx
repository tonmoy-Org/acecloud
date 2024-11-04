"use client";

import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box, CardActions } from '@mui/material';
import { Container, styled } from '@mui/system';
import { motion } from 'framer-motion';

const blogData = [
    {
        title: "How to Create Stunning UI",
        description:
            "Learn the essential tips and tricks to design user interfaces that are not only functional but visually appealing.",
        videoUrl: "https://www.youtube.com/embed/KfeaNa92Nns?si=Bw46dk7_o0AWT3iF",
        watchLink: "https://www.youtube.com/watch?v=KfeaNa92Nns",
    },
    {
        title: "Protect Your Digital Footprint",
        description:
            "In this video, we explore best practices for safeguarding your personal data and online identity in the digital age.",
        videoUrl: "https://www.youtube.com/embed/VGNz8eKXoFA?si=lcfHPdy1Xzk7cKDw",
        watchLink: "https://www.youtube.com/watch?v=VGNz8eKXoFA",
    },
    {
        title: "Backend Development",
        description:
            "Get a quick yet comprehensive overview of backend development, covering databases, APIs, and server logic.",
        videoUrl: "https://www.youtube.com/embed/01Q1Te5DIF0?si=Ju05I5tyk528hZF9",
        watchLink: "https://www.youtube.com/watch?v=01Q1Te5DIF0",
    },
];

const CardWrapper = styled(Card)({
    backgroundColor: 'black',
    color: '#FFF',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
});

const CustomButton = styled(Button)(({ theme }) => ({
    border: '2px solid #1D4ED8', // Outlined button border color
    borderRadius: '8px',
    textTransform: 'none',
    padding: theme.spacing(0.6, 3),
    color: '#FFF',
    backgroundColor: 'transparent',
}));

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

const staggerItem = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const BlogSection: React.FC = () => {
    return (
        <Container id='blog' sx={{ my: 5 }}>
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={staggerContainer}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <Box sx={{ display: { xs: 'block', lg: 'flex' }, justifyContent: 'space-between', alignItems: 'center', pb: 8, zIndex: 1, position: 'relative' }}>
                    <Box>
                        <Typography color='#FFD700' gutterBottom sx={{ textTransform: 'uppercase', fontSize: '14px', fontWeight: 'bold' }}>
                            Blogs
                        </Typography>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <Typography variant='h4' component='h1' sx={{ color: '#FFFFFF', fontWeight: 800, mb: 2 }}>
                                Check out some of our news.
                            </Typography>
                        </motion.div>
                    </Box>
                    <Box>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: 500 }}>
                            We provide comprehensive solutions that ensure your business thrives in the digital landscape. From design to development, we cater to all your digital needs with precision and creativity.
                        </Typography>
                    </Box>
                </Box>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="show"
                variants={staggerContainer}
            >
                <Grid container spacing={4}>
                    {blogData.map((blog, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div variants={staggerItem}>
                                <CardWrapper>
                                    <Box sx={{ position: 'relative', height: 180 }}>
                                        <iframe
                                            width="100%"
                                            height="180"
                                            src={blog.videoUrl}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </Box>
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 'bold' }}>
                                            {blog.title}
                                        </Typography>
                                        <Typography variant="body2" style={{ color: "hsl(220 10% 54.4%)" }}>
                                            {blog.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <CustomButton href={blog.watchLink} rel="noopener noreferrer">
                                            Read More
                                        </CustomButton>
                                    </CardActions>
                                </CardWrapper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </Container>
    );
};

export default BlogSection;
