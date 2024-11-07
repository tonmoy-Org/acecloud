'use client';

import { FC, ReactNode, useState, useCallback, useMemo } from 'react';

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
            <div className="flex flex-col items-center justify-center w-full py-8 max-w-xl mx-auto">
                <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
                    <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#6d28d9_0%,#d8b4fe_50%,#6d28d9_100%)]"></span>
                    <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Our Approach
                    </span>
                </div>
                <h2 className="text-center text-3xl md:text-5xl font-medium mt-6 text-foreground">
                    Build your website in 3 easy steps
                </h2>
                <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
                    Our seamless process ensures that designing, developing, and launching your website is simple and efficient.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
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
        background: `radial-gradient(500px at ${glowPosition.x} ${glowPosition.y}, ${isHovered ? 'rgba(168, 85, 247, 0.6)' : 'rgba(168, 85, 247, 0.1)' // Intense glow for hovered card, subtle glow for others
            }, transparent 60%)`,
    }), [glowPosition, isHovered]);

    return (
        <div
            className="relative max-w-md overflow-hidden rounded-xl border border-border/60 bg-gradient-to-r from-background to-background/40 p-4 md:p-6 group md:py-8"
            onMouseMove={onMouseMove}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex flex-col items-start justify-center w-full relative">
                {icon}
                <div className="flex flex-col items-start">
                    <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                        {step}
                    </span>
                    <h3 className="text-base mt-6 font-medium text-foreground">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                </div>
            </div>

            {/* Glow Effect */}
            <div
                className="pointer-events-none absolute inset-0 opacity-60 transition duration-300"
                style={glowStyle}
            ></div>
        </div>
    );
};

export default OurApproach;
