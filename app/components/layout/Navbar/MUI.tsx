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

const drawerHeight = '100%';

const ResponsiveAppBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [elevate, setElevate] = useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setMobileOpen(false);
            setIsClosing(false);
        }, 500);
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
        handleDrawerClose();
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
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: mobileOpen ? 1 : 0, x: mobileOpen ? 0 : -100 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            style={{
                backgroundColor: '#1a1a1a',
                color: 'white',
                height: drawerHeight,
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1300,
            }}
        >
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
            <Box display="flex" justifyContent="center" mb={2}>
                <Image src={logo} alt="Ace Cloud Logo" width={140} height={80} />
            </Box>
            <Divider sx={{ backgroundColor: '#333', width: '80%' }} />

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {['Home', 'Project', 'Contact'].map((text, index) => (
                    <motion.div
                        key={text}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
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
                            <Link href={`/#${text.toLowerCase()}`} passHref>
                                {text}
                            </Link>
                        </Button>
                    </motion.div>
                ))}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button
                        sx={{
                            color: 'white',
                            my: 1,
                            '&:hover': {
                                color: '#0DCCD7',
                            },
                        }}
                        onClick={handleDrawerClose}
                    >
                        <Link href="/about-us" passHref>
                            About Us
                        </Link>
                    </Button>
                </motion.div>
            </Box>

            <Button
                onClick={handleDrawerClose}
                variant="outlined"
                sx={{
                    color: '#0DCCD7',
                    borderColor: '#0DCCD7',
                    borderRadius: '20px',
                    mt: 3,
                    px: 4,
                    '&:hover': {
                        borderColor: '#0DCCD7',
                        backgroundColor: 'rgba(13,204,215,0.1)',
                    },
                }}
            >
                <Link href="/book-meeting" style={{ textDecoration: 'none', color: '#0DCCD7' }}>
                    Book a call with us
                </Link>
            </Button>
        </motion.div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.01)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: elevate ? '0px 4px 12px rgba(0, 0, 0, 0.2)' : 'none',
                }}
            >
                <Container sx={{ minWidth: { xs: '100%', md: '85%' } }}>
                    <Toolbar sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingLeft: '0px !important',
                        paddingRight: '0px !important',

                    }}>
                        <Typography variant="h4" noWrap sx={{ textAlign: 'center' }}>
                            <div className="w-32 me-10">
                                <Link href="/" passHref>
                                    <Image src={logo} alt="Ace Cloud Logo" layout="responsive" />
                                </Link>
                            </div>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {['Home', 'Project'].map((text) => (
                                <Button
                                    key={text}
                                    sx={{ my: 1, mx: 1, '&:hover': { color: '#0DCCD7' }, textTransform: 'none !important', color: 'hsl(220 10% 54.4%)' }}
                                    onClick={() => handleScroll(text.toLowerCase(), 1400)}
                                >
                                    <Link href={`/#${text.toLowerCase()}`}>{text}</Link>
                                </Button>
                            ))}
                            <Button sx={{ my: 1, mx: 1, '&:hover': { color: '#0DCCD7' }, textTransform: 'none !important', color: 'hsl(220 10% 54.4%)' }}>
                                <Link href="/about-us">About</Link>
                            </Button>
                            <Button sx={{ my: 1, mx: 1, '&:hover': { color: '#0DCCD7' }, textTransform: 'none !important', color: 'hsl(220 10% 54.4%)' }}>
                                <Link href="/contact-us">Contact</Link>
                            </Button>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    my: 1,
                                    color: '#0DCCD7',
                                    borderColor: '#0DCCD7',
                                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                                    borderRadius: '6px',
                                    textTransform: 'none !important',
                                    py: '2px !important',
                                    px: '8px !important',
                                }}
                            >
                                <Link href="/book-meeting">
                                    Book a call with us
                                </Link>
                            </Button>
                        </Box>
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                open={mobileOpen}
                onClose={handleDrawerClose}
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
                }}
            >
                {drawer}
            </Drawer>
        </motion.div>
    );
};

export default ResponsiveAppBar;
