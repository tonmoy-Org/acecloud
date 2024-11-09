"use client";

import React from 'react';
import { Card, Typography, Box, Container, CardContent } from '@mui/material';
import Marquee from 'react-fast-marquee';
import PersonIcon from '@mui/icons-material/Person';
import ApproachSection from '../SectionTitle/SectionTitle';

export default function Testimonials() {
  const testimonials = [
    {
      company: 'NUTRIMERCHANT',
      feedback:
        'Ace Cloud’s attention to detail and dedication to understanding our business needs helped us reach our target audience effectively. Our website is now fast, functional, and easy to manage!',
      author: 'Emily J',
      role: '@Agency Owner',
    },
    {
      company: 'ECOBUILD',
      feedback:
        'Partnering with Ace Cloud has been instrumental in scaling our operations. The new website has not only attracted more clients but has improved overall team efficiency and project visibility.',
      author: 'John D',
      role: '@Project Manager',
    },
    {
      company: 'LiquidWave',
      feedback:
        'Ace Cloud worked wonders for us. They took our ideas, gave them life, and created a website that truly represents our brand’s values. The professional approach and seamless process were impressive.',
      author: 'Sarah L',
      role: '@Founder',
    },
    {
      company: 'GreenFields',
      feedback:
        'Choosing Ace Cloud was one of the best decisions we made. They designed a website that fits our eco-conscious brand perfectly, and their customer support is outstanding.',
      author: 'David T',
      role: '@Marketing Director',
    },
    {
      company: 'UrbanTech Solutions',
      feedback:
        'Ace Cloud brought our vision to life with their cutting-edge design and understanding of tech solutions. We now have a site that stands out in our industry.',
      author: 'Lisa M',
      role: '@CEO',
    },
  ];

  const testimonials2 = [
    {
      company: 'FreshWave Foods',
      feedback:
        'Ace Cloud understood our brand and created a seamless online ordering experience, boosting customer engagement significantly.',
      author: 'Michael S',
      role: '@Brand Manager',
    },
    {
      company: 'Bright Futures Education',
      feedback:
        'Ace Cloud transformed our complex needs into a streamlined, user-friendly website, making the whole process smooth and enjoyable.',
      author: 'Sophia R',
      role: '@Program Director',
    },
    {
      company: 'HealthFirst Clinic',
      feedback:
        'Ace Cloud delivered a secure, reliable healthcare platform that meets compliance standards and enhances patient trust.',
      author: 'Dr. Liam W',
      role: '@Clinic Head',
    },
    {
      company: 'EcoScape Landscapes',
      feedback:
        'Ace Cloud provided a beautifully designed website that perfectly showcases our landscape services, exceeding expectations.',
      author: 'Olivia H',
      role: '@Co-Founder',
    },
    {
      company: 'Peak Performance Fitness',
      feedback:
        'Ace Cloud built a modern, user-friendly website that integrates seamlessly with our scheduling tools, bringing in more clients.',
      author: 'Jake B',
      role: '@Operations Manager',
    },
  ];



  return (
    <Box sx={{ mt: 15, mb: 8, position: 'relative', overflow: 'hidden' }} id="testimonials">
      <Container sx={{ position: 'relative' }}>
        <ApproachSection
          header="Testimonials"
          title=" What Our Clients Say."
          description="Here's what some of our users have to say about Linkify.."
        />
        <Marquee pauseOnHover gradient={true} speed={30} gradientColor="hsl(220, 65%, 3.52%)" gradientWidth={200} style={{ width: '100%' }}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              sx={{
                width: 300,
                p: 2,
                m: 1.5,
                borderRadius: 2,
                border: '1px solid rgba(225, 225, 225, 0.1)',
                bgcolor: 'hsl(220, 65%, 3.52%)',
                color: 'white',
                cursor: 'pointer',
                overflow: 'hidden',
                boxShadow: 3,
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PersonIcon sx={{ width: 30, height: 30, color: 'currentColor' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'medium', color: 'white' }}>
                      {testimonial.author}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'hsl(220 10% 54.4%)' }}>
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" sx={{ mt: 2, color: 'white' }}>
                  {testimonial.feedback}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Marquee>
        <Marquee pauseOnHover direction='right' gradient={true} speed={30} gradientColor="hsl(220, 65%, 3.52%)" gradientWidth={200} style={{ width: '100%' }}>
          {testimonials2.map((testimonial, index) => (
            <Card
              key={index}
              sx={{
                width: 300,
                p: 2,
                m: 1.5,
                borderRadius: 2,
                border: '1px solid rgba(225, 225, 225, 0.1)',
                bgcolor: 'hsl(220, 65%, 3.52%)',
                color: 'white',
                cursor: 'pointer',
                overflow: 'hidden',
                boxShadow: 3,
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PersonIcon sx={{ width: 30, height: 30, color: 'currentColor' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'medium', color: 'white' }}>
                      {testimonial.author}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'hsl(220 10% 54.4%)' }}>
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" sx={{ mt: 2, color: 'white' }}>
                  {testimonial.feedback}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Marquee>
      </Container>
    </Box>
  );
}
