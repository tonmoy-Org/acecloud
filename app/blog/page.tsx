"use client";

import { Box, Typography, Card, CardContent } from "@mui/material";
import React from "react";

export default function BlogCard() {
  return (
    <Box className="max-w-md overflow-hidden rounded-xl border border-border/60 bg-gradient-to-r from-background to-background/40 p-0 md:p-0 relative">
      {/* Glow effect on hover */}
      <Box
        className="pointer-events-none absolute -inset-px transition duration-300"
        sx={{
          opacity: 0,
          background:
            "radial-gradient(500px at 37.8px 397px, rgba(168, 85, 247, 0.15), transparent 60%)",
          "&:hover": {
            opacity: 1,
          },
        }}
      />

      {/* Link overlay */}
      <a
        href="/resources/blog/maximizing-your-websites-potential-with-custom-solutions"
        className="w-full h-full absolute -z-1 inset-0"
      ></a>

      {/* Card with black background, image, title, and description */}
      <Card
        className="rounded-lg lg:rounded-2xl bg-black text-white shadow-sm group border-0"
        sx={{ position: "relative", overflow: "hidden" }}
      >
        <CardContent className="p-4 lg:p-6">
          {/* Image */}
          <Box className="flex items-center justify-center h-40 lg:h-52 overflow-hidden rounded-lg">
            <img
              src="/assets/blog1.jpg"
              alt="Maximizing Your Website's Potential with Custom Solutions"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
              width="1024"
              height="1024"
            />
          </Box>

          {/* Title and Description */}
          <Box className="flex flex-col items-start justify-start mt-4">
            <Typography
              variant="h6"
              className="tracking-tight text-lg font-semibold text-foreground/80 transition-all duration-300 group-hover:text-foreground"
            >
              Maximizing Your Website's Potential with Custom Solutions
            </Typography>
            <Typography
              variant="body2"
              className="text-sm text-muted-foreground mt-2"
            >
              Discover how custom web solutions can unlock the full potential of
              your website and enhance user experience.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
