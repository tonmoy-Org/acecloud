import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Styled component for the hero image
const HeroImage = styled("img")({
    width: "100%",
    maxWidth: "850px",
    margin: "2rem auto",
    display: "block",
    borderRadius: "5px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
});

// Define a TypeScript interface for props
interface CustomHeroProps {
    title: string;
    subtitle: string;
    linkHref: string;
    linkText: string;
    imageSrc: string;
    imageAlt: string;
}

// Reusable Hero Component
const CustomHero: React.FC<CustomHeroProps> = ({ title, subtitle, linkHref, linkText, imageSrc, imageAlt }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <Box textAlign="center" sx={{ my: 2 }}>
                <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
                    <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#6d28d9_0%,#d8b4fe_50%,#6d28d9_100%)]"></span>
                    <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        <Link href={linkHref} className="text-white">{linkText}</Link>
                    </span>
                </div>
            </Box>
            <Box sx={{ width: { xs: 330, md: 700 }, mx: 'auto' }}>
                <p
                    className="text-2xl lg:text-5xl lg:!leading-snug font-semibold lg:mt-3 text-white text-center py-2"
                >
                    {title}
                </p>
                <p className="text-[14px] lg:text-xl lg:!leading-snug lg:mt-3 text-[#BABABA] text-center py-2">
                    {subtitle}
                </p>
            </Box>
            {/* Hero Image */}
            <HeroImage src={imageSrc} alt={imageAlt} />
        </motion.div>
    );
};

export default CustomHero;
