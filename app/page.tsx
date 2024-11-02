import { Box } from "@mui/material";
import Contact from "./components/Contact/Contact";
import HeroSection from "./components/HeroSection/HeroSection";
import OurServices from "./components/OurServices/OurServices";
import Testimonials from "./components/Testimonial/Testimonial ";
import BlogSection from "./components/BlogSection/BlogSection";
import Projects from "./components/Project/Project";
import HighlightSection from "./components/HighlightSection/HighlightSection";
import GlowingSection from "./components/GlowingSection/GlowingSection";



export default function Home() {
  return (
    <main>
      <Box>
        <HeroSection />
        <OurServices />
        <Projects />
        <HighlightSection />
        <Testimonials />
        <GlowingSection/>
        <BlogSection />
        <Contact />
      </Box>
    </main>
  );
}
