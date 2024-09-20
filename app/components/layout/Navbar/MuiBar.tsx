"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import logo from '@/public/logo/acecloud.png'
import Image from 'next/image';

const drawerWidth = 240;

const MuiBar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
    const [isClosing, setIsClosing] = React.useState<boolean>(false);

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
        <div>
            <List onClick={handleDrawerClose}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        href="/"
                        sx={{ color: 'inherit' }}
                    >
                        <ListItemIcon sx={{ color: 'inherit' }}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        href="/aboutUs"
                        sx={{ color: 'inherit' }}
                    >
                        <ListItemIcon sx={{ color: 'inherit' }}>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        href="/career"
                        sx={{ color: 'inherit' }}
                    >
                        <ListItemIcon sx={{ color: 'inherit' }}>
                            <WorkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Career" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        href="/contact"
                        sx={{ color: 'inherit' }}
                    >
                        <ListItemIcon sx={{ color: 'inherit' }}>
                            <ContactMailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </div>
    );

    return (
        <AppBar
            sx={{
                backgroundColor: 'hsla(0, 0%, 100%, 0.6)',
                backdropFilter: 'blur(9.8px)',
                color: 'black',
                py: { xs: 0, md: '2px' },
                boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)',
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                zIndex: 1110,
            }}
        >

            <Container maxWidth="xl">
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                        <Button sx={{ my: 2, color: 'black' }}>
                            <ScrollLink to="home" smooth={true} duration={1500}>
                                Home
                            </ScrollLink>
                        </Button>
                        <Button sx={{ my: 2, color: 'black' }}>
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
                        <div className='w-40'>
                            <Image
                                src={logo}
                                alt="text"
                                layout="responsive"
                            />
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
                        <div className='w-32'>
                            <Image
                                src={logo}
                                alt="text"
                                layout="responsive"
                            />
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
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            <Box sx={{ m: 2, textAlign: 'center' }}>
                                <Typography variant="h6">AceCloud</Typography>
                            </Box>
                            <Divider sx={{ backgroundColor: 'white' }} />
                            {drawer}
                        </Drawer>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button sx={{ my: 2, color: 'black' }}>
                            <ScrollLink to="project" smooth={true} duration={1500}>
                                Projects
                            </ScrollLink>
                        </Button>
                        <Button sx={{ my: 2, color: 'black' }}>
                            <ScrollLink to="contact" smooth={true} duration={1500}>
                                Contact
                            </ScrollLink>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MuiBar;
