import { Box } from "@mui/material";

import dynamic from 'next/dynamic';

// Dynamically load components
const HeroSection = dynamic(() => import("./components/HeroSection/HeroSection"));
const OurServices = dynamic(() => import("./components/OurServices/OurServices"));
const Projects = dynamic(() => import("./components/Project/Project"));
const HighlightSection = dynamic(() => import("./components/HighlightSection/HighlightSection"));
const GlowingSection = dynamic(() => import("./components/GlowingSection/GlowingSection"));
const VideoSection = dynamic(() => import("./components/VideoSection/VideoSection"));
const FAQSection = dynamic(() => import("./components/FAQSection/FAQSection"));
const IndustrySection = dynamic(() => import("./components/IndustrySection/IndustrySection"));
const Pricing = dynamic(() => import("./components/Pricing/Pricing"));
const Testimonials = dynamic(() => import("./components/Testimonial/Testimonial "));



export default function Home() {
  return (
    <main>
      <Box>
        <HeroSection />
        <VideoSection />
        <IndustrySection />
        <OurServices />
        <Projects />
        <HighlightSection />
        <Pricing />
        <Testimonials />
        <FAQSection />
        <GlowingSection />
      </Box>
    </main>
  );
}
