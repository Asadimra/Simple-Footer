import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./component/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body>
       <Footer />
      
      </body>
    </html>
  );
}
