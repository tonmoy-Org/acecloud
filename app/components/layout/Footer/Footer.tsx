"use client";

import { useState } from 'react';
import { Box, Container, Grid, Typography, Link, TextField, Button } from "@mui/material";
import { Email, LocationOn, ArrowUpward } from "@mui/icons-material";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from '@/public/logo/a-minimalist-logo-for-acecloud-a-website-and-digit-Z5PbTxWZTmqOsVGnPwg4lA-rkkGkEoFRaGFriGCaxCVmg.jpeg-removebg-preview.png';
import { Link as ScrollLink } from 'react-scroll';

const WEB3FORMS_ACCESS_KEY = '0d47a070-74ba-485e-abc6-c36651c4f115';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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
                headers: {
                    'Content-Type': 'application/json',
                },
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


    return (
        <Box component="footer" sx={{ backgroundColor: "#121212", color: "#fff", py: 6 }}>
            <Container>
                {/* Footer Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Grid container spacing={4}>
                        {/* Logo and Social Media */}
                        <Grid item xs={12} md={4}>
                            <Box display="flex" alignItems="center" mb={2}>
                                <div className='w-40'>
                                    <Image
                                        src={logo}
                                        alt="Company Logo"
                                        layout="responsive"
                                    />
                                </div>
                            </Box>
                            <Typography variant="body2" sx={{ color: "#aaa", mb: 2 }}>
                                AceCloud offers innovative solutions to streamline your business processes. Our mission is to provide top-notch services that meet the evolving needs of our clients.
                            </Typography>
                        </Grid>

                        {/* Company Section */}
                        {/* <Grid item xs={12} md={2}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                COMPANY
                            </Typography>
                            <Box component="div" sx={{ borderBottom: "2px solid #00BCD4", width: "40px", mb: 1 }} />
                            <Link href="#" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                                About Us
                            </Link>
                            <Link href="#" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                                Our Solutions
                            </Link>
                            <Link href="#" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                                Case Studies
                            </Link>
                            <Link href="#" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                                News & Updates
                            </Link>
                        </Grid> */}

                        {/* Information Section */}
                        <Grid item xs={12} md={2}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                INFORMATION
                            </Typography>
                            <Box component="div" sx={{ borderBottom: "2px solid #00BCD4", width: "40px", mb: 1 }} />
                            <Link href="#" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                                About Us
                            </Link>
                            <Link href="#" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                                Blog
                            </Link>
                            <Link href="#" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                                Support
                            </Link>
                            <Link href="/termsAndConditions" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                                Terms & Condition
                            </Link>
                        </Grid>

                        {/* Address Section */}
                        <Grid item xs={12} md={2}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                ADDRESS
                            </Typography>
                            <Box component="div" sx={{ borderBottom: "2px solid #00BCD4", width: "40px", mb: 1 }} />
                            <Box display="flex" alignItems="center" mb={1}>
                                <Email sx={{ color: "#00BCD4", mr: 1 }} />
                                <Typography variant="body2">hello@rameo.website</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" mb={1}>
                                <LocationOn sx={{ color: "#00BCD4", mr: 1 }} />
                                <Typography variant="body2">Toronto, Ontario, Canada</Typography>
                            </Box>
                        </Grid>

                        {/* Newsletter Subscription */}
                        <Grid item xs={12} md={4}>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                    SUBSCRIBE TO OUR NEWSLETTER
                                </Typography>
                                <Box component="div" sx={{ borderBottom: "2px solid #00BCD4", width: "40px", mb: 2 }} />
                                <form onSubmit={handleSubscribe}>
                                    <TextField
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        label="Enter your email"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        sx={{ mb: 2, input: { color: '#fff' }, label: { color: '#aaa' }, fieldset: { borderColor: '#00BCD4' } }}
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ backgroundColor: "#00BCD4", color: "#fff", width: "100%" }}
                                    >
                                        Subscribe
                                    </Button>
                                </form>
                                {message && (
                                    <Typography variant="body2" sx={{ color: "#00BCD4", mt: 1 }}>
                                        {message}
                                    </Typography>
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </motion.div>

                {/* Footer Bottom */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Box
                        mt={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: { xs: 'column', md: 'row' },
                        }}
                    >
                        <Typography color="#aaa" sx={{ mb: { xs: 2, md: 0 } }}>
                            <span className='text-[13px]'>Designed and Developed by Md. Tanvir Hasan Tonmoy</span>
                        </Typography>
                        <Box>
                            <ScrollLink to="home" smooth={true} duration={1700}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#00BCD4',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                }}>
                                    <Box
                                        component="span"
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: '50%',
                                            border: '1px solid #00BCD4',
                                            width: '30px',
                                            height: '30px',
                                            mr: 1,
                                        }}
                                    >
                                        <ArrowUpward />
                                    </Box>
                                    Back To Top
                                </Box>
                            </ScrollLink>
                        </Box>
                    </Box>
                </motion.div>
            </Container>
            <Box sx={{ py: 2, mt: 4 }}>
                <Container>
                    <Typography variant="body2" align="center" color="#aaa">
                        &copy; {new Date().getFullYear()} AceCloud. All Rights Reserved.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
