import { Box } from "@mui/material";
import Contact from "./components/Contact/Contact";
import HeroSection from "./components/HeroSection/HeroSection";
import OurServices from "./components/OurServices/OurServices";
import AboutUs from "./components/AboutUs/AboutUs";
import Testimonials from "./components/Testimonial/Testimonial ";
import BlogSection from "./components/BlogSection/BlogSection";
import TeamSection from "./components/MeetOurTeam/MeetOurTeam";
import Projects from "./components/Project/Project";



export default function Home() {
  return (
    <main>
      <Box>
        <HeroSection />
        <OurServices />
        <AboutUs />
        <TeamSection />
        <Projects />
        <Testimonials />
        <BlogSection />
        <Contact />
      </Box>
    </main>
  );
}
