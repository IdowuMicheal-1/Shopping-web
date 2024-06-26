import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import Hero from "@/components/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewProduct from "@/components/NewProduct";
import Testimonial from "@/components/Testimonial";
import Foter from "@/components/Foter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopping App",
  description: "Shopping App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <HeaderMain />
        <Navbar />
        <MobileNavbar />
        <Hero />
        <NewProduct />
        <Testimonial />
        <Foter />
        {children}
        </body>
    </html>
  );
}
