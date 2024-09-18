"use client";

import { Box, Container, Typography } from "@mui/material";

const TermsAndConditions = () => {
    return (
        <Box sx={{ backgroundColor: "black", py: 6, color: 'white' }}>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Terms and Conditions
                </Typography>
                <Box color='#BABABA'>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
                        Last updated: September 17, 2024
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        1. Introduction
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Welcome to AceCloud. These Terms and Conditions govern your access and use of our website, applications, services, and products (collectively, "Services"). By accessing or using our Services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, you must immediately discontinue use of our Services. We reserve the right to modify these Terms and Conditions at any time, and your continued use of the Services constitutes your acceptance of any such modifications.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        2. Intellectual Property Rights
                    </Typography>
                    <Typography variant="body1" paragraph>
                        All content, including but not limited to text, graphics, logos, images, audio clips, video, software, and other materials found on this website, is the exclusive property of AceCloud or its licensors. The compilation of all content on the website is also the exclusive property of AceCloud and is protected by copyright, trademark, and other intellectual property laws. You are granted a limited, non-transferable, non-exclusive license to access and make personal use of the content, but you may not download, modify, or reproduce it without explicit written consent from AceCloud.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        3. Permissible Use of the Website
                    </Typography>
                    <Typography variant="body1" paragraph>
                        By using this website, you agree to use it solely for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use of the website. You are prohibited from using the website in any way that could damage, disable, overburden, or impair any AceCloud server, or interfere with any other party's use and enjoyment of the website. You must not engage in any data mining, data harvesting, data extracting, or any similar activity in relation to our website.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        4. Subscriptions and Payments
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Certain parts of our Services may be available only through subscription or purchase. By subscribing to any of our Services, you agree to provide accurate and complete information and to update your details when necessary. You further agree to make all payments for such Services on time and as specified during the purchasing process. AceCloud reserves the right to change subscription fees at any time upon providing notice to users. Any such changes will apply prospectively, and no refunds will be issued unless required by applicable law.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        5. Privacy and Data Security
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Your privacy is of the utmost importance to us. Our Privacy Policy, which can be found on our website, governs the collection, use, and storage of your personal data. By using our Services, you agree to the collection and use of information in accordance with our Privacy Policy. We employ reasonable technical and organizational measures to protect your data, but we cannot guarantee absolute security.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        6. Limitation of Liability
                    </Typography>
                    <Typography variant="body1" paragraph>
                        To the maximum extent permitted by applicable law, AceCloud, its affiliates, partners, and licensors will not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Services. This includes but is not limited to damages for errors, omissions, interruptions, defects, delays in operation or transmission, or any other performance failure, even if AceCloud has been advised of the possibility of such damages. Your sole remedy in the event of any dissatisfaction with the Services is to discontinue their use.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        7. Indemnification
                    </Typography>
                    <Typography variant="body1" paragraph>
                        You agree to indemnify, defend, and hold harmless AceCloud, its officers, directors, employees, agents, and affiliates from any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising out of or in connection with your use of the Services, violation of these Terms and Conditions, or violation of any third-party rights, including intellectual property rights.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        8. Termination of Use
                    </Typography>
                    <Typography variant="body1" paragraph>
                        AceCloud reserves the right to terminate or suspend your access to the Services at any time, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users, us, or third parties, or for any other reason at our sole discretion. Upon termination, your right to use the Services will immediately cease.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        9. Changes to These Terms
                    </Typography>
                    <Typography variant="body1" paragraph>
                        AceCloud reserves the right to modify these Terms and Conditions at any time. When changes are made, we will update the "Last Updated" date at the top of this document. We encourage you to review these terms periodically to stay informed about any updates. Your continued use of our Services after any such changes signifies your acceptance of the updated terms.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        10. Governing Law
                    </Typography>
                    <Typography variant="body1" paragraph>
                        These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms and Conditions shall be brought exclusively in the courts located in [Your Jurisdiction], and you consent to the personal jurisdiction and venue of such courts.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        11. Contact Us
                    </Typography>
                    <Typography variant="body1" paragraph>
                        If you have any questions, concerns, or inquiries about these Terms and Conditions, please feel free to contact us at hello@rameo.website. We will make every effort to address your concerns in a timely and professional manner.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default TermsAndConditions;
