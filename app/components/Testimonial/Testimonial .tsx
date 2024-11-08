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
        'Working with Ace Cloud transformed our outdated website into a modern, user-friendly platform that met our exact needs.',
      author: 'Emily J',
      role: '@Agency Owner',
    },
    {
      company: 'ECOBUILD',
      feedback:
        'Collaborating with Ace Cloud revamped our outdated website into a modern, user-friendly platform that fulfilled our requirements.',
      author: 'John D',
      role: '@Project Manager',
    },
    {
      company: 'LiquidWave',
      feedback:
        'Ace Cloud transformed our vague ideas into a polished, professional website that exceeded our expectations.',
      author: 'Sarah L',
      role: '@Founder',
    },
    {
      company: 'LiquidWave',
      feedback:
        'Ace Cloud transformed our vague ideas into a polished, professional website that exceeded our expectations.',
      author: 'Sarah L',
      role: '@Founder',
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
        <Marquee pauseOnHover gradient={true} speed={30} gradientColor="hsl(220, 65%, 3.52%)" gradientWidth={300} style={{ width: '100%' }}>
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
        <Marquee pauseOnHover direction='right' gradient={true} speed={30} gradientColor="hsl(220, 65%, 3.52%)" gradientWidth={300} style={{ width: '100%' }}>
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
      </Container>
    </Box>
  );
}
