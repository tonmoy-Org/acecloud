"use client";

import React from "react";
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import { motion } from 'framer-motion';

export default function FAQSection() {
    const faqs = [
        {
            question: "How does Acecloud assist with cloud solutions?",
            answer:
                "Acecloud specializes in tailored cloud solutions to support your business needs. Our team analyzes your requirements and builds a customized cloud infrastructure for improved performance and scalability.",
        },
        {
            question: "What services does Acecloud offer?",
            answer:
                "Acecloud offers a range of services, including cloud migration, infrastructure management, cybersecurity, and data backup solutions. Our goal is to ensure seamless cloud integration and reliable support.",
        },
        {
            question: "How does pricing work for cloud services?",
            answer:
                "Our pricing model is flexible and designed to suit the specific needs of each project. We provide transparent and competitive rates, with a detailed quote available after an initial consultation.",
        },
        {
            question: "Can I upgrade my cloud resources as my business grows?",
            answer:
                "Yes, Acecloud provides scalable solutions, allowing you to adjust resources as needed. Whether your needs increase or decrease, we’ll make sure your infrastructure adapts accordingly.",
        },
        {
            question: "What support does Acecloud offer?",
            answer:
                "Acecloud offers 24/7 support for all our clients, ensuring prompt assistance for troubleshooting, system updates, and optimizing cloud performance to keep your business running smoothly.",
        },
        {
            question: "Will my data be secure on Acecloud's platform?",
            answer:
                "Absolutely. We follow stringent security protocols and employ the latest cybersecurity measures to ensure your data is protected at all times.",
        },
        {
            question: "Is Acecloud's infrastructure reliable?",
            answer:
                "Yes, Acecloud's infrastructure is designed for high availability and resilience, with redundant systems in place to ensure uptime and continuity for your critical operations.",
        },
        {
            question: "What payment methods do you accept?",
            answer:
                "We accept various payment methods, including credit cards, bank transfers, and online payment platforms. Let us know your preferred method, and we’ll accommodate it where possible.",
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
                        <Typography className="text-2.5xl md:text-[2.5rem] font-bold text-white leading-normal">
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
