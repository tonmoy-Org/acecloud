'use client';

import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';


function Footer() {
    const [glowPosition, setGlowPosition] = useState({ x: "50%", y: "50%" });
    const [opacity, setOpacity] = useState(0);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');



    const handleMouseMove = useCallback((e) => {
        // Calculate the mouse position as a percentage of the viewport dimensions
        const xPos = `${(e.clientX / window.innerWidth) * 100}%`;
        const yPos = `${(e.clientY / window.innerHeight) * 100}%`;

        // Update glow position and set opacity based on cursor proximity
        setGlowPosition({ x: xPos, y: yPos });
        setOpacity(1);
    }, []);

    const handleMouseLeave = () => {
        // Reset opacity when the cursor leaves the text area
        setOpacity(0);
    };


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
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY_NEWSLETTER,
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
        <Box sx={{ border: '1px solid rgba(225, 225, 225, 0.1)', }}>
            {/* Animated Background Circles */}

            <Container maxWidth="lg">
                <footer
                    className="relative pt-16 px-6 lg:px-8"
                >
                    {/* Decorative Dot at the Top */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-white rounded-full">
                        <Box sx={{
                            position: 'absolute',
                            top: '-50px',
                            left: '-50px',
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.1)',
                            filter: 'blur(50px)',
                            zIndex: 0,
                        }} /></div>

                    {/* Footer Content */}
                    <div className="text-gray-200 flex items-start gap-20">
                        <div className="w-[350px]">
                            <div className="mb-4">
                                {/* <svg className="w-7 h-7 text-white"></svg> */}
                                <h2 className="text-2xl font-bold text-white">AceCloud Agency</h2>
                            </div>
                            <p className="text-sm">
                                With AceCloud <span className="text-white font-semibold">Design</span>, <span className="text-[#1D4ED8] font-semibold">Optimize</span>, <span className="text-white font-semibold">Transform</span>.
                            </p>
                            <span className="mt-4 text-gray-400 text-sm">
                                Made by <a className="font-semibold text-white hover:underline" href="https://AceCloudagency.com">AceCloud Agency</a>
                            </span>
                        </div>

                        {/* Navigation Links */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-screen-lg mx-auto">
                            <FooterLinkSection title="Integrations" links={[
                                { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61563399607727' },
                                { name: 'Instagram', href: 'https://www.instagram.com/AceCloudagency/' },
                                { name: 'X', href: 'https://x.com/AceCloudAgency' },
                                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/AceCloud-agency/' }
                            ]} />

                            <FooterLinkSection title="Resources" links={[
                                { name: 'Blog', href: '/resources/blog' },
                                { name: 'Support', href: '/resources/help' },
                                { name: 'Contact Us', href: '/resources/help' }
                            ]} />

                            <FooterLinkSection title="Company" links={[
                                { name: 'About Us', href: '/about' },
                                { name: 'Privacy Policy', href: '/privacy' },
                                { name: 'Terms & Conditions', href: '/terms' }
                            ]} />

                            <Box>
                                <FooterLinkSection title="Newsletter" links={[{ name: '', href: '' }]} />
                                <form onSubmit={handleSubscribe}>
                                    <TextField
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        label="Enter your email"
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            input: { color: '#fff' },
                                            label: { color: '#aaa' },
                                            fieldset: { borderColor: '#1D4ED8' },
                                            mb: 2,
                                            width: { xs: '100%', sm: 230 },
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'default',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#1D4ED8',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#1D4ED8',
                                                },
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: 'default',
                                            },
                                            '&:hover .MuiInputLabel-root': {
                                                color: '#1D4ED8',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#1D4ED8',
                                            },
                                        }}
                                    />
                                    <Button
                                        type="submit"
                                        sx={{ textTransform: 'none' }}
                                        variant="outlined"
                                        className="relative inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium text-slate-200 border-[1.7px] bg-[#1D4ED8] border-[#1D4ED8] rounded-lg animated-border"
                                    >
                                        <span className="absolute inset-0 transition-all duration-200 transform -translate-x-full rounded-lg"></span>
                                        <span className="relative z-10">Subscribe</span>
                                    </Button>
                                </form>
                                {message && (
                                    <Typography variant="body2" sx={{ color: "#1D4ED8", mt: 1 }}>{message}</Typography>
                                )}
                            </Box>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-2 pt-4 md:pt-4 w-full">
                        <p className="text-sm text-gray-400">© 2024 AceCloud Agency INC. All rights reserved.</p>
                    </div>

                    {/* Glowing Gradient Text */}
                    <div onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave} className="h-[20.5rem] w-full mt-4">
                        <svg width="100%" height="100%" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" className="select-none">
                            <defs>
                                {/* Create a radial gradient for a small, circular glow effect */}
                                <radialGradient id="radialGlow" cx={glowPosition.x} cy={glowPosition.y} x1={glowPosition.x} x2={glowPosition.x} y1={glowPosition.y} y2={glowPosition.y} r="35%" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" style={{ stopColor: "#ff00ff", stopOpacity: opacity }} />
                                    <stop offset="50%" style={{ stopColor: "#00ffff", stopOpacity: opacity }} />
                                    <stop offset="100%" style={{ stopColor: "transparent", stopOpacity: 0 }} />
                                </radialGradient>
                            </defs>
                            <text
                                x="50%"
                                y="50%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                stroke="url(#radialGlow)"
                                strokeWidth="0.3"
                                className="font-bold fill-transparent text-7xl transition-opacity duration-500 ease-in-out"
                                style={{ opacity }}
                            >
                                AceCloud
                            </text>
                            <text
                                x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" stroke-width="0.3" className="font-bold fill-transparent text-7xl stroke-neutral-800" stroke-dashoffset="0" stroke-dasharray="1000">AceCloud</text>
                            <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" stroke="url(#textGradient)" stroke-width="0.3" mask="url(#textMask)" className="font-[helvetica] font-bold fill-transparent text-7xl">AceCloud</text>
                        </svg>
                    </div>
                </footer>
            </Container>
        </Box >
    );
}

const FooterLinkSection = ({ title, links }) => (
    <div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <ul className="mt-4 text-sm space-y-2">
            {links.map((link) => (
                <li key={link.name}>
                    <a className="hover:text-[#1D4ED8] transition duration-300" href={link.href}>{link.name}</a>
                </li>
            ))}
        </ul>
    </div>
);

export default Footer;
