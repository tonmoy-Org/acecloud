'use client';

import { Container, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
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

const cardData = [
    {
        id: 'the-future-of-web-development-trends-to-watch-in-2025',
        title: 'The Future of Web Development: Trends to Watch in 2025',
        description: 'In today’s competitive digital landscape, having a website is crucial for any business. However, simply having an online presence isn’t enough to stand out from the crowd. To truly maximize your website’s potential and ensure long-term success, you need a custom solution tailored to your specific business needs. Custom web development allows you to go beyond generic, off-the-shelf solutions, providing you with a website that is not only unique but also scalable, optimized for performance, and equipped to grow as your business does.',
        shortDescription: 'Stay ahead in the digital landscape by learning about the latest trends in web development and design for 2025',
        image: '/blog/blog-1.jpeg'
    },
    {
        id: 'overcoming-limitations-of-pre-built-website-solutions',
        title: 'Overcoming Limitations of Pre-Built Website Solutions',
        description: 'Off-the-shelf website solutions like WordPress, Wix, and Squarespace are popular due to their convenience and ease of use. They allow you to get a website up and running quickly without much technical expertise. However, these platforms often come with inherent limitations that can stifle your website’s potential in the long run. Pre-built templates and themes are designed with generic needs in mind, making it difficult to differentiate your brand. This can result in a website that looks similar to thousands of others, making it hard to stand out and make an impression on your visitors.',
        shortDescription: 'Discover the challenges of using pre-built solutions and how they impact your brand’s uniqueness.',
        image: '/blog/blog-7.jpeg'
    },
    {
        id: 'customization-challenges-with-pre-built-web-solutions',
        title: 'Customization Challenges with Pre-Built Web Solutions',
        description: 'One of the biggest challenges with pre-built website solutions is the lack of customization. As your business grows, you may find that the rigid structures of these platforms don’t provide the flexibility you need to adapt. Whether you need to add more complex functionalities, handle increased traffic, or integrate third-party systems, these platforms can struggle to keep up. This is particularly true when you need to implement unique features that aren’t part of the default offerings of the website builder. Without the ability to fully customize your website, you’re left trying to fit your business needs into a limited framework, which can hinder your growth and performance.',
        shortDescription: 'Learn about customization limits of pre-built solutions and their effects on business growth.',
        image: '/blog/blog-3.jpeg'
    },
    {
        id: 'seo-limitations-in-pre-built-website-platforms',
        title: 'SEO Limitations in Pre-Built Website Platforms',
        description: 'Additionally, off-the-shelf platforms often have limitations when it comes to search engine optimization (SEO). These websites tend to include unnecessary code and features that can slow down site performance, leading to poor loading speeds and negative impacts on your SEO rankings. The slow load times, along with limited control over metadata and site structure, can make it difficult to optimize your website for search engines. Poor SEO performance means your website may not rank as highly on search engine results pages, making it harder for potential customers to find you.',
        shortDescription: 'Understand how pre-built platforms impact SEO and discover ways to overcome these challenges.',
        image: '/blog/blog-5.jpeg'
    },
    {
        id: 'website-performance-and-seo-challenges',
        title: 'Website Performance and SEO Challenges',
        description: 'Additionally, off-the-shelf platforms often have limitations when it comes to search engine optimization (SEO). These websites tend to include unnecessary code and features that can slow down site performance, leading to poor loading speeds and negative impacts on your SEO rankings. The slow load times, along with limited control over metadata and site structure, can make it difficult to optimize your website for search engines. Poor SEO performance means your website may not rank as highly on search engine results pages, making it harder for potential customers to find you.',
        shortDescription: 'Learn about the performance and SEO limitations in off-the-shelf platforms.',
        image: '/blog/blog-4.jpeg'
    },
    {
        id: 'enhancing-user-experience-with-custom-web-development',
        title: 'Enhancing User Experience with Custom Web Development',
        description: 'One of the key benefits of custom web development is its ability to provide tailored user experiences. Since custom websites are built with your target audience in mind, you can prioritize features that enhance usability, improve navigation, and provide a seamless journey for your visitors. This focus on user experience (UX) helps increase engagement, reduce bounce rates, and ultimately drive more conversions. A website that is easy to navigate, fast-loading, and mobile-optimized will keep users on your site longer, increasing the chances of turning visitors into loyal customers.',
        shortDescription: 'Discover the advantages of custom web development in enhancing user experience and engagement.',
        image: '/blog/blog-6.webp'
    }
];


const staggerItem = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const MoreBlog: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [glowPosition, setGlowPosition] = useState<{ x: string; y: string }>({ x: '50%', y: '50%' });
    const router = useRouter();

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            const { clientX, clientY, currentTarget } = e;
            const { left, top } = currentTarget.getBoundingClientRect();
            setGlowPosition({ x: `${clientX - left}px`, y: `${clientY - top}px` });
        },
        []
    );

    const handleMouseEnter = (index: number) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    const handleCardClick = (index: number) => {
        router.push(`/blogs/${index}`);
    };



    return (
        <Container sx={{ pt: 10, pb: 20 }}>
            <ApproachSection
                header=""
                title="Check Out Some More Blogs"
                description=""
            />
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}
            >
                {cardData.map((card, index) => {
                    const isHovered = hoveredCard === index;
                    const glowStyle = useMemo(
                        () => ({
                            background: `radial-gradient(500px at ${glowPosition.x} ${glowPosition.y}, ${isHovered ? 'rgba(168, 85, 247, 0.2)' : 'rgba(168, 85, 247, 0)'}, transparent 60%)`,
                            transition: 'background 0.3s ease-out',
                        }),
                        [glowPosition, isHovered]
                    );

                    return (
                        <motion.div
                            key={card.id}
                            variants={staggerItem}
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleCardClick(card.id)} // Redirect to details page
                            style={{ cursor: 'pointer' }}
                        >
                            <Card
                                sx={{
                                    width: 350,
                                    height: '100%',
                                    position: 'relative',
                                    color: 'white', // Set text color to white
                                    ...glowStyle,
                                    backgroundColor: 'hsl(0, 0%, 3.9%)',
                                    padding: 1
                                }}
                                style={{ border: '1px solid rgba(225, 225, 225, 0.1)' }}
                            >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={card.image}
                                    alt={card.title}
                                    sx={{ padding: 2, height: 230, width: '100%' }}
                                />
                                <CardContent>
                                    <Typography sx={{ color: 'white', fontSize: 18, fontWeight: 600 }}>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'hsl(220 10% 54.4%)', mt: 1 }}>
                                        {card.shortDescription}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </motion.div>
        </Container>
    );
};

export default MoreBlog;