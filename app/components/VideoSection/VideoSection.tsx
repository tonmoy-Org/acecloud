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
      <Box className="relative pt-20 pb-20 md:py-32 px-2 w-full bg-transparent">

        <Container>
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
            <Box>
              {/* <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: 500 }}>
                Empowering brands through tailor-made solutions from design to development. Let us elevate your digital journey with precision and creativity.
              </Typography> */}
            </Box>
          </Box>
          {/* Glow effect behind the video */}
          <Box
            className="absolute md:top-[20%] left-1/2 w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 blur-[5rem] animate-image-glow"
            sx={{
              background:
                "linear-gradient(90deg, #1D4ED8 0%, rgba(156,64,255,1) 50%, transparent 100%)",
            }}
          />

          {/* Main video container with inner glow and border effects */}
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={videoAnimation}
            transition={{ duration: 0.5 }}
            className="relative -m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl"
          >
            {/* Border animation */}
            <Box
              className="absolute inset-[0] rounded-[inherit]"
              sx={{
                border: "calc(1.5px * 2) solid transparent",
                maskImage:
                  "linear-gradient(transparent,transparent), linear-gradient(white,white)",
                maskComposite: "intersect",
              }}
            >
              <Box
                component="span"
                className="absolute aspect-square animate-border-beam"
                sx={{
                  width: "calc(250px * 1)", // Modify `250px` based on the actual desired size
                  animationDelay: "-9s",
                  background:
                    "linear-gradient(to left, #ffaa40, #9c40ff, transparent)",
                  offsetPath: "rect(0 auto auto 0 round calc(250px * 1))",
                }}
              />
            </Box>

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
                ring: "1px solid rgba(0, 0, 255, 0.2)", // Add subtle ring around video
              }}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="video/AceCloud.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Box>

            {/* Gradients for overlay effect */}
            <Box
              className="absolute -bottom-4 inset-x-0 w-full h-1/2"
              sx={{
                background: "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
                zIndex: 40,
              }}
            />
            <Box
              className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4"
              sx={{
                background: "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
                zIndex: 50,
              }}
            />
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
