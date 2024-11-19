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
        <Box >
            {/* Animated Background Circles */}
            <Container maxWidth="lg" sx={{ borderTop: '1.5px solid rgba(225, 225, 225, 0.1)', }}>
                <footer
                    className="relative pt-20 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]"
                >
                    {/* Decorative Dot at the Top */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-white rounded-full ">
                    </div>

                    {/* Footer Content */}
                    <div className="text-gray-200 lg:flex items-start gap-20 ">
                        <div className="lg:w-[500px]">
                            <div className="mb-4">
                                {/* <svg className="w-7 h-7 text-white"></svg> */}
                                <h2 className="text-2xl font-bold text-white">AceCloud</h2>
                            </div>
                            <p className="text-sm">
                                With AceCloud <span className="text-white font-semibold">Design</span>, <span className="text-[#1D4ED8] font-semibold">Optimize</span>, <span className="text-white font-semibold">Transform</span>.
                            </p>
                            <span className="mt-4 text-gray-400 text-sm">
                                Made by <a className="font-semibold text-white hover:underline" href="https://AceCloudagency.com">AceCloud Agency</a>
                            </span>
                        </div>

                        {/* Navigation Links */}
                        <div className="grid grid-cols-2 lg:mt-0 mt-10 md:grid-cols-5 gap-5 mx-auto">
                            <FooterLinkSection title="Follow Us" links={[
                                { name: 'Linkedin', href: 'https://ca.linkedin.com/company/acecloud-ca' },
                                { name: 'Dribbble', href: 'https://dribbble.com/AceCloud' },
                                { name: 'Behance', href: 'https://www.behance.net/AceCloud_ca' }
                            ]} />

                            <FooterLinkSection title="Resources" links={[
                                { name: 'Blog', href: '/blog' },
                                { name: 'Contact Us', href: '/contact-us' }
                            ]} />

                            <FooterLinkSection title="Company" links={[
                                { name: 'About Us', href: '/about-us' },
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
                    <div className="lg:mt-2 py-10 md:pt-4 w-full">
                        <p className="text-sm text-gray-400">© 2024 AceCloud All rights reserved.</p>
                    </div>

                    {/* Glowing Gradient Text */}
                    <div onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave} className="lg:h-[20.5rem] h-[10rem] w-full mt-4">
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
                            <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" stroke="url(#textGradient)" stroke-width="0.3" mask="url(#textMask)" className="font-bold fill-transparent text-7xl">AceCloud</text>
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
