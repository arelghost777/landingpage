import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from 'next/font/google';

// Configuration de la police Raleway
const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-raleway', // Définition comme variable CSS
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing Page",
  icons: "/frame1.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.className}>
      <body className={`antialiased px-4 md:px-20`}>
        {children}
      </body>
    </html>
  );
}