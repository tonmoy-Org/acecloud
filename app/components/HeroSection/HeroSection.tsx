'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';
import banner from '@/public/banner/01.png';
import './HeroSection.css';
import NextLink from 'next/link';


export default function HeroSection() {

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };


  return (
    <Box
      id='home'
      sx={{
        position: 'relative',
        color: 'white',
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `url(${banner.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(50%)',
          zIndex: 1,
        },
      }}
    >
      {/* Main Content */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div className="relative flex flex-col justify-center items-center lg:h-screen pb-10 lg:pt-40 pt-24 px-8 overflow-hidden">
          <motion.div className="lg:text-center text-white" initial="hidden" animate="visible">
            <motion.h1 className="" variants={textAnimation} custom={0}>
              <Typography
                sx={{
                  fontSize: {
                    xs: '2rem',
                    lg: '4rem',
                  },
                  fontWeight: 'bold',
                }}
              >
                Empowering Your Digital Journey <br /> with
                <span
                  className='ml-4'
                  style={{
                    background: 'linear-gradient(90deg, #1D4ED8, #d946ef)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block', // Ensures the span has the necessary width

                  }}
                >
                  AceCloud
                </span>
                <br />
              </Typography>
            </motion.h1>


            <motion.p
              className="text-sm md:text-xl mb-8 tracking-wide leading-relaxed max-w-2xl mx-auto text-[#BABABA]"
              variants={textAnimation}
              custom={1}
            >
              As a forward-thinking digital agency, we redefine digital experiences through a fusion of innovation and expertise.
            </motion.p>
            <motion.div
              variants={textAnimation}
              custom={1}
            >
              <Box sx={{ my: 2 }}>
                <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
                  <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#6d28d9_0%,#d8b4fe_50%,#6d28d9_100%)]"></span>
                  <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <NextLink href="/contact-us" className="text-white">Start Building Now</NextLink>
                  </span>
                </div>
              </Box>
            </motion.div>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
}
