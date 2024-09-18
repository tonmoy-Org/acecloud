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
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '@/public/logo/a-minimalist-logo-for-acecloud-a-website-and-digit-Z5PbTxWZTmqOsVGnPwg4lA-rkkGkEoFRaGFriGCaxCVmg.jpeg-removebg-preview.png';

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
            transition={{ duration: 1 }}
        >
            <AppBar
                id="home"
                position="static"
                sx={{ bgcolor: 'black', color: 'white', boxShadow: 0 }}
            >
                <Container maxWidth="xl">
                    <Toolbar>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                            <Button sx={{ my: 2, color: 'white' }}>
                                <ScrollLink href='/' to="home" smooth={true} duration={1700}  offset={-70} >
                                    Home
                                </ScrollLink>
                            </Button>
                            <Button sx={{ my: 2, color: 'white' }}>
                                <ScrollLink to="about" smooth={true} duration={1500}>
                                    About
                                </ScrollLink>
                            </Button>
                        </Box>
                        <Typography
                            variant="h4"
                            noWrap
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexGrow: 0.87,
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
                            <Button sx={{ my: 2, color: 'white' }}>
                                <ScrollLink to="project" smooth={true} duration={1700}>
                                    Projects
                                </ScrollLink>
                            </Button>
                            <Button sx={{ my: 2, color: 'white' }}>
                                <ScrollLink to="contact" smooth={true} duration={1700}>
                                    Contact
                                </ScrollLink>
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </motion.div>
    );
};

export default ResponsiveAppBar;
