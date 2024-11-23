import { Box, Container, Grid, Typography } from "@mui/material";
import React from 'react';
import GlowingSection from '../components/GlowingSection/GlowingSection';
import { AccessAlarm, Storage, AttachMoney, Campaign, Inbox, HelpOutline } from "@mui/icons-material";

const Services: React.FC = () => {
    return (
        <Container>
            <div className="pt-20 pb-10 lg:pt-32 lg:pb-16">
                <div className="mb-10">
                    <div className="flex flex-wrap justify-between mb-3 md:mb-5 lg:mb-0">
                        <div className="px-2 relative">
                            <div className="inline-flex items-center space-x-2 w-auto mb-3 lg:absolute lg:top-3 lg:left-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                <div className="font-light text-sm lg:text-base text-[#FFD700] dark:text-grayDark-100">
                                    Feature
                                </div>
                            </div>
                            <h1 className="
                            text-2xl md:text-5xl
                            font-sans-primary tracking-tight
                            text-white dark:text-grayDark-100
                            leading-none lg:leading-snug text-balance
                            lg:indent-32
                        ">
                                Unleashing <br />
                                Creativity
                                and Innovation  <br />
                                For Exceptional <br />
                                Brand Growth
                            </h1>
                        </div>
                    </div>
                    <div className="w-full flex md:justify-end">
                        <div className="px-2">
                            <div className="w-full relative max-w-xl pr-10 lg:pr-0 lg:max-w-2xl lg:pl-32">
                                <h2 className="mb-3 text-lg md:text-2xl xl:text-2xl 4xl:text-4xl tracking-tight text-white dark:text-grayDark-100 leading-tight">
                                    Our expertise in digital marketing empowers brands to grow, stand out, and make a lasting impact.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Box py={6} sx={{ color: 'white' }}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: { xs: 20, md: 45 },
                                fontWeight: 'bold',
                                mb: 4,
                                maxWidth: { md: 900 }
                            }}
                        >
                            Why choose AceCloud as the
                            <span style={{ color: '#1D4ED8' }}> lead generation software </span>
                            for your agency?
                        </Typography>

                        <Grid container spacing={4} justifyContent="center" sx={{ mt: { xs: 0, md: 8 } }}>
                            {/* Item 1: Growth-friendly Pricing */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <AttachMoney sx={{ fontSize: 32, color: "#1D4ED8" }} /> {/* Replacing SVG with MUI icon */}
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        Growth-friendly <span style={{ color: '#1D4ED8' }}>pricing</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#BABABA' }}>
                                        AceCloud offers a flat-rate pricing model, unlike other platforms that charge per seat. With AceCloud, you can manage unlimited clients, maximizing cost-efficiency for your agency’s needs.
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Item 2: Access to millions of leads */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <AccessAlarm sx={{ fontSize: 32, color: "#1D4ED8" }} /> {/* Replacing SVG with MUI icon */}
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        Access to millions of <span style={{ color: '#1D4ED8' }}>leads</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#BABABA' }}>
                                        AceCloud offers a built-in database of verified leads, so you can find and connect with potential clients in any industry. You'll always have fresh prospects to reach out to - boosting your chances to win more deals.
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Item 3: Unlimited data storage */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <Storage sx={{ fontSize: 32, color: "#1D4ED8" }} /> {/* Replacing SVG with MUI icon */}
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        Unlimited <span style={{ color: '#1D4ED8' }}>data storage</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#BABABA' }}>
                                        Never worry about running out of storage for your leads, contacts, or campaign data. AceCloud offers unlimited data storage, so your agency can scale its operations as needed, without restrictions.
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Item 4: Scalable Outreach */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <Campaign sx={{ fontSize: 32, color: "#1D4ED8" }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        Scalable <span style={{ color: '#1D4ED8' }}>outreach</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#BABABA' }}>
                                        Benefit from unlimited campaigns and follow-ups, enabling you to easily manage both small and large client bases. Save time and expand your reach with unlimited mailbox rotation and the ability to prioritize your campaigns.
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Item 5: Smart multichannel campaigns */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <Inbox sx={{ fontSize: 32, color: "#1D4ED8" }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        Smart multichannel <span style={{ color: '#1D4ED8' }}>campaigns</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#BABABA' }}>
                                        Engage leads via email and LinkedIn for maximum reply rates, guaranteeing effective B2B lead generation for your clients. Simply keep adding new prospects and AceCloud will sort the hottest leads from the rest.
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Item 6: Built-in deliverability control */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <HelpOutline sx={{ fontSize: 32, color: "#1D4ED8" }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        Built-in <span style={{ color: '#1D4ED8' }}>deliverability control</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#BABABA' }}>
                                        Test your email placement, warm-up new sender accounts and stay in control of your deliverability. You'll always land in the Inbox with AceCloud.
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Item 7: Advanced reports */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <Storage sx={{ fontSize: 32, color: "#1D4ED8" }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        Advanced <span style={{ color: '#1D4ED8' }}>reports</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#BABABA' }}>
                                        Follow each account's success across all of their campaigns. Identify engagement patterns to refine your strategies. Access a clear overview of outreach KPIs for detailed reporting.
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Item 8: 5-star support and guidance */}
                            <Grid item xs={12} md={4}>
                                <Box display="flex" flexDirection="column">
                                    <Box mb={2}>
                                        <HelpOutline sx={{ fontSize: 32, color: "#1D4ED8" }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        5-star support and <span style={{ color: '#1D4ED8' }}>guidance</span>
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#BABABA' }}>
                                        With AceCloud, you're not just getting a tool — you're gaining a partner. Our dedicated team supports you from sign-up to performance analysis, ensuring you succeed every step of the way.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
            <Box sx={{ my: 2 }}>
                <GlowingSection />
            </Box>
        </Container>
    );
};

export default Services;
