'use client';

import React, { useState, useEffect } from 'react';
import {
    AppBar, Box, Toolbar, IconButton, Typography, Container,
    Button, Divider, Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo/acecloud.png';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import LinkIcon from '@mui/icons-material/Link';
import HttpsIcon from '@mui/icons-material/Https';
import InsightsIcon from '@mui/icons-material/Insights';
import LanguageIcon from '@mui/icons-material/Language';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TvIcon from '@mui/icons-material/Tv';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import feature from '@/public/feature/f1.jpg';
import service from '@/public/feature/service.jpg';


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

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center', bgcolor: 'hsl(220, 65%, 3.52%)', height: '100%', color: 'white' }}>
            <Box sx={{ p: 4 }}>
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
                <Box display="flex" justifyContent="left" mb={2}>
                    <Image src={logo} alt="Ace Cloud Logo" width={140} height={80} />
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                <Button
                    onClick={handleDrawerClose}
                    variant="outlined"
                    component={Link}
                    prefetch={true}
                    href="/book-meeting"
                    sx={{
                        my: 1,
                        color: 'white',
                        borderColor: '#1D4ED8',
                        transition: 'transform 0.3s ease, background-color 0.3s ease',
                        borderRadius: '6px',
                        textTransform: 'none !important',
                        py: '2px !important',
                        px: '8px !important',
                    }}
                >
                    Book a call with us
                </Button>
                <Button
                    onClick={handleDrawerClose}
                    variant="outlined"
                    component={Link}
                    prefetch={true}
                    href="/book-meeting"
                    sx={{
                        my: 1,
                        color: 'white',
                        borderColor: '#1D4ED8',
                        transition: 'transform 0.3s ease, background-color 0.3s ease',
                        borderRadius: '6px',
                        textTransform: 'none !important',
                        py: '2px !important',
                        px: '8px !important',
                    }}
                >
                    Start Building Now
                </Button>
            </Box>
            <Divider />
            <List sx={{ p: 2 }}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        prefetch={true}
                        onClick={handleDrawerClose}
                        href="/"
                    >
                        <ListItemText primary='Home' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <Accordion
                        expanded={expanded === 'panel1'}
                        onChange={handleAccordionChange('panel1')}
                        sx={{ '&:hover': { color: 'white' }, textTransform: 'none !important', color: 'hsl(220 10% 54.4%)', bgcolor: "hsl(220, 65%, 3.52%)" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        >
                            <Typography className="text-sm font-medium text-neutral-400">Features</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className="space-y-1 p-2">
                                <li className='hover:bg-[#262626] p-1 rounded-md'>
                                    <Link prefetch={true} href="/feature/customwebpage" className="flex items-center  py-1 text-sm text-gray-700">
                                        <LinkIcon className="w-5 h-5 mr-3 text-gray-500" />
                                        <span className="text-[#F5F5F5] font-semibold">
                                            Custom Website <br />
                                            <span className='line-clamp-1 text-[#A3A3A3]'>
                                                Create a custom website with your own domain name and branding
                                            </span>
                                        </span>
                                        <br />
                                    </Link>
                                </li>
                                <li className='hover:bg-[#262626] p-1 rounded-md'>
                                    <Link prefetch={true} href="/feature/securehosting" className="flex items-center  py-1 text-sm text-gray-700">
                                        <HttpsIcon className="w-5 h-5 mr-3 text-gray-500" />
                                        <span className="text-[#F5F5F5] font-semibold">
                                            Secure Hosting <br />
                                            <span className='line-clamp-1 text-[#A3A3A3]'>
                                                Ensure your website is always accessible with reliable hosting solutions
                                            </span>
                                        </span>
                                        <br />
                                    </Link>
                                </li>
                                <li className='hover:bg-[#262626] p-1 rounded-md'>
                                    <Link prefetch={true} href="/feature/performanceinsights" className="flex items-center  py-1 text-sm text-gray-700">
                                        <InsightsIcon className="w-5 h-5 mr-3 text-gray-500" />
                                        <span className="text-[#F5F5F5] font-semibold">
                                            Performance Insights <br />
                                            <span className='line-clamp-1 text-[#A3A3A3]'>
                                                Get real-time performance insights to improve your website's speed and user experience
                                            </span>
                                        </span>
                                        <br />
                                    </Link>
                                </li>
                                <li className='hover:bg-[#262626] p-1 rounded-md'>
                                    <Link prefetch={true} href="/feature/resposiveweb" className="flex items-center  py-1 text-sm text-gray-700">
                                        <TvIcon className="w-5 h-5 mr-3 text-gray-500" />
                                        <span className="text-[#F5F5F5] font-semibold">
                                            Responsive Design <br />
                                            <span className='line-clamp-1 text-[#A3A3A3]'>
                                                Ensure your website looks great on all devices with responsive design features
                                            </span>
                                        </span>
                                        <br />
                                    </Link>
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
                <ListItem disablePadding>
                    <Accordion
                        expanded={expanded === 'panel2'}
                        onChange={handleAccordionChange('panel2')}
                        sx={{ '&:hover': { color: 'white' }, textTransform: 'none !important', color: 'hsl(220 10% 54.4%)', bgcolor: "hsl(220, 65%, 3.52%)", }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        >
                            <Typography className="text-sm font-medium text-neutral-400">Service</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className="space-y-1 p-2">
                                <li className='hover:bg-[#262626] p-1 rounded-md'>
                                    <Link prefetch={true} href="/services-us/web-design" className="flex items-center px-2 py-1 text-sm text-gray-700">
                                        <LanguageIcon className="w-5 h-5 mr-3 text-gray-500" />
                                        <span className="text-[#F5F5F5] font-semibold">
                                            Web Design <br />
                                            <span className='line-clamp-1 text-[#A3A3A3]'>
                                                Deliver your business to a wider audience. We create websites that are visually appealing, easy to navigate, and optimized for performance.
                                            </span>
                                        </span>
                                        <br />
                                    </Link>
                                </li>
                                <li className='hover:bg-[#262626] p-1 rounded-md'>
                                    <Link prefetch={true} href="/services-us/branding" className="flex items-center px-2 py-1 text-sm text-gray-700">
                                        <BrandingWatermarkIcon className="w-5 h-5 mr-3 text-gray-500" />
                                        <span className="text-[#F5F5F5] font-semibold">
                                            Branding <br />
                                            <span className='line-clamp-1 text-[#A3A3A3]'>
                                                Creating brands your proud of is a crucial aspect of any business. We help businesses create a unique brand identity that resonates with their target audience.
                                            </span>
                                        </span>
                                        <br />
                                    </Link>
                                </li>
                                <li className='hover:bg-[#262626] p-1 rounded-md'>
                                    <Link prefetch={true} href="/services-us/seo-page" className="flex items-center px-2 py-1 text-sm text-gray-700">
                                        <TravelExploreIcon className="w-5 h-5 mr-3 text-gray-500" />
                                        <span className="text-[#F5F5F5] font-semibold">
                                            SEO <br />
                                            <span className='line-clamp-1 text-[#A3A3A3]'>
                                                Get your brand seen online is crucial for any business. We help businesses optimize their website for search engines, ensuring that their content is easily discoverable and accessible to potential customers.
                                            </span>
                                        </span>
                                        <br />
                                    </Link>
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        prefetch={true}
                        onClick={handleDrawerClose}
                        href="/about-us"
                        sx={{ '&:hover': { color: 'white' }, textTransform: 'none !important', color: 'hsl(220 10% 54.4%)' }}

                    >
                        About
                    </ListItemButton>

                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={handleDrawerClose}
                        component={Link}
                        prefetch={true}
                        href="/pricing"
                        sx={{ '&:hover': { color: 'white' }, textTransform: 'none !important', color: 'hsl(220 10% 54.4%)' }}

                    >
                        Pricing
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={handleDrawerClose}
                        component={Link}
                        prefetch={true}
                        href="/blog"
                        sx={{ '&:hover': { color: 'white' }, textTransform: 'none !important', color: 'hsl(220 10% 54.4%)' }}

                    >
                        Blog
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={handleDrawerClose}
                        component={Link}
                        prefetch={true}
                        href="/blog"
                        sx={{ '&:hover': { color: 'white' }, textTransform: 'none !important', color: 'hsl(220 10% 54.4%)' }}

                    >
                        Contact
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.01)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: elevate ? '0px 4px 12px rgba(0, 0, 0, 0.2)' : 'none',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingLeft: '0px !important',
                        paddingRight: '0px !important',

                    }}>
                        <Typography variant="h4" noWrap sx={{ textAlign: 'center' }}>
                            <div className="w-32 me-10">
                                <Link prefetch={true} href="/" passHref>
                                    <Image src={logo} onClick={() => handleScroll('home', 1400)} alt="Ace Cloud Logo" layout="responsive" />
                                </Link>
                            </div>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <div className="relative group">
                                <Button
                                    component={Link}
                                    prefetch={true}
                                    href="/feature"
                                    sx={{ my: 1, '&:hover': { color: 'white' }, textTransform: 'none !important', color: 'hsl(220 10% 54.4%)' }}
                                >
                                    Features
                                    <ChevronDownIcon className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                                </Button>
                                <div className="absolute left-0 mt-0 hidden w-[500px] rounded-md text-white shadow-lg group-hover:block p-3"
                                    style={{ backgroundColor: 'hsl(220, 65%, 3.52%)', border: '1px solid rgba(225, 225, 225, 0.1)' }}
                                >

                                    <div className="flex w-full gap-2">
                                        <div className="w-2/4 p-4 relative bg-[#262626] rounded-md"
                                        >
                                            <div className='absolute bottom-5 left-5 right-0'>
                                                <Link href='feature'>
                                                    <Image className='w-44 h-full mb-4' src={feature} alt="Feature" />
                                                    <h1 className="text-lg font-bold">All Features</h1>
                                                    <p className="text-sm text-[#A3A3A3]">
                                                        Build dynamic websites, enhance performance, and scale effortlessly.
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="w-3/5">
                                            <ul className="flex flex-col space-y-1 p-2">
                                                <li className='hover:bg-[#262626] p-1 rounded-md'>
                                                    <Link prefetch={true} href="/feature/customwebpage" className="flex items-center  py-1 text-sm text-gray-700">
                                                        <LinkIcon className="w-5 h-5 mr-3 text-gray-500" />
                                                        <span className="text-[#F5F5F5] font-semibold">
                                                            Custom Website <br />
                                                            <span className='line-clamp-1 text-[#A3A3A3]'>
                                                                Create a custom website with your own domain name and branding
                                                            </span>
                                                        </span>
                                                        <br />
                                                    </Link>
                                                </li>
                                                <li className='hover:bg-[#262626] p-1 rounded-md'>
                                                    <Link prefetch={true} href="/feature/securehosting" className="flex items-center  py-1 text-sm text-gray-700">
                                                        <HttpsIcon className="w-5 h-5 mr-3 text-gray-500" />
                                                        <span className="text-[#F5F5F5] font-semibold">
                                                            Secure Hosting <br />
                                                            <span className='line-clamp-1 text-[#A3A3A3]'>
                                                                Ensure your website is always accessible with reliable hosting solutions
                                                            </span>
                                                        </span>
                                                        <br />
                                                    </Link>
                                                </li>
                                                <li className='hover:bg-[#262626] p-1 rounded-md'>
                                                    <Link prefetch={true} href="/feature/performanceinsights" className="flex items-center  py-1 text-sm text-gray-700">
                                                        <InsightsIcon className="w-5 h-5 mr-3 text-gray-500" />
                                                        <span className="text-[#F5F5F5] font-semibold">
                                                            Performance Insights <br />
                                                            <span className='line-clamp-1 text-[#A3A3A3]'>
                                                                Get real-time performance insights to improve your website's speed and user experience
                                                            </span>
                                                        </span>
                                                        <br />
                                                    </Link>
                                                </li>
                                                <li className='hover:bg-[#262626] p-1 rounded-md'>
                                                    <Link prefetch={true} href="/feature/resposiveweb" className="flex items-center  py-1 text-sm text-gray-700">
                                                        <TvIcon className="w-5 h-5 mr-3 text-gray-500" />
                                                        <span className="text-[#F5F5F5] font-semibold">
                                                            Responsive Design <br />
                                                            <span className='line-clamp-1 text-[#A3A3A3]'>
                                                                Ensure your website looks great on all devices with responsive design features
                                                            </span>
                                                        </span>
                                                        <br />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="relative group">
                                <Button
                                    component={Link}
                                    prefetch={true}
                                    href="/services-us"
                                    sx={{ my: 1, '&:hover': { color: 'white' }, textTransform: 'none !important', color: 'hsl(220 10% 54.4%)' }}
                                >
                                    Service
                                    <ChevronDownIcon className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                                </Button>
                                <div className="absolute left-0 mt-0 hidden w-[600px] rounded-md text-white shadow-lg group-hover:block p-3"
                                    style={{ backgroundColor: 'hsl(220, 65%, 3.52%)', border: '1px solid rgba(225, 225, 225, 0.1)' }}
                                >

                                    <div className="flex w-full gap-2 h-56">
                                        <div className="w-3/5">
                                            <ul className="flex flex-col space-y-1 p-2">
                                                <li className='hover:bg-[#262626] p-1 rounded-md'>
                                                    <Link prefetch={true} href="/services-us/web-design" className="flex items-center px-2 py-1 text-sm text-gray-700">
                                                        <LanguageIcon className="w-5 h-5 mr-3 text-gray-500" />
                                                        <span className="text-[#F5F5F5] font-semibold">
                                                            Web Design <br />
                                                            <span className='line-clamp-1 text-[#A3A3A3]'>
                                                                Deliver your business to a wider audience and create a visually appealing website that is easy to navigate and optimized for performance.
                                                            </span>
                                                        </span>
                                                        <br />
                                                    </Link>
                                                </li>
                                                <li className='hover:bg-[#262626] p-1 rounded-md'>
                                                    <Link prefetch={true} href="/services-us/branding" className="flex items-center px-2 py-1 text-sm text-gray-700">
                                                        <BrandingWatermarkIcon className="w-5 h-5 mr-3 text-gray-500" />
                                                        <span className="text-[#F5F5F5] font-semibold">
                                                            Branding <br />
                                                            <span className='line-clamp-1 text-[#A3A3A3]'>
                                                                Creating brands your proud of is a crucial aspect of any business. We help businesses create a unique brand identity that resonates with their target audience.
                                                            </span>
                                                        </span>
                                                        <br />
                                                    </Link>
                                                </li>
                                                <li className='hover:bg-[#262626] p-1 rounded-md'>
                                                    <Link prefetch={true} href="/services-us/seo-page" className="flex items-center px-2 py-1 text-sm text-gray-700">
                                                        <TravelExploreIcon className="w-5 h-5 mr-3 text-gray-500" />
                                                        <span className="text-[#F5F5F5] font-semibold">
                                                            SEO <br />
                                                            <span className='line-clamp-1 text-[#A3A3A3]'>
                                                                Get your brand seen online  is crucial for any business. We help businesses optimize their website for search engines, ensuring that their content is easily discoverable and accessible to potential customers.
                                                            </span>
                                                        </span>
                                                        <br />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="w-2/4 p-4 relative bg-[#262626] rounded-md"
                                        >
                                            <div className='absolute bottom-2 left-6 right-0'>
                                                <Link href='services-us'>
                                                    <Image className='w-52 h-full mb-4' src={service} alt="Feature" />
                                                    <h1 className="text-lg font-bold">All Services</h1>
                                                    <p className="text-sm text-[#A3A3A3]">
                                                        We dont stop there, check out all
                                                        the services we offer here at Shape
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <Button
                                component={Link}
                                prefetch={true}
                                href="/about-us"
                                sx={{ my: 1, mx: 1, '&:hover': { color: 'white' }, textTransform: 'none !important', color: 'hsl(220 10% 54.4%)' }}

                            >
                                About
                            </Button>
                            <Button
                                component={Link}
                                prefetch={true}
                                href="/blog"
                                sx={{ my: 1, mx: 1, '&:hover': { color: 'white' }, textTransform: 'none !important', color: 'hsl(220 10% 54.4%)' }}

                            >
                                Blog
                            </Button>
                            <Button
                                component={Link}
                                prefetch={true}
                                href="/pricing"
                                sx={{ my: 1, mx: 1, '&:hover': { color: 'white' }, textTransform: 'none !important', color: 'hsl(220 10% 54.4%)' }}

                            >
                                Pricing
                            </Button>
                            <Button
                                component={Link}
                                prefetch={true}
                                href="/contact-us"
                                sx={{ my: 1, mx: 1, '&:hover': { color: 'white' }, textTransform: 'none !important', color: 'hsl(220 10% 54.4%)' }}

                            >
                                Contact
                            </Button>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Button
                                sx={{ textTransform: 'none !important' }}
                                variant="outlined"
                                component={Link}
                                prefetch={true}
                                href="/book-meeting"
                                className="relative inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium text-slate-200 border-[1.7px] border-[#1D4ED8] rounded-lg animated-border"
                            >
                                <span className="absolute inset-0 transition-all duration-200 transform -translate-x-full rounded-lg group-hover:translate-x-0"></span>
                                <span className="relative z-10">Book a call with us</span>
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
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerClose}
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default ResponsiveAppBar;
