import React from 'react'
import dynamic from 'next/dynamic';

// Dynamically import the ContactSection component
const ContactSection = dynamic(() => import('../components/Contact/Contact'));

export default function Contact() {
  return (
    <div>
        <ContactSection />
    </div>
  )
}
