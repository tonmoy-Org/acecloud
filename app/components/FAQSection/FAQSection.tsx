"use client";

import React from "react";
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import { motion } from 'framer-motion';

export default function FAQSection() {
    const faqs = [
        {
            question: "How does Adaptify create custom websites?",
            answer:
                "Adaptify combines a deep understanding of your business needs with modern design and development practices. We work closely with you to create a unique, tailored website that reflects your brand and meets your goals.",
        },
        {
            question: "What services does Adaptify offer?",
            answer:
                "Adaptify offers end-to-end web solutions, including custom website development, design, maintenance, and digital marketing services. Our aim is to provide comprehensive support to help your business thrive online.",
        },
        {
            question: "How does the pricing work?",
            answer:
                "Our pricing is flexible and based on the specific needs of each project. We offer transparent, competitive rates, and can provide a detailed quote after an initial consultation.",
        },
        {
            question: "Can I request changes after my website is launched?",
            answer:
                "Yes! We understand that businesses evolve, so we offer post-launch support and website updates to ensure your site stays relevant and up-to-date.",
        },
        {
            question: "What kind of support does Adaptify provide?",
            answer:
                "Adaptify provides ongoing support, from troubleshooting to adding new features. Our support team is here to ensure your website remains functional and optimized at all times.",
        },
        {
            question: "Will my website be optimized for search engines?",
            answer:
                "Absolutely. We follow SEO best practices to ensure your website ranks well on search engines, helping you attract more visitors.",
        },
        {
            question: "Is my website mobile-friendly?",
            answer:
                "Yes, all our websites are designed to be fully responsive, ensuring a seamless experience for users on both desktop and mobile devices.",
        },
        {
            question: "What payment methods do you accept?",
            answer:
                "We accept various payment methods, including credit cards, bank transfers, and online payment platforms. Let us know your preferred method, and we’ll do our best to accommodate it.",
        },
    ];

    const StyledAccordionSummary = styled(AccordionSummary)({
        "& .MuiAccordionSummary-content": {
            color: "hsl(220, 10%, 54.4%)",
        },
        "& .MuiSvgIcon-root": {
            color: "hsl(220, 10%, 54.4%)",
        },
        "&:hover .MuiAccordionSummary-content, &:hover .MuiSvgIcon-root": {
            color: "white",
        },
    });

    return (
        <Box sx={{ py: 10, bgcolor: "hsl(220, 65%, 3.52%)", color: "hsl(220, 10%, 54.4%)" }}>
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Box sx={{ textAlign: 'center', pb: 3 }}>
                        <Typography variant='h4' component='h1' sx={{ color: '#FFFFFF', fontWeight: 800, mb: 2 }}>
                            Frequently Asked Questions
                        </Typography>
                        <Typography sx={{ color: 'hsl(220 10% 54.4%)', maxWidth: '600px', margin: '20px auto' }}>
                            Here are some of the most common questions we get asked. If you have a question that isn't answered here, feel free to reach out to us.
                        </Typography>
                    </Box>
                </motion.div>

                {/* FAQ Items */}
                {faqs.map((faq, index) => (
                    <Accordion key={index} sx={{ bgcolor: "hsl(220, 65%, 3.52%)", color: "hsl(220, 10%, 54.4%)" }}>
                        <StyledAccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography>{faq.question}</Typography>
                        </StyledAccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: "white" }}>{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </Box>
    );
}
