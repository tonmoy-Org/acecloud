"use client";

import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box, CardActions } from '@mui/material';
import { Container, styled } from '@mui/system';
import { motion } from 'framer-motion';

const blogData = [
    {
        title: "Branding for Package with Modern Style Design",
        description:
            "Lorem ipsum dolor sit amet consec tetur. Phasel lus elei fend duis rhoncus peil lean tesque. Vulpu tatera augue lobortis...",
    },
    {
        title: "The Power of Branding: Building Your Business Identity",
        description:
            "Lorem ipsum dolor sit amet consec tetur. Phasel lus elei fend duis rhoncus peil lean tesque. Vulpu tatera augue lobortis...",
    },
    {
        title: "Unleashing Brand Potential: Strategies for Success",
        description:
            "Lorem ipsum dolor sit amet consec tetur. Phasel lus elei fend duis rhoncus peil lean tesque. Vulpu tatera augue lobortis...",
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
                                            src="https://www.youtube.com/embed/gG4urkinFQI?si=pG4xFoQXMSs7yJ4v"
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
