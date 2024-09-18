'use client';

import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Container, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ceo from '@/public/team/CEO.png';
import t1 from '@/public/team/T1.jpg';
import t2 from '@/public/team/T2.png';
import t3 from '@/public/team/T3.png';
import t4 from '@/public/team/T4.png';
import t5 from '@/public/team/T5.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

// Team data with social links
const team = [
    {
        name: 'Mahian',
        position: 'Founder & CEO',
        image: ceo,
        social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
    {
        name: 'Razib Khan',
        position: 'DevOps & Automation Engineer',
        image: t1,
        social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
    {
        name: 'Md. Tanvir Hasan Tonmoy',
        position: 'Full Stack Developer | MERN | Redux | Next.js',
        image: t2,
        social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
    {
        name: 'Kazi Khalid Hasan Tamim',
        position: 'Software Quality Assurance Engineer',
        image: t3,
        social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
    {
        name: 'Badrul Alam',
        position: 'DevSecops',
        image: t4,
        social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
    {
        name: 'Naim Hossen',
        position: 'Front-End Developer',
        image: t5,
        social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
];

export default function TeamSection() {
    return (
        <Box>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    style={{ textAlign: 'center', padding: '40px 0', color: '#fff' }}
                >
                    <Typography color='#0DCCD7' gutterBottom sx={{ textTransform: 'uppercase', fontSize: '14px' }}>
                        Team
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            marginBottom: 2,
                            color: '#E0E0E0',
                        }}
                    >
                        Meet Our Team
                    </Typography>
                    <Box sx={{ maxWidth: '700px', margin: 'auto', marginBottom: 6 }}>
                        <Typography
                            variant="body1"
                            color="#BABABA"
                            sx={{ color: '#B0B0B0' }}
                        >
                            We are passionate about our work and dedicated to your success. Meet the professionals
                            who are driving our company forward and are ready to take your business to the next level.
                        </Typography>
                    </Box>
                </motion.div>
                {/* Team Grid */}
                <Grid container spacing={5} >
                    {team.map((member, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 0,
                                    boxShadow: '0px 20px 50px rgba(0, 188, 255, 0.7)',
                                    transition: {
                                        duration: 0.3,
                                        ease: 'easeInOut',
                                    },
                                }}
                                whileTap={{
                                    scale: 0.95,
                                    rotateY: -5,
                                    transition: {
                                        duration: 0.1,
                                    },
                                }}
                            >
                                <Card
                                    sx={{
                                        mx: "auto",
                                        maxWidth: 360,
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
                                        backgroundColor: '#222',
                                        color: '#fff',
                                        position: 'relative',
                                        '&:hover .member-position': {
                                            opacity: 0,
                                            transition: 'opacity 0.5s ease-out',
                                        },
                                        '&:hover .social-icons': {
                                            opacity: 1,
                                            transition: 'opacity 0.5s ease-in',
                                        },
                                    }}
                                >
                                    {/* Team Member Image with Glow Effect */}
                                    <Box sx={{ position: 'relative' }}>
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            className="object-cover transition-opacity duration-300 ease-in-out w-96 lg:h-64 h-96"
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))',
                                            }}
                                        />
                                    </Box>

                                    {/* Team Member Info */}
                                    <CardContent
                                        sx={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            color: '#fff',
                                            backdropFilter: 'blur(9.8px)',
                                            py: { xs: 1, md: 2 },
                                            textAlign: 'center',
                                            height: 100,
                                            position: 'relative',
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 700, fontSize: '1rem', color: '#E0F7FA' }}
                                        >
                                            {member.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            className="member-position"
                                            sx={{
                                                color: '#0DCCD7',
                                                marginTop: '4px',
                                                position: 'absolute',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                width: '100%',
                                                px:2
                                            }}
                                        >
                                            {member.position}
                                        </Typography>
                                    </CardContent>
                                    {/* Social Icons */}
                                    <Box
                                        className="social-icons"
                                        sx={{
                                            position: 'absolute',
                                            bottom: 10,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            display: 'flex',
                                            gap: 1,
                                            opacity: 0,
                                            transition: 'opacity 0.5s ease-in-out',
                                        }}
                                    >
                                        {member.social.facebook && (
                                            <IconButton
                                                href={member.social.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#0DCCD7' }}
                                            >
                                                <FacebookIcon />
                                            </IconButton>
                                        )}
                                        {member.social.linkedin && (
                                            <IconButton
                                                href={member.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#0DCCD7' }}
                                            >
                                                <LinkedInIcon />
                                            </IconButton>
                                        )}
                                        {member.social.twitter && (
                                            <IconButton
                                                href={member.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#0DCCD7' }}
                                            >
                                                <TwitterIcon />
                                            </IconButton>
                                        )}
                                    </Box>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    );
}
