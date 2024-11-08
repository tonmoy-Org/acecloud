'use client';

import MoreBlog from '@/app/components/MoreBlog/MoreBlog';
import { Container, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import { useParams } from 'next/navigation';
import React, { useMemo } from 'react';

// Static data for demonstration; in a real application, fetch this data from an API.
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

const BlogDetails: React.FC = () => {
    const params = useParams();
    const { id } = params;

    // Find the blog post data based on the string ID
    const blogPost = useMemo(() => cardData.find(post => post.id === id), [id]);

    if (!blogPost) {
        return (
            <Container sx={{ my: 5, textAlign: 'center' }}>
                <Typography variant="h4" color="error">Blog post not found.</Typography>
            </Container>
        );
    }

    return (
        <Container sx={{ pt: 20, pb: 10 }}>
            <Card sx={{ backgroundColor: 'hsl(220, 65%, 3.52%)', color: 'white', maxWidth: '75%', mx: 'auto' }}>
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
                    Blog
                </Typography>
                <Typography variant="h4" component="h1" gutterBottom sx={{ py: 2, fontWeight: 'bold' }}>
                    {blogPost.title}
                </Typography>
                <CardMedia
                    component="img"
                    height="400"
                    image={blogPost.image}
                    alt={blogPost.title}
                    sx={{}}
                />
                <CardContent sx={{ padding: '0 !important', my: 2 }}>
                    <Typography variant="h6" component="h1" gutterBottom sx={{ color: 'hsl(220 10% 54.4%)' }}>
                        {blogPost.shortDescription}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 3 }}>
                        {blogPost.description}
                    </Typography>
                </CardContent>
            </Card>
            <Box>
                <MoreBlog />
            </Box>
        </Container >
    );
};

export default BlogDetails;
