"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const videoAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export default function VideoSection() {
  return (
    <Box>
      <Container maxWidth='lg'>
        <Box className="relative pt-20 pb-20 md:py-32 px-2 w-full bg-transparent">
          <Box sx={{ display: { xs: 'block', lg: 'flex' }, justifyContent: 'space-between', alignItems: 'center', pb: 8, zIndex: 1, position: 'relative' }}>
            <Box>
              <Typography color='#FFD700' gutterBottom sx={{ textTransform: 'uppercase', fontSize: '14px', fontWeight: 'bold' }}>
                Intro
              </Typography>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <Typography className="text-3xl md:text-[2.5rem] font-bold text-white leading-normal">
                  Build Websites Like a Pro
                </Typography>
              </motion.div>
            </Box>
          </Box>

          {/* Glow effect behind the video */}
          <Box
            className="absolute md:top-[22.5%] left-1/2 w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 blur-[5rem] animate-image-glow"
            sx={{
              background: "linear-gradient(90deg, #1D4ED8 0%, rgba(156,64,255,1) 50%, transparent 100%)",
            }}
          />
          <Box
            className="absolute md:bottom-[8%] left-1/2 w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 blur-[5rem] animate-image-glow"
            sx={{
              background: "linear-gradient(90deg, #1D4ED8 0%, rgba(156,64,255,1) 50%, transparent 100%)",
            }}
          />

          {/* Main video container with inner glow and border effects */}
          <div className="flex justify-center">
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={videoAnimation}
              transition={{ duration: 0.5 }}
              className="relative -m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl lg:max-w-[70rem] mx-auto"
            >
              {/* Inner glow animation */}
              <div
                style={{
                  '--size': '250',
                  '--duration': '12',
                  '--anchor': '90',
                  '--border-width': '2',
                  '--color-from': '#ffaa40',
                  '--color-to': '#9c40ff',
                  '--delay': '-9s',
                } as React.CSSProperties}
                className="absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]">
              </div>
              {/* Video element with background and border */}
              <Box
                component="video"
                className="rounded-md lg:rounded-xl"
                sx={{
                  width: "100%",
                  height: "auto",
                  backgroundColor: "rgba(255,255,255,0.1)", // Adjust for a subtle background
                  borderRadius: "8px",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
                  ring: "5px solid rgba(0, 0, 255, 0.2)", // Add subtle ring around video
                }}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="video/AceCloud.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </Box>
            </motion.div>
          </div>

          {/* Glow effect behind the video */}

        </Box>
      </Container>
    </Box>
  );
}
