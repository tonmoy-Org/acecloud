import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
const CustomHero: React.FC<CustomHeroProps> = ({
    title,
    subtitle,
    linkHref,
    linkText,
    imageSrc,
    imageAlt,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
        >
            {/* Button Section */}
            <Box textAlign="center" sx={{ my: 2 }}>
                <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
                    <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#6d28d9_0%,#d8b4fe_50%,#6d28d9_100%)]"></span>
                    <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        <Link href={linkHref} className="text-white">{linkText}</Link>
                    </span>
                </div>
            </Box>

            {/* Title and Subtitle */}
            <Box sx={{ px: 2, mx: 'auto', mb: { xs: 4, md: 6 }, maxWidth: { xs: 330, sm: 500, md: 700 } }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '2.5rem' },
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: 'white',
                        lineHeight: { xs: '1.5', md: '1.8' },
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontSize: { xs: '0.9rem', md: '1.125rem' },
                        textAlign: 'center',
                        color: '#BABABA',
                        mt: 2,
                    }}
                >
                    {subtitle}
                </Typography>
            </Box>

            {/* Hero Image */}
            <Box sx={{ maxWidth: 850, mx: 'auto', my: 4 }}>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={850}
                    height={500}
                    style={{
                        width: '100%',
                        height: '550px',
                        borderRadius: '5px',
                        objectFit: 'cover',
                        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
                    }}
                />
            </Box>
        </motion.div>
    );
};

export default CustomHero;
