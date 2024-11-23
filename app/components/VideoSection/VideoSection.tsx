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
      <Container maxWidth="lg">
        <Box className="relative py-10 md:py-20 w-full">
          <Box
            sx={{
              display: { xs: "block", lg: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              pb: 3,
              zIndex: 1,
              position: "relative",
            }}
          >
            <Box>
              <Typography
                color="#FFD700"
                gutterBottom
                sx={{ textTransform: "uppercase", fontSize: "14px", fontWeight: "bold" }}
              >
                Intro
              </Typography>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }} // Reduce duration
                viewport={{ once: true, amount: 0.5 }} // Slightly reduce amount              
              >
                <Typography className="text-3xl md:text-[2.5rem] font-bold text-white leading-normal">
                  Build Websites Like a Pro
                </Typography>
              </motion.div>
            </Box>
          </Box>

          {/* Glow effect behind the video */}
          <Box
            className="absolute top-[15%] left-1/2 transform -translate-x-1/2 blur-3xl"
            sx={{
              width: "90%",
              height: "50%",
              background: "radial-gradient(circle, #1D4ED8 20%, rgba(156,64,255,0.5) 60%, transparent 100%)",
              zIndex: 0,
              filter: "blur(80px)",
              opacity: 0.8,
            }}
          />
          <Box
            className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 blur-3xl"
            sx={{
              width: "90%",
              height: "50%",
              background: "radial-gradient(circle, #9C40FF 20%, rgba(29,78,216,0.5) 60%, transparent 100%)",
              zIndex: 0,
              filter: "blur(80px)",
              opacity: 0.8,
            }}
          />

          {/* Main video container with inner glow and border effects */}
          <Box
            className="relative mx-auto overflow-hidden"
            sx={{
              maxWidth: "1200px",
              padding: "6px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "12px",
              boxShadow: "0px 8px 24px rgba(0,0,0,0.3)",
              position: "relative",
              zIndex: 1,
            }}
          >
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
            <video
              className="h-auto rounded-lg shadow-[0_0_20px_rgba(156,64,255,0.6)] border-2 border-[rgba(29,78,216,0.5)]"
              width="1200"
              height="1200"
              autoPlay
              muted
              loop
              playsInline
              style={{
                transform: "translate3d(0, 0, 0)",
                willChange: "transform, opacity",
              }}
            >
              <source src="/video/AceCloud (1).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </Box>
        </Box>
      </Container>
    </Box>
  );
}
