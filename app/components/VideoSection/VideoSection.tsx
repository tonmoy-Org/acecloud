"use client"

import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const videoAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export default function VideoSection() {
  return (
    <div className="video-container py-28">
      <Container>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={videoAnimation}
          transition={{ duration: 0.5 }} // Duration of the entrance animation
          className="gradient-border" // Add the gradient border class here
          style={{
            display: 'inline-block', // To fit the border around the video
            padding: '10px', // Add padding for visual space around the video
          }}
        >
          <Box
            component="video"
            sx={{
              width: '100%',
              height: 'auto', // Change to auto for better aspect ratio handling
              borderRadius: 1,
              position: 'relative',
              overflow: 'hidden',
              margin: 'auto',
              boxShadow: '0 4px 20px rgba(0, 0, 255, 0.5)', // Blue box shadow
            }}
            autoPlay
            muted
            loop
          >
            <source src="/video/AceCloud.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </Box>
        </motion.div>
      </Container>
    </div>
  );
}
