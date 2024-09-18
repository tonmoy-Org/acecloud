'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import CountUp from 'react-countup';
import banner from '@/public/banner/01.png';
import './HeroSection.css'

export default function HeroSection() {
  const stats = [
    { value: 286, label: 'Satisfied Customers' },
    { value: 209, label: 'Projects Done' },
    { value: 467, label: 'Consultants' }
  ];

  // Variants for staggered animations
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

  const iconHoverEffect = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        background: `url(${banner.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Main Content */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          className="relative flex flex-col justify-center items-center h-screen pt-96 lg:pt-0 px-8 overflow-hidden"
        >
          <motion.div
            className="lg:text-center text-white"
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="outlined-text"  // Apply the outlined class here
              variants={textAnimation}
              custom={0}
            >
              Digital dreams, Real results
            </motion.h1>


            <motion.p
              className="text-sm md:text-xl mb-8 tracking-wide leading-relaxed max-w-2xl mx-auto text-[#BABABA]"
              variants={textAnimation}
              custom={1}
            >
              As a forward-thinking digital agency, we redefine digital experiences through a fusion of innovation and expertise.
            </motion.p>

            {/* Animated More Button */}
            <motion.div
              className="text-sm mt-12 flex justify-center"
              variants={textAnimation}
              custom={2}
            >
              <div className="relative h-14 w-14 rounded-full flex items-center justify-center">
                <div className="absolute h-14 w-14 rounded-full border-2 border-white flex items-center justify-center">
                  <motion.div
                    className="absolute inset-0 border-2 border-[#0DCCD7] rounded-full"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />
                  <span className="relative text-xs uppercase tracking-widest text-gray-400">More</span>
                </div>
              </div>
            </motion.div>

            {/* Stats Section */}
            <Box sx={{ width: { lg: '1200px' }, mx: { lg: 'auto' }, py: 5 }}>
              <Grid container spacing={4} justifyContent="center">
                {stats.map((stat, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box textAlign="center" sx={{ padding: '20px' }}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.3, duration: 0.8 }}
                      >
                        <Typography
                          variant="h3"
                          sx={{ color: '#0DCCD7', fontWeight: 'bold' }}
                        >
                          <CountUp start={0} end={stat.value} duration={2} />
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'white', marginTop: '10px' }}>
                          {stat.label}
                        </Typography>
                        <Box
                          sx={{
                            height: '2px',
                            backgroundColor: 'white',
                            marginTop: '10px',
                            width: '80px',
                            margin: 'auto',
                          }}
                        />
                      </motion.div>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* Social Media Icons with Rotation Hover Effect */}
          <div>
            <div className="hidden lg:flex fixed top-1/2 lg:right-20 right-0 transform -translate-y-1/2 flex-col items-center space-y-4 mr-2">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61565758503116"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-blue-600"
                whileHover="hover"
                variants={iconHoverEffect}
              >
                <Facebook />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/acecloud.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-pink-600"
                whileHover="hover"
                variants={iconHoverEffect}
              >
                <Instagram />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/ace-cloud-ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-blue-700"
                whileHover="hover"
                variants={iconHoverEffect}
              >
                <LinkedIn />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </Box>
    </Box>
  );
}
