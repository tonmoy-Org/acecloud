'use client';
import { useState, useCallback } from "react";

export default function HighlightSection() {
    const [glowPosition, setGlowPosition] = useState({ x: "50%", y: "0%" });

    const handleMouseMove = useCallback((e) => {
        const { clientX, clientY } = e;
        setGlowPosition({
            x: `${clientX}px`,
            y: `${clientY}px`,
        });
        console.log(`Glow Position - x: ${clientX}px, y: ${clientY}px`);
    }, []);

    return (
        <section
            className="highlight-section"
            onMouseMove={handleMouseMove}
            style={{
                background: `radial-gradient(circle at ${glowPosition.x} ${glowPosition.y}, rgba(0, 55, 255,0.2), transparent 60%), linear-gradient(180deg, hsl(220, 65%, 3.52%) 0%, hsl(220, 65%, 3.52%) 35.54%, hsl(220, 65%, 3.52%) 100%)`,
            }}
        >
            <div className="rte text-center relative z-10 text-white">
                <h2 className="text-3xl font-bold">
                    The results speak for themselves
                </h2>
                <p className="text-lg mt-2">
                    We help the world's most successful brands make great things happen.
                </p>
            </div>
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${glowPosition.x} ${glowPosition.y}, rgba(255, 255, 255, 0.5), transparent 60%)`,
                    mixBlendMode: "overlay",
                    transition: "background-position 0.1s ease",
                }}
            />
        </section>
    );
}
