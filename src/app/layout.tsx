import type { Metadata } from "next";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: 'Shopping_mart',
    default:'Shopping_mart - A place for all!'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-bodyFont w-full bg-main-bg text-darkText">
        <Layout>
          <Navbar />
          {children}
          <Footer/>
        </Layout>
      </body>
    </html>
  );
}
