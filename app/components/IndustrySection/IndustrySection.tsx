'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PartnerLogoProps {
  alt: string;
  src: string;
  width?: number;
  height?: number;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ alt, src, width = 80, height = 80 }) => (
  <li>
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      className="w-28 h-auto"
    />
  </li>
);

const TrustedPartners: React.FC = () => {
  const partners = [
    { alt: 'Asana', src: '/client/company-01.svg' },
    { alt: 'Tidal', src: '/client/company-02.svg' },
    { alt: 'Innovaccer', src: '/client/company-03.svg' },
    { alt: 'Linear', src: '/client/company-04.svg' },
    { alt: 'Raycast', src: '/client/company-05.svg' },
    { alt: 'Labelbox', src: '/client/company-07.svg' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
      className="h-full mx-auto w-full max-w-full md:max-w-screen-xl px-4 md:px-12 lg:px-20"
    >
      <div className="py-14">
        <div className="mx-auto px-4 md:px-8">
          <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
            Our Trusted Partners in the industry
          </h2>
          <div className="mt-8">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center">
              {partners.map((partner, index) => (
                <PartnerLogo key={index} alt={partner.alt} src={partner.src} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TrustedPartners;
