"use client";

import { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Link, TextField, Button } from "@mui/material";
import { Email, LocationOn } from "@mui/icons-material";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from '@/public/logo/acecloud.png';

const WEB3FORMS_ACCESS_KEY = '9d818505-7ca6-4f44-8b21-5fae7a9a2c1d';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [elevate, setElevate] = useState(false);

    const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
            setMessage('Please enter a valid email address.');
            return;
        }

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: "Subscription Request Ace Cloud",
                    email: email,
                    from_name: email,
                    message: 'Subscription Request',
                }),
            });

            if (response.ok) {
                setMessage('Thank you for subscribing!');
                setEmail('');
            } else {
                setMessage('Something went wrong. Please try again.');
            }
        } catch (error) {
            setMessage('Error submitting your request. Please try again.');
        }
    };

    const handleScroll = (id: string, duration: number = 1000) => {
        const element = document.getElementById(id);
        if (!element) return;

        const targetPosition = element.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;

        const easeInOutQuad = (time: number, start: number, distance: number, duration: number) => {
            time /= duration / 2;
            if (time < 1) return (distance / 2) * time * time + start;
            time--;
            return (-distance / 2) * (time * (time - 2) - 1) + start;
        };

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const scroll = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, scroll);

            if (timeElapsed < duration) window.requestAnimationFrame(animation);
        };

        window.requestAnimationFrame(animation);
    };

    useEffect(() => {
        const handleScroll = () => setElevate(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box component="footer" sx={{ bgcolor: elevate ? '#121212' : 'transparent', color: "#fff", pt: 6, pb: 3 }}>
            <Container>
                {/* Footer Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Grid container spacing={4}>
                        {/* Logo and Company Description */}
                        <Grid item xs={12} md={4}>
                            <Box display="flex" alignItems="center" mb={2}>
                                <div className='w-40'>
                                    <Image src={logo} alt="Company Logo" layout="responsive" />
                                </div>
                            </Box>
                            <Typography variant="body2" sx={{ color: "#aaa", mb: 2 }}>
                                AceCloud offers innovative solutions to streamline your business processes. Our mission is to provide top-notch services that meet the evolving needs of our clients.
                            </Typography>
                        </Grid>

                        {/* Information Links */}
                        <Grid item xs={12} md={2}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>INFORMATION</Typography>
                            <Box component="div" sx={{ borderBottom: "2px solid #00BCD4", width: "40px", mb: 1 }} />
                            <Link href="/about-us" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>About Us</Link>
                            <Link onClick={() => handleScroll('blog', 1400)} href='/#blog' color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>Blog</Link>
                            <Link href="/termsAndConditions" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>Terms & Conditions</Link>
                        </Grid>

                        {/* Contact Information */}
                        <Grid item xs={12} md={2}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>ADDRESS</Typography>
                            <Box component="div" sx={{ borderBottom: "2px solid #00BCD4", width: "40px", mb: 1 }} />
                            <Box display="flex" alignItems="center" mb={1}>
                                <Email sx={{ color: "#00BCD4", mr: 1 }} />
                                <Typography variant="body2">contact@acecloud.ca</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" mb={1}>
                                <LocationOn sx={{ color: "#00BCD4", mr: 1 }} />
                                <Typography variant="body2">Toronto, Canada</Typography>
                            </Box>
                        </Grid>

                        {/* Newsletter Subscription */}
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>SUBSCRIBE TO OUR NEWSLETTER</Typography>
                            <Box component="div" sx={{ borderBottom: "2px solid #00BCD4", width: "40px", mb: 2 }} />
                            <form onSubmit={handleSubscribe}>
                                <TextField
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    label="Enter your email"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    sx={{
                                        mb: 2,
                                        input: { color: '#fff' },
                                        label: { color: '#aaa' },
                                        fieldset: { borderColor: '#00BCD4' },
                                    }}
                                />
                                <Button type="submit" variant="contained" sx={{ backgroundColor: "#00BCD4", color: "#fff", width: "100%" }}>
                                    Subscribe
                                </Button>
                            </form>
                            {message && (
                                <Typography variant="body2" sx={{ color: "#00BCD4", mt: 1 }}>{message}</Typography>
                            )}
                        </Grid>
                    </Grid>
                </motion.div>

                {/* Footer Bottom */}
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                    <Box mt={4} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
                        <Typography color="#aaa" sx={{ mb: { xs: 2, md: 0 } }}>
                            {/* Designed and Developed by Md. Tanvir Hasan Tonmoy */}
                        </Typography>
                        {/* <Box>
                            <ScrollLink to="home" smooth={true} duration={1700}>
                                <Box sx={{ display: 'flex', alignItems: 'center', color: '#00BCD4', fontSize: '16px', cursor: 'pointer' }}>
                                    <Box component="span" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', border: '1px solid #00BCD4', width: '30px', height: '30px', mr: 1 }}>
                                        <ArrowUpward />
                                    </Box>
                                    Back To Top
                                </Box>
                            </ScrollLink>
                        </Box> */}
                    </Box>
                </motion.div>
            </Container>
            <Box sx={{ py: 0, mt: 2 }}>
                <Container>
                    <Typography variant="body2" align="center" color="#aaa">&copy; {new Date().getFullYear()} AceCloud. All Rights Reserved.</Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
