import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

interface ApproachSectionProps {
    header: string;         // Dynamic header (e.g., "Our Approach")
    title: string;          // Dynamic title (e.g., "Build your website in 3 easy steps")
    description: string;    // Dynamic description
}

const ApproachSection: React.FC<ApproachSectionProps> = ({ header, title, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-center justify-center w-full py-8 max-w-xl mx-auto mb-8 px-2"
        >
            <Typography
                color='#FFD700'
                gutterBottom
                sx={{
                    textTransform: 'uppercase',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    animation: 'shadow-pulse 1.5s infinite'
                }}
            >
                {header}
            </Typography>
            {/* Use the SectionTitle component for the title */}
            <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center text-3xl md:text-[2.5rem] font-bold text-white leading-normal"
            >
                {title}
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-2 text-center text-lg max-w-lg"
                style={{ color: 'hsl(220 10% 54.4%)' }}
            >
                {description}
            </motion.p>
        </motion.div>
    );
};

export default ApproachSection;
