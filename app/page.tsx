import { Box } from "@mui/material";

import HeroSection from "./components/HeroSection/HeroSection";
import OurServices from "./components/OurServices/OurServices";
import Testimonials from "./components/Testimonial/Testimonial ";
import Projects from "./components/Project/Project";
import HighlightSection from "./components/HighlightSection/HighlightSection";
import GlowingSection from "./components/GlowingSection/GlowingSection";
import VideoSection from "./components/VideoSection/VideoSection";
import FAQSection from "./components/FAQSection/FAQSection";
import IndustrySection from "./components/IndustrySection/IndustrySection";
import Pricing from "./components/Pricing/Pricing";



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
