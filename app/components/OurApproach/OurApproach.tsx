'use client';

import { FC, ReactNode, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import ApproachSection from '../SectionTitle/SectionTitle';

const staggerContainer = {
    hidden: { opacity: 0, y: 100 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.3,
            duration: 0.5,
        },
    },
};

const staggerItem = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface CardProps {
    step: string;
    title: string;
    description: string;
    icon: ReactNode;
    index: number;
    glowPosition: { x: string; y: string };
    isHovered: boolean;
    onMouseMove: (e: React.MouseEvent) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const OurApproach: FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [glowPosition, setGlowPosition] = useState<{ x: string; y: string }>({
        x: '50%',
        y: '50%',
    });

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            const { clientX, clientY, currentTarget } = e;
            const { left, top } = currentTarget.getBoundingClientRect();
            setGlowPosition({
                x: `${clientX - left}px`,
                y: `${clientY - top}px`,
            });
        },
        []
    );

    const handleMouseEnter = (index: number) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    const cardData = [
        {
            step: '1',
            title: 'Understand Your Needs',
            description: 'We dive deep into your goals to create a website that perfectly aligns with your vision.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.3-4.3"></path>
                </svg>
            ),
        },
        {
            step: '2',
            title: 'Design and Develop',
            description: 'Crafting custom designs and building robust websites that reflect your brand identity.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                    <path d="M15 5l4 4"></path>
                </svg>
            ),
        },
        {
            step: '3',
            title: 'Launch and Support',
            description: 'Seamlessly deploy your website and provide ongoing support to ensure your success.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
            ),
        },
    ];

    return (
        <section className="h-full mx-auto w-full text-white max-w-full md:max-w-screen-xl px-4 md:px-12 lg:px-20 py-10 relative">
            <ApproachSection
                header="Our Approach"
                title="Build your website in 3 easy steps"
                description="Our seamless process ensures that designing, developing, and launching your website is simple and efficient."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full pb-8 pt-4 gap-4 md:gap-8">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        index={index}
                        step={card.step}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                        glowPosition={glowPosition}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        isHovered={hoveredCard === index}
                    />
                ))}
            </div>
        </section>
    );
};

const Card: FC<CardProps> = ({ step, title, description, icon, glowPosition, onMouseMove, isHovered, onMouseEnter, onMouseLeave }) => {
    const glowStyle = useMemo(() => ({
        background: `radial-gradient(500px at ${glowPosition.x} ${glowPosition.y}, ${isHovered ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0)'}, transparent 60%)`,
        transition: 'background 0.3s ease-out', // Smooth transition for glow
    }), [glowPosition, isHovered]);

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div
                className="relative max-w-md overflow-hidden rounded-xl bg-gradient-to-r from-background to-background/40 p-4 md:p-6 group md:py-8"
                onMouseMove={onMouseMove}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{ border: '1px solid rgba(225, 225, 225, 0.1)' }}
                variants={staggerItem}
            >
                <div className="flex flex-col items-start justify-center w-full h-38 relative">
                    {icon}
                    <div className="flex flex-col items-start">
                        <span className="absolute -top-2 lg:-top-6 right-0 text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5"
                            style={{ border: '1px solid rgba(225, 225, 225, 0.1)' }}
                        >
                            {step}
                        </span>
                        <h3 className="text-base mt-6 font-medium text-foreground">{title}</h3>
                        <p className="mt-2 text-sm" style={{ color: 'hsl(220 10% 54.4%)' }}>{description}</p>
                    </div>
                </div>

                {/* Glow Effect */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-60 transition duration-300"
                    style={glowStyle}
                ></div>
            </motion.div>
        </motion.div>
    );
};

export default OurApproach;
