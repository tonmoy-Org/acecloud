"use client";

import { Box, Container, Typography } from "@mui/material";

const TermsAndConditions = () => {
    return (
        <Box sx={{ pt: { xs: 6, md: 20 }, color: 'white', pb: 10 }}>
            <Container>
                <Typography variant="h3" sx={{ mb: 5 }}>
                    Terms and Conditions
                </Typography>
                <Box>
                    <Typography variant="body2" color="white" sx={{ mb: 1 }}>
                        Last updated: November 09, 2024
                    </Typography>
                    <Typography color='white' variant="body1" paragraph sx={{ mb: 4 }}>
                        Welcome to Acecloud. These terms and conditions outline the rules and regulations for using Acecloud's website and services.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        1. Acceptance of Terms
                    </Typography>
                    <Typography color='#BABABA' variant="body1" paragraph>
                        By accessing or using Acecloud’s website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please discontinue use of our Services immediately.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        2. Intellectual Property Rights
                    </Typography>
                    <Typography color='#BABABA' variant="body1" paragraph>
                        All content on the Acecloud website, including text, graphics, logos, and software, is the property of Acecloud or its licensors. You are granted a limited license to access and use this content solely for personal use, without rights to modify, reproduce, or distribute it.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        3. Use of Services
                    </Typography>
                    <Typography color='#BABABA' variant="body1" paragraph>
                        You agree to use our website only for lawful purposes and not to engage in activities that may harm or disrupt the experience for others. Prohibited activities include data mining, harvesting, or similar actions.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        4. Subscription and Payment Terms
                    </Typography>
                    <Typography color='#BABABA' variant="body1" paragraph>
                        Certain Acecloud services may require a subscription. By subscribing, you agree to provide accurate information and pay any fees promptly. We reserve the right to change subscription fees with notice; such changes will apply to future payments.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        5. Privacy and Data Protection
                    </Typography>
                    <Typography color='#BABABA' variant="body1" paragraph>
                        Our Privacy Policy governs the use of personal information. Acecloud is committed to safeguarding user data but does not guarantee absolute data security. Continued use of our Services implies consent to our data practices.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        6. Limitation of Liability
                    </Typography>
                    <Typography color='#BABABA' variant="body1" paragraph>
                        Acecloud is not liable for any indirect or consequential damages arising from the use or inability to use our services. The sole remedy for dissatisfaction is to cease using the Services.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        7. Changes to the Terms
                    </Typography>
                    <Typography color='#BABABA' variant="body1" paragraph>
                        We may revise these Terms periodically. The "Last Updated" date will reflect the latest revision. Continued use of our services indicates acceptance of any changes.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        8. Governing Law
                    </Typography>
                    <Typography color='#BABABA' variant="body1" paragraph>
                        These terms shall be governed by and construed in accordance with the laws of Canada, without regard to its conflict of law provisions.
                    </Typography>



                    <Typography variant="h6" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography color='#BABABA' variant="body1" paragraph>
                        For inquiries about these Terms, please reach out at contact@acecloud.ca.
                    </Typography>

                    <Typography color='white' variant="body1" paragraph sx={{ mt: 4 }}>
                        By using Acecloud, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default TermsAndConditions;
