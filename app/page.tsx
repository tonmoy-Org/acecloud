import { Box } from "@mui/material";

import HeroSection from "./components/HeroSection/HeroSection";
import OurServices from "./components/OurServices/OurServices";
import Testimonials from "./components/Testimonial/Testimonial ";
import BlogSection from "./components/BlogSection/BlogSection";
import Projects from "./components/Project/Project";
import HighlightSection from "./components/HighlightSection/HighlightSection";
import GlowingSection from "./components/GlowingSection/GlowingSection";
import VideoSection from "./components/VideoSection/VideoSection";



export default function Home() {
  return (
    <main>
      <Box>
        <HeroSection />
        <VideoSection />
        <OurServices />
        <Projects />
        <HighlightSection />
        <Testimonials />
        <BlogSection />
        <GlowingSection/>
      </Box>
    </main>
  );
}
