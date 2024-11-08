import { Box } from "@mui/material";

import HeroSection from "./components/HeroSection/HeroSection";
import OurServices from "./components/OurServices/OurServices";
import Testimonials from "./components/Testimonial/Testimonial ";
import Projects from "./components/Project/Project";
import HighlightSection from "./components/HighlightSection/HighlightSection";
import GlowingSection from "./components/GlowingSection/GlowingSection";
import VideoSection from "./components/VideoSection/VideoSection";
import Pricing from "./pricing/page";
import FAQSection from "./components/FAQSection/FAQSection";
import OurApproach from "./components/OurApproach/OurApproach";
import IndustrySection from "./components/IndustrySection/IndustrySection";



export default function Home() {
  return (
    <main>
      <Box>
        <HeroSection />
        <VideoSection />
        <IndustrySection  />
        <OurServices />
        <Projects />
        <HighlightSection />
        <OurApproach />
        <Pricing />
        <Testimonials />
        <FAQSection />
        <GlowingSection />
      </Box>
    </main>
  );
}
