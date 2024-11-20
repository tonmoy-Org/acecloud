import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";



export const metadata: Metadata = {
  title: "AceCloud | Elevating digital experiences through innovation and expertise.",
  description: "AceCloud - Elevating digital experiences through innovation and expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
