'use client';

import React, { useState, useEffect } from 'react';
import {
    AppBar, Box, Toolbar, IconButton, Typography, Container,
    Button, Divider, Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '@/public/logo/acecloud.png';

const drawerHeight = '100%'; // Full height for the drawer

const ResponsiveAppBar = () => {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [elevate, setElevate] = useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setMobileOpen(false);
            setIsClosing(false);
        }, 500); // Sync with animation delay
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const handleScroll = (id: string, duration: number = 1000) => {
        const element = document.getElementById(id);
        if (element) {
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

                if (timeElapsed < duration) {
                    window.requestAnimationFrame(animation);
                }
            };

            window.requestAnimationFrame(animation);
        }
        handleDrawerClose(); // Close the drawer after starting scroll
    };

    useEffect(() => {
        const handleScroll = () => {
            setElevate(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const drawer = (
        <motion.div
            initial={{ opacity: 0, y: -100 }} // Start above the view
            animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : -100 }} // Slide down/up
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} // Adjusted transition for smoothness
            style={{
                backgroundColor: '#1a1a1a',
                color: 'white',
                height: drawerHeight,
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start', // Align to top
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1300 // Above AppBar
            }}
        >
            {/* Close Drawer Button */}
            <IconButton
                onClick={handleDrawerClose}
                sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: 'white',
                }}
            >
                <CloseIcon />
            </IconButton>

            {/* Logo */}
            <Box display="flex" justifyContent="center" mb={2}>
                <Image src={logo} alt="Ace Cloud Logo" width={160} height={80} />
            </Box>
            <Divider sx={{ backgroundColor: '#333', width: '80%' }} />

            {/* Centered Navigation Links */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {['Home', 'About', 'Project', 'Contact'].map((text, index) => (
                    <motion.div
                        key={text}
                        initial={{ opacity: 0, scale: 0.8, y: -10 }} // Initial state for animation
                        animate={{ opacity: mobileOpen ? 1 : 0, scale: mobileOpen ? 1 : 0.8, y: mobileOpen ? 0 : -10 }} // Animate scale and position
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: index * 0.1 }} // Staggered animation with smoother easing
                    >
                        <Button
                            sx={{
                                color: 'white',
                                my: 1,
                                '&:hover': {
                                    color: '#0DCCD7',
                                },
                            }}
                            onClick={() => handleScroll(text.toLowerCase(), 1400)}
                        >
                            <Link href={`/#${text.toLowerCase()}`}>{text}</Link>
                        </Button>
                    </motion.div>
                ))}
            </Box>
            <Button
                onClick={handleDrawerClose}
                variant="outlined"
                sx={{
                    color: '#0DCCD7',
                    borderColor: '#0DCCD7',
                    borderRadius: '20px',
                    mt: 2,
                    '&:hover': {
                        borderColor: '#0DCCD7',
                        backgroundColor: 'rgba(13,204,215,0.1)',
                    },
                }}
            >
                <Link href='/book-meeting' style={{ textDecoration: 'none', color: '#0DCCD7' }}>
                    Book a call with us
                </Link>
            </Button>

        </motion.div>
    );

    return (
        <motion.div
            className="lg:text-center text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth entry animation for AppBar
        >
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: elevate ? 'black' : 'transparent',
                    color: 'white',
                    boxShadow: elevate ? 3 : 'none',
                    transition: 'background-color 0.3s ease',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, alignItems: 'center' }}>
                            <Button sx={{
                                my: 2,
                                color: 'white',
                                '&:hover': {
                                    color: '#0DCCD7',
                                },
                            }} onClick={() => handleScroll('home', 1400)}>
                                <Link href='/#home'>Home</Link>
                            </Button>
                            <Button sx={{
                                my: 2,
                                color: 'white',
                                '&:hover': {
                                    color: '#0DCCD7',
                                },
                            }} onClick={() => handleScroll('project', 1400)}>
                                <Link href='/#project'>Projects</Link>
                            </Button>
                        </Box>
                        <Typography
                            variant="h4"
                            noWrap
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexGrow: 0.73,
                                textAlign: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <div className="w-40">
                                <Link href='/' passHref>
                                    <Image src={logo} alt="Ace Cloud Logo" layout="responsive" />
                                </Link>
                            </div>
                        </Typography>

                        <Typography
                            variant="h4"
                            noWrap
                            sx={{
                                ms: 10,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                alignItems: 'center'
                            }}
                        >
                            <div className="w-32">
                                <Link href='/' passHref>
                                    <Image src={logo} alt="Ace Cloud Logo" layout="responsive" />
                                </Link>
                            </div>
                        </Typography>
                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                onClick={handleDrawerToggle}
                                color="inherit"
                            >
                                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                            <Drawer
                                variant="temporary"
                                open={mobileOpen}
                                onClose={handleDrawerClose}
                                anchor="top" // Set anchor to top
                                ModalProps={{ keepMounted: true }}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': {
                                        height: drawerHeight,
                                        bgcolor: 'transparent', // Make the drawer background transparent for animation
                                        border: 'none', // Remove border
                                    },
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0 }}>
                            <Button sx={{
                                my: 2,
                                mr: 1,
                                color: 'white',
                                '&:hover': {
                                    color: '#0DCCD7',
                                },
                            }} onClick={() => handleScroll('contact', 1400)}>
                                <Link href='/#contact'>Contact</Link>
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    my: 2,
                                    color: '#0DCCD7',
                                    borderColor: '#0DCCD7',
                                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                                    borderRadius: '20px',
                                }}
                            >
                                <Link href='/book-meeting' style={{ textDecoration: 'none' }}>
                                    Book a call with us
                                </Link>
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </motion.div>
    );
};

export default ResponsiveAppBar;
