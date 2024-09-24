'use client';

import React, { useState } from 'react';
import {
    AppBar, Box, Toolbar, IconButton, Typography, Container,
    Button, Divider, Drawer, List, ListItem, ListItemButton,
    ListItemIcon, ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DomainIcon from '@mui/icons-material/Domain';
import HistoryIcon from '@mui/icons-material/History';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '@/public/logo/acecloud.png';

const drawerWidth = 340;

const ResponsiveAppBar = () => {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    // Smoother scrolling function with custom duration
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
    };

    const drawer = (
        <Box sx={{ bgcolor: 'black', color: 'white', height: '100%', p: 2 }}>
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <Image src={logo} alt="Ace Cloud Logo" width={160} height={80} />
                </Box>
                <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Divider sx={{ backgroundColor: 'white' }} />
            <List onClick={handleDrawerClose}>
                <ListItem disablePadding>
                    <ListItemButton component={Link} href="/">
                        <ListItemIcon sx={{ color: 'white' }}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} href="/aboutUs">
                        <ListItemIcon sx={{ color: 'white' }}>
                            <DomainIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} href="/career">
                        <ListItemIcon sx={{ color: 'white' }}>
                            <HistoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Career" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} href="/contact">
                        <ListItemIcon sx={{ color: 'white' }}>
                            <ContactMailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <motion.div
            className="lg:text-center text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <AppBar
                id="home"
                position="static"
                sx={{ bgcolor: 'black', color: 'white', boxShadow: 0 }}
            >
                <Container maxWidth="xl">
                    <Toolbar>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                            {/* OnClick for manual scrolling */}
                            <Button
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    '&:hover': {
                                        color: '#0DCCD7', // Change text color on hover
                                    },
                                }}
                                onClick={() => handleScroll('home', 1400)}
                            >
                                <Link href='/#home' style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Home
                                </Link>
                            </Button>
                            <Button
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    '&:hover': {
                                        color: '#0DCCD7', // Change text color on hover
                                    },
                                }}
                                onClick={() => handleScroll('project', 1400)}
                            >
                                <Link href='/#project' style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Projects
                                </Link>
                            </Button>
                        </Box>
                        <Typography
                            variant="h4"
                            noWrap
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexGrow: 0.74,
                                textAlign: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <div className="w-40">
                                <Link href='/'>
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
                                <Link href='/'>
                                    <Image src={logo} alt="Ace Cloud Logo" layout="responsive" />
                                </Link>
                            </div>
                        </Typography>

                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="menu"
                                onClick={handleDrawerToggle}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                variant="temporary"
                                open={mobileOpen}
                                onTransitionEnd={handleDrawerTransitionEnd}
                                onClose={handleDrawerClose}
                                ModalProps={{ keepMounted: true }}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'black' },
                                }}
                            >
                                <Divider sx={{ backgroundColor: 'white' }} />
                                {drawer}
                            </Drawer>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    mr: 2,
                                    '&:hover': {
                                        color: '#0DCCD7', // Change text color on hover
                                    },
                                }}
                                onClick={() => handleScroll('contact', 1400)}
                            >
                                <Link href='/#contact' style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Contact
                                </Link>
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
                                    Book Meeting
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
