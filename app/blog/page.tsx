"use client";

import dynamic from 'next/dynamic';


const BlogSection = dynamic(() => import("../components/BlogSection/BlogSection"));

export default function Blog() {
  return (
    <div>
      <BlogSection />
    </div>
  );
}
