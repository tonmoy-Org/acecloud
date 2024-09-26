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
    },
    {
        title: "Protect Your Digital Footprint",
        description:
            "In this video, we explore best practices for safeguarding your personal data and online identity in the digital age.",
        videoUrl: "https://www.youtube.com/embed/VGNz8eKXoFA?si=lcfHPdy1Xzk7cKDw",
    },
    {
        title: "Backend Development",
        description:
            "Get a quick yet comprehensive overview of backend development, covering databases, APIs, and server logic.",
        videoUrl: "https://www.youtube.com/embed/01Q1Te5DIF0?si=Ju05I5tyk528hZF9",
    },
];

const CardWrapper = styled(Card)({
    backgroundColor: 'black',
    color: '#FFF',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
});

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#0DCCD7',
    borderRadius: '20px',
    textTransform: 'none',
    padding: theme.spacing(1, 4),
    color: '#FFF',
    '&:hover': {
        backgroundColor: '#00A5D4',
    },
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
        <Container id='blog'>
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={staggerContainer}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <Box sx={{ display: { xs: 'block', lg: 'flex' }, justifyContent: 'space-around', alignItems: 'center', gap: 6, py: 10 }}>
                    <Box sx={{ pb: { xs: 2 } }}>
                        <Typography color='#0DCCD7' gutterBottom sx={{ textTransform: 'uppercase', fontSize: '14px' }}>
                            Blogs
                        </Typography>
                        <Typography
                            variant='h4'
                            component='h1'
                            sx={{ color: 'white', fontWeight: 900 }}
                        >
                            Check out some of our news.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ color: '#BABABA', }}>
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
                            <motion.div
                                variants={staggerItem}
                            >
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
                                        <Typography variant="body2" style={{ color: "#BABABA" }}>
                                            {blog.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <CustomButton>Read More</CustomButton>
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
